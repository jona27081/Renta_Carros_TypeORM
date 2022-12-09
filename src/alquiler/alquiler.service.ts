import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarrosService } from 'src/carros/carros.service';
import { ClientesService } from 'src/clientes/clientes.service';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { Repository } from 'typeorm';
import { CreateAlquilerDto } from './dto/create-alquiler.dto';
import { UpdateAlquilerDto } from './dto/update-alquiler.dto';
import { RegistroAlquiler } from './entities/alquiler.entity';

@Injectable()
export class AlquilerService {

  constructor(
    @InjectRepository(RegistroAlquiler) private raRepository: Repository<RegistroAlquiler>,
    private carService: CarrosService,
    private clienteService: ClientesService
    ){}

  async create(createAlquilerDto: CreateAlquilerDto) {

    const carro = await this.carService.findOne(createAlquilerDto.idCarro)
    if(!carro){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO)
    }
    const alquiler = this.raRepository.create(createAlquilerDto)
    this.raRepository.save(alquiler)
  }

  findAll() {
    return this.raRepository.find({
      relations: {
        carro: true,
      }
    })
  }

  async findOne(folio: number) {
    const alquiler = await this.raRepository.findOne({
      where : {
          folio
        },
      relations : {
        carro: true
      }
      })
    if(!alquiler){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO)
    }
    return alquiler
  }

  update(id: number, updateAlquilerDto: UpdateAlquilerDto) {
    return `This action updates a #${id} alquiler`;
  }

  remove(id: number) {
    return `This action removes a #${id} alquiler`;
  }
}
