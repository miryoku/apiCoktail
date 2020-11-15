export function call(adresse,callback){

    fetch(adresse)
    .then((reponse)=>{ 
        return reponse.json();
    })
    .then((data)=>{
       callback(data);
    })
    .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });

}
