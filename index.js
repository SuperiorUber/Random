
let container = document.querySelector(".container");
        let img_url = `https://source.unsplash.com/random/`;
        for(let i = 0; i<9; i++){
            let img = document.createElement("img")
            img.src = `${img_url}${random()}`
            container.appendChild(img)
        }
        function random() {
            return Math.floor(Math.random() * 10)
        }