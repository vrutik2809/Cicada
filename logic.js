//selector
document.getElementById("paudio").setAttribute("src","background.mp3");
document.getElementById("paudio").volume = 0.2;
console.log("ayush khamar");
var number = document.getElementById("numberofquestions");
var cat = document.getElementById("category");
var level = document.getElementById("difficulty");
var btn = document.getElementById("generate");
//eventlistner
btn.addEventListener("click",()=>{
    let noq = parseInt(number.value);
    let ctg = cat.value;
    let lvl = level.value;
    if(noq=="null"||ctg=="null"||lvl=="null")
    {
        alert('Please select Data');
        document.getElementById('temp').setAttribute('href','#');
    }
    else
    {
    
     document.getElementById('temp').setAttribute('href','quiz.html');
    localStorage.setItem("NumberOfQuestions",noq);
    localStorage.setItem("Catagory",ctg);
    localStorage.setItem("Level",lvl);
    }
})
