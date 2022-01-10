//const week = initWeek();

function initDay(txt) {
    let value =-1;
    if (txt === 'dom') {value = 0;txt='D'; } 
    if (txt === 'seg') {value = 1;txt='S'; } 
    if (txt === 'ter') {value = 2;txt='T'; } 
    if (txt === 'qua') {value = 3;txt='Q'; } 
    if (txt === 'qui') {value = 4;txt='Q'; } 
    if (txt === 'sex') {value = 5;txt='S'; } 
    if (txt === 'sab') {value = 6;txt='S'; }
    
    return {
        value: value,
        txt: txt,
        selected: false
    }
}

function week(){
    const w = [];
    w.push(initDay('dom'));
    w.push(initDay('seg'));
    w.push(initDay('ter'));
    w.push(initDay('qua'));
    w.push(initDay('qui'));
    w.push(initDay('sex'));
    w.push(initDay('sab'));
    return w
}



export default week;