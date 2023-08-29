### Boletos

A API de boletos permite a criação de boletos sejam eles únicos, parcelados ou em lote para um ou múltiplos clientes. É também permitida a criação de boletos com codigo de barra e QR code para pagamento por pix.
Nossa API permite, além disso, a assinatura de eventos de boletos.

Um boleto é composto por 3 participantes:
- `Optional` Cedente/Beneficiário, aquele que emite o boleto de um serviço
- `Required` Sacado, aquele que vai pagar o boleto
- `Optional` Sacador avalista, aquele que mite o boleto para outra empresa


IMAGINA QUE ESSE QUADRO VAI ALI PRO LADINHO IGUAL STARKBANK, STRIPE ETC

| ENDPOINTS |
| --- | 
| {POST} [/v1/bank-slips](/nv2/Banking/Boletos/2-Criar%20Boleto.md) |
| {GET} [/v1/bank-slips](/nv2/Banking/Boletos/3-Listar%20Boletos.md)  |
|{POST} [/v1/bank-slips/batches](/nv2/Banking/Boletos/4-Criar%20boletos%20em%20lote.md)|
|{PUT} [/v1/bank-slips/{bankSlipId}](/nv2/Banking/Boletos/5-%20Atualizar%20um%20boleto.md)|
|{DELETE} [/v1/bank-slips/{bankSlipId}](/nv2/Banking/Boletos/6-Cancelar%20boleto.md)|

Para mais informações sobre as URIs visite nossa [introdução](/nv1/1-Introdu%C3%A7%C3%A3o.md)
