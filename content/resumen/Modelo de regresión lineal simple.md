---
title: "Modelo de regresión lineal simple"
tags: []
---
Una **recta** nos permite calcular la [Media condicional](#) de la **variable de respuesta** $Y$, con la condición de conocer la **variable de regresión** $X$

$$
\begin{cases}
\frac{\partial G}{\partial a}=\sum_{i=1}^n -2\cdot(y_i-a-bx_i)&=0 \\
\frac{\partial G}{\partial b}=\sum_{i=1}^n -2x_i\cdot(y_i-a-bx_i)&=0 \\
\end{cases}
$$