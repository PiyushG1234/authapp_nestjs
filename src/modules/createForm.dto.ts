import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

 
export class SignUpDto {
    @IsNotEmpty()
    @IsString() 
   readonly name : string;

    @IsString() 
   readonly email: string;

    @IsOptional()
   readonly phone?:number;

   @IsNotEmpty()
   @IsString()
   readonly password:string;

}

export class SignInDto {
    @IsEmail()
   readonly email: string;

   @IsNotEmpty()
    @IsString() 
   readonly password : string;
}

