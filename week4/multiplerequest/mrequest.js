
const btn = document.createElement('Button')
btn.innerHTML = "Click to list Starships";
document.body.appendChild(btn)
let aa = document.getElementsByTagName("Button")[0].setAttribute("id", "myBtn"); 
document.getElementById("myBtn").addEventListener("click", getData)
console.log('kk')


function getData(){
    
  axios.get(url)
    .then(response => {
        const ol = document.createElement('ol')
        document.body.appendChild(ol)
        for(let i = 0; i < response.data.results.length; i++){
                const li = document.createElement('li')
                li.innerHTML = response.data.results[i].name             
        

            document.body.appendChild(li)
        }
    })
    .catch(error => console.log(error))
}

var url = "https://swapi.dev/api/starships/"














