import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DistribuidoresService } from 'src/distribuidores/distribuidores.service';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { Repository } from 'typeorm';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';

@Injectable()
export class CarrosService {

  
  constructor(
    @InjectRepository(Carro) private carRepository: Repository<Carro>,
    private disService: DistribuidoresService
    ){}
   

  async create(createCarroDto: CreateCarroDto) {
    const dis = await this.disService.findOne(createCarroDto.distribuidorId)
    if(!dis){
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO)
    }
    const carro = this.carRepository.create(createCarroDto)
    return this.carRepository.save(carro)
    
  }

  findAll() {
    return this.carRepository.find({
      relations: ['distribuidor']
    })
  }

  async findOne(id: number) {
    const car = await this.carRepository.findOne({
      where : {
          id
        },
        relations: {
          distribuidor: true
        }
      })
    if(!car){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO)
    }
    return car
  }

  async update(id: number, updateCarroDto: UpdateCarroDto) {
    const cliente = this.findOne(id) 
    this.carRepository.update({id: id}, updateCarroDto)//({}, {name: nupdate.name})
    return cliente
  }

  async remove(id: number) {
    const cliente = this.findOne(id)
    this.carRepository.delete({ id })
    return cliente;
  }
}
