import React from 'react'
//img
import logo from "../../assets/img/logo.png"
//styles
import * as s from "./login.style"
//packages
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import { TypeReducer } from '../../state/combineReducers'

export const Login: React.FC = (): JSX.Element => {

    const dispatch = useDispatch()
    const { showAction } = bindActionCreators(actionCreators, dispatch)

    const state = useSelector((state: TypeReducer) => state.user)

    const handle = () => {
        showAction()
        console.log(state)
    }


    return (
        <s.Container className="container">

            <div className="wrapper-logo">
                <img src={logo} alt="" />
            </div>

            <div className="wrapper-form">
                <form onSubmit={()=> handle()}>

                    <h1>Login</h1>
                    <hr />

                    <label htmlFor="email">Seu e-mail</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="senha">Sua senha</label>
                    <input type="password" name="senha" id="senha" />

                    <button>Logar</button>

                    <hr />

                    <div className="wrapper-sign-in">
                        <p>Ainda não tem conta?</p>

                        <Link to="/cadastro">
                            <button type="submit">Cadastrar</button>
                        </Link>
                    </div>
                </form>
            </div>

        </s.Container>
    )
}
