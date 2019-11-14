//Creamos una nueva instancia de Vue asociada al div con id app  
  new Vue({
    el: "#app",
    //Definimos los datos para utilizarlos en el html
    data: {
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
          // En el caso de que obtengamos respuesta correcta guardamos los datos obtenidos en la variable teams que hemos declarado en data
          // Esto cambiará dependiendo de la respuesta de nuestra api, en mi caso devuelve un json que contiene un campo data que a su vez contiene 
          // otro campo data que contiene tantos registros como equipos se han recuperado de la API
            this.teams = response.data.data;
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
    
    

});