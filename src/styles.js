import styled from 'styled-components';

export const Container = styled.div`
   height: 100%;   
   background: #fff;
      h1 {
         text-align: center;
      }
`;

export const Content = styled.div`
   width: 50%;
   margin: 0 auto;
   padding: 20px;
   border-radius: 10px;
   background: #fff; 
`;

export const InputGroup = styled.div`
   div {
      margin: 8px;
      display: flex;
      flex-direction: column;
   } 
   span {
      color: red;
      margin-top: -10px;       
   }
   input {
      outline: 0;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #DCDCDC;
      border-radius: 3px;
   }
   button {
      font-weight: bold;
      color: #fff;
      padding: 10px;
      outline: 0;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid #ace800;
      background: #ace800;
         &:hover {
            background: #8dbf01;
         }     
   }   
`;