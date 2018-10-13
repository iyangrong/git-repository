var buttons = document.querySelectorAll(".id-introduce-a")
for(var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    button.addEventListener('mouseover', function(event) {
        var self = event.target
        clearActive()
        self.classList.add('active')
    })
}
var clearActive = function() {
    var active = document.querySelector('.active')
    if(active != null) {
        active.classList.remove("active")
    }
}
