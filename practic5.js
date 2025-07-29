
const ultag=document.getElementById('ul')
const btn=document.getElementById("btn");
const btn2=document.getElementById("btn2")
btn.addEventListener('click' , function(){
  window.scrollTo(0,0)
})
btn2.addEventListener('click' , function(){
  window.scrollBy(100,100)
})

document.addEventListener('scroll' , function(){
 
  if(document.documentElement.scrollTop>0){
    ultag.classList.add("backg")
  }else{
    ultag.classList.remove("backg")
  }
})
