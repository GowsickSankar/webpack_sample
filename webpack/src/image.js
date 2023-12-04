import Luffy from "./luffy.jpeg"

function addImage() {
    const img = document.createElement('img');
    img.src = Luffy
    const body = document.querySelector('body');
    body.append(img)
}

export default addImage;


// how to connect mongodb in nodejs?

