//RETRIEVES THE INPUT OBJECT FROM THE DOM
const inputField = document.getElementById("input");

const bigTitle = document.getElementById("big-title");

//CHECKS IF THE USER ALREADY HAD USED WHAT CAN YOU DO
let check = 0;

//EVENT : PRESS DOWN A KEY
inputField.addEventListener("keydown", function(e)
    {
        //CHECKS IF THE KEY PRESSED IS ENTER
        if(e.code == "Enter")
        {
            if(inputField.value != "")
            {
                let input = inputField.value; //STORES THE VALUE OF THE FIELD INTO A VARIABLE
                inputField.value = "";  //RESETS THE FIELD TO AN EMPTY STRING
                output(input); //LINE 35
            }
        }
    })

function submit()
{
    if(inputField.value != "")
    {
        let input = inputField.value; //STORES THE VALUE OF THE FIELD INTO A VARIABLE
        inputField.value = "";  //RESETS THE FIELD TO AN EMPTY STRING
        output(input); //LINE 35
    }
}

//MAIN PROCESS FUNCTION
function output(input)
{
    let answer;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi,"").trim(); //REMOVES TEXT SPACES, NON WORD CHARACTERS, DIGITS AND PUT IT IN LOWER CASE

        //REGEX SEARCHES
    text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/ pls/g, "")
    .replace(/pls /g, "")


    if (text.startsWith("what is my iq") || text.startsWith("give me my iq"))
    {
        answer = Math.floor(Math.random() * 151).toString();
    }
    else
    {
        //IF A WORD MATCHES THE INPUT TEXT, STORES AN ANSWER INTO A VARIABLE
        if(compare(triggers, replies, text))
        {
            if (text == "what can you do" || text == "what you can do")
            {
                check = true;
            }
            answer = compare(triggers, replies, text);
        }
        else
        {
            answer = alternatives[Math.floor(Math.random() * alternatives.length)];
        }
    }


    updateBigText();
    addChat(input, answer); //DOM UPDATE
}

//ITERATES THROUGH TWO ARRAYS TO SEARCH FOR A MATCH BETWEEN THE INPUT AND THE POSSIBLE ANSWER
function compare(triggersArray, repliesArray, text)
{
    let answer;

    for(let x = 0; x < triggersArray.length; x++)
    {
        for(let y = 0; y < repliesArray.length; y++)
        {
            if(triggersArray[x][y] == text)
            {
                answer= repliesArray[x][Math.floor(Math.random() * repliesArray[x].length)]; //IF THERE IS A MATCH, WE SELECT A RANDOM ANSWER IN THE REPLY ARRAY
            }
        }
    }
    return answer;
}

//DISPLAY ANOTHER FADED MESSAGE
function updateBigText()
{
    if (check && bigTitle.innerHTML != "Have fun!")
    {
        bigTitle.style.opacity = 0;
        setTimeout(() => {bigTitle.innerHTML = "Have fun!"; bigTitle.style.opacity = 1;}, 1000);
    }
}

function addChat(input, answer) 
{
    //RETRIEVES THE MAIN DIV WHERE THE MESSAGES WILL BE DISPLAYED
    const mainDiv = document.getElementById("answer-box");

    //USER DIV

    //CREATES A DIV, CHANGES THE ID AND THE TEXTCONTENT 
    let userDiv = document.createElement("div");
    userDiv.id = "user-input";
    userDiv.innerHTML = `<img class="user-img" src="img/jl.png"> <span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv); //MAKES THE USER DIV A CHILD OF THE MAIN DIV
  
    //BOT DIV

    //SAME FOR BOT DIV
    let botDiv = document.createElement("div");
    botDiv.id = "bot-response";

    setTimeout(() =>
    {
            botDiv.innerHTML = `<span id="bot-response">Typing...</span> <img class="bot-img" src="img/bot.png">`;       
    }, 1000)

    mainDiv.appendChild(botDiv);

    //RP DELAYED ANSWER
    setTimeout(() =>
    {
        if (answer.startsWith("img/"))
        {
            botDiv.innerHTML = `<img class="gif-response" src="${answer}"> <img class="bot-img" src="img/bot.png">`;
        }
        else if (answer.startsWith("<p>A lot of things:"))
        {
            botDiv.innerHTML = `<span class="bot-response-help">${answer}</span> <img class="bot-img" src="img/bot.png">`;
        }
        else
        {
            botDiv.innerHTML = `<span id="bot-response">${answer}</span> <img class="bot-img" src="img/bot.png">`;
            speak(answer); //speak.js
        }
    }, 2000);
}

//CLEARS THE MESSAGES
function resetThread()
{
    mainDiv = document.querySelector("#answer-box");
    while ( mainDiv.firstChild ) mainDiv.removeChild(mainDiv.firstChild);
}


/*
REGEX CHARS:
g : global search
i : insensitive
\s : spaces
\d : digits
\w : non word chars
*/