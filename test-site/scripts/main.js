let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    setHeading(myName);
}

function setHeading(someName) {
    // myHeading.textContent = someName + '同学，你好，欢迎访问郑州大学！';
    myHeading.innerHTML = someName + '同学，你好，欢迎访问郑州大学！';
}

let storedName;
if(!(storedName = localStorage.getItem('name'))) {
    setUserName();
} else {
    setHeading(storedName);
}

myButton.onclick = function() {
    setUserName();
}