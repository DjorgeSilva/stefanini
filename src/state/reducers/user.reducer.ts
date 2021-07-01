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
        nome: 'Flânelon',
        sexo: 'masculino',
        nacionalidade: 'brasileiro',
        naturalidade: 'codó',
        email: 'flanelon18@gmail.com',
        senha: '14dejunho'

    },
    {
        nome: 'Flânelon',
        sexo: 'masculino',
        nacionalidade: 'brasileiro',
        naturalidade: 'codó',
        email: 'flanelon18@gmail.com',
        senha: '14dejunho'

    },
];

export const reducer = (state = initialState, action: interfaceActionUser) => {
    switch (action.type) {
        case actionTypes.CADASTRAR:
            return [...state, action.payload]
        default:
            return state
    }
}