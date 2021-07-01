export interface userInterface {
    nome: string;
    sexo: string;
    nacionalidade: string;
    naturalidade: string;
    email: string;
    senha: string;
}

export interface interfaceActionUser{
    type: string,
    payload: userInterface
}