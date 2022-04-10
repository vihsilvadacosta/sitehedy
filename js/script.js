  document.getElementById("BotaoEnviar").addEventListener("click", validaFormulario)
  
  function validaFormulario(){
      if(document.getElementById("Nome").value != "" && document.getElementById("E-mail").value != "" && document.getElementById("Telefone").value != ""){
        alert("Prontinho! Você receberá as novidades por email.")
      }else{
        alert("Preencha todos os campos solicitados!")
      }
  }
