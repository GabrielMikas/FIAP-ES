# Nome: Gabriel Oliveira Tavares
# RM: 97753
tempo_fumando = float(input("Tempo como fumante(em anos):"))
valor_maco = float(input("Valor do maço:"))
quantidade_diaria = float(input("Quantidade de maços por dia:"))


tempo_fumando_dias = tempo_fumando * 360
montante = tempo_fumando_dias * valor_maco * quantidade_diaria

if montante < 20000:
    print(f"Com o valor R${montante}, você poderia ter dado entrada em um carro.")
elif montante >= 20000 and montante <= 50000:    
    print(f"Com o valor R${montante}, você poderia ter comprado um carro popular usado.")
else:
    print(f"Com o valor R${montante}, você poderia ter comprado um carro zero.")
     
