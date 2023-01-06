const unread = document.querySelectorAll('.unread')
const notifNumber = document.querySelector('.notifications')
const markAll = document.querySelector('.mark-all')

notifNumber.innerHTML = unread.length;

unread.forEach(function(message){
    message.addEventListener("click", function(){
        message.classList.remove('unread')
        const unreadLeft = document.querySelectorAll('.unread')
        notifNumber.innerText = unreadLeft.length
    })
})

markAll.addEventListener("click", function(){
    unread.forEach(function(message) {
        message.classList.remove('unread')
        const unreadLeft = document.querySelectorAll('.unread')
        notifNumber.innerText = unreadLeft.length
    })
})
