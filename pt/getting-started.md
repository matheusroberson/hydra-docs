# Iniciando

## Pré-requisitos

- [Node.js](https://nodejs.org/en) versão 20 ou mais recente.
- [Python 3.9](https://www.python.org/downloads/release/python-3913/).
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
- [Git](https://git-scm.com/downloads).

::: warning ALERTA
Nós altamente recomendamos que tenha certeza que está usando Python 3.9. `libtorrent` é conhecido por ter alguns problemas com versões recentes de Python.
:::

### Passo adicional para Windows

Se você está no Windows, você deve instalar [OpenSSL 1.1](https://slproweb.com/download/Win64OpenSSL-1_1_1w.exe) por ser uma dependência do `libtorrent`.

## Clonando o repositório

Depois de ter todos os pré-requisitos instalados, você estará pronto para clonar Hydra:

```bash
git clone https://github.com/hydralauncher/hydra.git
```

## Instalando dependências

Uma vez com o projeto clonado, você precisa instalar as dependências de Python e Node.js para inicializar:

```bash
cd hydra
yarn # Para instalar as dependências de Node.JS com Yarn
pip install -r requirements.txt # Para instalar as dependências de Python usando Pip
```

## Ambientes

Hydra atualmente conta com servidores em dois tipos diferentes de ambientes: `staging` e `production`.

`production` é o ambiente que utilizamos para lançamentos de versões do Hydra que são estáveis.
`staging` é o ambiente que utilizamos para testes. No caso pode ser instável para uso, mas é onde novas funcionalidades estarão.

Você precisa escolher um desses ambientes para inicializar Hydra.

::: tip NOTA SOBRE CONTAS
A conta dos usuários não são compartilhadas entre ambientes. Isso significa que a conta que for utilizada em `production` não será a mesma que você irá usar em `staging`.
:::

### Configurando variáveis de ambiente

Você precisa configurar algumas variáveis em quesito de selecionar qual ambiente se utilizará. Hydra não funcionará sem essa configuração.

| Nome da Variável                       | Valor em `production`                     | Valor em `staging`                        |
| -------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `MAIN_VITE_API_URL`                    | https://hydra-api-us-east-1.losbroxas.org | https://api-staging.hydralauncher.gg      |
| `MAIN_VITE_AUTH_URL`                   | https://auth.hydralauncher.gg             | https://auth-staging.hydralauncher.gg     |
| `MAIN_VITE_CHECKOUT_URL`               | https://checkout.hydralauncher.gg         | https://checkout-staging.hydralauncher.gg |
| `MAIN_VITE_EXTERNAL_RESOURCES_URL`     | https://assets.hydralauncher.gg           | https://assets.hydralauncher.gg           |
| `RENDERER_VITE_EXTERNAL_RESOURCES_URL` | https://assets.hydralauncher.gg           | https://assets.hydralauncher.gg           |
| `MAIN_VITE_WS_URL`                     | wss://ws.hydralauncher.gg                 | wss://ws-staging.hydralauncher.gg         |

Escolha um dos ambientes para configurar as variáveis corretamente no arquivo `.env` na raiz do projeto. Veja o exemplo abaixo:

```
# Variáveis de ambiente em `production`

MAIN_VITE_API_URL=https://hydra-api-us-east-1.losbroxas.org
MAIN_VITE_AUTH_URL=https://auth.hydralauncher.gg
MAIN_VITE_CHECKOUT_URL=https://checkout.hydralauncher.gg
MAIN_VITE_EXTERNAL_RESOURCES_URL=https://assets.hydralauncher.gg
RENDERER_VITE_EXTERNAL_RESOURCES_URL=https://assets.hydralauncher.gg
MAIN_VITE_WS_URL=wss://ws.hydralauncher.gg
```

### Qual ambiente eu deveria usar?

Se você está utilizando o Hydra na branch `main`, você deveria escolher `production` na maior parte das vezes. Se você está utilizando o Hydra em outra branch, será melhor escolher `staging`.

### Rodando esse projeto

Uma vez que o projeto esteja configurado, você pode rodar o Hydra seguindo o script abaixo:

```bash
yarn dev
```
