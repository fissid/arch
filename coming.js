myInterval=setInterval(function() {
    var main=document.querySelector("main h1")
    var point=document.createTextNode(".")
    main.appendChild(point)
    if(main.textContent.length>=15){
        // clearInterval(myInterval);
        main.textContent="Coming soon"
    }
}, 1000);