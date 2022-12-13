import { RegistroAlquiler } from 'src/alquiler/entities/alquiler.entity';
import { Distribuidores } from 'src/distribuidores/entities/distribuidore.entity';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, OneToMany} from 'typeorm'

@Entity('carros')
export class Carro {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    placas: string;
    @Column()
    marca: string;
    @Column()
    color: string;
    @Column()
    modelo: string;
    @CreateDateColumn()
    fechaCompra: Date;
    @Column()
    rentaDiaria: number;
    @Column()
    distribuidorId: number;

    @ManyToOne(() => Distribuidores, dis => dis.nombreComercial)
    distribuidor: Distribuidores
}