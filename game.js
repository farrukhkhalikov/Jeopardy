// Puts score onto page in scoreboard div
let score = 0;
let answers = ''
let playerAnswer = ""
$('.scoreboard').html(score)

function checkForAnswer(points) {
    if (playerAnswer === answers) {
        $('.scoreboard').html(score += points)
        $('.comment').html('That is the correct answer');
    } else {
        $('.scoreboard').html(score -= points)
        $('.comment').html('That is the incorrect answer');
    }
}
function answerButtons(points) {
    $('#button-A').on('click', () => {
        playerAnswer = "A"
        checkForAnswer(points)
        $('#button-B').off()
        $('#button-C').off()
        $(event.target).off()
    })

    $('#button-B').on('click', () => {
        playerAnswer = "B"
        checkForAnswer(points)
        $('#button-A').off()
        $('#button-C').off()
        $(event.target).off()
    })

    $('#button-C').on('click', () => {
        playerAnswer = "C"
        checkForAnswer(points)
        $('#button-A').off()
        $('#button-B').off()
        $(event.target).off()
    });

}
// displays question
$('.his-100').one('click', () => {
    $('.questions').html('Ulysses S. Grant appears on the front of which denomination of US. currency');
    $('.answerA').html('$50 bill');
    $('.answerB').html('$20 bill');
    $('.answerC').html('$5 bill');
    //$(event.target).off();
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(100);

})

// displays question
$('.his-200').one('click', () => {
    $('.questions').html('Which president, the first to receive a Secret Service code name, was called "General," even though he was only a captain in World War I?');
    $('.answerA').html('Abrham Lincoln');
    $('.answerB').html('Harry Truman');
    $('.answerC').html('Theodore Roosevelt');
    $(event.target).css("color", "red");
    answers = "B"
    // correct or incorrect answers
    answerButtons(200)
})


$('.his-300').one('click', () => {
    $('.questions').html('In the 1984 vice presidential debates, who was George H.W. Bushs opponent ? ');
    $('.answerA').html('Geraldine Ferraro');
    $('.answerB').html('Curtis Jackson');
    $('.answerC').html('Mike Tyson');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(300)
})

$('.his-400').one('click', () => {
    $('.questions').html('Who renamed the presidential yacht "Honey Fritz," in honor of his grandfather, a former Boston mayor?');
    $('.answerA').html('Geraldine Ferraro');
    $('.answerB').html('Tom Ford');
    $('.answerC').html('John F. Kennedy');
    $(event.target).css("color", "red");
    answers = "C"
    // correct or incorrect answers
    answerButtons(400)
})

$('.his-500').one('click', () => {
    $('.questions').html('Which Kentucky-born U.S. president is honored in the Wrestling Hall of Fame?');
    $('.answerA').html('Abraham Lincoln');
    $('.answerB').html('Henry Taft');
    $('.answerC').html('F.D.Roosevelt');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(500)
})

$('.geo-100').one('click', () => {
    $('.questions').html('Which U.S. capital cities have rhyming names?');
    $('.answerA').html('Austin - Boston');
    $('.answerB').html('Atlanta - Sacramento');
    $('.answerC').html('Anchorage - Des-Moines');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(100)
})

$('.geo-200').one('click', () => {
    $('.questions').html('With over 35 million residents, what is the most populous city in the world?');
    $('.answerA').html('Los Angeles');
    $('.answerB').html('New York');
    $('.answerC').html('Tokyo');
    $(event.target).css("color", "red");
    answers = "C"
    // correct or incorrect answers
    answerButtons(200)
})

$('.geo-300').one('click', () => {
    $('.questions').html('Which Nordic country was first to give women the right to vote, in 1906?');
    $('.answerA').html('Norway');
    $('.answerB').html('Finland');
    $('.answerC').html('Iceland');
    $(event.target).css("color", "red");
    answers = "B"
    // correct or incorrect answers
    answerButtons(300)
})

$('.geo-400').one('click', () => {
    $('.questions').html('What is the only sea on Earth with no coastline?');
    $('.answerA').html('Sargasso Sea');
    $('.answerB').html('Red Sea');
    $('.answerC').html('Dead Sea');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(400)
})

$('.geo-500').one('click', () => {
    $('.questions').html('Which is the most abundant metal in the earth crust?');
    $('.answerA').html('iron');
    $('.answerB').html('gold');
    $('.answerC').html('Aluminum');
    $(event.target).css("color", "red");
    answers = "C"
    // correct or incorrect answers
    answerButtons(500)
})

$('.ent-100').one('click', () => {
    $('.questions').html('Which actor appeared in American Graffiti before starring in Star Wars?');
    $('.answerA').html('Harrison Ford');
    $('.answerB').html('Henry Ford');
    $('.answerC').html('Jack London');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(100)
})
$('.ent-200').one('click', () => {
    $('.questions').html('Which chart-topping songstress lent her voice to Smurfette in 2011 The Smurfs movie?');
    $('.answerA').html('Katy Perry');
    $('.answerB').html('Pink');
    $('.answerC').html('Beyonce');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(200)
})
$('.ent-300').one('click', () => {
    $('.questions').html('Which two actors, who play Sherlock Holmes on TV, starred on the London stage together in 2013 in a production of Frankenstein?');
    $('.answerA').html('Harrison Ford and Eminem');
    $('.answerB').html('Michael Owen and David Beckham');
    $('.answerC').html('Benedict Cumberbatch and Johnny Lee Miller ');
    $(event.target).css("color", "red");
    answers = "C"
    // correct or incorrect answers
    answerButtons(300)
})
$('.ent-400').one('click', () => {
    $('.questions').html('BB-8 is an astromech droid from what film?');
    $('.answerA').html('Avatar');
    $('.answerB').html('Star Wars ');
    $('.answerC').html('Stargate');
    $(event.target).css("color", "red");
    answers = "B"
    // correct or incorrect answers
    answerButtons(400)
})
$('.ent-500').one('click', () => {
    $('.questions').html('Which actress played Katniss Everdeen in "The Hunger Games"?');
    $('.answerA').html('Jennifer Lawrence ');
    $('.answerB').html('Jennifer Aniston');
    $('.answerC').html('Keisha');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(500)
})
$('.food-100').one('click', () => {
    $('.questions').html('What food is the leading source of salmonella poisoning?');
    $('.answerA').html('salmon');
    $('.answerB').html('tilapia');
    $('.answerC').html('chicken');
    $(event.target).css("color", "red");
    answers = "C"
    // correct or incorrect answers
    answerButtons(100)
})
$('.food-200').one('click', () => {
    $('.questions').html('What edible comes in crimmini, morel, oyster and wood ear varieties?');
    $('.answerA').html('mushroom');
    $('.answerB').html('oysters');
    $('.answerC').html('ice-cream');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(200)
})
$('.food-300').one('click', () => {
    $('.questions').html('What uncooked meat is a trichina worm most likely to make a home in?');
    $('.answerA').html('veal');
    $('.answerB').html('pork');
    $('.answerC').html('fish');
    $(event.target).css("color", "red");
    answers = "B"
    // correct or incorrect answers
    answerButtons(300)
})
$('.food-400').one('click', () => {
    $('.questions').html('What baking ingredient, sprayed at high pressure, did the U.S. Air Force replace its toxic paint stripper with?');
    $('.answerA').html('salt');
    $('.answerB').html('ham');
    $('.answerC').html('baking soda');
    $(event.target).css("color", "red");
    answers = "C"
    // correct or incorrect answers
    answerButtons(400)
})
$('.food-500').one('click', () => {
    $('.questions').html('What crystalline salt is frequently used to enhance the flavor to TV dinners?');
    $('.answerA').html('Monosodium glutamate');
    $('.answerB').html('Sea salt');
    $('.answerC').html('baking soda');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(500)
})
$('.sport-100').one('click', () => {
    $('.questions').html('Who was the last professional hockey player to play without a helmet?');
    $('.answerA').html('Malkin');
    $('.answerB').html('Craig MacTavish');
    $('.answerC').html('Sydney Crosby');
    $(event.target).css("color", "red");
    answers = "B"
    // correct or incorrect answers
    answerButtons(100)
})
$('.sport-200').one('click', () => {
    $('.questions').html('What is professional wrestler, John Cena, catch phrase?');
    $('.answerA').html('You cant see me!');
    $('.answerB').html('Sea salt');
    $('.answerC').html('can of coke');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(200)
})
$('.sport-300').one('click', () => {
    $('.questions').html('');
    $('.answerA').html('Monosodium glutamate');
    $('.answerB').html('Sea salt');
    $('.answerC').html('baking soda');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(300)
})
$('.sport-400').one('click', () => {
    $('.questions').html('');
    $('.answerA').html('Monosodium glutamate');
    $('.answerB').html('Sea salt');
    $('.answerC').html('baking soda');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(400)
})
$('.sport-500').one('click', () => {
    $('.questions').html('');
    $('.answerA').html('Monosodium glutamate');
    $('.answerB').html('Sea salt');
    $('.answerC').html('baking soda');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(500)
})



