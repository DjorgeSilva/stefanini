import { actionTypes } from "../constants";
import { interfaceActionUser, userInterface } from "../interface";

const initialState: userInterface[] = [
    {
        nome: 'Flânelon',
        sexo: 'masculino',
        nacionalidade: 'brasileiro',
        naturalidade: 'codó',
        email: 'flanelon18@gmail.com',
        senha: '14dejunho'

    },
    {
        nome: 'Helena',
        sexo: 'feminino',
        nacionalidade: 'brasileiro',
        naturalidade: 'codó',
        email: 'helena18@gmail.com',
        senha: '14dejunho'

    },
    {
        nome: 'Carlos',
        sexo: 'masculino',
        nacionalidade: 'brasileiro',
        naturalidade: 'codó',
        email: 'carlos18@gmail.com',
        senha: '14dejunho'

    }

];

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {

        case 'adicionar':
            return [...state, action.payload]

        case 'show':
            return 21
        default:
            return state
    }
}