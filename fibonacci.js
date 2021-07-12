let n1 = 0, n2 = 1;

function display() {
    let n3 = 0;
    let fibonacci = document.querySelector(".fibonacci");
    let rgbHue = 255 / 99;

    fibonacci.innerHTML = "";
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div")
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        div.innerHTML = n1;
        div.style.color = `rgb(${rgbHue}, ${rgbHue}, ${rgbHue})`;
        fibonacci.appendChild(div)
        rgbHue += 255 / 99;
    }
}

function main() {
    display();
}

main();