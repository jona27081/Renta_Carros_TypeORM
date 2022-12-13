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
    const cliente = await this.clienteService.findOne(createAlquilerDto.idCliente)
    if(!carro || !cliente){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO)
    }
    const registro = new RegistroAlquiler()
    registro.placas = carro.placas;
    registro.cliente = cliente.nombre;
    registro.email = cliente.email;
    registro.telefono = cliente.telefono

    const alquiler = this.raRepository.create(registro)
    this.raRepository.save(alquiler)
  }

  findAll() {
    return this.raRepository.find()
  }

  async findOne(folio: number) {
    const alquiler = await this.raRepository.findOne({
      where : {
          folio
        }
      })

    if(!alquiler){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO)
    }
    return alquiler
  }

  async checkout(folio:number){
    let check = new Date().toLocaleDateString()
    const alquiler = await this.raRepository.update({folio: folio}, {fechaEntrada : check})

    if(!alquiler){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO)
    }
    return alquiler
  }


}
