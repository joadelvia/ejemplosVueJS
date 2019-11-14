//Creamos una nueva instancia de Vue asociada al div con id app  
  new Vue({
    el: "#app",
    //Definimos los datos para utilizarlos en el html
    data: {
      textSearch: "",
      teams: []
    },
    // Ahora hacemos uso de los hooks, que son los diferentes estados por los que puede pasar un componente
    // podéis leer más en https://elabismodenull.wordpress.com/2017/05/05/vuejs-el-ciclo-de-vida-de-un-componente/
    // en este caso podríamos hacerlo tanto en created como en mounted, pero sería más apropiado en created ya que no estamos 
    // accediendo al DOM
    created() { 
      //Ahora obtenemos datos de la API, en algunos ejemplos vemos axios.get, pero podemos usar esta forma (por comodidad principalmente
      //ya que desde RapidAPI nos dan este formato)
        axios({
            "method":"GET",
            "url":"https://free-nba.p.rapidapi.com/teams",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"free-nba.p.rapidapi.com",
            "x-rapidapi-key":"4fda4e4c82msh6635b0a91774b70p1a3360jsn1d0d2ab783b9"
            },"params":{
                "page":"0"
            }
        })
        .then((response)=>{
            this.teams = response.data.data;
        })
        .catch((error)=>{
            console.log(error)
        })
        
    },
    computed: {
      teamsFilter() {
        this.teams.forEach(team => {
          team.image_url = "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/"+team.abbreviation.toLowerCase()+".png";      
        });
        var textSearch = this.textSearch;
        return this.teams.filter(function(el) {
          return el.conference.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
        });
      }
    }
    

});