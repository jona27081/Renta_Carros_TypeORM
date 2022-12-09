import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ClientesModule } from './clientes/clientes.module';
import { DistribuidoresModule } from './distribuidores/distribuidores.module';
import { CarrosModule } from './carros/carros.module';
import { AlquilerModule } from './alquiler/alquiler.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: "jonathan",
    port: 5432,
    database: 'rentacarros',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    logging: true,
    synchronize: true,
  }), ClientesModule, DistribuidoresModule, CarrosModule, AlquilerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
