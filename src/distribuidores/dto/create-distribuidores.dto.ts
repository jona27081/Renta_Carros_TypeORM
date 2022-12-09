import { IsNumberString, IsString, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages.helper";

export class CreateDistribuidoresDto {
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 80, {message: ValidationMessages.TAMAÑO_CADENA})
    nombreComercial: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 50, {message: ValidationMessages.TAMAÑO_CADENA})
    dirreccion: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 25, {message: ValidationMessages.TAMAÑO_CADENA})
    ciudad: string;
    @IsNumberString({message: ValidationMessages.ES_NUMERO})
    @Length(5, 10, {message: ValidationMessages.TAMAÑO_CADENA})
    telefono: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 50, {message: ValidationMessages.TAMAÑO_CADENA})
    nombreContacto: string;
}

