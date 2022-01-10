import React, {useContext, useState} from "react"
import {Container, StyledLink, DivLoader} from './style.jsx'
import axios from 'axios'
import {useNavigate} from 'react-router'
import { DefaultInput } from "../../shared/styles/Input";
import BigLogo from "../BigLogo/index.jsx"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import UserContext from "../../contexts/UserContext.jsx"
import CredentialContext from "../../contexts/CredentialContext.jsx"
import { useEffect } from "react/cjs/react.development";


function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const {setAndPersistUser} = useContext(UserContext);
    const {setAndPersistToken} = useContext(CredentialContext);
    const { token } = useContext(CredentialContext);
    const navigate = useNavigate();

    

    useEffect(() => {
        if(token !== null)
            navigate('/hoje');
        else
            console.log(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function handleLogin(e){
        e.preventDefault();

        setLoading(true);

         axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
		 	email: email,
		 	password: password
		 })
         .then(response =>{
            setAndPersistUser({...response.data});
            setAndPersistToken(response.data.token);
            navigate('/hoje')
         })
         .catch(error =>{
            setLoading(false);
            alert(error.response.data.message);
         })
    }

    return (
        <Container>
            <BigLogo />
            <form onSubmit={handleLogin}>
                <DefaultInput required 
                    disabled = {loading}
                    type='email' 
                    value = {email} 
                    onChange={(e) => {setEmail(e.currentTarget.value)}} 
                    placeholder='email'
                />
                <DefaultInput required 
                    disabled= {loading}
                    type='password' 
                    value ={password} 
                    onChange={(e)=>{setPassword(e.currentTarget.value)}}
                    placeholder='senha'
                />

                {(loading) 
                    ? <DivLoader><Loader type='ThreeDots' color="white" width={51} height={13}/></DivLoader>
                    : <button type="submit"> Entrar </button>}

                
            </form>
            <StyledLink to='/cadastro'>não tem uma conta? Cadastre-se</StyledLink>
        </Container>
    )
}



export default Login;