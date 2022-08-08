import { useContext, useEffect, useState } from "react";
import TokenContext from "../Contexts/AuthContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import dayjs from "dayjs";

import ListaHoje from "./ListaHoje";

export default function TelaHoje() {
  // const { token, setToken } = useContext(TokenContext);
  const { image, token } = useContext(TokenContext);
  const value = 0.66; // para o loader
  const text = "Today"; // para o loader
  const [listar, setListar] = useState();

  let now = dayjs();
  let date = now.date();
  let month = now.month();
  let day = now.format("dddd");

function renderizar(){
  const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    promise.then((response) => {
      const { data } = response;
      console.log(data);
      setListar(data);
    });
  
}

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    promise.then((response) => {
      const { data } = response;
      console.log(data);
      
      setListar(data);
    });
  }, []);

  function marcarHabito(done, id){
    
    if(done === false) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`

        const body ={};

        const promise = axios.post(URL, body, 
    {
        headers: {
            "Authorization": `Bearer ${token}`
          }
    });

    promise.then((response) => {
        const {data} = response
        
        renderizar()
    });
    } else{
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`

        const body ={};

        const promise = axios.post(URL, body,  
            {
                headers: {
                  "Authorization": `Bearer ${token}`
                }
              })
        promise.then(() => {
          
          
          renderizar()
        });

    }

    
}

  return (
    <Container>
      <Header>
        <p>TrackIt</p>
        <img src={image} alt="imagem" />
      </Header>
      <Main>
      <Data>
        {" "}
        {day}, {date}/{month + 1}
      </Data>
      </Main>
      <Bmain>
        {listar?.map((listToday, index) => {
          const { id, name, done, currentSequence, highestSequence } =
            listToday;
          return (
            <ListaHoje
              key={index}
              name={name}
              id={id}
              done={done}
              currentSequence={currentSequence}
              highestSequence={highestSequence}
              marcarHabito={marcarHabito}
            />
          );
        })}
      </Bmain>
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
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;


    color: #ffffff;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 450px;

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
const Main = styled.div``;

const Bmain = styled.div`
  height: auto;
  padding-left: 18px;
`;

const Data = styled.div`
  width: 172px;
  height: 29px;
margin-left: 18px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;

  color: #126ba5;
`
