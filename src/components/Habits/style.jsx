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
    justify-content: space-between;
`;



export{
    Page, 
    Container,
    NewHabitOption
}