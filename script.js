setInterval(function(){

    const res = document.querySelector("#res")

    let time = new Date()
    res.innerHTML = time.toLocaleTimeString()

},1000)