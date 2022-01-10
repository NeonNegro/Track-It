import styled from "styled-components"
import {DefaultInput} from "../../shared/styles/Input";

const Container = styled.div`
    display: ${({show}) => !show ? 'none' : 'flex'};
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 20px;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
`
 const Input = styled(DefaultInput)`
     margin-bottom: 0;
     margin-top: 18px;

 `;

 const Week = styled.div`
    width: 100%;
    display: flex;
    width: 91%;
 `;

 const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & > * {
        width: 90%;
    }

 `;

const Button = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    color: white;
`;

const ButtonC = styled(Button)`
    background: white;
    color: #52B6FF;
`;

const Options = styled.div`
    display:flex;
    justify-content: end;
    margin-top: 29px;
    margin-bottom: 15px;
`;

export {
    Container,
    Week,
    Form,
    Input,
    Button,
    ButtonC,
    Options
}