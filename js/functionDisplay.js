export function addTable(data,whereAdd,nbCologne,idOrClass=null,nameIdOrClass=null){
    
    
    
    let div=document.querySelector(whereAdd);
    let element=document.createElement('table');
    choiseIdOrClass(element,idOrClass,nameIdOrClass)
    let j=0;
    let debut="<thead><tr>"
    let th=""

    for(let i=0;i<nbCologne;i++){
        
        th=th+" <th>"+data[j]+"</th>"
        j++;
    } 
               
    let milieu="</tr></thead><tbody>"
    let td=""
    
    while(data[j]!=null){
        td=td+"<tr>"
        for(let i=0;i<nbCologne;i++){
            td=td+" <td>"+data[j]+"</td>"
            j++;
        }   
        td=td+"</tr>"
    } 
    let fin="</tbody><table>"
    element.innerHTML=debut+th+milieu+td+fin
    div.appendChild(element)
}




export function addDom(whereAdd,typeBalise,idOrClass =null ,nameIdOrClass = null){

    let div=document.querySelector(whereAdd);
    let element=document.createElement(typeBalise);
    choiseIdOrClass(element,idOrClass,nameIdOrClass)
    div.appendChild(element)
}

export function addDomText(data,whereAdd,typeBalise,idOrClass =null ,nameIdOrClass = null){

    let div=document.querySelector(whereAdd);
    let element=document.createElement(typeBalise);
    choiseIdOrClass(element,idOrClass,nameIdOrClass)
    element.textContent=data
    div.appendChild(element)
}




export function addDomSrc(data,whereAdd,typeBalise,idOrClass =null ,nameIdOrClass = null){
    let div=document.querySelector(whereAdd);
    let element=document.createElement(typeBalise);
    choiseIdOrClass(element,idOrClass,nameIdOrClass)
    element.src=data
    div.appendChild(element)
}

export function addDomHref(data,whereAdd,typeBalise,idOrClass =null ,nameIdOrClass = null){
    let div=document.querySelector(whereAdd);
    let element=document.createElement(typeBalise);
    choiseIdOrClass(element,idOrClass,nameIdOrClass)
    element.href=data
    div.appendChild(element)
}

function choiseIdOrClass(element,idOrClass=null,nameIdOrClass=null){

    if(idOrClass==='id'){
        return element.id=nameIdOrClass;
    }else if(idOrClass==='class') {
        return element.classList=nameIdOrClass;
    }
}

export function hideBalise(args,notHide){
    args.forEach(element => {
        if(notHide === element){
            element.style.display="block"
           
        }else{
            element.style.display="none"
        }
        element.innerHTML=""
    });
    
}