import { Carro } from "src/carros/entities/carro.entity";
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from "typeorm";

@Entity()
export class Distribuidores {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nombreComercial: string;
    @Column()
    dirreccion: string;
    @Column()
    ciudad: string;
    @Column()
    telefono: string;
    @Column()
    nombreContacto: string;
    @CreateDateColumn()
    createAt: Date

    @OneToMany(() => Carro, carro => carro.placas )
    carros: Carro[]
}
