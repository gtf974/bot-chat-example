//HAS THE WORK SPEAK THE ANSWER WITH PARAMETERS
function speak(string)
{
    const u = new SpeechSynthesisUtterance();
    u.text = string;
    u.lang = "en-US";
    u.volume = 1; //0-1 interval
    u.rate = 1;
    u.pitch = 1; //0-2 interval
    speechSynthesis.speak(u);
}