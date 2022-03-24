import { goToProfilePage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../Global/GlobalStateContexts";
import { useContext } from "react";

const UserCard = (props) => {
  const history = useHistory();
  const { setters } = useContext(GlobalStateContext)

  const submitHistory = (user) => {
    setters.addHistory(user)
    goToProfilePage(history, props.user.login)
  }

  return (
    <div key={props.user.id}>
      <div onClick={() => submitHistory(props.user)}>
        <img src={props.user.avatar_url} alt={props.user.name} />
        <div>{props.user.login}</div>
      </div>
    </div>
  );

};
  
export default UserCard;