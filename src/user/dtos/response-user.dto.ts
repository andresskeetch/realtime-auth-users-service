import { Exclude } from 'class-transformer';

export class ResponseUserDto {
  public id: string;
  public name: string;
  public email: string;
  @Exclude()
  public hashPassword: string;
}
