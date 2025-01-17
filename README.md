# 1 - Baixar e instalar uma IDE, como o VSCode
https://code.visualstudio.com/download

# 2 - Baixar e instalar o Node.js
https://nodejs.org/en/download Instale a versão LTS Certifique-se de que o Node.js está no seu caminho de variáveis Abra o terminal e execute os seguintes comandos para garantir que foi instalado corretamente:
  - node --version
  - npm --version

# 3 - Instalando o Cypress
  - npm install cypress --save-dev

# 4 - Iniciar o Cypress
  - npx cypress open
Quando você rodar o comando npx cypress open, o aplicativo do Cypress será aberto e você deve selecionar o teste de ponta a ponta (end-to-end). Ele irá mostrar o que será criado, e você pode clicar no botão "continuar". Em seguida, você seleciona o navegador que deseja usar.

# -----------------------------------------------------------------------------

# 5 - EXECUÇÃO DO DESAFIO

O framework escolhido foi o cypress, utilizando o navegador chrome
OBS: os testes executados vão ser feitos com validação de CPF INVALIDO na tentativa de cadastro e login, por se tratar de um teste no ambiente de produção.

Comando para executar no desafio, após máquina estiver instalada com o cypress:
 - npx cypress run --spec "cypress\e2e\atividadePratica.cy.js" --headed --browser chrome
OBS: Executando dessa maneira não é preciso utilizar o passo "4"

O teste em si está na pasta 'cypress/e2e/atividadePratica.cy.js'

A pasta modules presente em 'cypress/e2e/modules' é uma pasta com metodos que vao auxiliar no desenvolvimento da automação e reaproveitamento de código.

Dentro de 'cypress/videos' é possível ver a evidência em video dos testes realizados.