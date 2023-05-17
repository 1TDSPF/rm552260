
let listaDeUsuarios = [
    {
        nomeCompleto : "Jaú da Selva",
        usuarioEmail : "jau@email.com",
        usuarioSenha : "123456"
    },
    {
        nomeCompleto : "Paulo das Couves",
        usuarioEmail : "paulo@email.com",
        usuarioSenha : "123456"
    },
    {
        nomeCompleto : "José da Silva",
        usuarioEmail : "jose@email.com",
        usuarioSenha : "123456"
    },
    {
        nomeCompleto : "Maria do Socorro",
        usuarioEmail : "maria@email.com",
        usuarioSenha : "123456"
    },
    {
        nomeCompleto : "André da Silva",
        usuarioEmail : "andre@email.com",
        usuarioSenha : "123456"
    }
];


localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt)=>{
    
    if(evt.target.id == "btnSubmit"){
        //console.log(evt.target);
        const inputEmail = document.querySelector("#idEmail");
        const inputPass = document.querySelector("#idPass");

        try {
            listaDeUsuarios.forEach((usuario)=>{

                if(inputEmail.value == usuario.usuarioEmail && inputPass.value == usuario.usuarioSenha){
                        throw"Validado";
                }
    
            });
                throw"Não validado";
                
        } catch (msg) {

            const msgStatus = document.querySelector("#msgStatus");
            if (msg == "Validado"){
                msgStatus.setAttribute("style", "color:#00ff00;")
                msgStatus.innerHTML = "<span><strong>Login efetuado com Sucesso</strong></span>";
            }else{
                msgStatus.setAttribute("style", "color:#ff0000;")
                msgStatus.innerHTML = "<span><strong>Usuario ou senha incorreto!</strong></span>";
            }
        }
        
    }else if(evt.target.className=="fa fa-eye" || evt.target.className=="fa fa-eye-slash"){
        if(inputPass.getAttribute("type") == "password"){
            inputPass.setAttribute("type","text");
            evt.target.setAttribute("class","fa fa-eye-slash");
        }else{
            inputPass.setAttribute("type","password");
            evt.target.setAttribute("class","fa fa-eye");
        }
    }
});