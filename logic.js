//selector
console.log("Hii");
document.getElementById("baudio").setAttribute("src","song.mp3");
document.getElementById("baudio").volume = 0.7;
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
