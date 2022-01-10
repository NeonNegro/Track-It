import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CredentialContext from "../../contexts/CredentialContext";



function Today(){

    const[loading, setLoading]= useState(true);

    const {token} = useContext(CredentialContext);

    // useEffect(() => {
    //     axios.get('https://mock-api.driven.com.br/api/v2/camppi/items', {
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     })
    //     .then(response => {
    //         console.log(response.data);
    //         setLoading(false);
    //     })
    //     .catch(error => console.log(error.response));
    //   }, [token]);
    
    if (loading) {
        return <h1>Carregando...</h1>
    }

    return(
        <h1>Estou na página Today</h1>
    )
}

export default Today;