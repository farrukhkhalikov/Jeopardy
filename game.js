// Puts score onto page in scoreboard div
let score = 0;
$('.scoreboard').html(score)

// displays question
$('.his-100').on('click', () => {
    $('.questions').html('Christopher Columbus sailed the ocean blue on this year');
    $('.answerA').html('when is 1492?');
    $('.answerB').html('when is 1266?');
    $('.answerC').html('when is 1345?');
})


// correct or incorrect answers
    $('#button-A').on('click', () => {
        $('.comment').html('That is the correct answer');
        $('.scoreboard').html(score += 100)
        $(event.target).off()
        })

    $('#button-B').on('click', () => {
        $('.comment').html('That is the incorrect answer');
        $('.scoreboard').html(score -= 100)
        $(event.target).off()
    })

    $('#button-C').on('click', () => {
        $('.comment').html('That is the incorrect answer');
        $('.scoreboard').html(score -= 100)
        $(event.target).off()
    });

