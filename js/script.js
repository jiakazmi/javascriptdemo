const element = document.getElementById("currentYear");
const cYear= new Date();//cYear is object of Date() class

element.innerHTML=cYear.getFullYear();