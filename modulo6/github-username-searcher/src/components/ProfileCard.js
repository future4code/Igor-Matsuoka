const ProfileCard = (props) => {
    return (
      <div key={props.user.id}>
        <div>
            <img src={props.user.avatar_url} alt={props.user.name} />
            <div>{props.user.login}</div>
            <div>Name: {props.user.name}</div>
            <div>Location: {props.user.location}</div>
            <div>Company: {props.user.company}</div>
            <div>Public Repositories: {props.user.public_repos}</div>
            <div>Public gists: {props.user.public_gists}</div>
            <div>Followers: {props.user.followers}</div>
            <div>Following: {props.user.following}</div>
        </div>
      </div>
    );
  
};
    
export default ProfileCard;