

//let output = document.getElementById("todos")

document.addEventListener("submit", function(event){
    event.preventDefault()
    const todoForm = document.todoform
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
    }
    console.log(newTodo),

    await
    //getData();
})

function async getDataFromResource(){
    axios.post("https://api.vschool.io/jenyplasencia/todo/", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))  
    .then(
        getData()
    )
}

function getData(){
    let ol = document.createElement('ol')
    ol.setAttribute("id", "todos")
    document.body.appendChild(ol)
    axios.get( "https://api.vschool.io/jenyplasencia/todo/")
    
        .then(response => {
            


            for(let i = 0; i < response.data.length; i++){

                let li = document.createElement("li")
                li.setAttribute(`id`, response.data[i]._id)
                //let output = document.getElementById("todos")
                li.innerHTML = response.data[i].title 
                //+ response.data[i].description + response.data[i].price 
                
                console.log("hey")

                let box = document.createElement("input")
                box.type = "checkbox"
                box.setAttribute("id", "box")
                box.classList.add('checkBox')
                box.onchange = updateComplete
               
                
                let btn = document.createElement("button")
                btn.classList.add("del")
                btn.textContent = "Done"
                

                if(response.data[i].completed == true){
                    li.innerHTML = response.data[i].title.strike()
                    box.checked = true;   
                } 
                    li.append(box)
                    li.append(btn)
                    output.appendChild(li)
            }
        
        })

        .catch(error => console.log(error))
    }
    //getData()

    
    let updateComplete = (e) =>{
    let bxs = document.getElementsByClassName("checkBox")
        for (i=0; i<bxs.length; i++){
            if(bxs[i].type === "checkbox"){    
                
                if (e.target == bxs[i]){     
                    let x = bxs[i].parentNode
                    if (bxs[i].checked){
                        x.style.textDecoration='line-through'
                    } else {
                        x.style.textDecoration='none'
                        }
                        
                        let id = x.id
                        let comp = {completed: bxs[i].checked}
                        axios.put(`https://api.vschool.io/jenyplasencia/todo/${id}`, comp)
                }
            }
        }
}
  

    
  
    // "https://api.vschool.io/jenyplasencia/todo/"
    

    // t = response.data[i].title
    // d = response.data[i].description
    // p = response.data[i].price

//getData(url)

  