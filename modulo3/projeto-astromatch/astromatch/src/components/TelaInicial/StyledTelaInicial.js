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
    height: 200px;
    font-size: 13px;
    font-weight: bold;
    margin: 5px;
    z-index: -1;
`

const PersonalInfo = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
`

const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 40px;
`

export {TelaContainer, TelaProfile, Header, Info, PersonalInfo, Button}