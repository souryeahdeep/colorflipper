const colors=["#4BFC03", "#FC2F03", "rgb(75,232,42)", "pink", "yellow", "black", "purple", "#e8cc07"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click', function(){
    const random=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[random];
    // document.querySelector(".btn").style.backgroundColor=colors[random];
    if(random==5){
        document.querySelector(".btn").style.color="white";
    }

    document.querySelector(".color").innerHTML= colors[random];
})
