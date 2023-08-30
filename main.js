function fun(event){
    event.preventDefault();

    let amount = document.getElementById('amount').value;
    let detail = document.getElementById('detail').value;
    let category = document.getElementById('category').value;

    let bullet = document.getElementById('lists');
    let li = document.createElement('li');
//Make a delete button with functionality
    let deleted = document.createElement('button')
    deleted.style.marginLeft = '10px';
    deleted.textContent = 'Delete'
    deleted.addEventListener('click' , function(){
        bullet.removeChild(li)
    })
//make a edit button with edit functionality
    let editbtn = document.createElement('button')
    editbtn.textContent='Edit'
    editbtn.style.marginLeft = '10px';
    editbtn.addEventListener('click' , function(){
        bullet.removeChild(li);
        document.getElementById('amount').value = amount;
        document.getElementById('detail').value= detail;
        document.getElementById('category').value = category;

    })


     li.textContent = amount + " " + detail + " " + category;
     li.appendChild(deleted)
     li.appendChild(editbtn)
     
     bullet.appendChild(li)

     let obj = {amount,detail,category};
     let uniqueid = new Date().getTime();
     let numbers = JSON.stringify(obj)


     localStorage.setItem(uniqueid , numbers)

 }

 document.getElementById('category','detail','expense').addEventListener('keyup',function(event){
    if(event.key === 'Enter'){
        fun(event)
    }
})