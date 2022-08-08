import { useContext, useEffect } from "react";
import TokenContext from "../Contexts/AuthContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";



export default function TelaHoje() {
  // const { token, setToken } = useContext(TokenContext);
  const { image, token } = useContext(TokenContext);
  const value = 0.66; // para o loader
  const text = "Today"; // para o loader


  
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
  
    promise.then((response) => {
    const {data} = response
    console.log(data)
    });

  },[])

  return (
    <Container>
      <Header>
        <p>TrackIt</p>
        <img src={image} alt="imagem" />
      </Header>
      <Main>
        <p>opa</p>
      </Main>
      <Footer>
      <Link to={`/habitos`}>
        <p>Habits</p>
        </Link>
        <div style={{ width: 100, height: 100, marginBottom: 20 }}>
          <CircularProgressbar value={value} maxValue={1} text={`${text}`} />
        </div>
        <Link to={`/historico`}>
        <p>Historic</p>
        </Link>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 667px;

  background: #f2f2f2;
`;

const Header = styled.div`
  width: 375px;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
  }
    p {
      width: 97px;
height: 49px;
left: 18px;
top: 10px;
margin-left: 18px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
/* identical to box height */


color: #FFFFFF;
    }
  
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 657px;

  p {
    width: 79px;
    height: 22px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
`;

const Main = styled.div`
height: auto;
padding-left: 18px;
`
