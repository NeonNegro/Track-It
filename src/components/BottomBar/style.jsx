import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    position:fixed;
    background-color: white;
    width: 100vw;
    height: 10vh;
    bottom: 0;
    left: 0;
    display:flex;
    justify-content: space-around;
    align-items: center;
`;

const ProgressBarContainer = styled.div`
    height: 18vh;
    width: calc(10vh * 1.3);
    bottom: calc(30vh / 7);
`;

const StyledLink = styled(Link)`
    color: #52B6FF;
    font-size: 18px;

    & span {
        color: white;
    }
`;



export {
    Container,
    ProgressBarContainer,
    StyledLink
}