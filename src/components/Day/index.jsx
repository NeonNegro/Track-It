import { Container } from "./style";

function Day({weekDay, handleForm, loading}){

    function selectDay(){
        if(handleForm){
            weekDay.selected = !weekDay.selected;
            handleForm(weekDay);
        }
    }

    return(
        <Container 
            disable={loading}
            onClick={selectDay} 
            selected={weekDay.selected}>

            <p>{weekDay.txt}</p>
        </Container>
    )
}

export default Day