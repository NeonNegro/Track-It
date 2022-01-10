import styled from "styled-components";
import { DefaultContainer } from "../../shared/styles/Container";
import { Title } from "../../shared/styles/Title";

const Container = styled(DefaultContainer)`
    position: relative;
    display: flex;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    padding: 14px;
    align-items: center;
    justify-content: flex-start;
    align-items: stretch;
`;

const TitleD = styled(Title)`
    font-size: 20px;
    color: #666666;
    margin-bottom: 10px;
`;

const Span = styled.span`
    display: block;
    color: #666666;
    line-height: 16px;
    font-size: 13px;
`;

const CheckBox = styled.div`
    width: 69px;
    height: 69px;
    background: ${({checked}) => (checked) ? '#8FC549' : '#EBEBEB'};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    margin-left:auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Left = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
`
const Right = styled.div`
    width: 25%;
`



export {
    Container,
    TitleD,
    Span,
    Left,
    Right,
    CheckBox
}