import React from 'react'
//reducer
import { useSelector } from 'react-redux'
import { TypeReducer } from '../../state/combineReducers'
//styles
import * as s from "./users.style"
//img
import logo from '../../assets/img/logo.png'

export const User: React.FC = (): JSX.Element => {

    const data = useSelector((state: TypeReducer) => state.user)

    return (
        <s.Container>
            <img src={logo} alt="logomarca" />

            <div className="main">
                <h1>Usuários Cadastrados</h1>

                <ul>
                    {data &&
                        data.map((item) => {
                            return (
                                <li>
                                    <div className="wrap-txt">
                                        <span>Nome: </span>
                                        <p>{item.nome}</p>
                                    </div>

                                    <div className="wrap-txt">
                                        <span>Sexo: </span>
                                        <p>{item.sexo}</p>
                                    </div>

                                    <div className="wrap-txt">
                                        <span>Nacionalidade: </span>
                                        <p>{item.nacionalidade}</p>
                                    </div>

                                    <div className="wrap-txt">
                                        <span>Naturalidade: </span>
                                        <p>{item.naturalidade}</p>
                                    </div>

                                    <div className="wrap-txt">
                                        <span>Email: </span>
                                        <p>{item.email}</p>
                                    </div>
                                </li>
                            )
                        })
                        // :
                        // <div className="wrapper-no-user">
                        //     <p>Nenhum usuário encontrado!</p>
                        // </div>
                    }
                </ul>
            </div>

        </s.Container>
    )
}
