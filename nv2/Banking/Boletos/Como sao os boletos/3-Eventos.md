# Eventos

A API de boletos disponibiliza eventos de [Webhook](www.google.com) conforme a tabela abaixo:

| Identificação do Evento | Descrição |
| --- | ----------- |
| `bank-slips.failed` | Falha ao criar boleto |
| `bank-slips.updated` | Boleto atualizado |
| `bank-slips.update_failed` | Falha ao atualizar boleto |
| `bank-slips.canceled` | Boleto cancelado |
| `bank-slips.cancel_failed` | Falha ao cancelar boleto |
| `bank-slips.paid` | Boleto pago |
| `bank-slips.reversed` | Boleto estornado |
| `bank-slips.rejected` | Boleto rejeitado |