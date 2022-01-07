import React, {useState} from "react"
import {Container, StyledLink, DivLoader} from './style.jsx'
import { Link } from "react-router-dom"
import axios from 'axios'
import {useNavigate} from 'react-router'
import Input from '../Input'
import BigLogo from "../BigLogo/index.jsx"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


function Login({setUser, setToken}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] =useState(false);
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();

        setLoading(true);

         axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
		 	email: email,
		 	password: password
		 })
         .then(response =>{
             setUser({...response.data});
             setToken({...response.data.token});
             navigate('/hoje')
         })
         .catch(error =>{
            //setLoading(false);
            alert(error.response.data.message);
         })
    }

    return (
        <Container>
            <BigLogo />
            <form onSubmit={handleLogin}>
                <Input required 
                    disabled = {loading}
                    type='email' 
                    value = {email} 
                    onChange={(e) => {setEmail(e.currentTarget.value)}} 
                    placeholder='email'
                />
                <Input required 
                    disabled= {loading}
                    type='password' 
                    value ={password} 
                    onChange={(e)=>{setPassword(e.currentTarget.value)}}
                    placeholder='senha'
                />

                {(loading) 
                    ? <DivLoader><Loader type='ThreeDots' color="white" width={51} height={13}/></DivLoader>
                    : <button disabled={loading} type="submit"> Entrar </button>}

                
            </form>
            <StyledLink to='/cadastro'>não tem uma conta? Cadastre-se</StyledLink>
        </Container>
    )
}



export default Login;