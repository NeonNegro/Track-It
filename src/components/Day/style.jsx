import styled from "styled-components";

const Container = styled.div`
    width: 30px;
    height: 30px;
    background: ${({selected}) => selected ? '#CFCFCF' : 'white'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 8px 2px;
    pointer-events: ${({disable}) => disable === true && 'none'};
    
    &:first-of-type{
        margin-left: 0px;
    }
    & p  {
        color: ${({selected}) => selected ? 'white' : '#CFCFCF'};
    }
    
`;


export {Container}