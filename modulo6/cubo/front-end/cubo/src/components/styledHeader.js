import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #5DADE2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;

    form{
        height: 100%;
        display: inherit;
        justify-content: inherit;
        align-items: inherit;
        input{
            height: 3em;
            width: 15rem;
            outline: none;
            padding: 0.25em;
            margin: 0.75rem;
            border-radius: 0.3rem;
            border: 1px solid white;
        }
        button{
            height: 3.70em;
            width: 6.8rem;
            border: 1px solid white;
            background-color: #5DADE2;
            font-weight: bolder;
            color: white;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: 0.5s;
            letter-spacing: 0.05em;
            margin: 1rem;
            :hover{
                opacity: 0.9;
                filter: saturate(2);
            }
            :active{
                filter: saturate(10);
            }
        }
    }
`
