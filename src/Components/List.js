import { useState } from "react";
import { useContext } from "react";
import TokenContext from "../Contexts/AuthContext";
import axios from "axios";

import styled from "styled-components";



export default function List(props) {
  const { id, name, days } = props;
  const arr = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { token } = useContext(TokenContext);


  function Delete() {

const promise = axios.delete(
  `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
promise.then((response) => {
  const { data } = response;
  window.confirm("Você realmente deseja deletar esse hábito?")
});
  }


  return (
    <Container>
      <Input>
      <h2 onClick={() => Delete()} ><ion-icon name="trash-outline"></ion-icon></h2>
      <h1>{name}</h1>
      
      </Input>
      <Dias>
        {
          arr.map((el, i) => { 
            
            return( 
            <Dia colorDiv={days.includes(i) ? "#CFCFCF" : "#ffffff"} >

              <h1>{el}</h1>

              
            </Dia> )
    })}
    
      </Dias>
    </Container>
  );

  }
const Container = styled.div`
h2{
  margin-left: 280px;

}`;
const Input = styled.div`
h1{
    width: 208px;
height: 25px;
left: 32px;
top: 160px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;

}
`;
const Dia = styled.div`
width: 30px;
height: 30px;


background: ${e => e.colorDiv};
border: 1px solid #D5D5D5;
border-radius: 5px;
h1{
    width: 12px;
height: 25px;
left: 112px;
top: 220px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;


color: #DBDBDB;
}
`;
const Dias = styled.div`
display: flex;
`