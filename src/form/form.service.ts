import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignInDto, SignUpDto } from 'src/modules/createForm.dto';
import { IForm } from 'src/modules/form.interface';

@Injectable()
export class FormService  {
    
    constructor(
        @InjectModel('Form') private readonly formModel: Model<IForm>,
    ) {}

    async signUp(signUpDto:SignUpDto): Promise<IForm> {
        const { password, ...rest } = signUpDto;
        const createdForm = new this. formModel(signUpDto);
        return createdForm.save() ;
     } 

     async signIn(signInDto: SignInDto): Promise<IForm> {
        const { email, password } = signInDto;

        console.log('SignIn attempt with email:', email);
        
        const user = await this.formModel.findOne({ email }).exec();
        console.log('User found:', user);

        // if (!user || user.password !== password) {
        //     throw new UnauthorizedException('Invalid details');
        // }

        if(!user){
            console.log("user is not found");
            throw new UnauthorizedException('Invalid credentials');
        }

        if(user.password !== password){
            console.log("password is not match");
            throw new UnauthorizedException('Invalid credentials');
        }

        const userObject = user.toObject();
        delete userObject.password;

        return userObject;
    }

}
