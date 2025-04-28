---
title: "Mediana"
tags: ["probabilidad"]
---
El **valor central** de la distribución **ordenada**, divide al conjunto ordenado en dos subconjuntos que contienen la misma cantidad de observaciones.

Para una **serie simple**, $Me$ se calcula:

| N° elem. impar    | N° elem. par                         |
| ----------------- | ------------------------------------ |
| $$i=\frac{N+1}2$$ | $$i-1=\frac N2\quad i=\frac {N}2+1$$ |
| $$Me = x_i$$      | $$Me = \frac{x_{i-1}+x_i}2$$         |


En una **tabla simple**, también $Me=x_i$, pero para obtener $i$ buscamos el elemento con **frecuencia absoluta acumulada** mayor a $\frac N2$ más chico:

$$F_{i-1}<\frac N2$$


, se toma la [Media aritmética]({{< ref "Media aritmética" >}}) de los dos valores centrales.