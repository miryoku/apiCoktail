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

    let info=["Ingredient","Measure",json.strIngredient1,json.strMeasure1,json.strIngredient2,json.strMeasure2,json.strIngredient3,json.strMeasure3,
        json.strIngredient4,json.strMeasure4,json.strIngredient5,json.strMeasure5,json.strIngredient6,json.strMeasure6,
        json.strIngredient7,json.strMeasure7,json.strIngredient8,json.strMeasure8,json.strIngredient9,json.strMeasure9]
    addTable(info,'random',2)
    addDomText(json.strInstructions,'random','p')
}

function addTable(data,whereAdd,nbCologne,idOrClass=null,nameIdOrClass=null){
    let div=document.getElementById(whereAdd);
    let element=document.createElement('table');
    choiseIdOrClass(element,idOrClass,nameIdOrClass)
    let j=0;
    let debut="<thead><tr>"
    let th=""
    for(i=0;i<nbCologne;i++){
        th=th+" <th>"+data[j]+"</th>"
        j++;
    }            
    milieu="</tr></thead><tbody>"
    let td=""
    while(data[j]!=null){
        td=td+"<tr>"
        for(i=0;i<nbCologne;i++){
            td=td+" <td>"+data[j]+"</td>"
            j++;
        }   
        td=td+"</tr>"
    } 
    let fin="</tbody><table>"
    element.innerHTML=debut+th+milieu+td+fin
    div.appendChild(element)
}




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