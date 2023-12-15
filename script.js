function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:')
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BADIMAGE' //Fix later
    }
    
    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }
    const randomNumber = Math.floor(Math.random()*8)
    let answer, image, color

    switch (randomNumber) {
        case 0:
            answer = 'Yes'
            image = 'yes-image.jpg' //change ts
            color = 'text-success'
            break
        case 1:
            answer = 'No'
            image = 'no-image.jpg' //change ts
            color = 'text-danger'
            break
        case 3:
            answer = 'Maybe'
            image = 'no-image.jpg' //change ts
            color = 'text-secondary'
            break
        case 4:
            answer = 'Most likely'
            image = 'yes-image.jpg' //change ts
            color = 'text-warning'
            break
        case 5:
            answer = 'Possibly'
            image = 'no-image.jpg' //change ts
            color = 'text-muted'
            break
        case 6:
            answer = "Let's go"
            image = 'no-image.jpg' //change ts
            color = 'text-primary'
            break
        case 7:
            answer = 'Keep going'
            image = 'no-image.jpg' //change ts
            color = 'text-info'
            break
        default:
            break
    }

    const responseText = document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = image

}