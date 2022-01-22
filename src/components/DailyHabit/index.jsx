import { Container, TitleD, Span, Left, Right, CheckBox, Green } from "./style";
import check from "../../assets/check.png"

function DailyHabit({habit, mark, now}){


    const s_c = (habit.currentSequence > 1) ? 's' : '';
    const s_h = (habit.highestSequence > 1) ? 's' : '';

    const greenNow = (now != null && now.find(m => m === habit.id) !== undefined ) ? true : false;
    const greenHigh = (habit.currentSequence > habit.highestSequence) ? true : false;




    return(
        <Container>
            <Left>
                <TitleD>{habit.name}</TitleD>
                <Span >Sequência atual: <Green green={greenNow}>{habit.currentSequence} dia{s_c}</Green></Span>
                <Span>Seu recorde: <Green green={greenHigh}>{habit.highestSequence} dia{s_h}</Green></Span>
            </Left>
            <Right>
                <CheckBox checked={habit.done} onClick={() => mark(habit.id) }><img src={check} alt='um Vê' /></CheckBox>
            </Right>
        </Container>
    )
}



export default DailyHabit;