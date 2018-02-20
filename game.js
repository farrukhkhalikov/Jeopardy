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

$('.his-600').one('click', () => {
    $('.questions').html('Which company was purchased by eBay in 2002 to replace Billpoint as the online auction sites preferred payment method?');
    $('.answerA').html('Amazon');
    $('.answerB').html('E-money');
    $('.answerC').html('PayPal');
    $(event.target).css("color", "red");
    answers = "C"
    // correct or incorrect answers
    answerButtons(600)
})

$('.geo-100').one('click', () => {
    $('.questions').html('Which U.S. capital cities have rhyming names?');
    $('.answerA').html('Austin - Boston');
    $('.answerB').html('Atlanta - Sacramento');
    $('.answerC').html('Anchorage - Des-Moines');
    $(event.target).css("color", "red");
    answers = "A"
    // correct or incorrect answers
    answerButtons(600)
})

