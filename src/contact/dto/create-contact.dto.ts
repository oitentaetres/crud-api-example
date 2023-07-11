import { IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateContactDTO {
    
    @IsString()
    name: string;
    
    @IsEmail()
    email: string;

    @IsString()
    company: string;

}