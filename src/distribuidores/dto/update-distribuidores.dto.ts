import { PartialType } from '@nestjs/mapped-types';
import { CreateDistribuidoresDto } from './create-distribuidores.dto';

export class UpdateDistribuidoreDto extends PartialType(CreateDistribuidoresDto) {}
