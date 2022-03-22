const RepoCard = (props) => {
    return (
        <div>
            <a onClick={() => window.location.href = (props.html_url)}
            > {props.name} </a>
            <div>
                {props.description}
            </div>
            <div>
                {props.language}
            </div>
        </div>
    );
  };
  
  export default RepoCard;