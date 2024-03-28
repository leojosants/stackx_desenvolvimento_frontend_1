document.addEventListener('DOMContentLoaded', () => {
    //  carregar dados salvos, se existirem
    document.querySelector(`[data-form-input="name"]`)
        .value = localStorage.getItem('name') || '';

    //  carregar dados salvos, se existirem
    document.querySelector(`[data-form-input="email"]`)
        .value = localStorage.getItem('email') || '';

    // adicionar evento de 'blur' para salvar dados ao sair do campo
    document.querySelector(`[data-form-input="name"]`)
        .addEventListener('blur', salvarDados);

    document.querySelector(`[data-form-input="email"]`)
        .addEventListener('blur', salvarDados);
});

const salvarDados = () => {
    // obter valores dos imputs
    const name = document.querySelector(`[data-form-input="name"]`).value;
    const email = document.querySelector(`[data-form-input="email"]`).value;

    // armazenar no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
};

document.querySelector(`[data-form="formulario"]`)
    .addEventListener('submit', (event) => {
        event.preventDefault()

        const name = document.querySelector(`[data-form-input="name"]`).value;
        const email = document.querySelector(`[data-form-input="email"]`).value;

        // validação
        if (name.trim() === '' || email.trim() === '') {
            alert(`Preencha todos os campos!`);
            return;
        }

        // feedback
        alert(`Dados salvos!`);
    });

/*
    O evento DOMContentLoaded 
    é acionado quando todo o HTML foi completamente carregado e analisado, sem aguardar pelo CSS, imagens, e subframes para encerrar o carregamento. 

    O evento blur 
    é disparado quando um determinado elemento perde o foco, o que pode ocorrer se o usuário pressionar TAB, por exemplo, sobre o controle ou se clicar em outra região da página que também receba foco.
*/