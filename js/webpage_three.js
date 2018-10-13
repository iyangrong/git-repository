var buttons = document.querySelectorAll(".id-introduce-a")
for(var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    button.addEventListener('mouseout', function(event) {
        var self = event.target
        clearActive()
        self.classList.add('act')
    })
}
var clearActive = function() {
    var act = document.querySelector('.act')
    if(act != null) {
        act.classList.remove("act")
    }
}
