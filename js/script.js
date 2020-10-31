call("https://www.thecocktaildb.com/api/json/v1/1/random.php",affichage);




function call(adresse,callback){

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

function affichage(data){

    const json=data.drinks[0]
    console.log(json)
    addDomText(json.strDrink,'random','h1')
    addDomSrc(json.strDrinkThumb,'random','img','id','imgConctail')
    addDom('random','table','id','tableConctail')
    addDom('tableConctail','thead')
    addDom('tableConctail','tr','id','trThead')
    addDomText('Ingredient','trThead','td')
    addDomText('Measure','trThead','td')
    addDom('tableConctail','tbody')
    addDom('tableConctail','tr','id','trBody')
    addDomText('nique toi','trBody','td')
    addDomText('nique moi','trBody','td')



}

/*
<table>
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
  </tbody>
</table>*/


function addDom(whereAdd,typeBalise,idOrClass =null ,nameIdOrClass = null){

    let div=document.getElementById(whereAdd);
    let element=document.createElement(typeBalise);
    choiseIdOrClass(element,idOrClass,nameIdOrClass)
    div.appendChild(element)
}

function addDomText(data,whereAdd,typeBalise,idOrClass =null ,nameIdOrClass = null){

    let div=document.getElementById(whereAdd);
    let element=document.createElement(typeBalise);
    choiseIdOrClass(element,idOrClass,nameIdOrClass)
    element.textContent=data
    div.appendChild(element)
}




function addDomSrc(data,whereAdd,typeBalise,idOrClass =null ,nameIdOrClass = null){
    let div=document.getElementById(whereAdd);
    let element=document.createElement(typeBalise);
    choiseIdOrClass(element,idOrClass,nameIdOrClass)
    element.src=data
    div.appendChild(element)
}

function choiseIdOrClass(element,idOrClass=null,nameIdOrClass=null){

    if(idOrClass==='id'){
        return element.id=nameIdOrClass;
    }else if(idOrClass==='class') {
        return element.classList=nameIdOrClass;
    }
}