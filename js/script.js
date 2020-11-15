import { call } from './callApi.js';
import { hideBalise,addDom,addDomSrc,addDomText,addTable,addDomHref } from './functionDisplay.js';

let random=document.querySelector('#random1')
let coktail=document.querySelector('#coktail')
let ingredient=document.querySelector('#ingredient')
let menu =document.querySelector('#menu')
let categories=document.querySelector('#categories')
let categoriesSelectionMenu =document.querySelector('#menu2')
let CategoriesSelectionCoktail=document.querySelector('#menu3')
let glasses=document.querySelector("#glasses")
let glassesSelectionMenu=document.querySelector("#glasses2")
let glassesSelectionCoktail=document.querySelector("#glasses3")
let alcoholic=document.querySelector("#alcoholic")
let alcoholicSelectionMenu=document.querySelector("#alcoholic2")
let alcoholicSelectionCoktail=document.querySelector("#alcoholic3")
const args=[coktail,menu,menu2,menu3,glasses2,glasses3,alcoholic2,alcoholic3]

call("https://www.thecocktaildb.com/api/json/v1/1/random.php",affichage);



random.addEventListener("click",()=>{
    hideBalise(args,coktail)
    call("https://www.thecocktaildb.com/api/json/v1/1/random.php",affichage);
})

ingredient.addEventListener("click", () => {
        hideBalise(args,menu)
        call("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",listForModal)

})
menu.addEventListener('click',(e)=>{
    e.preventDefault()
    call("https://www.thecocktaildb.com/api/json/v1/1/search.php?i="+e.path[0].innerText,modal)

})

categories.addEventListener("click", () => {    
    hideBalise(args,menu2)
    call("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",listCategories)
})
categoriesSelectionMenu.addEventListener('click',(e)=>{
    e.preventDefault()
    hideBalise(args,menu3)
    call("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+e.path[0].innerText,listCategoriesMenu)

})
CategoriesSelectionCoktail.addEventListener('click',(e)=>{
    e.preventDefault()
    hideBalise(args,coktail)
    call("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+e.path[1].href,affichage)
})

glasses.addEventListener("click",()=>{
    hideBalise(args,glasses2)
    call("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",listGlasses)
})

glassesSelectionMenu.addEventListener("click",(e)=>{
    e.preventDefault()
    hideBalise(args,glasses3);
    call("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g="+e.path[0].innerText,listGlassesMenu)
})

glassesSelectionCoktail.addEventListener("click",(e)=>{
    e.preventDefault()
    hideBalise(args,coktail)
    call("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+e.path[1].href,affichage)
})

alcoholic.addEventListener("click",()=>{
    hideBalise(args,alcoholic2)
    call("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list",listAlcoholic)
})

alcoholicSelectionMenu.addEventListener("click",(e)=>{
    e.preventDefault()
    hideBalise(args,alcoholic3);
    call("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a="+e.path[0].innerText,listAlcoholicMenu)
})

alcoholicSelectionCoktail.addEventListener("click",(e)=>{
    e.preventDefault()
    hideBalise(args,coktail)
    call("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+e.path[1].href,affichage)
})


function affichage(data){
    const json=data.drinks[0]
    addDom('#coktail','div','class','espace')
    addDom('.espace','div','class','row')
    addDom('.row','div','class','col-md-4')
    addDomSrc(json.strDrinkThumb,'.col-md-4','img','class','card-img-top imgConctail')
    addDom('.row','div','class','col-md-8')
    addDomText(json.strDrink,'.col-md-8','h1','class','display-3')
    addDomText(json.strInstructions,'.col-md-8','p','class','text-justify')
    addDomText(json.strGlass,'.col-md-8','p','class','text-justify')
    let info=["Ingredient","Measure",json.strIngredient1,json.strMeasure1,json.strIngredient2,json.strMeasure2,json.strIngredient3,json.strMeasure3,
    json.strIngredient4,json.strMeasure4,json.strIngredient5,json.strMeasure5,json.strIngredient6,json.strMeasure6,
    json.strIngredient7,json.strMeasure7,json.strIngredient8,json.strMeasure8,json.strIngredient9,json.strMeasure9]
    addTable(info,'.col-md-8',2,'class','table')
}


function listForModal(data){
    
    const json=data.drinks
    menu.innerHTML=""
    addDom('#menu','div','id','list')
    let i=0
    json.forEach(element => {
        addDomHref(element.strIngredient1,'#list','button','id',"element"+i)
        let ajout= document.getElementById("element"+i)
        ajout.setAttribute("type","button")
        ajout.setAttribute("data-toggle","modal")
        ajout.setAttribute("data-target","#exampleModal")
        ajout.setAttribute("class","text-center font-weight-bold btn btn-light")
        addDomText(element.strIngredient1,"#element"+i,"p")
        i++
    });
}

function modal(data){
    let modalBody=document.getElementsByClassName('modal-body')[0]
    modalBody.innerText=data.ingredients[0].strDescription ?data.ingredients[0].strDescription :"not value"
    let modalTitle=document.getElementsByClassName('modal-title')[0]
    modalTitle.innerText=data.ingredients[0].strIngredient
}


function listCategories(data){
    const json=data.drinks
    addDom('#menu2','div','id','list')
    let i=0
    json.forEach(element => {
        addDomHref(element.strIngredient1,'#list','button','id',"element"+i)
        let ajout= document.getElementById("element"+i)
        ajout.setAttribute("type","button")
        ajout.setAttribute("class","text-center font-weight-bold btn btn-light")
        addDomText(element.strCategory,"#element"+i,"p")
        i++
    });
   
}


function listCategoriesMenu(data){

    const json=data.drinks
    addDom('#menu3','div','id','list')
    let i=0
    menu2.innerHTML=""
    json.forEach(element => {
        addDomHref(element.strDrink,'#list','button','id',"element"+i)
        addDomSrc(element.strDrinkThumb,"#element"+i,"img",'class','card-img-top')
        let ajout= document.getElementById("element"+i)
        ajout.setAttribute("type","button")
        ajout.setAttribute("class","text-center font-weight-bold btn btn-light")
        addDomText(element.strDrink,"#element"+i,"p")
        i++ 
    });

}

function listGlasses(data){
    const json=data.drinks
    addDom('#glasses2','div','id','list')
    let i=0
    json.forEach(element => {
        addDomHref(element.strGlass,'#list','button','id',"element"+i)
        let ajout= document.getElementById("element"+i)
        ajout.setAttribute("type","button")
        ajout.setAttribute("class","text-center font-weight-bold btn btn-light")
        addDomText(element.strGlass,"#element"+i,"p")
        i++
    });
   
}


function listGlassesMenu(data){
    const json=data.drinks
    addDom('#glasses3','div','id','list')
    let i=0
    json.forEach(element => {
        addDomHref(element.strDrink,'#list','button','id',"element"+i)
        addDomSrc(element.strDrinkThumb,"#element"+i,"img",'class','card-img-top')
        let ajout= document.getElementById("element"+i)
        ajout.setAttribute("type","button")
        ajout.setAttribute("class","text-center font-weight-bold btn btn-light")
        addDomText(element.strDrink,"#element"+i,"p")
        i++ 
    });
}

function listAlcoholic(data){
    const json=data.drinks
    addDom('#alcoholic2','div','id','list')
    let i=0
    json.forEach(element => {
        addDomHref(element.strAlcoholic,'#list','button','id',"element"+i)
        let ajout= document.getElementById("element"+i)
        ajout.setAttribute("type","button")
        ajout.setAttribute("class","text-center font-weight-bold btn btn-light")
        addDomText(element.strAlcoholic,"#element"+i,"p")
        i++
    });
   
}

function listAlcoholicMenu(data){
    const json=data.drinks
    addDom('#alcoholic3','div','id','list')
    let i=0
    json.forEach(element => {
        addDomHref(element.strDrink,'#list','button','id',"element"+i)
        addDomSrc(element.strDrinkThumb,"#element"+i,"img",'class','card-img-top')
        let ajout= document.getElementById("element"+i)
        ajout.setAttribute("type","button")
        ajout.setAttribute("class","text-center font-weight-bold btn btn-light")
        addDomText(element.strDrink,"#element"+i,"p")
        i++ 
    });
}