
function fun(event){
    event.preventDefault();

    let amount = document.getElementById('amount').value;
    let detail = document.getElementById('detail').value;
    let category = document.getElementById('category').value;

    let bullet = document.getElementById('lists');
    let li = document.createElement('li');

    let deleted = document.createElement('button')
    deleted.textContent = 'Delete'
    deleted.addEventListener('click' , function(){
        bullet.removeChild(li)
    })

    let edited = document.createElement('button')
    edited.textContent='Edit'
    edited.addEventListener('click' , function(){
        bullet.removeChild(li);
        document.getElementById('amount').value = amount;
        document.getElementById('detail').value= detail;
        document.getElementById('category').value = category;

    })

     li.textContent = amount + " " + detail + " " + category;
     li.appendChild(deleted)
     li.appendChild(edited)
     
     bullet.appendChild(li)

     let obj = {amount,detail,category};
     let uniqueid = new Date().getTime();
     let numbers = JSON.stringify(obj)


     localStorage.setItem(uniqueid , numbers)

 }