import Day from "../Day"
import { Container, Img, Title, Week } from "./style"
import trash from "../../assets/canBin.png"
import week from "../../shared/utils/utils";

function Habit({habit, del}){
    const newWeek = week();

      newWeek.forEach(d =>{
          if(habit.days.includes(d.value))
              d.selected = true;
      })


    return(
        <Container>
            <Img src={trash} onClick={() => del(habit.id)}></Img>
            <Title>{habit.name}</Title>
            <Week>
                {newWeek.map(d => (<Day handleForm={null} weekDay={d}></Day>))}
            </Week>
        </Container>
    )
}


export default Habit