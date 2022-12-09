import { IsEmail, IsNumberString, IsString, Length} from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages.helper";

export class CreateClienteDto {
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 80, {message: ValidationMessages.TAMAÑO_CADENA})
    nombre: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 50, {message: ValidationMessages.TAMAÑO_CADENA})
    dirreccion: string;
    @IsNumberString({message: ValidationMessages.ES_NUMERO})
    @Length(5, 10, {message: ValidationMessages.TAMAÑO_CADENA})
    telefono: string;
    @IsEmail({Message: ValidationMessages.ES_EMAIL})
    email: string;
}
