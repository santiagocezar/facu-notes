---
title: "Media aritmética"
tags: ["probabilidad"]
---
$$
\mu=\frac{\sum^N_{i=1}x_i}{N}
$$
El promedio, la suma de todos los valores de la variable dividido por la cantidad de datos observados.

## Propiedades
- La media de una **constante** es la constante misma.
  $$
  \frac{\sum^N_{i=1}k}{N}=k
  $$
- Propiedad de la **traslatividad**, si **sumo o resto** una **constante** a todas los valores de la variable, a la **media se le suma esa constante**.
  $$
  \frac{\sum^N_{i=1}x_i+k}{N}=\frac{\sum^N_{i=1}x_i}{N}+\frac{\sum^N_{i=1}k}{N}=\frac{\sum^N_{i=1}x_i}{N}+k=\mu+k
  $$
- Caso particular de la **traslatividad**, si la constante resta y es la media misma de los datos, **la media es 0**
  $$
    \frac{\sum^N_{i=1}x_i-\mu_x}{N}=\frac{\sum^N_{i=1}x_i}{N}+\frac{\sum^N_{i=1}\mu_x}{N}=\mu_x-\mu_x=0
  $$
- Propiedad de la **linealidad**, si **multiplico o divido** los datos por una **constante**, la **media también**.
  $$
      \frac{\sum^N_{i=1}x_i\cdot k}{N}=\frac{\sum^N_{i=1}x_i}{N}\cdot k=\mu_x\cdot k
  $$
- **Operar algebraicamente**, puedo tomar las medias de medias parciales, ponderándolas en base al tamaño de la muestra.
- Su desventaja es que sensible a valores extremos