btns = document.querySelectorAll(".btn")
src = document.querySelector(".src");
cl = document.querySelector('#ac');
eq = document.querySelector('#eq');
backSpace = document.querySelector('#backSpace')

btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        src.textContent += e.target.id;
    })
})

eq.addEventListener('click', () => {
    calc();
})
cl.addEventListener('click', () => {
    src.textContent = ""
})
backSpace.addEventListener('click', () => {
    src.textContent = src.textContent.slice(0, -1)
})
window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        HistoriqueContent(src.textContent)
        src.textContent = eval(src.textContent)
    } else if (e.key == "Backspace") {
        src.textContent = src.textContent.slice(0, -1)
    }
    else {
        let numbers = "0123456789+=/(*.)-";
        if (numbers.includes(e.key)) {
            src.textContent += e.key;
            // src.textContent += eval(src.textContent)
        }
    }
})
document.querySelector(".prnthese").addEventListener("click", () => {
    if (src.textContent && src.textContent.includes("(")) {
        src.textContent += ")";
    } else {
        src.textContent += "(";
    }

})
document.querySelector(".prcnt").addEventListener("click", () => {
    HistoriqueContent(`${eval(src.textContent)} / 100`);
    src.textContent = eval(src.textContent) / 100;
})
const Historiquee = () => {
    if (document.querySelector("#historique").style.display == "none") {
        document.querySelector("#historique").style.display = "block";
    }
    else {
        document.querySelector("#historique").style.display = "none";

    }
}
let Historique = document.querySelector("#hisCont")
let counter = 0;
const HistoriqueContent = (v) => {
    para = document.createElement('p');
    data = v + "=" + eval(v);
    para.innerText = data;
    para.classList.add("parahistorique");
    Historique.appendChild(para);
    counter++;
    if (counter > 5) {
        Historique.removeChild(document.querySelector('.parahistorique:first-child'))
    }
}
const calc = () => {
    try {
        HistoriqueContent(src.textContent);
        src.textContent = eval(src.textContent);
    }
    catch (err) {
        src.textContent = "Error"
    }
}