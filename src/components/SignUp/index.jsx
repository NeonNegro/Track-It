import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";


function SignUp (){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.imgur.com/8dSVWBJ.jpeg');
    const [password, setPassword] = useState('');

    function handleSignUp(e){
        e.preventDefault();

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{
            email: email,
            name: name,
            image: image,
            password: password
        })
        .then((data) =>{
            debugger;
            console.log(data);
        })
        .catch((error) =>{
            debugger;
            console.log(error.response);
        })
    }

    return (
        <form onSubmit={handleSignUp}>
            <input 
                type='text' 
                value= {email}
                name='email'
                onChange={(e)=>{setEmail(e.currentTarget.value)}}
                placeholder='email'
            />
            <input 
                type='password' 
                value= {password}
                name='password'
                onChange={(e)=>{setPassword(e.currentTarget.value)}}
                placeholder='senha'
            />
            <input 
                type='text' 
                value= {name}
                name='name'
                onChange={(e)=>{setName(e.currentTarget.value)}}
                placeholder='nome'
            />
            <input 
                type='text' 
                value= {image}
                name='image'
                onChange={(e)=>{setImage(e.currentTarget.value)}}
                placeholder='foto'
            />
            <Link to='/'>Já tem uma conta? Faça login!</Link>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default SignUp