
var getData = function (urlMethod, url, parameter, htmltag){
    const xhr = new XMLHttpRequest()
    var query = `${url}/${parameter}`
    xhr.open(urlMethod,
        query, //
        true) // parent

    xhr.send()
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const JSONdata = xhr.responseText
            const data = JSON.parse(JSONdata)
            const p = data.objects[0]
            const pokeList = p.pokemon
            //console.log(pokeList)
            showData(htmltag,pokeList)
        }
    }

}
var showData = function(htmlTag, pokeList){
    for(let i = 0; i < pokeList.length; i++){
        console.log("Data Success")
        
        var node = pokeList[i]
        renderUI(htmlTag,node);

        console.log(node)
        try{

            getData(url, pokeList[i].resource_uri)    
        }
        catch{
            console.log(`No End point Data eists at ${node}`)
        }
               
        
    }
}
var renderUI= function (htmlElement, data){
    try{
       
        for(var key in data){
            var tag = document.createElement(htmlElement)
            var text  = document.createTextNode(data[key])
            tag.appendChild(text)
            document.body.appendChild(tag)
        }      
    }
    catch{
        console.log ("Unit Test Mode. NO UI")
    }
    
}


var url = "https://api.vschool.io"
var parameter = "pokemon"
var urlMethod ="GET"
var htmlTag = 'h4'


getData(urlMethod, url, parameter, htmlTag)





