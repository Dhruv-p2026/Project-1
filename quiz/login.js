    let username = document.querySelector("#username");
    let password = document.querySelector("#password"); // ye dom hai jo box or class ko pakadta hai or hum ism   e queryselector use karte hai
    let form  = document.querySelector(".form");

    form.addEventListener("submit",
        (event)=>

    {  event.preventDefault();
        if(username.value==="" || password.value==="")
        {
            alert("enter the valid detail");
            return;
        }
        if(username.value==="root" && password.value==="1234")
        {
            alert("login succesfull");
            window.location.href="./quiz.html";

        }
        else 
        {
            alert("Doesn't match detail");
        }

    } 
    


    );