import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public name: string;
  @IsEmail()
  public email: string;
  @IsNotEmpty()
  @IsString()
  public password: string;
}
