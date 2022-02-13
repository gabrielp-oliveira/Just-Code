
// fetch('https://api.github.com/search/users?q=gabrielp-oliveira')
//     .then(resp => resp.text())
//     .then(html => console.log(html))

function getUsers(e){
    if(e.value.trim() != '' && e.value.length >= 4){

        fetch(`https://api.github.com/search/users?q=${e.value}`)
            .then(html => html.json().then((data) => {
                const list = document.querySelector('#listUsers')
                while (list.firstChild) {
                    list.removeChild(list.firstChild);
                  }
                  
                data.items.forEach(element => {
                    const container = document.createElement('div')
                    container.setAttribute('info', element.login )
                    container.addEventListener('click', () => {
                        eventClick(element.login, element.subscriptions_url)
                    })
                    
                    const image = document.createElement('img')
                    image.style.height = '32px'
                    image.style.width = '32px'
                    image.src = element.avatar_url
                    container.append(image)
                    list.append(container)
                    
                });
            }))
    }

}
function eventClick(ev, apiUrl){
    const url = `https://ghchart.rshah.org/${ev}`
    const image = document.createElement('img')
    image.src = url
    const container = document.querySelector('#graphResult')
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.append(image)

    fetch(apiUrl)
    .then((a) => a.json())
    .then((a) => console.log(a))

}