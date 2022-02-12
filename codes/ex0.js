function congrats() {
    const content = document.querySelector('.content-ex0')

    if(content.style.display == 'block'){
        content.style.display = 'none'
    }else{
        content.style.display = 'block'
    }
}  