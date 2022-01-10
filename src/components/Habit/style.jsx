import styled from "styled-components";

const Container = styled.div`
    position: relative;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
`

const Title = styled.p`
    font-size: 20px;
    color: #666666;
    padding-top: 15px;
    margin-left: 15px;
    margin-right: 25px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const Week = styled.div`
    display: flex;
    width: 91%;
    margin-left: 15px;
    padding-bottom: 10px;
    
`;

const Img = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
`

export{
    Container,
    Title,
    Week,
    Img
}