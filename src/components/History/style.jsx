import styled from "styled-components";
import { DefaultContainer } from "../../shared/styles/Container";
import { DefaultPage } from "../../shared/styles/Page";



const Page = styled(DefaultPage)`
    background-color: #E5E5E5
`

const Container = styled(DefaultContainer)`
`;

const NewHabitOption = styled.div`
    display: flex;
`;

const P = styled.p`
    font-size: 17.976px;
    color: #666666;
    margin-top: 29px;
`;



export{
    Page, 
    Container,
    NewHabitOption,
    P
}