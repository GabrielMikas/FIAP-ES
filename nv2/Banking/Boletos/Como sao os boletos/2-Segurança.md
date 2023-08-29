# Segurança

O token necessário para o consumo da API de boletos é obtido por meio do nosso [Authorization Code](/nv1/BTGId/2-AuthenticationCode.md)

### Escopos necessário

O escopo `openid` é obrigatório e permite consultar o perfil do usuário BTG com acesso à conta.

Além disso, é preciso que se escolha um dos seguinte escopos:

| Escopo | Descrição |
| --- | ----------- |
| empresas.btgpactual.com/bank-slips | Permite criação e consulta de boletos |
| empresas.btgpactual.com/bank-slips.readonly | Permite consulta de boletos e recebimento de webhooks. |