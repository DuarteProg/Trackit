import axios from "axios"
import styled from "styled-components"
import { useContext, useState } from "react";
import TokenContext from "../Contexts/AuthContext";

const promise = axios.get(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  promise.then((response) => {
    const { data } = response;
    console.log(data);
  });


export default function Delete({id}){
    const { token } = useContext(TokenContext);
console.log(id)
    return (
        <></>
    )
}