import Loader from "react-loader-spinner";
import Day from "../Day";
import { Button, ButtonC, Container, Form, Input, Options, Week } from "./style";

function NewHabit({show, setShow, form, handleForm, send, loading}){

    return (
        <Container show={show}>
            <Form>
                <Input  
                disabled={(loading) && 'disabled'}
                type= "text" 
                value = {form.name}
                onChange = {e => {handleForm(e.currentTarget.value)}}
                placeholder='nome do hábito' />
                <Week>
                    {form.days.map(d => (<Day handleForm={handleForm} key={d.value} weekDay={d} disable={loading}></Day>))}
                </Week>
                <Options>
                    <ButtonC type='button' onClick={() => setShow(!show)}>Cancelar</ButtonC>
                    <Button onClick={send}>
                        {(!loading) ? 'Salvar' : <Loader type='ThreeDots' color="white" width={51} height={13}/>}
                        </Button>
                </Options>
            </Form>
            
        </Container>
    )
}


export default NewHabit;


