const sharingButtonsSHOW = $(".share-btns")
const triggerButtonBG = $(".card-profile-button")
const triggerButtonCOLOR = $(".share-trigger")

$('.share-trigger').on('click', function() {
    sharingButtonsSHOW.toggleClass('hide')
    triggerButtonBG.toggleClass('card-profile-button--active')
    triggerButtonCOLOR.toggleClass('share-trigger--on')
})
