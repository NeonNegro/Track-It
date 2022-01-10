import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import {useLocation} from 'react-router-dom';
import { Container, ProgressBarContainer, StyledLink } from "./style";

function BottomBar(){
    const location = useLocation();

    if(location.pathname ==='/' || location.pathname === '/cadastro')
        return ''



    return (
        <Container>
            <StyledLink to='/habitos'>Hábitos</StyledLink>
            <ProgressBarContainer>
                <CircularProgressbarWithChildren 
                    value={66}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                >

                    <StyledLink to='/hoje'><span> Hoje </span></StyledLink>
                </CircularProgressbarWithChildren>
            </ProgressBarContainer>
            <StyledLink to='/historico'>Histórico</StyledLink>
        </Container>
    )
}

export default BottomBar