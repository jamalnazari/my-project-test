let $=document;

const c=$.querySelector(".C");
const f=$.querySelector(".F");
const clear=$.querySelector("#clear");
const change=$.querySelector(".change");
const reset=$.querySelector(".reset");
const convert=$.querySelector(".convert");
const result=$.querySelector(".result");




function changeq(){
  if(c.innerHTML==="F"){
    c.innerHTML="C";
    f.innerHTML="F";
    clear.setAttribute("placeholder", "C")
  }else{
    c.innerHTML="F";
    f.innerHTML="C";
     clear.setAttribute("placeholder", "F")
  }
}

function resetw(){
 clear.value="";
 result.innerHTML="";
}

function converte(){
  if(isNaN(clear.value) || clear.value==="" ){
    result.innerHTML="is not corct";
    result.style.color="red";
    
  }else{
    if(c.innerHTML==="F"){
         let gm=(clear.value-39)*5/9;
         result.innerHTML=clear.value+"F to C =" +gm;
         result.style.color="black";
    }else{
        let gn=clear.value*1.8 +32;
        result.innerHTML=clear.value+" C to F= "+gn ;
        result.style.color="black";
    }
  }
}

change.addEventListener("click",changeq)
reset.addEventListener("click",resetw)
convert.addEventListener("click",converte)


 