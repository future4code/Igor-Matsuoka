const ProfileCard = (props) => {
    return (
      <div>
          <img src={props.src} alt={props.name} />
          <div>{props.login}</div>
          <div>Name: {props.name}</div>
          <div>Location: {props.location}</div>
          <div>Company: {props.company}</div>
          <div>Public Repositories: {props.public_repos}</div>
          <div>Public gists: {props.public_gists}</div>
          <div>Followers: {props.followers}</div>
          <div>Following: {props.following}</div>
        </div>
    );
};
  
  export default ProfileCard;