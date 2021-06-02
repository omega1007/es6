import {firstName, lastName, year, info} from './profile.js'


// console.log(firstName,lastName);


function setName(element){
	element.innerText = `输出的结果为： firstName is ${firstName}, lastName is ${lastName}`;
}
setName(document.getElementById('showCont'));

//如果要在html中直接调用函数就要export
// export {setName}

console.log(info("LiLei", "Li@jzlzj.com"));
