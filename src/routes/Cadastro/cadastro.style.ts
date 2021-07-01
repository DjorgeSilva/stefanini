import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wrapper-logo{
        width: 100%;
        height: fit-content;
        margin-top: 30px;
        margin-bottom: 50px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 200px;
        }
    }

    .wrapper-form{
        width: 100%;
        height: fit-content;

        display: flex;
        justify-content: center;
        align-items: center;

        form{
            width: 90%;
            height: fit-content;
            padding: 30px 20px;
            background-color: ${props => props.theme.corBranco};
            border-radius: 10px;
            padding-bottom: 0;

            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (min-width: 550px){
                width: 550px;
            }


            h1{
                font-size: clamp(1.5rem, 3vw, 2.8rem);
                text-align: center;
            }


            label{
                margin: 10px 0;
            }

            input{
                width: 100%;
                height: 35px;
                outline: none;
                padding-left: 13px; 

            }
            button{
                height: 35px;
                margin-top: 25px;
                background: ${props => props.theme.corPadrao};
                color: ${props => props.theme.corBranco};
                border: none;
                margin-bottom: 20px;;

                &:hover{
                    background: #000;
                }
            }


            .wrapper-sign-in{
                width: 100%;
                height: 50px;
                margin: 0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding-bottom: 20px;;

                p{
                    margin: 0;
                    padding: 0;    
                }

                button{
                    padding: 5px 20px;
                    background-color: transparent;
                    color: ${props => props.theme.corPadrao};
                    border: 1px solid ${props => props.theme.corPadrao};
                   
                    @media (max-width: 500px){
                        padding: 5px 8px;

                    }

                    &:hover{
                        background-color: ${props => props.theme.corPadrao};
                        color: ${props => props.theme.corBranco};
                    }
                    
                }
            }

        }
    }
    

`