import { Name } from "../../valuesObjects/name.js";

//deto de saida do registro do usuario
export interface RegisterOutput {
  id: number;
  email: string;
  cpf: string;
}

//dto de usuario completo para ser utilizado em outras partes do sistema
export interface IUserDTO {
  id: number;
  name: Name;
  email: string;
  cpf: string;
  birthDate: string;
}

//dto de entrada para o registro do usuario
export interface RegisterInput {
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
  password: string;
}
