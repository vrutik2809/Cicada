let cat;
if(localStorage.getItem("Catagory") == "Sports"){
    cat = 21;
}
else if(localStorage.getItem("Catagory") == "Science: Computers"){
    cat = 18;
}
else if(localStorage.getItem("Catagory") == "Animals"){
    cat = 27;
}
else if(localStorage.getItem("Catagory") == "Art"){
    cat = 25;
}
else if(localStorage.getItem("Catagory") == "Entertainment: Video Games"){
    cat = 15;
}
let noq = localStorage.getItem("NumberOfQuestions");
let level = localStorage.getItem("Level");
let questions = [];
let options = [];
let ans = [];
let url = `https://opentdb.com/api.php?amount=${noq}&category=${cat}&difficulty=${level}&type=multiple`;
fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    for(let i = 0;i < data.results.length;i++){
        questions.push(data.results[i].question);
        let arr = new Array(data.results[i].correct_answer,data.results[i].incorrect_answers[0],data.results[i].incorrect_answers[1],data.results[i].incorrect_answers[2]);
        ans[i] = arr[0];
        arr.sort(() => Math.random() - 0.5);
        // console.log(arr);
        options.push(arr);
    }
    let next = document.getElementById("next");
    let submit = document.getElementById("submit");
    let itr = 0;
    document.getElementById("q1").innerHTML = questions[itr];
    document.getElementById("Q1_1").innerHTML = options[itr][0];
    document.getElementById("Q1_2").innerHTML = options[itr][1];
    document.getElementById("Q1_3").innerHTML = options[itr][2];
    document.getElementById("Q1_4").innerHTML = options[itr][3];
    itr++;
    next.addEventListener("click",()=>{
        document.getElementById("option1").style.border = "";
        document.getElementById("option2").style.border = "";
        document.getElementById("option3").style.border = "";
        document.getElementById("option4").style.border = "";
        document.getElementById("q1").innerHTML = questions[itr];
        document.getElementById("Q1_1").innerHTML = options[itr][0];
        document.getElementById("Q1_2").innerHTML = options[itr][1];
        document.getElementById("Q1_3").innerHTML = options[itr][2];
        document.getElementById("Q1_4").innerHTML = options[itr][3];
        itr++;
        if(itr == noq){
            next.disabled = true;
        }
        document.getElementById("q1_1").checked = false;
        document.getElementById("q1_2").checked = false;
        document.getElementById("q1_3").checked = false;
        document.getElementById("q1_4").checked = false;
    });
    submit.addEventListener("click",()=>{
        console.log("hii");
        let arr = [];
        let index;
        for(let i = 0;i < 4;i++){
            arr.push(options[itr-1][i]);
            if(arr[i] == ans[itr-1]){
                index = i;
            }
        }
        if(index === 0){
            document.getElementById("option1").style.border = "3px solid green";
            document.getElementById("option2").style.border = "3px solid red";
            document.getElementById("option3").style.border = "3px solid red";
            document.getElementById("option4").style.border = "3px solid red";
        }
        else if(index === 1){
            document.getElementById("option1").style.border = "3px solid red";
            document.getElementById("option2").style.border = "3px solid green";
            document.getElementById("option3").style.border = "3px solid red";
            document.getElementById("option4").style.border = "3px solid red";
        }
        else if(index === 2){
            document.getElementById("option1").style.border = "3px solid red";
            document.getElementById("option2").style.border = "3px solid red";
            document.getElementById("option3").style.border = "3px solid green";
            document.getElementById("option4").style.border = "3px solid red";
        }
        else{
            document.getElementById("option1").style.border = "3px solid red";
            document.getElementById("option2").style.border = "3px solid red";
            document.getElementById("option3").style.border = "3px solid red";
            document.getElementById("option4").style.border = "3px solid green";
        }
    }) 
})
