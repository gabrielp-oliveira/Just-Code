function getUsers(e) {
    if (e.value.trim() != '' && e.value.length >= 4) {

        fetch(`https://api.github.com/search/users?q=${e.value}`)
            .then(html => html.json().then((data) => {
                const list = document.querySelector('#listUsers')
                while (list.firstChild) {
                    list.removeChild(list.firstChild);
                }

                data.items.forEach(element => {

                    const container = document.createElement('div')
                    const login = document.createElement('h3')
                    const profileButton = document.createElement('button')
                    profileButton.addEventListener('click', () => {
                        eventClick(element.login)
                    })
                    profileButton.innerHTML = 'contributions'
                    login.innerHTML = element.login
                    const id = document.createElement('div')
                    id.append(login)
                    container.setAttribute('info', element.login)

                    const image = document.createElement('img')
                    image.style.height = '32px'
                    image.style.width = '32px'
                    image.src = element.avatar_url
                    container.append(image)
                    container.append(id)
                    container.append(profileButton)
                    list.append(container)

                })
            }))
    }

}
function eventClick(ev) {
    const url = `https://ghchart.rshah.org/${ev}`
    const image = document.createElement('img')
    image.src = url
    const graphResult = document.querySelector('#graphResult')
    graphResult.className = "ex1ContainerUser"
    while (graphResult.firstChild) {
        graphResult.removeChild(graphResult.firstChild);
    }
    graphResult.append(image)

}