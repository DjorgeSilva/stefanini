import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img{
        width: 200px;
        margin: 30px auto;
    }

    .main{
        display: block;
        width: 90%;
        height: fit-content;
        background-color: ${props=> props.theme.corBranco};
        border-radius: 10px;

        @media (min-width: 650px){
            width: 650px;
        }

        h1{
            font-size: clamp(1.5rem, 3vw, 2rem);
            text-align: center;
            margin-top: 20px;
        }

        ul{
            width: 100%;
            height: fit-content;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
           
            li{
                cursor: pointer;
                width: 95%;
                border: 1px solid #333;
                border-radius: 10px;
                margin-bottom: 10px;
                padding: 20px 0;
                background-color: ${props=> props.theme.corPadrao};
                color: ${props=> props.theme.corBranco};

                &:hover{
                    background-color: ${props=> props.theme.corBranco};
                    color: ${props=> props.theme.corPadrao};
                }

                .wrap-txt{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                }

                p{
                    
                    span{
                        font-weight: bold;
                    }
                }
            }
            
        }

    }

`