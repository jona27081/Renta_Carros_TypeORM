import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { Repository } from 'typeorm';
import { CreateDistribuidoresDto } from './dto/create-distribuidores.dto';
import { UpdateDistribuidoreDto } from './dto/update-distribuidores.dto';
import { Distribuidores } from './entities/distribuidore.entity';

@Injectable()
export class DistribuidoresService {

  constructor(@InjectRepository(Distribuidores) private disRepository: Repository<Distribuidores>){}

  async create(createDistribuidoreDto: CreateDistribuidoresDto) {
    const dis = await this.disRepository.create(createDistribuidoreDto)
    return this.disRepository.save(dis)
  }

  findAll() {
    return this.disRepository.find()
  }

  async findOne(id: number) {
    const cliente = await this.disRepository.findOne({
      where : {
          id
        }, 
      })
    if(!cliente){
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO)
    }
    return cliente
  }

  async update(id: number, updateDistribuidoreDto: UpdateDistribuidoreDto) {
    const cliente = this.findOne(id) 
    this.disRepository.update({id: id}, updateDistribuidoreDto)//({}, {name: nupdate.name})
    return cliente
  }

  async remove(id: number) {
    const cliente = this.findOne(id)
    this.disRepository.delete({ id })
    return cliente;
  }
}
