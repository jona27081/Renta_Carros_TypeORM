import { Carro } from "src/carros/entities/carro.entity";
import { Cliente } from "src/clientes/entities/cliente.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class RegistroAlquiler {
    @PrimaryGeneratedColumn()
    folio: number;
    @CreateDateColumn()
    fechaSalida: string;
    @Column({default: "No entregado"})
    fechaEntrada: string;
    @Column()
    idCarro: number;

    @OneToMany(() => Carro, car => car.placas)
    carro: Carro
    

}



