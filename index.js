 var anyCars  = document.querySelectorAll(".cars")
 for(var i = 0 ; i < anyCars.length ; i++){
 anyCars[i].addEventListener("click",function(){
     this.classList.toggle("baka-baka")

    })
}
document.addEventListener("keypress",function(e){
    if (e.key === "t"){
        document.querySelector(".content-center").innerHTML = "<h1><em>I am Volodymyr Goloida</em><p> web developer,in next year i will be a full stack developer</p> <h1>"
    }


})
document.querySelector(".btn").addEventListener("click",function () {
    document.querySelector(".content-center").innerHTML = "<h1><em>I am Volodymyr Goloida</em><p> web developer,in next year i will be a full stack developer</p> <h1>"

})
