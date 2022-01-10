import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CredentialContext from "../../contexts/CredentialContext";
import { Title } from "../../shared/styles/Title";
import week from "../../shared/utils/utils";
import Habit from "../Habit";
import Newbutton from "../NewButton";
import NewHabit from "../NewHabit";
import NoHabits from "../NoHabits";
import { Page, Container, NewHabitOption } from "./style";

function Habits(){

    const { token } = useContext(CredentialContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
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

// formNewHabit.days[0].selected = true;                 A salvação
// setFormNewHabit({...formNewHabit});


    useEffect(() => {
        getHabits();        
    }, [token]);


    function getHabits(){
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        .then(response => {
             setHabits([...response.data]);
        })
        .catch(error => console.log(error.response));
    }


    function SubmitNewHabit(body, config){

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        .then( response => {
                setFormNewHabit({name: '', days: week()});
                setLoading(false);
                setShowNewHabit(false);
                getHabits();
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
                console.log(response.data);
                getHabits();
        })
        .catch(error => {
            console.log(error.response);
        });

    }

    function PrepareNewHabit(){
        setLoading(true);
        let msg_erro = '';
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
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

        SubmitNewHabit(body, config);
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
                    ? habits.map(h => <Habit habit={h} del={DeleteHabit} />)
                    : <NoHabits/>}
            </Container>
        </Page>
    )
}

export default Habits;