# Fontes de download

::: warning :construction: TRABALHO EM PROGRESSO
Essa página é um trabalho em progresso e ainda não está completa.
:::

Fontes de download são o componente chave no Hydra. Elas provém um jeito fácil e uma experiência Steam-like para restaurar jogos que você fez backup.

## Como fontes de download funcionam

Hydra por padrão não é instalado com nenhuma fonte de download, então você terá que montar uma você mesmo para poder restaurar os arquivos dos jogos dentro do launcher.

Fontes de download podem ser adicionadas no Hydra Launcher usando uma estrutura de JSON simples que permite que você crie um mapeamento entre os arquivos e titulos dos jogos. Você pode criar e importar quantas fontes de download você quiser.

::: warning NOTA SOBRE SINCRONIZAÇÃO DE CONTA
Fontes de download não são sincronizadas por conta por questões de privacidade. Se você desinstalar Hydra, todos as fontes de download que você importou serão removidas e você terá que importar elas novamente.
:::

## Como criar uma fonte de download

Uma fonte de download JSON tem a seguinte estrutura:

```json
{
  "name": "string",
  "downloads": [
    {
      "title": "string",
      "fileSize": "string",
      "uris": ["string"],
      "uploadDate": "string"
    }
  ]
}
```

### Hosters Suportados
