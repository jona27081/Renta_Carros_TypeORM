import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";

@Entity()
export class RegistroAlquiler {
    @PrimaryGeneratedColumn()
    folio: number;
    @CreateDateColumn()
    fechaSalida: string;
    @Column({default: "No entregado"})
    fechaEntrada: string;
    @Column({default: "Placas"})
    placas: string;
    @Column({default: "Cliente"})
    cliente: string;
    @Column({default: "Email"})
    email: string;
    @Column({default: "Telefono"})
    telefono: string

}



