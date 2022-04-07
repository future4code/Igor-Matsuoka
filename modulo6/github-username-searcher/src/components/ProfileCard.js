import styled from "styled-components"

export const ImageContainer = styled.img`
  border-radius: 500px;
  height: 15rem;
  width: 15rem;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const LoginContainer = styled.div`
  font-size: 2rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  padding: 1rem;
  height: 22rem;
`

export const InfoContainer = styled.div`
  font-size: 2rem;
  margin: 1rem;
  display: flex;
  display: flex;
  flex-direction: column;
`
export const InsideInfoContainer = styled.div`
  font-size: 1rem;
  margin: 0.3rem;
  display: flex;
  display: flex;
  flex-direction: column;
`

export const InsideInfoContainer2 = styled.div`
  font-size: 2rem;
  margin: 0.3rem;
  display: flex;
  display: flex;
  flex-direction: column;
`

const ProfileCard = (props) => {
    return (
      <Container key={props.user.id}>
        <LoginContainer>
            <ImageContainer src={props.user.avatar_url} alt={props.user.name} />
            <InfoContainer>
            <InsideInfoContainer2>{props.user.login}</InsideInfoContainer2>
            <InsideInfoContainer><b>Name:</b> {props.user.name}</InsideInfoContainer>
            <InsideInfoContainer><b>Location: </b>{props.user.location}</InsideInfoContainer>
            <InsideInfoContainer><b>Company: </b>{props.user.company}</InsideInfoContainer>
            <InsideInfoContainer><b>Public Repositories: </b>{props.user.public_repos}</InsideInfoContainer>
            <InsideInfoContainer><b>Public gists:</b> {props.user.public_gists}</InsideInfoContainer>
            <InsideInfoContainer><b>Followers: </b>{props.user.followers}</InsideInfoContainer>
            <InsideInfoContainer><b>Following: </b>{props.user.following}</InsideInfoContainer>
            </InfoContainer>
        </LoginContainer>
      </Container>
    );
  
};
    
export default ProfileCard;