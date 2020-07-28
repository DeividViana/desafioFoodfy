const modalOverlay = document.querySelector ('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener ("click", function(){
        const imageID = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/bootcamp-launchbase-desafios-02-master/layouts/assets/${imageID}`;
    })
}


document.querySelector('.material-icons').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src = ""
})

