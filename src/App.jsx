import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomBar from './components/BottomBar'
import Habits from './components/Habits'
import Login from './components/Login'
import SignUp from './components/SignUp/'
import Today from './components/Today/'
import TopBar from './components/TopBar'
import CredentialContext from './contexts/CredentialContext'
import UserContext from './contexts/UserContext'

export default function App(){

    const userOnLocalStorage = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(userOnLocalStorage);
    const tokenOnLocalStorage = localStorage.getItem("token");
	const [token, setToken] = useState(tokenOnLocalStorage);

    function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}
    function setAndPersistUser(user) {
		setUser(user);
		localStorage.setItem("user", JSON.stringify(user));
	}
    
    return (
        <UserContext.Provider value={{user, setAndPersistUser}}>
        <CredentialContext.Provider value= {{token, setAndPersistToken}}>
            <BrowserRouter>
                <TopBar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path='/cadastro' element={<SignUp/>} />
                    <Route path='/habitos' element={<Habits/>} />
                    <Route path='/hoje' element={<Today />} />
                    <Route path='/historico' element={<Login/>} />
                </Routes>
                <BottomBar />
            </BrowserRouter>
        </CredentialContext.Provider>
        </UserContext.Provider>
    )
}