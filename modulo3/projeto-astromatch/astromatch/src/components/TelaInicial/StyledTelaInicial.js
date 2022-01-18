import styled from "styled-components"

const TelaContainer = styled.div`
    height: 400px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
`

const TelaProfile = styled.div`
    background-color: orange;
    border: 1px solid black;
    height: 550px;
    width: 320px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    justify-content: space-around;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    height: 1px;
`

const Info = styled.div`
    height: 90px;
    font-size: 13px;
    font-weight: bold;
    margin-top: 10px;
    z-index: -1;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`

const PersonalInfo = styled.div`
    margin: 8px;
    height: 5px;
    display: flex;
    flex-direction: column;
`

const ButtonChoice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 40px;
`

const Foto = styled.img`
    border-radius: 10px;
    width: 300px;
    height: 320px;
`

export {TelaContainer, TelaProfile, Header, Info, PersonalInfo, ButtonChoice, Foto}