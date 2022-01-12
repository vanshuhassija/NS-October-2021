const parent=document.getElementById('parent');
const child=document.getElementById('child');
const grandchild=document.getElementById('grandchild');
const body=document.querySelector('body');


body.addEventListener("click",function(e){
    e.preventDefault();
},true)

// Third Argument ---> Should allow Event Capturing

parent.addEventListener('click',function(){
    alert('parent');
},true)

child.addEventListener('click',function(event){
    event.stopPropagation();
    alert('Child');
},true)

grandchild.addEventListener('click',function(event){
    event.stopPropagation();
    alert('Grandchild');
},true)
