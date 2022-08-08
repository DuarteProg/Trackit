import styled from "styled-components";
import { useContext, useState } from "react";
import TokenContext from "../Contexts/AuthContext";

import Semana from "./Semana";
import axios from "axios";

export default function Card() {
  const [habito, setHabito] = useState();
  const [diaSelecionado, setDiaSelecionado] = useState(new Map());
  const { setClick, token } = useContext(TokenContext);

  const [week, setWeek] = useState([
    { id: "0", day: "D", selected: false },
    { id: "1", day: "S", selected: false },
    { id: "2", day: "T", selected: false },
    { id: "3", day: "Q", selected: false },
    { id: "4", day: "Q", selected: false },
    { id: "5", day: "S", selected: false },
    { id: "6", day: "S", selected: false },
  ]);

  function toogle( id) {
    const jaSelecionado = diaSelecionado.has(id);
    if (jaSelecionado) {
      diaSelecionado.delete(id);
      
      setDiaSelecionado(new Map(diaSelecionado));
    } else {
     
      setDiaSelecionado(new Map(diaSelecionado.set(id)));
    }
  }

  function confirmarHabito(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(
      URL,
      {
        name: habito,
        days: [...diaSelecionado.keys()],
      },
      config
    );
    promise.then((response) => {
      const { data } = response;
      setClick(false);

    });
  }

  return (
    <Container>
      <Input>
        <input
          type="text"
          value={habito}
          placeholder="Habit name"
          required
          onChange={(e) => setHabito(e.target.value)}
        />
      </Input>
      <Cards>
        {week.map((semana) => {
          const { id, day, selected } = semana;
          const selecionado = diaSelecionado.has(id);

          return (
            <Semana
              key={id}
              day={day}
              id={id}
              selected={selected}
              selecionado={selecionado}
              aoSelecionar={(id, selected) => toogle(id, selected)}
            />
          );
        })}
      </Cards>
      <Botoes>
        <Botao1>
          <button onClick={() => setClick(false)}>Cancel</button>
        </Botao1>
        <Botao2>
          <button onClick={confirmarHabito}>Salvar</button>
        </Botao2>
      </Botoes>
    </Container>
  );
}

const Container = styled.div`
  input {
    width: 303px;
    height: 45px;
    padding-left: 8px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #dbdbdb;
  }
`;

const Cards = styled.div`
  display: flex;
`;
const Input = styled.div``;
const Botao1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 20px;
    border: none;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    text-align: center;

    color: #52b6ff;
  }
`;
const Botao2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 35px;
    border: none;
    background: #52b6ff;
    border-radius: 4.63636px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    text-align: center;

    color: #ffffff;
  }
`;

const Botoes = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
  gap: 15px;
  margin-right: 40px;
  margin-bottom: 40px;
`;
