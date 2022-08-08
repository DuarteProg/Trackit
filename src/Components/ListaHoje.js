import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import TokenContext from "../Contexts/AuthContext";


export default function ListaHoje(props) {
  const { name, id, done, currentSequence, highestSequence, marcarHabito } = props;
  // const { token } = useContext(TokenContext);


  
// function marcarHabito(){
    
//     if(done === false) {
//         const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`

//         const body ={};

//         const promise = axios.post(URL, body, 
//     {
//         headers: {
//             "Authorization": `Bearer ${token}`
//           }
//     });

//     promise.then((response) => {
//         const {data} = response
//         console.log(data)

//     });
//     } else{
//         const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`

//         const body ={};

//         const promise = axios.post(URL, body,  
//             {
//                 headers: {
//                   "Authorization": `Bearer ${token}`
//                 }
//               })
//         promise.then((response) => {
//           const { data } = response;
//           console.log(data)
//         });

//     }

    
// }



  return (
    <Container>
      
      <Display>
      <Main>
  <h1>{name}</h1>
  <h2>Current sequence: {currentSequence} days</h2>
  <h2>Your record: {highestSequence} days</h2>
  </Main>
  <Ion done={done} onClick={() => marcarHabito(done, id)}>
  <ion-icon name="checkmark-outline"></ion-icon>
  </Ion>
  </Display>

    </Container>
  );
}

const Data = styled.div`
  width: 172px;
  height: 29px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;

  color: #126ba5;
`;

const Container = styled.div`
margin-top: 15px;
` 

const Main = styled.div`
width: auto;
height: 25px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: #666666;
h2{
    font-size: 12.976px;
}
`;

const Display = styled.div`
display: flex;
`

const Ion = styled.div`
margin-left: 100px;
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
background: ${props => props.done ? "#EBEBEB" : "#8FC549"};
ion-icon{
    font-size: 50px;
}
`