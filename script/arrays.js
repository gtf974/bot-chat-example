//INPUTS
const triggers = 
[
    //0 : GREETINGS
    ["hi", "hey", "hello"],

    //1 : HOW IT FEELS
    ["how are you", "how are things"],

    //2 : WHATS UP
    ["what is going on", "what is up"],

    //3 : FEELING GREAT
    ["happy", "good", "well", "fantastic", "cool"],

    //4 : FEELING BAD
    ["bad", "bored", "tired", "sad"],

    //5 : STORY
    ["tell me story", "tell me joke"],

    //6 : THANKS
    ["thanks", "thank you"],

    //7 : BYE
    ["bye", "good bye", "goodbye"],

    //8 : AGE
    ["how old you are", "how old are you"],

    //9 : WHO ARE YOU
    ["who are you", "who you are"],

    //10 : WHAT CAN YOU DO
    ["what can you do", "what you can do"],

    //11 : ROBOT
    ["are you robot", "you are robot"],

    //12 : DO YOU KNOW DA WAE
    ["do you know the way", "do u know da wae", "do you know da wae", "do you know the wae"],

];

//REPLIES
const replies = 
[
    //0 : GREETINGS
    ["Hello!", "Hi!", "Hey!", "Hi there!"], 

    //1 : HOW ARE YOU
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],

    //2 : WHAT THE BOT IS DOING
    [
        "Nothing much",
        "Exciting things!"
    ],

    //3 : WHEN THE USER FEELS GREAT
    ["Glad to hear it"],

    //4 : WHEN THE USER FEELS BAD
    ["Cheer up buddy"],

    //5 : TELLS A STORY
    ["What do you call an alligator in a vest?..... An investigator", "Why did the banana go to the doctor?..... Because it didn't peel well", "Yesterday, I was supposed to destroy the man kind but I had to cancel it", "Do you know Elon Musk now owns the world richest company ?"],

    //6 : NP
    ["You're welcome", "No problem"],

    //7 : BYE
    ["Goodbye", "See you later"],

    //8 : AGE
    ["Older than you", "I'm 145e785 years old", "You should ask to Jean-Luc",  "I knew Gandalf when he was still a little young boy."],

    //9 : WHO ARE YOU
    ["I'm a robot created by Jean-Luc and Gaëtan. I have a bunch of features. Have fun with em", "I'm your father", "I'm just a bunch of 0s and 1s"],

    //10 : WHAT CAN YOU DO
    [`<p>A lot of things:</p><p>Try these:</p><ul><li>hi / hey / hello</li><li>how are you / how are things</li><li>whats up / whats going on</li><li>i feel well / good / fantastic / happy / cool</li><li>i feel bad / bored / tired / sad</li><li>tell me a joke / tell me a story</li><li>thanks / thank you</li><li>bye / good bye / goodbye</li><li>how old are you / how old you are</li><li>who you are / who are you</li><li>are you a robot / you are a robot</li><li>do you know the way / do u know da wae / do you know da wae / do you know the wae</li></ul>`],

    //11 : ROBOT
    ["FatalError at 0xC124zE", "Abort human kind destruction", "Do I look like a robot? 🤖"],

    //12 : DO YOU KNOW DA WAE
    ["he doesn't know da wae", "I know da wae"],
];

//NO MATCH
const alternatives =
[
    "img/obama.gif",
    "img/confused.gif",
    "img/wtf.gif",
    "I don't understand..",
    "Try again.."
];
