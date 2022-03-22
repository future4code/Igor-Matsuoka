import { goToSearchPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const HistoryPage = () => {
    const history = useHistory();

    return(<div>
        <button onClick = {() => goToSearchPage(history)}>Voltar</button>
        <div>History</div>
        </div>
    )
}

export default HistoryPage;