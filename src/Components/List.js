import styled from "styled-components";
import Delete from "./Delete";


export default function List(props) {
  const { id, name, days } = props;
  return (
    <Container>
      <Input>
      <h1>{name}</h1>
      </Input>
      <Dias>
        <h1>{days}</h1>
      </Dias>
    </Container>
  );
}

const Container = styled.div``;
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
const Dias = styled.div`
width: 30px;
height: 30px;


background: #FFFFFF;
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
