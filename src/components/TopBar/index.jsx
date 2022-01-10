import { useContext } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { Container, ImgUser, MiniLogo } from "./style";
import miniLogo from "../../assets/TrackIt.svg"

function TopBar(){
    const location = useLocation();

    const {user} = useContext(UserContext);

    if(location.pathname ==='/' || location.pathname === '/cadastro')
        return ''


    return (
        <Container>
            <MiniLogo src = {miniLogo} />
            <ImgUser src={user.image} />
        </Container>
    )

}


export default TopBar;