import { goToProfilePage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../Global/GlobalStateContexts";
import { useContext } from "react";

const UserCard = (props) => {
  const history = useHistory();
  const { setters } = useContext(GlobalStateContext)

  const submitHistory = (login) => {
    setters.addHistory(login)
    goToProfilePage(history, login)
  }

  return (
    <div>
      <div onClick={() => submitHistory(props.login)}>
        <img src={props.src} alt={props.name} />
        <div>{props.login}</div>
      </div>
    </div>
  );

};
  
export default UserCard;