import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CredentialContext from "../../contexts/CredentialContext";
import UserContext from "../../contexts/UserContext";
import { Title } from "../../shared/styles/Title";
import { getConfig, week } from "../../shared/utils/utils";
import Habit from "../Habit";
import Newbutton from "../NewButton";
import NewHabit from "../NewHabit";
import NoHabits from "../NoHabits";
import { Page, Container, NewHabitOption } from "./style";

function Habits(){

    const { token } = useContext(CredentialContext);
    const { setGlobalPercent } = useContext(UserContext)
    const config = getConfig(token);
    const [habits, setHabits] = useState(null);
    const haveHabits = () => {return (habits !== null && habits.length !== 0 )};
    const [loading, setLoading] = useState(false);
    const [showNewHabit, setShowNewHabit] = useState(false);
    const [formNewHabit, setFormNewHabit] = useState(
        {
            name: '',
            days: week()
        }
    );

    useEffect(() => { 
        if(token !== null)
            getHabits();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);


    function getHabits(){
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        .then(response => {
             setHabits([...response.data]);
        })
        .catch(error => console.log(error.response));
    }

     function getDayHabitsAndCalcProgress(){
         axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
         .then(response => {
              calcProgress([...response.data]);
         })
         .catch(error => console.log(error.response));
     }

     function calcProgress(habits){
         const total = habits.length;
         if(total === 0){
             setGlobalPercent(0);
             return
         }
         const done = habits.filter(h => h.done).length;
         if (done === 0){
             setGlobalPercent(0);
             return
         }
         setGlobalPercent(Math.round(done*100/total)); 
     }

    function SubmitNewHabit(body){

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        .then( response => {
                setFormNewHabit({name: '', days: week()});
                setLoading(false);
                setShowNewHabit(false);
                getHabits();
                getDayHabitsAndCalcProgress();
        })
        .catch(error => {
            setLoading(false);
            alert(error.response);
        });
        
    }

    function DeleteHabit(id){

        if(!window.confirm("Deseja mesmo apagar o hábito?")) return

        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        .then( response => {
                getHabits();
                getDayHabitsAndCalcProgress();
        })
        .catch(error => {
            console.log(error.response);
        });

    }

    function PrepareNewHabit(){
        setLoading(true);
        let msg_erro = '';
        let body = {...formNewHabit};
        body.days = [...formNewHabit.days.filter(h => h.selected).map( x => x.value)];

        if(body.days.length === 0 )
            msg_erro += "Selecione ao menos 1 dia";
        if(body.name === '' )
            msg_erro += (msg_erro === '') ? 'Dê um nome ao novo hábito' : '\r\nDê um nome ao novo hábito'
        if(msg_erro !== ''){
            alert(msg_erro);
            setLoading(false);
            return
        }

        SubmitNewHabit(body);
    }

    function toggleNewHabit(){
        setShowNewHabit(!showNewHabit);
    }

    function handleFormNewHabit(val){
        if(typeof val === 'string')
            formNewHabit.name = val;
        if(typeof val === 'object') 
            formNewHabit.days[val.value] = val;
        setFormNewHabit({...formNewHabit});
    }

    return (
        <Page>
            <Container>
                <NewHabitOption>
                    <Title>Meus hábitos</Title><Newbutton action={toggleNewHabit}/>
                </NewHabitOption>
                <NewHabit 
                    show={showNewHabit}
                    loading={loading}
                    setShow ={setShowNewHabit} 
                    form={formNewHabit} 
                    handleForm={handleFormNewHabit}
                    send = {PrepareNewHabit}
                    />
                {(haveHabits()) 
                    ? habits.map(h => <Habit key={h.id} habit={h} del={DeleteHabit} />)
                    : <NoHabits/>}
            </Container>
        </Page>
    )
}

export default Habits;