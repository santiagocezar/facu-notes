---
title: "Arquitectura"
tags: []
---
#diseño-de-sistemas 

Nadie sabe qué es...

Es un conjunto de decisiones importantes sobre la organización de un sistema de software, la selección de los elementos estructurales y sus interfaces mediante las cuales se compone el sistema

Viene determinada por los requerimientos no funcionales

**Estilos:**

- **Monolito:** está todo pegoteado lo que lo hace la más fácil y rápida para desarrollar, pero es más difícil de mantener a largo plazo.
- **Cliente/Servidor:** como la web, el cliente inicia la solicitud, el servidor responde con datos. La desventaja es que el servidor es un punto de fallo importante.
- **En capas:** mayor complejidad, pero se distribuye en capas.
- **Orientado a servicio:** 
- **Microservicio:** un montón de computadoras que cumplen cada una función específica independiente de las otras.

**Componentes:**

- Lógica de negocio
- Interfaz de Usuario
- Persistencia