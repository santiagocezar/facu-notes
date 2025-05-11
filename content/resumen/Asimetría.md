---
title: "Asimetría"
tags: []
---
#probabilidad-y-estadística 

Una distribución de datos puede ser
- **Asimétrica negativa:** Media < Mediana < Modo
- **Simétrica:** Media = Mediana = Modo
- **Asimétrica positiva:** Media > Mediana > Modo

Una forma de medir la asimetría es mediante los coeficientes de Pearson, su signo indica que **tipo de asimetría** (o de ser 0, **simetría**) es:

$$
As\approx\frac{\mu - Mo}{\sigma}\approx\frac{3(\mu - Me)}{\sigma}
$$

Una forma más precisa para calcularlo es usando [Momentos centrados]({{< ref "Momentos centrados" >}}): 

$$As=\frac{M_3}{\sigma^3}$$