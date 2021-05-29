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
let url = `https://opentdb.com/api.php?amount=${noq}&category=${cat}&difficulty=${level}&type=multiple`;
fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    console.log(data.results[0].question)
    for(let i = 0;i < data.results.length;i++){
        questions.push(data.results[i].question);
        options.push(new Array(data.results[i].correct_answer,data.results[i].incorrect_answers[0],data.results[i].incorrect_answers[1],data.results[i].incorrect_answers[2]));
    }
    console.log(questions);
    console.log(options);
    let next = document.getElementById("next");
    let itr = 0;
    document.getElementById("q1").innerHTML = questions[itr];
    document.getElementById("Q1_1").innerHTML = options[itr][0];
    document.getElementById("Q1_2").innerHTML = options[itr][1];
    document.getElementById("Q1_3").innerHTML = options[itr][2];
    document.getElementById("Q1_4").innerHTML = options[itr][3];
    itr++;
    next.addEventListener("click",()=>{
        document.getElementById("q1").innerHTML = questions[itr];
        document.getElementById("Q1_1").innerHTML = options[itr][0];
        document.getElementById("Q1_2").innerHTML = options[itr][1];
        document.getElementById("Q1_3").innerHTML = options[itr][2];
        document.getElementById("Q1_4").innerHTML = options[itr][3];
        itr++;
        if(itr == noq){
            next.disabled = true;
        }
    })
})