const usuario1 = {
    usuarioEmail : "jau@email.com",
    usuarioSenha : "12345",
    usuarioGenero : "m",
    gravarDados : true
}

const usuario2 = {
    usuarioEmail : "bkzin@email.com",
    usuarioSenha : "12345",
    usuarioGenero : "m",
    gravarDados : true
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

console.log(listaDeUsuarios)


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
            console.log();
        }
        
    }
});