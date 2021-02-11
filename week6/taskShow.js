
    
async function fromrickandmortyApi(){ 
     try{
         const caracters = await axios.get("https://rickandmortyapi.com/api/character");
         const origins = await axios.get("https://rickandmortyapi.com/api/location");
         const episodes = await axios.get("https://rickandmortyapi.com/api/episode");
         
         caractersInfo(caracters);
         locationsInfo(origins);
         episodesInfo(episodes);   
     }
     catch(error)
     {
         console.log(error)

     }
}
    fromrickandmortyApi()

        let caractersInfo = (res) => {
            let caracter = document.getElementById("caracteres")
            let caracterInfo = res.data.results
            let h2 = document.createElement("h2")
            h2.innerHTML = "List Of Caracters"
            caracter.appendChild(h2)

            caracterInfo.map(function (human){
            let li = document.createElement("li")
            li.innerHTML = human.name
            caracter.appendChild(li)
         })
            
        }
          
        let locationsInfo = (res) => {
            let location = document.getElementById("locations")
            let locationInfo = res.data.results
            let h2 = document.createElement("h2")
            h2.innerHTML = "List Of Locations"
            location.appendChild(h2)
            
            locationInfo.map(function (locations){
            let li = document.createElement("li")
            li.innerHTML = locations.name
            location.appendChild(li)
         })
        }
          
        let episodesInfo = (res) => {
            let episode = document.getElementById("episodes")
            let episodeInfo = res.data.results
            let h2 = document.createElement("h2")
            h2.innerHTML = "List of Episodes"
            episode.appendChild(h2)
            episodeInfo.map(function (episodes){
            let li = document.createElement("li")
            li.innerHTML = episodes.name
            episode.appendChild(li)
         })
        }
    


