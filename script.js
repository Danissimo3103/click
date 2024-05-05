let input2 = document.createElement("input");
    input2.id="input2";
    input2.setAttribute("placeholder", "Звание")
function work1(){
    let input = document.getElementById("entersmth");
    let name = input.value;
    let text = document.createElement("h2");
    text.innerHTML = "Приветсвуем Вас, " + name + " в WarChat! Для изучения дальнейших приказаний, введите свое звание!";
    let box = document.getElementById("box");
    box.appendChild(text);

    box.appendChild(input2);

    let btn2 = document.createElement("a");
    btn2.id="btn2";
    btn2.setAttribute("onclick", "work2()")
    btn2.innerHTML="Продолжить";
    box.appendChild(btn2);
}

function work2(){
    let zvanie = input2.value;
    let text2 = document.createElement("h2");
    text2.innerHTML = "Принято! " + zvanie + ", выдвигайтесь на гитхаб и создайте ссылку вашему сайту!";
    box.appendChild(text2);

}