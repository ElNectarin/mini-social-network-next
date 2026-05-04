import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty({
    message: 'Поле обязательно для заполнения',
  })
  @MinLength(2, {
    message: 'Имя не должно быть мене 2 символов',
  })
  firstName!: string;

  @IsString()
  @IsNotEmpty({
    message: 'Поле обязательно для заполнения',
  })
  @MinLength(2, {
    message: 'Фамилия не должна содержать менее 2 символов',
  })
  lastName!: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({
    message: 'Поле обязательно для заполнения',
  })
  email!: string;

  @IsString()
  @IsNotEmpty({
    message: 'Поле обязательно для заполнения',
  })
  @MinLength(10, {
    message: 'Длина пароля не должна быть менее 10 символов',
  })
  password!: string;
}
