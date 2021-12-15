import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToLogin } from "../routes/Coordinator";

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
          goToLogin(navigate);
        }
    }, [navigate]); 
}