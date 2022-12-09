import { Module } from '@nestjs/common';
import { DistribuidoresService } from './distribuidores.service';
import { DistribuidoresController } from './distribuidores.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Distribuidores } from './entities/distribuidore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Distribuidores])],
  controllers: [DistribuidoresController],
  providers: [DistribuidoresService],
  exports: [DistribuidoresService]
})
export class DistribuidoresModule {}
