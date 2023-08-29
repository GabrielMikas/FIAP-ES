# Criar um boleto

A criação de um boleto pode ser feita por uma requisição `POST` no endpoint `/v1/bank-slips` informando por meio de query paramethers um `accountId` referente ao identificador da conta beneficiaria.


No corpo da requisição, é obrigatorio o envio de certas informações:
- `amount`: `number` referente ao valor da cobrança
- `dueDate`: `date` referente à data de vencimento do boleto
**Veja nossas [convenções](/nv1/3-Conven%C3%A7%C3%B5es.md) para mais informações sobre os padrôes de formato**
- `referenceNumber`: `string` referente ao [número](/nv2/Banking/Boletos/Como%20sao%20os%20boletos/5-Numero.md) utilizado pelo parceiro
- `payer`: `object` referente à entidade pagadora do boleto, que consiste em:
  - `name`: `string` referente ao nome do sacado
  - `taxId`: `string` referente ao CPF do sacado
    **Opcionalmente, pode-se passar:**
   - `email`: `string` referente ao email do sacado
   - `phoneNumber`: `string` referente ao telefone do sacado
   - `address`: `object` referente ao endereço do sacado:
     - `zipCode`: `string` referente ao CEP
     - `city`: `string` referente à cidade
     - `state`: `string` referente ao estado
     - `street`: `string` referente ao logradouro
     - `number`: `string` referente ao número

 -  `installments`: `integer` referente ao número de parcelas. Cada parcela gera um novo boleto. 
    **Opcionalmente pode-se passar:**
  - `cost`: `number` referente ao custo do boleto cobrado do cliente final
  - `description`: `string` descrição da cobrança. Aparece no boleto emitido
  - `interests`: `object` referente a jurus e multas
    - `arrears`: `object`
      - `value`: `number` referente à taxa de juros 
      - `type`: `string` referente ao tipo de aplicação do juros com default `PERCENTAGE`
    - `penalty`: `object` referente a uma multa aplicada
       - `value`: `number` referente à taxa de juros 
      - `type`: `string` referente ao tipo de aplicação do juros com default `PERCENTAGE`
  - `discounts`: `arrays of objects` referente aos descontos aplicados
    - - `value`: `number` referente à taxa de juros 
      - `type`: `string` referente ao tipo de aplicação do juros com default `PERCENTAGE`
  - `deliveryMediums`: `array of strings` referente à configuração de entrega
  - `pixInfo`: `object` que insere um QR code no boleto para pagamento via Pix
    - `generateEmbeddedQrCode`: `boolean`

A resposta de uma requisição bem sucedida é `202`
