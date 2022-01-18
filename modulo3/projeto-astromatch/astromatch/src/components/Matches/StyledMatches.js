import styled from "styled-components"

const TelaMatches = styled.div`
    background-color: orange;
    border: 1px solid black;
    height: 550px;
    width: 320px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    justify-content: flex-start;
    align-items: stretch;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    height: 1px;
    margin-top: 24.5px;
`

const ListaMatches = styled.div`
    display: flex;
    flex-direction: column;
`

const ImagemMatch = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-right: 10px;
`

const MatchesAtivos = styled.div`
    display: flex;
    margin: 10px;
    margin-top: 20px;
`

const Aviso = styled.p`
    margin-left: auto;
    margin-right: auto;
`

export {TelaMatches, Header, ListaMatches, ImagemMatch, MatchesAtivos, Aviso}