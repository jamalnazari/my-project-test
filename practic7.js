const $=document;
const inpelem=$.querySelector('#inp');
const btnelem=$.querySelector('#btn1');
const divelem3=$.querySelector('#div3');
const pelem=$.querySelector('#pelem');

let arry=[];




function addtext(){
    let inpvalue=inpelem.value;
     if(inpvalue===""){
        pelem.innerHTML='موردی را تایپ کنید ' 
        return // باع ث میشود تا دی آی وی خالی به محتو اضافه نشود 
    }else{
        pelem.innerHTML=''
    }

    
    let newtext={
        id:arry.length+1,
        title:inpvalue,
        complete:false,
    }
    

   
    arry.push(newtext)
    save(arry)
    gener(arry)

}
function save(varry){
  localStorage.setItem('asd' , JSON.stringify(varry))
}
function gener(varry){
   divelem3.innerHTML=""
    varry.forEach(function(todo, index){
          
          let dive=document.createElement('div');
          dive.className='ko';
          let pe=document.createElement('p');
          pe.className='kf'
          pe.innerHTML="x"
          dive.innerHTML=todo.title
          divelem3.append(dive)
          dive.append(pe)
          inpelem.value=""

          pe.addEventListener('click' , function(){
            arry.splice(index,1)
            save(arry)
            gener(arry)
            
          })
    })



}
    inpelem.addEventListener('keydown' , function(event){
        if(event.key==='Enter'){
            pelem.innerHTML=""
            addtext()
        }
    })
window.addEventListener('load' , function(){
    const save=localStorage.getItem('asd');
     if(save){
        arry=JSON.parse(save)
        gener(arry)
     }
})


btnelem.addEventListener('click' , addtext)
