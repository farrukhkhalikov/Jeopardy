// Puts score onto page in scoreboard div
let score = 0;
let answers = ''
let playerAnswer = ""
$('.scoreboard').html(score)
function checkForAnswer(points){
    if(playerAnswer === answers){
        $('.scoreboard').html(score += points)
        $('.comment').html('That is the correct answer');        
    } else {
        $('.scoreboard').html(score -= points)
        $('.comment').html('That is the incorrect answer');       
    } 
};

// displays question
$('.his-100').one('click', () => {
    $('.questions').html('Ulysses S. Grant appears on the front of which denomination of US. currency');
    $('.answerA').html('$50 bill');
    $('.answerB').html('$20 bill');
    $('.answerC').html('$5 bill');
    //$(event.target).off();
    $(event.target).css( "color", "red");
    answers = "A"
    // correct or incorrect answers
    $('#button-A').on('click', () => {
        playerAnswer = "A"
        checkForAnswer(100)
        $('#button-B').off()
        $('#button-C').off()
        $(event.target).off()
        })

    $('#button-B').on('click', () => {
        playerAnswer = "B"
       checkForAnswer(100)
        $('#button-A').off()
        $('#button-C').off()
        $(event.target).off()
    })

    $('#button-C').on('click', () => {
        playerAnswer = "C"
        checkForAnswer(100)
        $('#button-A').off()
        $('#button-B').off()
        $(event.target).off()
    });
    
})

// displays question
$('.his-200').one('click', () => {
    $('.questions').html('Which president, the first to receive a Secret Service code name, was called "General," even though he was only a captain in World War I?');
    $('.answerA').html('Abrham Lincoln');
    $('.answerB').html('Harry Truman');
    $('.answerC').html('Theodore Roosevelt');
    $(event.target).css( "color", "red");
    answers = "B"
    // correct or incorrect answers
    $('#button-B').on('click', () => {
        playerAnswer = "B"
        checkForAnswer(200)
        $('#button-A').off()
        $('#button-C').off()
        $(event.target).off()
        })

    $('#button-A').on('click', () => {
        playerAnswer = "A"
        checkForAnswer(200)
        $('#button-B').off()
        $('#button-C').off()
        $(event.target).off()
    })

    $('#button-C').on('click', () => {
        playerAnswer = "C"
        checkForAnswer(200)
        $('#button-A').off()
        $('#button-B').off()
        $(event.target).off()
    });
})

