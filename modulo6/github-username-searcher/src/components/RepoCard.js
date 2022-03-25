import styled from "styled-components"

const RepositoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0.5rem;
    margin: 0rem;
    margin-left: auto;
    margin-right: auto;
    height: 80%;
    width: 90%;
    justify-content: flex-start;
`

const RepositoryName = styled.a`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
`

const RepositoryDescription = styled.a`
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    display:flex;
`

const RepositoryLanguage = styled.a`
    font-size: 1.2rem;
    display:flex;
    margin-bottom: 0.3rem;
`

const RepoCard = (props) => {
    return (
        <RepositoryContainer onClick={() => window.location.href = (props.html_url)}>
            <RepositoryName> {props.name} </RepositoryName>
            <RepositoryDescription>
                {props.description}
            </RepositoryDescription>
            <RepositoryLanguage>
                <b>Language: </b>{props.language}
            </RepositoryLanguage>
        </RepositoryContainer>
    );
  };
  
  export default RepoCard;