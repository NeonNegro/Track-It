import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp/'
import Today from './components/Today/'

export default function App(){

    const [user, setUser] = useState('');
    const [token, setToken] = useState(null);
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setToken={setToken} setUser={setUser} />} />
            <Route path='/cadastro' element={<SignUp/>} />
            <Route path='/habitos' element={<Login/>} />
            <Route path='/hoje' element={<Today token={token} user={user}/>} />
            <Route path='/historico' element={<Login/>} />

        </Routes>
        </BrowserRouter>
    )
}
