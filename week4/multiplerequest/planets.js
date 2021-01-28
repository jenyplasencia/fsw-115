const btn = document.createElement('Button')
btn.innerHTML = "For a list of Planets";
document.body.appendChild(btn)
let aa = document.getElementsByTagName("Button")[0].setAttribute("id", "myBtn"); 
console.log('hello')
//let peopleName = document.getElementById("myBtn").addEventListener("onclick", getData);
document.getElementById("myBtn").addEventListener("click", getData)
console.log('kk')


function getData(){
    console.log('olalal')
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

var url = "https://swapi.dev/api/planets/"
