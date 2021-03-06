import styled from "styled-components";
import { DefaultContainer } from "../../shared/styles/Container";
import { DefaultPage } from "../../shared/styles/Page";



const Page = styled(DefaultPage)`
    background-color: #E5E5E5
`

const Container = styled(DefaultContainer)`
`;

const SubTitle = styled.span`
    font-size: 18px;
    line-height: 25px;
    color: ${({congrats}) => (congrats) ? '#8FC549' : '#BABABA' };
`;

export{
    Page, 
    Container,
    SubTitle
    
}