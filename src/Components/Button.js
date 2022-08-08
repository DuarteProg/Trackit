import styled from "styled-components"

import imagem from "../Assets/mais.png"

export default function Button({setClick}){

    return (
        <Container onClick={() => setClick(true)}>
<img src={imagem} alt="mais"/>
        </Container>
    )
}

const Container = styled.div`
width: 40px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
background: #52B6FF;
border-radius: 4.63636px;

img{
    width: 20px;
height: 20px;
left: 329px;
top: 91px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
line-height: 34px;
/* identical to box height */

text-align: center;

color: #FFFFFF;
}

`