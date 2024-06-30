import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, MinLength, isNotEmpty } from 'class-validator';

export class RegisterUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;
    
    @ApiProperty()
    @IsString()
    @Length(6, 6)
    code: string
}
