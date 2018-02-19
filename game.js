// Puts score onto page in scoreboard div
let score = 0;
let answers = ''
$('.scoreboard').html(score)

// displays question
$('.his-100').one('click', () => {
    $('.questions').html('Ulysses S. Grant appears on the front of which denomination of US. currency');
    $('.answerA').html('$50 bill');
    $('.answerB').html('$20 bill');
    $('.answerC').html('$5 bill');
    //$(event.target).off();
    $(event.target).css( "color", "red");
    answers = "A"
    let playerAnswer = ""
    // correct or incorrect answers
    $('#button-A').on('click', () => {
        playerAnswer = "A"
        if(playerAnswer === answers){
            $('.scoreboard').html(score += 100)
            $('.comment').html('That is the correct answer');        
        } else {
            $('.scoreboard').html(score -= 100)
            $('.comment').html('That is the incorrect answer');       
        }     
        $(event.target).off()
        })

    $('#button-B').on('click', () => {
        playerAnswer = "B"
        if(playerAnswer === answers){
            $('.scoreboard').html(score += 100)
            $('.comment').html('That is the correct answer');        
        } else {
            $('.scoreboard').html(score -= 100)
            $('.comment').html('That is the incorrect answer');       
        }     
        $(event.target).off()
    })

    $('#button-C').on('click', () => {
        playerAnswer = "C"
        if(playerAnswer === answers){
            $('.scoreboard').html(score += 100)
            $('.comment').html('That is the correct answer');        
        } else {
            $('.scoreboard').html(score -= 100)
            $('.comment').html('That is the incorrect answer');       
        }     
        $(event.target).off()
    });
    
})


// correct or incorrect answers
    // $('#button-A').on('click', () => {
    //     $('.comment').html('That is the correct answer');
    //     $('.scoreboard').html(score += 100)
    //     $(event.target).off()
    //     })

    // $('#button-B').on('click', () => {
    //     $('.comment').html('That is the incorrect answer');
    //     $('.scoreboard').html(score -= 100)
    //     $(event.target).off()
    // })

    // $('#button-C').on('click', () => {
    //     $('.comment').html('That is the incorrect answer');
    //     $('.scoreboard').html(score -= 100)
    //     $(event.target).off()
    // });


// displays question
$('.his-200').on('click', () => {
    $('.questions').html('Which president, the first to receive a Secret Service code name, was called "General," even though he was only a captain in World War I?');
    $('.answerA').html('Abrham Lincoln');
    $('.answerB').html('Harry Truman');
    $('.answerC').html('Theodore Roosevelt');
    $(event.target).off();
    $(event.target).css( "color", "red");
    answers = "B"
    // correct or incorrect answers
    $('#button-B').on('click', () => {
        playerAnswer = "B"
        if(playerAnswer === answers){
            $('.scoreboard').html(score += 100)
            $('.comment').html('That is the correct answer');        
        } else {
            $('.scoreboard').html(score -= 100)
            $('.comment').html('That is the incorrect answer');       
        }     
        $(event.target).off()
        })

    $('#button-A').on('click', () => {
        playerAnswer = "A"
        if(playerAnswer === answers){
            $('.scoreboard').html(score += 100)
            $('.comment').html('That is the correct answer');        
        } else {
            $('.scoreboard').html(score -= 100)
            $('.comment').html('That is the incorrect answer');       
        }     
        $(event.target).off()
    })

    $('#button-C').on('click', () => {
        playerAnswer = "C"
        if(playerAnswer === answers){
            $('.scoreboard').html(score += 100)
            $('.comment').html('That is the correct answer');        
        } else {
            $('.scoreboard').html(score -= 100)
            $('.comment').html('That is the incorrect answer');       
        }     
        $(event.target).off()
    });
})


// correct or incorrect answers
//     $('#button-B').on('click', () => {
//         $('.comment').html('That is the correct answer');
//         $('.scoreboard').html(score += 100)
//         $(event.target).off()
//         })

//     $('#button-A').on('click', () => {
//         $('.comment').html('That is the incorrect answer');
//         $('.scoreboard').html(score -= 100)
//         $(event.target).off()
//     })

//     $('#button-C').on('click', () => {
//         $('.comment').html('That is the incorrect answer');
//         $('.scoreboard').html(score -= 100)
//         $(event.target).off()
//     });
    
