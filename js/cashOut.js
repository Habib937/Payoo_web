document.getElementById('btn-cash-out-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        let addMoney = document.getElementById('cash-out-text').value;
        console.log(addMoney)
        let addPin = document.getElementById('cash-out-pin').value;
        console.log(addPin)
        if(addPin === '1234'){
            console.log('add money to the account')
            let balance = document.getElementById('account-balance')
            .innerText;
            console.log(balance)

            let cashOutMoneyNum = parseFloat(addMoney);
            let newBalaceNum = parseFloat(balance);
            let newBalace = newBalaceNum - cashOutMoneyNum;
            console.log(newBalace)
            document.getElementById('account-balance').innerText = newBalace;
        }
        else{
            alert('invalid password')
        }

    })