const div_history = "<div class='history'>"                   +
                        "<div class='result-number-history'>" +
                            "$result"                         +
                        "</div>"                              +
                        "<div class='result-date-history'>"   +
                            "$date"                           +
                        "</div>"                              +
                    "</div>"


function reset(){
    fetch('http://127.0.0.1:5000/api/reset')
        .then(response => response.json())
        .then(data => {
            let history = document.getElementById('result-history');
            history.innerHTML = '';

            let number = document.getElementById('number');
            number.innerText = 0
            console.log(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function sort(){
    try{

        fetch('http://127.0.0.1:5000/api/sorting')
        .then(response => response.json())
        .then(data => {
            let number = document.getElementById('number');
            number.innerText = data['new_number']
            
            let history = document.getElementById('result-history');
            history.innerHTML = '';
            for (let index = 0; index < data['history'].length; index++) {
                
                new_history = div_history.replace('$result', data['history'][index]['last_number'])
                new_history = new_history.replace('$date', data['history'][index]['date'])

                history.innerHTML += new_history
                
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }catch{
        console.log('There was error in api')
    }
}