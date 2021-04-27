
// function init(){
//     let isValid = false
//     console.log("init menu", isValid)
// }
// init()

(function (win, doc) {
    let isValid = false
    win.alert('Olá mundo!')
    console.log("menu", isValid)

    function init(){
        console.log("init do Menu")
    }
    init()
})(window, document)