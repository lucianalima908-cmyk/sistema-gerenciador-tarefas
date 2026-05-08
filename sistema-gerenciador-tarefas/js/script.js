// ==========================
// FUNÇÃO DE NOTIFICAÇÃO
// ==========================
function mostrarNotificacao(mensagem, tipo = "sucesso") {
    const div = document.createElement("div");
    div.classList.add("notificacao");

    if (tipo === "erro") {
        div.style.background = "#ef4444";
    } else {
        div.style.background = "#22c55e";
    }

    div.innerText = mensagem;

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);
}

// ==========================
// LOGIN
// ==========================
const formLogin = document.querySelector("form");

if (formLogin && window.location.pathname.includes("index")) {
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (email === "" || senha === "") {
            mostrarNotificacao("Preencha todos os campos!", "erro");
            return;
        }

        mostrarNotificacao("Login realizado com sucesso!");

        setTimeout(() => {
            window.location.href = "pages/dashboard.html";
        }, 1000);
    });
}

// ==========================
// CADASTRO
// ==========================
const formCadastro = document.querySelector("form");

if (formCadastro && window.location.pathname.includes("cadastro")) {
    formCadastro.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        // Nome
        if (nome.length < 5 || !nome.includes(" ")) {
            mostrarNotificacao("Digite nome e sobrenome!", "erro");
            return;
        }

        // Email
        const regexEmail = /^[^\s@]+@[^\s@]+\.com(\.br)?$/;

        if (!regexEmail.test(email)) {
            mostrarNotificacao("Email inválido!", "erro");
            return;
        }

        // Senha
        if (senha.length < 8) {
            mostrarNotificacao("Senha deve ter 8 caracteres!", "erro");
            return;
        }

        mostrarNotificacao("Cadastro realizado!");

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);
    });
}

// ==========================
// CRIAR TAREFA
// ==========================
const formCriar = document.querySelector("form");

if (formCriar && window.location.pathname.includes("criar")) {
    formCriar.addEventListener("submit", function (e) {
        e.preventDefault();

        const titulo = document.getElementById("titulo").value.trim();
        const descricao = document.getElementById("descricao").value.trim();
        const status = document.querySelector('input[name="status"]:checked').value;
        if (titulo.length < 5) {
            mostrarNotificacao("Título deve ter pelo menos 5 caracteres", "erro");
            return;
        }

        if (descricao && descricao.length < 3) {
            mostrarNotificacao("Descrição deve ter pelo menos 3 caracteres", "erro");
            return;
        }

        mostrarNotificacao("Tarefa criada!");

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    });
}

// ==========================
// EDITAR TAREFA
// ==========================
const formEditar = document.querySelector("form");

if (formEditar && window.location.pathname.includes("editar")) {
    formEditar.addEventListener("submit", function (e) {
        e.preventDefault();

        const titulo = document.getElementById("titulo").value.trim();
        const descricao = document.getElementById("descricao").value.trim();

        if (titulo.length < 5) {
            mostrarNotificacao("Título inválido", "erro");
            return;
        }

        if (descricao && descricao.length < 3) {
            mostrarNotificacao("Descrição inválida", "erro");
            return;
        }

        mostrarNotificacao("Tarefa atualizada!");

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    });
}

// ==========================
// EXCLUIR TAREFA (SIMULADO)
// ==========================
const btnExcluir = document.querySelector(".btn-excluir");

if (btnExcluir)
    btnExcluir.addEventListener("click", function () {
        mostrarNotificacao("Tarefa excluída!");

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    });
function mostrarNotificacao(mensagem, tipo = "sucesso") {
    const div = document.createElement("div");

    div.classList.add("notificacao");

    if (tipo === "erro") {
        div.classList.add("notificacao-erro");
    } else {
        div.classList.add("notificacao-sucesso");
    }

    div.innerText = mensagem;

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);
}