import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import styled from "styled-components"

import Imagem from "../Assets/imagem.png"

export default function SignUpPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [password, setPassword] = useState();



    function confirmarInscricao(event) {
        event.preventDefault();
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
        const promise = axios.post(URL, {
            email,
            name,
            image,
            password
        });
        promise.then((response) => {

            navigate("/")
        })
    }

    return (<>
        <Container>
            <img src={Imagem} alt="imagem" />
            <Formulario>
                <form onSubmit={confirmarInscricao}>
                    <input type="email" value={email} placeholder="email" required
                        onChange={(e) => setEmail(e.target.value)}
                    /> <br />
                    <input type="password" value={password} placeholder="password" required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="text" value={name} placeholder="name" required
                        onChange={(e) => setName(e.target.value)}
                    /> <br />
                    <input type="text" value={image} alt="imagem" placeholder="image" required
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <Botao>
                        <button>Sign Up</button>
                    </Botao>
                </form>
            </Formulario>
            <Link to={`/`}>
                <Frase>
                    <p>Already have an account? Click here!</p>
                </Frase>
            </Link>
        </Container>
    </>
    )



}

const Botao = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 6px;
margin-left: 20px;



button{
    width: 303px;
height: 45px;

background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
border: none;
color: #FFFFFF;
}
`
const Formulario = styled.div`
display: flex;
justify-content: center;
align-items: center;
input{
    width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
margin-left: 36px;
padding-left: 11px;
}
`
const Container = styled.div`
width: 375px;
height: 667px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Frase = styled.div`
margin-top: 11px;
width: 150px;
height: 17px;
left: 85px;
top: 553px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;
`