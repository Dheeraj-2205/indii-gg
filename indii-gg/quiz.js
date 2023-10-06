const arr = [
    {
        id: 1,
        question: "What is the theme of ‘World Heart Day 2023’?",

        option1: "Use Heart, Know Heart",
        option2: "Prevent Heart Diseases",
        option3: "Exercise Daily",
        option4: "Healthy Food Habits",

        correct: 1
    },

    {
        id: 2,
        question: "‘Bharat Drone Shakti exhibition 2023’ was inaugurated in which state/UT?",

        option1: "Rajasthan",
        option2: "Punjab",
        option3: "Uttar Pradesh",
        option4: "Assam",

        correct: 3
    },
    {
        id: 3,
        question: " ‘Dadasaheb Phalke Lifetime Achievement Award’ was recently conferred to which actor?",

        option1: "Waheeda Rehman",
        option2: "Shabana Azmi",
        option3: "Madhubala",
        option4: "Nutan",

        correct: 1
    },
    {
        id: 4,
        question: "What is the rank of India in the ‘Global Innovation Index 2023’?",

        option1: "30",
        option2: "50",
        option3: "40",
        option4: "70",

        correct: 3
    },
    {
        id: 5,
        question: "Which institution released a report titled ‘India Ageing Report 2023’?",

        option1: "NSO",
        option2: "UNFPA",
        option3: "World Bank",
        option4: "NITI Aayog",

        correct: 2
    }
]
let index = 0;
let ques = document.querySelector(".question-2");
let quesNo = document.querySelector(".quesNo");
let option = document.getElementsByName("option-1");
let right = 0;
let wrong = 0
const loadQuestion = () => {
    if(index ===  arr.length){
        return endQuiz()
    }
    resetFunction();
    let data = arr[index];
    
    quesNo.innerHTML = `Question ${data.id} / ${arr.length} `
    ques.innerHTML = data.question
    option[0].nextElementSibling.innerHTML = data.option1
    option[1].nextElementSibling.innerText = data.option2
    option[2].nextElementSibling.innerText = data.option3
    option[3].nextElementSibling.innerText = data.option4
}

function submitQuiz(){
    let answer = checkedOption();
    let data = arr[index];

        if(answer == data.correct){
            
            right++;
        }else{
            wrong++;
            // option[data.correct +1].nextElementSibling.style.backgroundColor = "hsl(120, 100%, 75%)"
        }
    
    index++;
    loadQuestion();
}

function checkedOption(){
    for (let i = 0; i < option.length; i++) {
        console.log(option);
        if (option[i].checked) {
            return option[i].value;
        }
    }
    return null; 
}

function resetFunction(){
    for (let i = 0; i < option.length; i++) {
        option[i].checked = false
    } 
}

function endQuiz(){
    let box = document.querySelector("#container-2");
    box.classList.toggle("classBox")
    if(right == arr.length){
        box.innerHTML = `

         <div>
        <h2>Congragulation You answered all the questions correctly</h2>
        <h3>Total Score :  ${right} / ${arr.length}</h3>
        </div>
        
        `
    }else{

        box.innerHTML = `
        <div>
            <h1>Thank You For Playing</h1>
            <h2>Total Score : ${right} / ${arr.length}</h2>
        </div>
        
        `
    }

}

function previous(){
    index--
    loadQuestion()
}
function Next(){
    if(index < arr.length){
        index++
    };
    loadQuestion();
}
loadQuestion()