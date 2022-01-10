import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Container } from "../Login/style";
import BigLogo from "../BigLogo";
import {DefaultInput} from "../../shared/styles/Input";
import { DivLoader, StyledLink } from "./style";
import Loader from "react-loader-spinner";


function SignUp (){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSignUp(e){
        e.preventDefault();
        setLoading(true);

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{
            email: email,
            name: name,
            image: image,
            password: password
        })
        .then((data) =>{
            setLoading(false);
            navigate('/');
        })
        .catch((error) =>{
            setLoading(false);
            alert(error.response.data.message);
        })
    }

    return (
        <Container>
            <BigLogo/>
            <form onSubmit={handleSignUp}>
                <DefaultInput 
                    disabled={loading} 
                    type='text' 
                    value= {email}
                    name='email'
                    onChange={(e)=>{setEmail(e.currentTarget.value)}}
                    placeholder='email'
                />
                <DefaultInput 
                    disabled={loading} 
                    type='password' 
                    value= {password}
                    name='password'
                    onChange={(e)=>{setPassword(e.currentTarget.value)}}
                    placeholder='senha'
                />
                <DefaultInput 
                    disabled={loading} 
                    type='text' 
                    value= {name}
                    name='name'
                    onChange={(e)=>{setName(e.currentTarget.value)}}
                    placeholder='nome'
                />
                <DefaultInput 
                    disabled={loading} 
                    type='text' 
                    value= {image}
                    name='image'
                    onChange={(e)=>{setImage(e.currentTarget.value)}}
                    placeholder='foto'
                />
                {(loading) 
                    ? <DivLoader><Loader type='ThreeDots' color="white" width={51} height={13}/></DivLoader>
                    : <button type="submit"> Cadastrar </button>}

            </form>
            <StyledLink to='/'>Já tem uma conta? Faça login!</StyledLink>
        </Container>
    )
}

export default SignUp