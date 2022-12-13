import { RegistroAlquiler } from "src/alquiler/entities/alquiler.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from "typeorm";

@Entity({ name : 'clientes' })
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    dirreccion: string;
    @Column()
    telefono: string;
    @Column()
    email: string;
    @CreateDateColumn()
    createdAt: Date;
}
