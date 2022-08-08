import { useContext } from "react";
import TokenContext from "../Contexts/AuthContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dayjs from "dayjs";

export default function TelaHistorico() {
    // const { token, setToken } = useContext(TokenContext);
    const { image } = useContext(TokenContext);
    const value = 0.66; // para o loader
    const text = "Today"; // para o loader

    let now = dayjs();
    let date = now.date();
    let month = now.month();
    let day = now.format("dddd");

    return (
        <Container>
      <Header>
        <p>TrackIt</p>
        <img src={image} alt="imagem" />
      </Header>
      <Data>
        {" "}
        {day}, {date}/{month + 1}
        </Data>
      <Main>
      <h1>Historic</h1>
      <p>Soon you will be able to see the history of your habits here!</p>
      </Main>
      <Footer>
      <Link to={`/habitos`}>
        <p>Habits</p>
        </Link>
        <Link to={`/hoje`}>
        <div style={{ width: 100, height: 100, marginBottom: 20 }}>
          <CircularProgressbar value={value} maxValue={1} text={`${text}`} />
        </div>
        </Link>
        <p>Historic</p>
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

color: #FFFFFF;
    }
  
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 557px;

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
margin-left: 15px;

h1{
  width: 100px;
height: 29px;
left: 17px;
top: 98px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;



color: #126BA5;
}
p{
  width: 338px;
height: 74px;
left: 15px;
top: 144px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;
}

`

const Data = styled.div`
 width: 172px;
  height: 29px;
margin-left: 18px;
margin-top: 28px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;

  color: #126ba5;
`
