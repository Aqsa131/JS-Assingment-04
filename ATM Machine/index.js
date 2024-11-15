var balance = 10000
var accountHolder = 'Aqsa Mhmood'
var currentDate = new Date()
var card  = 'xxx xxx x400'
function next() {
    document.write(`
            <h3>Enter Your PIN(e.g 1234)</h3>
                <input id='getPIN' type="text">
                <button onclick="ahead()" class="proceed">PROCEED</button>
        `)
}
function ahead(userPin){
    var userPin = document.getElementById('getPIN').value
if (userPin == '1234' ) {
    document.write(`
           
        <h3>Select Your desired option</h3>
        <button onClick="accountInfo()">Account Information</button> <br>
        <button onClick="accountDepo()">Deposit Amount</button><br>
        <button onClick="withDraw(balance)">Withdraw cash</button><br>
                
        `)
        document.getElementById('getPIN').value = ""
}
else {
    alert('incorrect pin')
    document.getElementById('getPIN').value = ""
}
}

function accountInfo(){
    document.write(
        `
          
        <div id="content">
        <p >
            Account Holder : ${accountHolder} <br>
            Balance :  ${balance}<br>
            Date : ${currentDate.toString().slice( 0 , 16)}<br>
            Time : ${currentDate.toString().slice(16 , 25)}<br>
            Card Info : ${card}

        </p>
        <button onClick = "back()">Back</button>
    </div>
        
        `
    )
    
}
function back(){
    document.getElementById("content").remove()
}

function accountDepo(){
    var userDepo =+prompt('How much amount you want to deposit')
    if(!userDepo || userDepo <=0){
        alert('Please ENter Valid Amount')
    }
    else{
        balance += userDepo
    }
        document.write(`
            <div id="depoContent">
        <p >
            Account Holder : ${accountHolder} <br>
            Deposited Amount = ${userDepo}<br>
            Balance :  ${balance}<br>
            Date : ${currentDate.toString().slice( 0 , 16)}<br>
            Time : ${currentDate.toString().slice(16 , 25)}<br>
            Card Info : ${card}<br>
            <button onClick = "depoBack()">Back</button>
        </p>
        `)
   }

function depoBack(){
    document.getElementById('depoContent').remove()
}
function withDraw(currentBalance){
    if(withDrawAmount <= balance && withDrawAmount > 0){
        balance -= withDrawAmount;
    }

   var withDrawAmount = +prompt('How much amount do you want to With Draw')
   if(withDrawAmount <= currentBalance){
    balance -= withDrawAmount    
        document.write ('your remaining balance is ' + balance)
   } 
   else{
    alert('Insufficient Balance')
   }
}


// var time = currentDate.getHours()
// var min = currentDate.getMinutes()

// console.log(time.toLocaleString());

// console.log(time);
// if(time < 12){
//     console.log('its ' + time + ' am');
    
// }
// else if(time > 12){
//     console.log('its ' + time + ' pm')
// }
    


// var time = new Date();
// console.log(
//   time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
  
  
// ); 
// console.log(time);



