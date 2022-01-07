import styled from "styled-components";

const Input = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    border: 1px solid #D5D5D5;
    width: 100%;
    height: 45px;
    border-radius: 5px;

    & form {
        width: 406px;
    }
`



//background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#22A63F" : "#888"};


export default Input;