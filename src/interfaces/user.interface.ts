export interface IUserRequest {
  name: string;
  photo?: string;
  activity: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  id?: number;
  name?: string;
  photo?: string;
  activity?: string;
  email?: string;
  password?: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IUserUpdated {
  name?: string;
  photo?: string;
  activity?: string;
  email?: string;
  password?: string;
}

export interface IUserUpdatedResponse {
  name?: string;
  photo?: string;
  activity?: string;
  email?: string;
  createdAt: Date;
  updatedAt: Date;
}
