async function getWord() {
    const pass = await fetch('http://localhost:8080/var')
        .then((reso) => reso.json())
    const req = await fetch("https://random-words5.p.rapidapi.com/getRandom?wordLength=5", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": pass.EX3_X_RAPIDAPI_HOST,
            "x-rapidapi-key": pass.EX3_X_RAPIDAPI_KEY
        }
    })
        .then((resp) => {
            return resp.text()
        })
        .then((txt) => {
            return txt
        })
    return await req
}

let chosedWord = getWord()
let word = []
let attemptList = []
function addLetter(e) {
    const val = e.value
    if (val.trim() == '') {
        return
    }
    const children = document.querySelector('.displayImput').children
    for (let i = 0; i < 5; i++) {
        if (i < 4) {
            children[i + 1].select()
        }
        if (word[i] == undefined || word[i] == '') {
            word[i] = val.toUpperCase()
            children[i].value = val
            break
        }
    };

}
function removeLetter() {
    if (word.length > 0) {
        word.pop()
        document.querySelector('.displayImput').children[word.length].value = ''
    }
}
function handleInput(e, num) {
    const children = document.querySelector('.displayImput').children
    if (e.value.trim() == '') {
        return
    }
    word[num] = e.value
    if (num + 1 < 5) {
        children[num + 1].select()
    }
}
function tryWord() {
    if (word.length < 5) {
        alert('word too small')
        return
    }
    const userTry = word.join('')
    const children = document.querySelector('.displayImput').children
    const attempts = document.querySelector('.attempts')

    chosedWord.then((winningWord) => {
        const cont = document.createElement('div')
        word.forEach((e, i) => {
            const el = document.createElement('div')
            el.className = 'wordLetter'
            if (winningWord.indexOf(userTry[i]) !== -1) {
                el.className = 'wordLetter somePlace'
            }
            if (userTry[i] == winningWord[i]) {
                el.className = 'wordLetter rightPlace'
            }
            if (winningWord.indexOf(userTry[i]) == -1) {
                el.className = 'wordLetter missedWord'
            }
            el.innerHTML = e
            cont.append(el)
        })

        if (winningWord.toUpperCase() == userTry.toUpperCase()) {
            alert('We have a Winner!!')
            for (let i = 0; i < 5; i++) {
                children[i].value = ''
            };
            chosedWord = getWord()
            word = []
            attemptList = []
            children[0].select()
            attempts.append(cont)
            word = []
            for (let i = 0; i < attempts.children.length; i++) {
                attempts.children[i].remove()
            };
            attempts.children[0].remove()
            return
        } else {
            if (attemptList.indexOf(userTry) !== -1) {
                alert('you already tryed.')
                return
            }
            for (let i = 0; i < 5; i++) {
                children[i].value = ''
            };
            attemptList.push(userTry)
            attempts.append(cont)
            word = []
            children[0].select()
        }

    })
}