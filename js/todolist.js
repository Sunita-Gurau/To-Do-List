const todoInput = document.getElementById('todo-input');
const CButton = document.getElementById('CButton');
const createButton = document.getElementById('createButton');
const hiddenTask = document.getElementById('hiddenTask');
const blankButton = document.getElementById('blankButton');
const tickButton = document.getElementById('tickButton');
const todos = document.getElementById('todos');
const toDoSection = document.getElementById('toDoSection');




const toDoList = [];


createButton.addEventListener('click',()=>{

    if (todoInput.value === '') {
        alert("You must write something!");
      }
       else {
        const div=document.createElement("div")
        div.classList.add('flex','items-center', 'px-[30px]', 'pb-7');

        const tickBox=document.createElement("img");
        tickBox.setAttribute("src", "images/Untick.png");
        tickBox.setAttribute("class", "tick");


        const para = document.createElement("p");
        para.innerHTML = todoInput.value;
        para.classList.add('text-slate-700', 'pl-3', 'text-lg', 'font-normal', 'leading-[23px]' , 'para');

        div.append(tickBox);
        div.append(para);
        todos.append(div);
        todoInput.value = "";
      }

})


todos.addEventListener('click',(e)=>{
e.target.classList.toggle("tick")
if(e.target.classList.value==="tick"){
    e.target.src="./images/Untick.png";
}
else{
    e.target.src="./images/tick.png";
}
e.target.nextSibling.classList.toggle("line-through");

})




todoInput.addEventListener('click',(e)=>{
    e.stopPropagation();
    CButton.classList.remove('bg-emerald-100');
    CButton.classList.add('bg-emerald-700');
    CButton.classList.remove('disabled');

    })
    
    toDoSection.addEventListener('click',()=>{
    
        CButton.classList.add('bg-emerald-100');
    CButton.classList.remove('bg-emerald-700');
    CButton.classList.add('disabled');
        
        })

