import { goToProfilePage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../Global/GlobalStateContexts";
import { useContext } from "react";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  height: 8rem;
  margin: 1rem;
  padding: 0.5rem;
  width: 22rem;
  justify-content: flex-start;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const ImageContainer = styled.img`
  border-radius: 500px;
  height: 8rem;
  width: 8rem;
`

export const LoginContainer = styled.h1`
  font-size: 2rem;
  margin: 1rem;
`

const UserCard = (props) => {
  const history = useHistory();
  const { setters } = useContext(GlobalStateContext)

  const submitHistory = (user) => {
    setters.addHistory(user)
    goToProfilePage(history, props.user.login)
  }

  return (
    <Container key={props.user.id}>
      <CardContainer onClick={() => submitHistory(props.user)}>
        <ImageContainer src={props.user.avatar_url} alt={props.user.name} />
        <LoginContainer>{props.user.login}</LoginContainer>
      </CardContainer>
    </Container>
  );

};
  
export default UserCard;