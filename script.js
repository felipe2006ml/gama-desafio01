const btnCadastrar = document.getElementById("btnCad");
const modalS = document.querySelector(".modal");
const contentModal = document.querySelector(".content-modal");
const bodyS = document.querySelector("main");
const btnModal = document.querySelector(".btn-modal");

btnCadastrar.addEventListener('click', function () {
    const nomeCad = document.getElementById("nome").value
    const emailCad = document.getElementById("email").value
    if (nomeCad == "") {
        alert('Preencha o campo Nome')
        return
    }

    if (emailCad == "") {
        alert("Preencha o campo email")
        return
    }

    contentModal.innerHTML = `<p>Obrigado ${nomeCad} por cadastrar o seu e-mail, em breve você começará a receber nossas ofertas!</p>`
    modalS.classList.remove('modal-active')
    bodyS.setAttribute('style', 'opacity: 0.1')


    let peoples = new Array()

    /**
     * Verifica se a propriedade existe
     * Caso exista, converte de String para Object
     */
    if (localStorage.hasOwnProperty("peoples")) {
        peoples = JSON.parse(localStorage.getItem("peoples"))
    } else {
        localStorage.setItem("peoples", JSON.stringify())
    }

    /* Adiciona um novo valor no array criado */
    peoples.push({ name: nomeCad, email: emailCad })

    /* Salva o item */
    localStorage.setItem("peoples", JSON.stringify(peoples))
})

btnModal.addEventListener('click', function () {
    console.log("cheguei")
    modalS.classList.add('modal-active')
    bodyS.removeAttribute('style', 'opacity: 0.1')
    const nomeCad = document.getElementById("nome")
    const emailCad = document.getElementById("email")

    nomeCad.value = ""
    emailCad.value = ""
    nomeCad.focus()
})