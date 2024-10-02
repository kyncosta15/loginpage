// criar verificação para campos de login e senha
const loginInput = document.querySelector("#create-user");
const cpfInput = document.querySelector("#cpf-user");
const passInput = document.querySelector("#create-password");
const repeatPassInput = document.querySelector("#repeat-password");
const btnCreateAcess = document.querySelector("#create-button");

const arrayData = [];

const userData = {
  username: `${loginInput.value}`,
  cpf: `${parseInt(cpfInput.value)}`,
  password: `${passInput.value}`,
};

btnCreateAcess.addEventListener("click", (e) => {
    
    const inputValue = loginInput.value;
    const cpfValue = cpfInput.value;
    const passValue = passInput.value;
    const repeatPassValue = repeatPassInput.value;


    e.preventDefault();

    const testArray = arrayData.push (inputValue, cpfValue, passValue, repeatPassValue);
    console.log(arrayData);
})


// não permitir string em cpf

//criar senha apenas acima de 8 caracteres

/* 
ao criar conta, salvar no localstorage 
e voltar pra tela de login
*/

