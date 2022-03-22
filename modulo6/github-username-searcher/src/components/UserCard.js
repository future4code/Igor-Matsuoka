import { goToProfilePage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";

const UserCard = (props) => {
    const history = useHistory();
  
    return (
      <div>
        <div onClick={() => goToProfilePage(history, props.login)}>
          <img src={props.src} alt={props.name} />
          <div>{props.login}</div>
        </div>
      </div>
    );
  };
  
  export default UserCard;