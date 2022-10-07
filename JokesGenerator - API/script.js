const allJokes= [
    `"Santa was writing past tense of "I make a mistake"
    Guess what he wrote  🤔?
    "I was made by a mistake 😀"`,
    `"Santa: U Cheated Me.
    Shopkeeper: No, I Sold A Good Radio To U.
    Santa: Radio Label Shows Made In Japan But Radio Says This Is ‘All India Radio! ‘🤣"`,
    `"Interviewer: Just imagine you are on the 3rd floor, it caught fire and how will you escape?
    Santa: its simple. I will stop my imagination!!!🤣🤣"`,
    `"Santa Joined New Job.
    
     1st Day He Worked Till Late Evening On The Computer. Boss Was Happy And Asked What You Did Till Evening.
    
     Santa: Keyboard Alphabets Were Not In Order, So I Made It Alright.🤣🤣"`,
]

let Jokes = document.querySelector("#joke");
let btn = document.querySelector("#jokeBtn");     

btn.addEventListener('click',()=>{
    let randomJokes = Math.floor(Math.random()* allJokes.length)
    Jokes.innerText = allJokes[randomJokes]
})