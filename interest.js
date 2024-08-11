//FUNCTION FOR SIMPLE INTEREST CALCULATION
function calculateinterest(){
    let principle=document.getElementById('P').value;
    let time=document.getElementById('T').value;
    let rate=document.getElementById('R').value;
    let si=principle*time*rate/100;
    document.getElementById('info').innerHTML=si;

}

