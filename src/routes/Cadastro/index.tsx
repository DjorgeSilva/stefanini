import React from 'react'
//img
import logo from "../../assets/img/logo.png"
//styles
import * as s from "./cadastro.style"
//packages
import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import { TypeReducer } from '../../state/combineReducers'
import { userInterface } from '../../state/interface'

export const Cadastro: React.FC = (): JSX.Element => {

    // function TestaCPF(strCPF) {
    //     var Soma;
    //     var Resto;
    //     Soma = 0;
    //     if (strCPF == "00000000000") return false;

    //     for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    //     Resto = (Soma * 10) % 11;

    //     if ((Resto == 10) || (Resto == 11)) Resto = 0;
    //     if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    //     Soma = 0;
    //     for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    //     Resto = (Soma * 10) % 11;

    //     if ((Resto == 10) || (Resto == 11)) Resto = 0;
    //     if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    //     return true;
    // }
    // var strCPF = "12345678909";
    // alert(TestaCPF(strCPF));

    const [nome, setNome]: [string, (data: string) => void] = React.useState("");
    const [sexo, setSexo]: [string, (data: string) => void] = React.useState("");
    // const [date, setDate]: [Date, (data: Date) => void] = React.useState(new Date());
    const [nacionalidade, setNacionalidade]: [string, (data: string) => void] = React.useState("");
    const [naturalidade, setNaturalidade]: [string, (data: string) => void] = React.useState("");
    const [email, setEmail]: [string, (data: string) => void] = React.useState("");
    const [senha, setSenha]: [string, (data: string) => void] = React.useState("");
    const [senhaConfirma, setSenhaConfirma]: [string, (data: string) => void] = React.useState("");

    const [message, setMessage]: [boolean, (data: boolean) => void] = React.useState<boolean>(false);


    const dispatch = useDispatch()
    const { actionCadastrar } = bindActionCreators(actionCreators, dispatch)

    const state = useSelector((state: TypeReducer) => state.user)


    let user: userInterface = {
        nome: nome,
        sexo: sexo,
        nacionalidade: nacionalidade,
        naturalidade: naturalidade,
        email: email,
        senha: senha,
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMessage(!message)
        actionCadastrar(user)
    }


    return (
        <s.Container className="container">

            <div className="wrapper-logo">
                <img src={logo} alt="" />
            </div>

            <div className="wrapper-form">
                <form onSubmit={(e) => handleSubmit(e)}>

                    <h1>Cadastro</h1>
                    <hr />

                    <Row>
                        <Col xs={12} md={6}>
                            <label htmlFor="nome">Nome</label>
                            <input type="txt" name="nome" id="nome" onChange={(e) => setNome(e.target.value)} />

                            <label htmlFor="sexo">Sexo</label>
                            <select name="sexo" id="sexo" onChange={(e) => setSexo(e.target.value)}>
                                <option selected disabled>Gênero</option>
                                <option value="masculino">masculino</option>
                                <option value="feminino">feminino</option>
                            </select>

                            <label htmlFor="data-nascimento">Data de Nascimento</label>
                            <input type="date" name="data-nascimento" id="data-nascimento" />

                            <label htmlFor="nacionalidade">Nacionalidade: </label>
                            <input type="txt" name="nacionalidade" id="nacionalidade" onChange={(e) => setNacionalidade(e.target.value)} />

                        </Col>

                        <Col xs={12} md={6}>

                            <label htmlFor="naturalidade">Naturalidade: </label>
                            <input type="txt" name="naturalidade" id="naturalidade" onChange={(e) => setNaturalidade(e.target.value)} />

                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)} />


                            <label htmlFor="senha-confirmar">Confirmar senha:</label>
                            <input type="password" name="senha-confirmar" id="senha-confirmar" onChange={(e) => setSenhaConfirma(e.target.value)} />

                        </Col>

                        <Col xs={12}>
                            <button className="botao-cadastrar" type="submit">Cadastrar</button>
                        </Col>
                    </Row>

                    <hr />

                    <div className="wrapper-sign-in">
                        <p>Já é cadastrado?</p>

                        <Link to="/" >
                            <button type="submit">Login</button>
                        </Link>
                    </div>
                </form>
            </div>

            {message &&
                <div className="wrapper-message">
                    <p>Usuário cadastrado com sucesso!</p>
                    <Link to="/user">
                        <button onClick={() => setMessage(!message)}>Visualizar</button>
                    </Link>
                </div>
            }


        </s.Container>
    )
}
