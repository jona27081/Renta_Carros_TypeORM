import { IsNumber, IsString, Length, Min } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages.helper";

export class CreateCarroDto {
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 10, {message: ValidationMessages.TAMAÑO_CADENA})
    placas: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(3, 25, {message: ValidationMessages.TAMAÑO_CADENA})
    marca: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(3, 25, {message: ValidationMessages.TAMAÑO_CADENA})
    modelo: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 15, {message: ValidationMessages.TAMAÑO_CADENA})
    color: string;
    @IsNumber( {allowNaN:false}, {message: ValidationMessages.ES_NUMERO})
    @Min(0)
    rentaDiaria: number;
    @IsNumber( {allowNaN:false}, {message: ValidationMessages.ES_NUMERO})
    @Min(0)
    distribuidorId: number;
}