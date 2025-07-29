function draged(){
    console.log("draged")
}
function end(){
    console.log("dragend")
}

function draghand(event) {
    console.log('شروع درگ');
    event.dataTransfer.setData('elen', event.target.id); // ذخیره آی‌دی المان درگ شده
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('elen'); // دریافت اطلاعات المان رها شده
    const data2 =document.getElementById(data);
    const div=document.getElementById('div');
    div.append(data2)
    // اینجا می‌توانید عملیات مربوط به رها کردن المان را انجام دهید
}

function over(event) {
    event.preventDefault(); // اجازه رها کردن المان را می‌دهد
}

//dragend>>ondragstart.ondrag.ondragend
//droppend>>ondragEnter.ondragover.ondragleave.ondrop