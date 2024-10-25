document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        let addMoney = document.getElementById('amount-text').value;
        console.log(addMoney)
        let addPin = document.getElementById('get-pin').value;
        console.log(addPin)
        if(addPin === '1234'){
            console.log('add money to the account')
            let balance = document.getElementById('account-balance')
            .innerText;
            console.log(balance)

            let addMoneyNum = parseFloat(addMoney);
            let newBalaceNum = parseFloat(balance);
            let newBalace = addMoneyNum+newBalaceNum;
            console.log(newBalace)
            document.getElementById('account-balance').innerText = newBalace;
        }
        else{
            alert('invalid password')
        }

    })