let questionContainer = document.querySelector("#question");
let optionContainer = document.querySelector("#options"); // phele catch karo using queryselector fir dom use karo bharane ka matlab modification kar sakte hai
let b1 = document.querySelector("#next-btn");
let scoretag = document.querySelector("#score");

let a = [];
let index = 0;
let score = 0;

    
async function loadQuestion()
    {
    try 
    {
        let response = await fetch("./quiz.json");
        a = await response.json();
        displayQuestion();

    }
    catch(error)
    {
        console.log(error);
    }

    }
    loadQuestion();
    function displayQuestion()
    {
        let current = a[index];
        questionContainer.textContent = current.question;
        current.options.forEach(
            (element,optionindex) => {
                let newbutton = document.createElement('button');
                newbutton.textContent= element;
                newbutton.classList.add("option-btn");
                newbutton.addEventListener("click",
                    ()=>
                    {
                        selectAnswer(optionindex);

                    }
                );
                optionContainer.appendChild(newbutton);
            
        }
    );
    }
    function selectAnswer(selectedindex)
    {
        let current =a[index];
        let buttonArray = document.querySelectorAll(".option-btn")

        buttonArray.forEach(
            (button,buttonindex)=>
            {
                if(current.correct===buttonindex)
                {
                    button.style.backgroundColor="green";
                }
                else 
                {
                    button.style.backgroundColor="red";

                }
                button.disabled = true;
            }
            
        );
        if (selectedindex===current.correct)
        {
            score++;
            scoretag.textContent= `score : ${score}`;
        }
    }
    b1.addEventListener("click",
        ()=>
        {
            index++;
            if(index<a.length)
            {
                optionContainer.innerHTML= "";
                displayQuestion();
            }
            else{
                questionContainer.textContent = "quiz completed";
                optionscontainer.innerHTML = "";
                b1.style.display = "none";
                scoretag.textContent =  `Final score : ${score}/ ${a.length}`;
            }
        }
    );