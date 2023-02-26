const jokes = [
                "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
                "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.",
                "I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.",
                "I cannot believe I got fired from the calendar factory. All I did was take a day off.",
                "My wife just found out I replaced our bed with a trampoline. She hit the ceiling!",
                "I used to think I was indecisive. But now I’m not so sure.",
                "I was addicted to the hokey pokey, but then I turned myself around.",
                "My wife just found out I replaced our bed with a trampoline. She hit the ceiling!",
                "Russian dolls are so full of themselves",
                "Two fish are in a tank. One says, ‘How do you drive this thing?’",
                "Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.",
                "I didn’t think orthopedic shoes would help, but I stand corrected.",
                "It was an emotional wedding. Even the cake was in tiers.",
                "What’s a frog’s favorite type of shoes? Open toad sandals.",
                "Two wifi engineers got married. The reception was fantastic.",
                "Adam & Eve were the first ones to ignore the Apple terms and conditions.",
                "A dung beetle walks into a bar and asks, ‘Is this stool taken?’",
                "A ghost walked into a bar and ordered a shot of vodka. The bartender said, ‘Sorry, we don’t serve spirits here.’"
            ]


let quotes = document.getElementById("quote");
let generateBtn = document.getElementById("generate-btn");

function generate() {
    let randomQuote = Math.floor(Math.random() * jokes.length);
    quotes.innerHTML =
    `
    <h4>"${jokes[randomQuote]}"</h4>
    `
}

generateBtn.addEventListener('click', function() {
    generate();
})
