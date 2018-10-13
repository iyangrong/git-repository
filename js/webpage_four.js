var pictures = document.querySelectorAll("span")
for(var i = 0; i < pictures.length; i++) {
    var picture = pictures[i]
    picture.addEventListener('mouseover', function(event) {
        var self = event.target
        clearActive()
        self.classList.add('acti')
    })
}
var clearActive = function() {
    var acti = document.querySelector(".acti")
    if(acti != null) {
        acti.classList.remove('acti')
    }
}