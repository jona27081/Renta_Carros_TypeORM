import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm/repository/Repository';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';

@Injectable()
export class ClientesService {

  constructor(@InjectRepository(Cliente) private clienteRepository: Repository<Cliente>){}

  async create(createClienteDto: CreateClienteDto) {
    const cliente = await this.clienteRepository.create(createClienteDto)
    return this.clienteRepository.save(cliente)
  }

  async findAll() {
    return this.clienteRepository.find()
  }

  async findOne(id: number) {
    const cliente = await this.clienteRepository.findOne({
      where : {
          id
        }
      })
    if(!cliente){
      throw new NotFoundException(ValidationMessages.CLIENTE_NO_REGISTRADO)
    }
    return cliente
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = this.findOne(id)
    this.clienteRepository.update({id: id}, updateClienteDto ) //({}, {name: nupdate.name})
    return cliente
  }

  async remove(id: number) {
    const cliente = this.findOne(id)
    this.clienteRepository.delete({ id });
    return cliente
  }
}
