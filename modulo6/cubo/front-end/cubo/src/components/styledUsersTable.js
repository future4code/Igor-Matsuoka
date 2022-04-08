import styled from "styled-components";

export const TableContainer = styled.div`
    #collapseTable { 
        border-collapse: collapse; 
    } 

   tr{  
        background-color: white;
        th{
            height: 40px;
            border: 1px solid black;
            width: 10rem;
        }
        td:nth-child(1){
            height: 2rem;
            text-align: center;
            border: 1px solid black;
        }
        td:nth-child(2){
            padding: 0 0.5em;
            border: 1px solid black;
        }
        td:nth-child(3){
            padding: 0 0.5em;
            border: 1px solid black;
        }
        td:nth-child(4){
            text-align: center;
            padding: 0 0.5em;
            border: 1px solid black;
        }

        td:nth-child(5){
            text-align: center;
            padding: 0 0.5em;
            border: 1px solid black;
        }
    }

`

export const ButtonDelete = styled.button`
    border:1px solid black;
    border-radius: 10px;
    background-color: #5DADE2;
    color: white;
`



