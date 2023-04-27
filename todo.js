var lists = document.querySelector('.lists')
var input1 = document.getElementById('input1')

var btn1 = document.getElementById('btn1')

btn1.addEventListener("click",function () { 

    var list1 = document.createElement('div')
    list1.classList.add('list1')
    list1.innerText= input1.value

    var del = document.createElement('button')
    del.classList.add('delete')
    del.innerText = '刪除'

    lists.appendChild(list1)
    lists.appendChild(del)
    input1.value = ""

    del.addEventListener("click",function(){

        lists.removeChild(list1);
        lists.removeChild(del);
    })

}
)



