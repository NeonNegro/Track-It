import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CredentialContext from "../../contexts/CredentialContext";
import { getConfig } from "../../shared/utils/utils";
import { Title } from "../../shared/styles/Title";
import { Page, Container, SubTitle } from "./style";
import DailyHabit from "../DailyHabit";
import NoHabits from "../NoHabits";
import 'dayjs/locale/pt-br'



function Today(){

    const {token} = useContext(CredentialContext);
    const config = getConfig(token);
    const [habits, setHabits] = useState(null);
    const [percent, setPercent] = useState('loading');
    const [congrats, setCongrats] = useState(false);

    const dayjs = require('dayjs');
    dayjs.locale('pt-br');
    const dayWeek = dayjs().format('dddd').replace('-feira','');
    const dayMonth = dayjs().format('DD/MM');


    useEffect(() => { getDayHabits()}, [token]);




    function getDayHabits(){
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        .then(response => {
             setHabits([...response.data]);
             console.log([...response.data]);
             calcProgress([...response.data]);
             if(response.data.find(h => h.currentSequence === h.highestSequence) !== undefined)
                setCongrats(true);
        })
        .catch(error => console.log(error.response));
    }

    function checkHabit(habit){
        let promise;

        if(habit.done)
            promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, config);
        else
            promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, config);
        
        promise.then(response => { })
        promise.catch(error => console.log(error.response));
    }


    function toggleNewHabit(id){
        const index = habits.findIndex(h => h.id === id);
        habits[index].done = !habits[index].done;
        if(habits[index].done){
            habits[index].currentSequence ++;
            setCongrats(true);
        }
        else 
            habits[index].currentSequence --;
        setHabits([...habits]);
        checkHabit(habits[index]);
        calcProgress([...habits]);
        
    }


    function calcProgress(habits){
        const total = habits.length;
        if(total === 0){
            setPercent('noHabits');
            return
        }
        const done = habits.filter(h => h.done).length;
        if (done === 0){
            setPercent('nothingDone');
            return
        }
        setPercent(Math.round(done*100/total)); 
    }

    
    return(
        <Page>
            <Container>
                <Title>{dayWeek}, {dayMonth}</Title>
                {(typeof(percent) === 'number' && percent !== 0)
                    && <SubTitle congrats={congrats}> {percent}% dos hábitos concluídos</SubTitle>}
                {(percent === 'nothingDone') 
                    && <SubTitle>Nenhum hábito concluído ainda</SubTitle>
                }                 

                {(percent === 'noHabits') 
                    && <NoHabits/>
                }
                {(percent === 'loading') 
                    && ''
                }
                {(typeof(percent) === 'number' || percent === 'nothingDone' ) 
                    && habits.map(h => <DailyHabit habit={h} mark={toggleNewHabit} />)
                }
            </Container>
        </Page>
    )
}


// const haveHabits = () => {return (habits !== null && habits.length !== 0 )};

export default Today;