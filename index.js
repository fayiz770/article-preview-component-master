const icon_share = document.getElementById('icon-share')
const modal = document.getElementById('modal')

icon_share.addEventListener('mouseover', () => {
    if(window.innerWidth > 768) {
        modal.style.display = 'flex'
    }else {
        modal.style.display = 'flex'
    }
})

modal.addEventListener('mouseout', () => {
    modal.style.display = 'none'
})

modal.addEventListener('mouseover', () => {
    modal.style.display = 'flex'
})