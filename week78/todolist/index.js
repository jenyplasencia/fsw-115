const url1 = "https://api.vschool.io/jenyplasencia/todo/"
const url2 = "https://rickandmortyapi.com/api/character"
const todoList = document.getElementById('list')

let caracter = ""
// using Get
let getData = async function () {
  try {
    const toDoList = await axios.get(url1)
    caractersInfo(caracters);
    const caracters  = await axios.get(url2)
    showToDo(toDoList);
  }
  catch {
    console.log("error")
  }
  
}

getData()
// From rickandmortyapi
let caractersInfo = (res) => {
caracterInfo = res.data.results  
}

//Displayin data 
let showToDo = (res) => {
let todoList = document.getElementById('list')
  for (let i = 0; i < res.data.length; i++) {
    let li = document.createElement("li")
    let price = res.data[i].price
    let description = res.data[i].description
    let describe = `Description: + ${description}`;
    let prc = `Price; ${price}`
    let location = `Location: ` + caracterRandom(ran);
    li.append(describe)
    li.append(location) 
    li.append(prc)

    let box = document.createElement("input")
    box.type = "checkbox"
    box.setAttribute("id", "box")
    box.classList.add('checkBox')
    box.onchange = updateComplete
    li.append(box)


    let btn = document.createElement("button")
    btn.textContent = "Delete"
    btn.classList.add("del")
    li.setAttribute(`id`, res.data[i]._id)
    li.innerHTML = res.data[i].title
    if (res.data[i].completed === true){
      li.style.textDecoration = "line-through";
      box.checked = true;
    }
    li.append(btn)
    todoList.appendChild(li)
  }
}

// PUT 
let modify = (resu) =>{
  let box = document.getElementsByClassName("checkBox")
  for (i=0; i<box.length; i++){
  if(box[i].type === "checkbox"){    
      if (resu.target == box[i]){
              
                let anot = box[i].parentNode
                if (box[i].checked){
                  anot.style.textDecoration='line-through'
                } else {
                  anot.style.textDecoration='none'
                }
                
                let id = x.id;
                let comp = {
                  completed: box[i].checked
                }
                axios.put(`https://api.vschool.io/jenyplasencia/todo/${id}`, comp)
    }
  }
}}
//Delete
const erase = (e) => {
    console.log(e)
    axios.delete(`https://api.vschool.io/jenyplasencia/todo/${e}`)
      .then((res) => {
        getData();
      })
      .catch((error) => console.log(error));
  };
  
  let deleteButton = document.getElementsByClassName("del");
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton.addEventListener("click", erase);
  }


//clean the input before new get
let eraseData = () => {
  while (todoList.firstChild) todoList.removeChild(todoList.firstChild)
}

//For POST
const form = document.todoform
form.addEventListener("submit", function (r){
  r.preventDefault()
  let title = form.title.value
  let description = form.description.value
  let price = form.price.value
  let newTodo =
    {title: title,
    description: description,
    price: price}
  
  axios.post("https://api.vschool.io/jenyplasencia/todo/", newTodo)
      .then(deleteData)
      .then(getData)
      .catch(()=> console.log("error"))
    
})