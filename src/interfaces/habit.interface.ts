import { IUserRequest, IUserResponse } from "./user.interface";

export interface IHabitRequest {
  tittle: string;
  description: string;
  category: string;
  status?: string;
  userId: string;
}

export interface IHabitResponse {
  id: number;
  tittle: string;
  description: string;
  category: string;
  status: string;
  user: IUserResponse;
}

export interface IHabitUpdated {
  tittle?: string;
  description?: string;
  category?: string;
  status?: string;
}
