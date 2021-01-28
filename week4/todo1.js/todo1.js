/*const axios = require('axios');*/


var getData = function (url){
axios.get(url)
    .then(response => {
        const ol = document.createElement('ol')
        document.body.appendChild(ol)
        for(let i = 0; i < response.data.length; i++){
           
            const li = document.createElement('li')
            if(response.data[i].completed == true){
                li.innerHTML = response.data[i].title.strike()
                
            }else{
                li.innerHTML = response.data[i].title
            }
           
            document.body.appendChild(li)
        }
    })
    .catch(error => console.log(error))
}

var url = "https://api.vschool.io/jenyplasencia/todo"



getData(url)










