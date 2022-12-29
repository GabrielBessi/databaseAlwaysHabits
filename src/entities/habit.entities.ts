import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => User, (user) => user.habits)
  user: User;
}

export default Habits;
