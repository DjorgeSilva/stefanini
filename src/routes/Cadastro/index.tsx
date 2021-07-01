import React from 'react'
//img
import logo from "../../assets/img/logo.png"
//styles
import * as s from "./cadastro.style"
//packages
import {Link} from "react-router-dom"

export const Cadastro: React.FC = (): JSX.Element => {
    return (
        <s.Container className="container">

            <div className="wrapper-logo">
                <img src={logo} alt="" />
            </div>

            <div className="wrapper-form">
                <form action="">

                    <h1>Cadastro</h1>
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
                            <button>Cadastrar</button>
                        </Link>
                    </div>
                </form>
            </div>

        </s.Container>
    )
}
