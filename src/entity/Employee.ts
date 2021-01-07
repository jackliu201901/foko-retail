import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    employeeId: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    dateCreated: string;

    @Column()
    dateUpdated: string;

}
