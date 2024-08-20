let added=document.querySelector(".added");
let input=document.querySelector("#task");
let button=document.querySelector("#add");
let remover;
function add_task(){
    if(input.value !=''){
        let div =document.createElement("div");
        div.setAttribute("class","added_task");
        let div2=document.createElement("button");
        let task=document.createElement("input");
        let image=document.createElement('i')
        let check=document.createElement("input");
        div2.setAttribute('class','remove');
        check.setAttribute("type","checkbox");
        check.setAttribute("id","check");
        image.setAttribute("class","fa-solid fa-minus")
        task.setAttribute("class","task");
        task.setAttribute("disabled","disabled");
        div.style.cssText="display:flex ; gap:10px; align-items:center;" ;
        div2.style.cssText="height:30px; outline:none;border:none;width:30px;display:flex; justify-content:center;align-items:center; border-radius:50%; background-color:red;cursor:pointer;";
        // task.value=input.value;
        localStorage.setItem("data",input.value);
        task.value=localStorage.getItem("data");
        div.appendChild(check);
        div.appendChild(task);
        div2.appendChild(image);
        div.appendChild(div2);
        added.appendChild(div);
        setTimeout(()=>{
            input.value='';
        },1)
        remover=document.querySelectorAll('.remove');
        remover.forEach((box)=>{
            box.addEventListener('click',()=>{
                box.parentElement.remove();
            })
        })
        
    }
}
button.addEventListener('click',add_task);


