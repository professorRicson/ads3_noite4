const res = require("express/lib/response");

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("Telefone").value,
        cidade: document.getElementById("Cidade").value,
        message: document.getElementById("Mensagem").value
    }

    const serviceID = "service_plm1f8k";
    const templateID = "template_e2hvv2k";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("Telefone").value = "";
                document.getElementById("Cidade").value = "";
                document.getElementById("Mensagem").value = "";
                console.log(res);
                alert("Sua mensagem foi enviada com sucesso!!!");
            })
        .catch((err) => console.log(err));
}