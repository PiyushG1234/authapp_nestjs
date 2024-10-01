import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from 'src/modules/createForm.dto';
import { FormService } from './form.service';
import { IForm } from 'src/modules/form.interface';

// define a response interface or DTO to structure the response data
export interface AuthResponse {
    status: string;
    message: string;
    data?: {
        name?: string;
        email: string;
        phone?: number;
    };
}

@Controller('auth')
export class FormController { 
    constructor (private readonly formService:FormService) {}

    @Post('signUp')
    @HttpCode(HttpStatus.CREATED) // this is optional
    async signup(@Body() signUpDto:SignUpDto) : Promise<AuthResponse> {
        try{
            const user = await this.formService.signUp(signUpDto)
            return {
                status: 'success',
                message: 'User successfully signed up',
                data: this.formatResponse(user),
            };
        }catch(error){
            return {
                status: 'error',
                message: error.message,
            };
        }
         
        }

        @Post('signIn')
        @HttpCode(HttpStatus.OK)
        async signIn(@Body() signInDto:SignInDto): Promise<AuthResponse>{
            try{
                const user = await this.formService.signIn(signInDto)
                return {
                    status: 'success',
                    message: 'User successfully signed in',
                    data: this.formatResponse(user),
                };
            } catch(error){
                return {
                    status: 'error',
                    message: error.message,
                };
            }
           
        } 
        private formatResponse(user: IForm){
            return {
                name:user.name,
                email:user.email,
                phone:user.phone,
            };
        }

    }

