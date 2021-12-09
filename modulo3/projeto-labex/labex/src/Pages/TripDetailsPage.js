import {React, useEffect, /* useState */} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token === null) {
          console.log("Não está logado!!!");
          navigate("/login");
        }
    }, []);
}

function TripDetails(){

    useProtectedPage()
    /* const [listaTrips, setListaTrips] = useState([])

    useEffect(()=>{
        getTrips()
    }, []) */

   /*  const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips')
        .then((res)=>{
            setListaTrips(res.data.trips)
        })
        .catch((err)=>{
            console.log(err)
        })
    } */

    /* const mapTrips = listaTrips.map((item)=>{
        return <div key={item.id}>
            <p><b>Nome:</b> {item.name}</p>
            <p><b>Descrição:</b> {item.description}</p>
            <p><b>Planeta:</b> {item.planet}</p>
            <p><b>Duração:</b> {item.durationInDays} dias</p>
            <p><b>Data:</b> {item.date}</p>
        </div>
    }) */

    useEffect((id) => { 
        const token = localStorage.getItem("token")
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trip/${id}`, 
            {
                headers: {
                    auth: token
                }
            }
        )
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }, [])



    return <div>
        <h1>Detalhes da Viagem</h1>
        {/* {mapTrips} */}
        <Link to="/admin/trips/list">Voltar</Link>
    </div>

}

export default TripDetails;