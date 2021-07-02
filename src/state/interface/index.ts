import { actionTypes } from "../constants";

export interface userInterface {
    nome: string;
    sexo: string;
    nacionalidade: string;
    naturalidade: string;
    email: string;
    senha: string;
}

export interface interfaceActionUser{
    type: actionTypes.CADASTRAR,
    payload: userInterface
}