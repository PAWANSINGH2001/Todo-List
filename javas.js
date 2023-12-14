let arrayList = [];
function addList(){
    const input = document.querySelector('.input');
    const dueDate = document.querySelector('.js-todo');
    if(input.value !== "" && dueDate.value !== ""){
        arrayList.push({todo : input.value,duedate : dueDate.value}); 
        let HTMLstring = '';
        for(let i = 0; i < arrayList.length; i++){
            HTMLstring += `<div>${arrayList[i].todo}</div><div>${arrayList[i].duedate}</div> 
            <button onclick="delet(${i})" class="delete">Delete</button>`;
        }
        const div = document.querySelector('.list');
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
            HTMLstring += `<div>${arrayList[i].todo}</div><div>${arrayList[i].duedate}</div> 
            <button onclick="delet(${i})" class="delete">Delete</button>`;
        }
    div = document.querySelector('.list');
    div.innerHTML = HTMLstring;
}
