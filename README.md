<p align="center"> <img src="imagens/Ludum_LogoFinal(sem_fundo).png" width="auto" height="400" /> 
<br>    
<a href="https://www.gnu.org/licenses/gpl-3.0.pt-br.html"><img src="https://img.shields.io/badge/licence-GPL3-green.svg"/></a> <a href="CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg"></a>
<a href="https://gitlab.com/guilhermesiqueira/Ludum-Duvida/commits/master"><img alt="pipeline status" src="https://gitlab.com/guilhermesiqueira/Ludum-Duvida/badges/master/pipeline.svg" /></a><a href="https://gitlab.com/guilhermesiqueira/Ludum-Duvida/commits/master"><img alt="coverage report" src="https://gitlab.com/guilhermesiqueira/Ludum-Duvida/badges/master/coverage.svg" /></a>
<a href="https://codeclimate.com/github/botludum/Ludum-Duvida/maintainability"><img src="https://api.codeclimate.com/v1/badges/0af6b402804cda6e6600/maintainability" /></a>
<br><br><b><a href="https://t.me/OLudumBot">Clique aqui para conversar comigo no Telegram!</a></b> 
<br> Se não conseguir me encontre pelo meu username é <b>@OLudumBot</b>
<br> Ah! Eu também possuo uma versão de homologação é <a href="https://t.me/ludumdev_bot">@ludumdev_bot</a></b>   
</p>

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
docker-compose up
```
Pronto, o seu ambiente de desenvolvimento está pronto!

## Quero saber mais!
<p align="justify">Para mais informações e maiores esclarecimentos, visite o nosso repositório principal, 
clicando <a href="https://github.com/fga-eps-mds/2019.1-Ludum">aqui</a></p>

## Documentação da API
- [Plataforma Unificada de Metodologia Ativa](#plataforma-unificada-de-metodologia-ativa)
  - [Base URL](#base-url)
  - [Endpoints](#endpoints)
      - [`GET /duvidas/pesquisar/:{question}`](#post-duvida)
      - [`GET /duvidas/:{id}`](#get-duvidaid)
      - [`GET /usuario`](#get-duvidas)
      
## Base URL
A URL para qualquer requisição possui a url base **api**: `https://ludum-duvidas.herokuapp.com/api/{resource}`
## Endpoints
Os endpoints são:

### `/duvidas`
São os endpoints relacionados às duvidas pesquisadas.

#### `GET /duvidas/pesquisar/:{question}`

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| question                  | string  | Comando digitado pelo usuário no telegram        | sim          |

- Exemplo de JSON retornado:
```json
{
    "status": "success",
    "message": "Posts retrieved successfully",
    "data": [
        {
            "_id": "5cbfbe32de8e8b0024c7e011",
            "question": "How to use Rasa?",
            "answer": [
                {
                    "_id": "5cbfbe32de8e8b0024c7e016",
                    "title": "How to use RASA NLU with RASA CORE?",
                    "link": "https://stackoverflow.com/questions/48700554/how-to-use-rasa-nlu-with-rasa-core"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e015",
                    "title": "How to use rasa action_restart",
                    "link": "https://stackoverflow.com/questions/53715698/how-to-use-rasa-action-restart"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e014",
                    "title": "RASA how to use Japanese (Tokennization-Mecab)",
                    "link": "https://stackoverflow.com/questions/53001497/rasa-how-to-use-japanese-tokennization-mecab"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e013",
                    "title": "How to use my own NLU module completely with Rasa Core?",
                    "link": "https://stackoverflow.com/questions/55368233/how-to-use-my-own-nlu-module-completely-with-rasa-core"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e012",
                    "title": "How to use Hindi Model in RASA NLU?",
                    "link": "https://stackoverflow.com/questions/52586211/how-to-use-hindi-model-in-rasa-nlu"
                }
            ],
            "create_date": "2019-04-24T01:38:58.246Z",
            "__v": 0
        }
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### `GET /duvidas/:{id}`
Retorna apenas uma dúvida

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| id                  | string  | id da pergunta       | sim          |

- Exemplo de JSON retornado:
```json
{
    "status": "success",
    "message": "Carregando detalhes da dúvida",
    "data": [
        {
            "_id": "5cbfbe32de8e8b0024c7e011",
            "question": "How to use Rasa?",
            "answer": [
                {
                    "_id": "5cbfbe32de8e8b0024c7e016",
                    "title": "How to use RASA NLU with RASA CORE?",
                    "link": "https://stackoverflow.com/questions/48700554/how-to-use-rasa-nlu-with-rasa-core"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e015",
                    "title": "How to use rasa action_restart",
                    "link": "https://stackoverflow.com/questions/53715698/how-to-use-rasa-action-restart"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e014",
                    "title": "RASA how to use Japanese (Tokennization-Mecab)",
                    "link": "https://stackoverflow.com/questions/53001497/rasa-how-to-use-japanese-tokennization-mecab"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e013",
                    "title": "How to use my own NLU module completely with Rasa Core?",
                    "link": "https://stackoverflow.com/questions/55368233/how-to-use-my-own-nlu-module-completely-with-rasa-core"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e012",
                    "title": "How to use Hindi Model in RASA NLU?",
                    "link": "https://stackoverflow.com/questions/52586211/how-to-use-hindi-model-in-rasa-nlu"
                }
            ],
            "create_date": "2019-04-24T01:38:58.246Z",
            "__v": 0
        }
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### `GET /duvidas/`
Retorna todas as dúvidas pesquisadas

- Exemplo de JSON retornado:
```json
{
    "status": "success",
    "message": "Posts retrieved successfully",
    "data": [
        {
            "_id": "5cbfbe32de8e8b0024c7e011",
            "question": "How to use Rasa?",
            "answer": [
                {
                    "_id": "5cbfbe32de8e8b0024c7e016",
                    "title": "How to use RASA NLU with RASA CORE?",
                    "link": "https://stackoverflow.com/questions/48700554/how-to-use-rasa-nlu-with-rasa-core"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e015",
                    "title": "How to use rasa action_restart",
                    "link": "https://stackoverflow.com/questions/53715698/how-to-use-rasa-action-restart"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e014",
                    "title": "RASA how to use Japanese (Tokennization-Mecab)",
                    "link": "https://stackoverflow.com/questions/53001497/rasa-how-to-use-japanese-tokennization-mecab"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e013",
                    "title": "How to use my own NLU module completely with Rasa Core?",
                    "link": "https://stackoverflow.com/questions/55368233/how-to-use-my-own-nlu-module-completely-with-rasa-core"
                },
                {
                    "_id": "5cbfbe32de8e8b0024c7e012",
                    "title": "How to use Hindi Model in RASA NLU?",
                    "link": "https://stackoverflow.com/questions/52586211/how-to-use-hindi-model-in-rasa-nlu"
                }
            ],
            "create_date": "2019-04-24T01:38:58.246Z",
            "__v": 0
        },
        {
            "_id": "5cc8afbb85979700243ef73f",
            "question": ":python",
            "answer": [
                {
                    "_id": "5cc8afbb85979700243ef744",
                    "title": "List of string &quot;integers&quot; to integers accounting for &quot;non-numeric&quot; strings Python",
                    "link": "https://stackoverflow.com/questions/55927965/list-of-string-integers-to-integers-accounting-for-non-numeric-strings-pytho"
                },
                {
                    "_id": "5cc8afbb85979700243ef743",
                    "title": "Chess in Python without any game library?",
                    "link": "https://stackoverflow.com/questions/55928152/chess-in-python-without-any-game-library"
                },
                {
                    "_id": "5cc8afbb85979700243ef742",
                    "title": "How can I deploy my API on IBM Cloud developed in Python and swagger?",
                    "link": "https://stackoverflow.com/questions/55928217/how-can-i-deploy-my-api-on-ibm-cloud-developed-in-python-and-swagger"
                },
                {
                    "_id": "5cc8afbb85979700243ef741",
                    "title": "Python pandas dataframe to html -- highlight entire column based on header value",
                    "link": "https://stackoverflow.com/questions/55387873/python-pandas-dataframe-to-html-highlight-entire-column-based-on-header-value"
                },
                {
                    "_id": "5cc8afbb85979700243ef740",
                    "title": "Python, convert string which contains escape characters to a dict",
                    "link": "https://stackoverflow.com/questions/55928207/python-convert-string-which-contains-escape-characters-to-a-dict"
                }
            ],
            "create_date": "2019-04-30T20:27:39.712Z",
            "__v": 0
        }
    ]
}
```
