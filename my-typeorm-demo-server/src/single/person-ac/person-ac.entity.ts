import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeType, Person } from 'my-typeorm-demo-lib';

@Entity()
export class PersonAc extends BaseEntity implements Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({type: 'date'})
  birth: Date;

  @Column({
    type: "enum",
    enum: EmployeeType,
    default: EmployeeType.WORKER
  })
  employeeType: EmployeeType;

  @Column({nullable: true})
  rank: number;

  @Column()
  active: boolean;

  @Column({length: 1024, nullable: true})
  note: string;
}