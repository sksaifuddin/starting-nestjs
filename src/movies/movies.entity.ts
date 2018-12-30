import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Movies {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 250})
    name: string;

    @Column()
    director: string;
}
