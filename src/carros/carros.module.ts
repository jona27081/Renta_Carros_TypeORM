import { Module } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarrosController } from './carros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './entities/carro.entity';
import { DistribuidoresModule } from 'src/distribuidores/distribuidores.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Carro]),
    DistribuidoresModule
  ],
  controllers: [CarrosController],
  providers: [CarrosService],
  exports: [CarrosService]
})
export class CarrosModule {}
