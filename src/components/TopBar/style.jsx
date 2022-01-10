import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 70px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;

    

`

const MiniLogo = styled.img`
    margin-left: 18px;
    height: 56%;
`;

const ImgUser = styled.img`
        border-radius: 100px;
        width: 51px;
        height: 51px;
        margin-right: 18px;
`;

export {
    Container,
    ImgUser,
    MiniLogo
}