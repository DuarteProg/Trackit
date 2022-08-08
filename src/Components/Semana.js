import styled from "styled-components";

export default function Semana(props) {
  const { id, day, selected, selecionado, aoSelecionar } = props;

  function selecionarDia() {
    aoSelecionar(id, selected);
  }

  return (
    <Container selecionado={selecionado} onClick={selecionarDia}>
      <h1>{day}</h1>
    </Container>
  );
}
function BcorDia(selecionado) {
  if (selecionado) return "#CFCFCF";
}
function corDia(selecionado) {
  if (selecionado) return "#FFFFFF";
}

const Container = styled.div`
  margin-right: 4px;
  margin-top: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  background-color: ${(props) => BcorDia(props.selecionado)};
  color: ${(props) => corDia(props.selecionado)};
`;
