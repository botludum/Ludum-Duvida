<p align="center"> <img src="imagens/Ludum_LogoFinal(sem_fundo).png" width="auto" height="400" /> 
<br>    
<a href="https://www.gnu.org/licenses/gpl-3.0.pt-br.html"><img src="https://img.shields.io/badge/licence-GPL3-green.svg"/></a> <a href="CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg"></a>
<a href="https://gitlab.com/guilhermesiqueira/Ludum-Duvida/commits/development"><img alt="pipeline status" src="https://gitlab.com/guilhermesiqueira/Ludum-Duvida/badges/development/pipeline.svg" /></a><a href="https://gitlab.com/guilhermesiqueira/Ludum-Duvida/commits/development"><img alt="coverage report" src="https://gitlab.com/guilhermesiqueira/Ludum-Duvida/badges/development/coverage.svg" /></a>
<a href="https://codeclimate.com/github/botludum/Ludum-Duvida/maintainability"><img src="https://api.codeclimate.com/v1/badges/0af6b402804cda6e6600/maintainability" /></a></p>

# Ludum - O assistente virtual sobre o PyGame

## Sobre o repositório
<p align="justify">Encarregado de armazenar o Microsserviço de Pesquisar Dúvida no Stack Overflow do Ludum. 
Esse microsserviço é responsável por pesquisar a dúvida do usuário no Stack Overflow caso a mesma não esteja presente no FAQ.</p>

## Sobre o projeto
<p align="justify">O Ludum é um chatbot que propõe-se a auxiliar em diversos aspectos as pessoas que desejam desenvolver jogos utilizando a biblioteca PyGame.</p>

## Como desenvolver
<p align="justify">Neste microsserviço foi utilizado NodeJS com express e MongoDB (Mongoose). Tudo que é necessário para o desenvolvimento está dentro do docker, então, para desenvolver, deve-se seguir os seguintes passos: </p>

1. Modifique a linha 20 do arquivo index.js localizado na pasta raíz do projeto de:
```javascript
mongoose.connect(process.env.MONGODB_URI);
```
para:
```javascript
mongoose.connect('mongodb://localhost/ludum-duvida');
```

2. Após, abra um terminal na pasta raíz do projeto e execute o comando:
```bash
docker build -t guilhermesiqueira/ludum-duvida .
```

3. Em seguida:
```bash
docker-compose u
```
Pronto, o seu ambiente de desenvolvimento está pronto!

## Quero saber mais!
<p align="justify">Para mais informações e maiores esclarecimentos, visite o nosso repositório principal, 
clicando <a href="https://github.com/fga-eps-mds/2019.1-Ludum">aqui</a></p>
