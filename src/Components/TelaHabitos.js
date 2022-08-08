import { useContext, useState } from "react";
import TokenContext from "../Contexts/AuthContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import List from "./List";
import Mbaixo from "./Mbaixo";
import Card from "./Card";
import axios from "axios";

import Button from "./Button";

export default function TelaHabitos() {
  const { token, image, click, setClick } = useContext(TokenContext);
  const [listar, setListar] = useState();

  const promise = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  promise.then((response) => {
    const { data } = response;
    setListar(data);
  });



  const value = 0.66; // para o loader
  const text = "Today"; // para o loader
  return (
    <Container>
      <Header>
        <p>TrackIt</p>
        <img src={image} alt="imagem" />
      </Header>
      <Mcima>
        <p>My habits</p>
        {Button({ setClick })}
      </Mcima>
      <Main>
      {listar?.map((list) => {
    const {id, name, days} = list;
    return <List 
    key={id} id={id} name={name} days={days}/>
          })}
        {click ? <Card /> : null}</Main>
      <Mbaixo>{Mbaixo()}</Mbaixo>
      <Footer>
        <Fesquerdo>
          <p>Habits</p>
        </Fesquerdo>
        <Link to={`/hoje`}>
          <Fcentro>
            <div style={{ width: 100, height: 100, marginBottom: 20 }}>
              <CircularProgressbar
                value={value}
                maxValue={1}
                text={`${text}`}
              />
            </div>
          </Fcentro>
        </Link>
        <Link to={`/historico`}>
          <Fdireito>
            <p>Historic</p>
          </Fdireito>
        </Link>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 667px;
  position: absolute;
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
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    /* identical to box height */

    color: #ffffff;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  position: fixed;
  bottom: 0;

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
  width: 350px;
  height: auto;
  padding-top: 22px;
  padding-left: 15px;
`;

const Fesquerdo = styled.div`
  position: relative;
  left: 20px;
  bottom: 40px;
`;
const Fcentro = styled.div`
  position: relative;
  bottom: 40px;
  left: 60px;
`;
const Fdireito = styled.div`
  width: 375px;
  position: relative;
  left: 100px;
  bottom: 40px;
`;
const Mcima = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 375px;
  height: 29px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
  margin-top: 22px;
`;
