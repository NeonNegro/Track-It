import { Container, TitleD, Span, Left, Right, CheckBox } from "./style";
import check from "../../assets/check.png"

function DailyHabit({habit, mark}){

    return(
        <Container>
            <Left>
                <TitleD>{habit.name}</TitleD>
                <Span>Sequência atual: dia(s)</Span>
                <Span>Seu recorde: dia(s)</Span>
            </Left>
            <Right>
                <CheckBox checked={habit.done} onClick={() => mark(habit.id) }><img src={check} alt='um Vê' /></CheckBox>
            </Right>
        </Container>
    )
}



export default DailyHabit;