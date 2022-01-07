import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        width: 303px;

        * {
            margin-bottom: 6px;
        }
    }

    button {
        width: 100%;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        font-size: 21px;
        color: #ffffff;
        border: none;
    }
`;


const StyledLink = styled(Link)`
    margin-top:19px;
    color:#52B6FF;
    font-size: 14px;
    text-decoration-line: underline;
`;

const DivLoader = styled.div`
        width: 100%;
        height: 45px;
        background: #52B6FF;
        opacity: 0.7;
        border-radius: 5px;
        color: #ffffff;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
`

export {
    Container,
    StyledLink,
    DivLoader
}