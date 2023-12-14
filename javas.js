let arrayList = [];
function addList(){
    const input = document.querySelector('.input');
    const dueDate = document.querySelector('.js-todo');
    if(input.value !== "" && dueDate.value !== ""){
        arrayList.push({todo : input.value,duedate : dueDate.value}); 
        let HTMLstring = '';
        for(let i = 0; i < arrayList.length; i++){
            HTMLstring += `<p>${arrayList[i].todo} ${arrayList[i].duedate} <button onclick="delet(${i})">Delete</button></p>`;
        }
        const div = document.querySelector('div');
        div.innerHTML = HTMLstring;
        input.value = "";
        dueDate.value = "";
    }
}
function delet(val){
    arrayList.splice(val,1);
    console.log(arrayList);
    let HTMLstring = '';
    for(let i = 0; i < arrayList.length; i++){
        HTMLstring += `<p>${arrayList[i].todo} ${arrayList[i].duedate} <button onclick="delet(${i})">Delete</button></p>`;
    }
    div = document.querySelector('div');
    div.innerHTML = HTMLstring;
}
