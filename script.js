

const btnSobre = document.getElementById("botaoSobre");
const menuSobre = document.getElementById("submenuSobre");

const btnContato = document.getElementById("botaoContato");
const menuContato = document.getElementById("submenuContato");


// MENU SOBRE

if (btnSobre) {

    btnSobre.addEventListener("click", function(event) {

        event.preventDefault();

        menuSobre.classList.toggle("ativo");

        if (menuContato) {
            menuContato.classList.remove("ativo");
        }

    });

}

if (btnContato) {

    btnContato.addEventListener("click", function(event) {

        event.preventDefault();

        menuContato.classList.toggle("ativo");

        if (menuSobre) {
            menuSobre.classList.remove("ativo");
        }

    });

}

const empresa = document.querySelector(
    "#submenuSobre a:nth-child(1)"
);

if (empresa) {

    empresa.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "SKATE HOUSE\n\n" +
            "Somos uma loja especializada na venda de skates. " +
            "Temos modelos para iniciantes, profissionais " +
            "e diferentes estilos."
        );

    });

}

const clientes = document.querySelector(
    "#submenuSobre a:nth-child(2)"
);

if (clientes) {

    clientes.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "CLIENTES\n\n" +
            "Atendemos pessoas de diferentes idades " +
            "e níveis de experiência."
        );

    });

}

const telefone = document.querySelector(
    "#submenuContato a:nth-child(1)"
);

if (telefone) {

    telefone.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "CONTATO\n\n" +
            "Telefone: (32) 99985-2752"
        );

    });

}

const emailContato = document.querySelector(
    "#submenuContato a:nth-child(2)"
);

if (emailContato) {

    emailContato.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "CONTATO\n\n" +
            "Email: 0000826901@senaimgaluno.com.br"
        );

    });

}

const formularioCadastro =
    document.getElementById("formCadastro");

if (formularioCadastro) {

    formularioCadastro.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const cpf =
                document.getElementById("cpf").value;

            const nome =
                document.getElementById("nome").value;

            const email =
                document.getElementById("email").value;

            const endereco =
                document.getElementById("endereco").value;

            const senha =
                document.getElementById("senha").value;


            localStorage.setItem("cpf", cpf);

            localStorage.setItem("nome", nome);

            localStorage.setItem("email", email);

            localStorage.setItem("endereco", endereco);

            localStorage.setItem("senha", senha);


            alert("Cadastro realizado com sucesso!");

            window.location.href = "login.html";

        }
    );

}

const formularioLogin =
    document.getElementById("formLogin");

if (formularioLogin) {

    formularioLogin.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const emailLogin =
                document.getElementById("emailLogin").value;

            const senhaLogin =
                document.getElementById("senhaLogin").value;


            const emailSalvo =
                localStorage.getItem("email");

            const senhaSalva =
                localStorage.getItem("senha");


            if (
                emailLogin === emailSalvo &&
                senhaLogin === senhaSalva
            ) {

                alert("Login realizado com sucesso!");

                window.location.href = "site.html";

            } else {

                alert("Gmail ou senha incorretos!");

            }

        }
    );

}