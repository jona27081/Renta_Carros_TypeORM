import { IsNumber, IsString, Length, Min } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages.helper";

export class CreateAlquilerDto {
    @IsNumber( {allowNaN:false}, {message: ValidationMessages.ES_NUMERO})
    @Min(0)
    idCarro: number;
}
