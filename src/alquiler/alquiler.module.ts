import { Module } from '@nestjs/common';
import { AlquilerService } from './alquiler.service';
import { AlquilerController } from './alquiler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroAlquiler } from './entities/alquiler.entity';
import { ClientesModule } from 'src/clientes/clientes.module';
import { CarrosModule } from 'src/carros/carros.module';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroAlquiler]),
  CarrosModule,
  ClientesModule],
  controllers: [AlquilerController],
  providers: [AlquilerService]
})
export class AlquilerModule {}
