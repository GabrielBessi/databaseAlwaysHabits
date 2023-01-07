import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Habits from "./habit.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ length: 50 })
  activity: string;

  @Column({ length: 80, unique: true })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Habits, (habit) => habit.user)
  habits: Habits[];
}

export { User };
