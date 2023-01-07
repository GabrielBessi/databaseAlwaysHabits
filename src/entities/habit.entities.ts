import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entities";

@Entity("habits")
class Habits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tittle: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column({ default: "Pendente" })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.habits)
  user: User;
}

export default Habits;
