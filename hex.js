const hex=[0,1,2,3,4,5,6,7,8,9,"A","B", "C", "D", "E", "F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener('click', function(){
    let hexColor="#";
    for(let i=1;i<=6;i++)
    {
        const random=Math.floor(Math.random()*hex.length);
        hexColor+=hex[random];
    }
    document.body.style.backgroundColor=hexColor;
    document.querySelector(".color").textContent=hexColor;
})