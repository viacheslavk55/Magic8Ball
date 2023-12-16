function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:')
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = 'images/Anger.jpg' //Fix later
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
            image = 'images/Yes.jpg' //change ts
            color = 'text-success'
            break
        case 1:
            answer = 'No'
            image = 'images/no.png' //change ts
            color = 'text-danger'
            break
        case 3:
            answer = 'Maybe'
            image = 'images/maybe.jpeg' //change ts
            color = 'text-warning'
            break
        case 4:
            answer = 'Most likely'
            image = 'images/most likely.jpg' //change ts
            color = 'text-warning'
            break
        case 5:
            answer = 'Possibly'
            image = 'images/possibly.webp' //change ts
            color = 'text-muted'
            break
        case 6:
            answer = "Ask something else"
            image = 'images/smthelse.webp' //change ts
            color = 'text-primary'
            break
        case 7:
            answer = 'I dont know'
            image = 'images/idk.jpg' //change ts
            color = 'text-info'
            break
        default:
            answer = 'Respin'
            break
    }

    const responseText = document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = image

}