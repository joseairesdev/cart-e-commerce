import styled from "styled-components";


export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 height: 80px;
 background-color: #131d3b;
 box-shadow: 2px 2px 5px #131d3b;
`
    
export const ContainersIcons = styled.div`
 display: flex;
 flex-direction: column;
 
  div{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  span{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffaff4;
    width: 20px;
    border-radius: 50%;
    color: #131d3b;
    font-weight: bold;
  }
 
`