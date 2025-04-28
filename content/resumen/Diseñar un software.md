---
draft: "true"
title: "Diseñar un software"
tags: []
---
#diseño-de-sistemas 

## Gestor de gastos

1. Investigar sobre gestores de gastos existentes en el mercado, identificar funciones existentes, sus faltas y mejoras tentativas.
2. Analizar los requisitos, definir los procesos de negocio en los que se debe integrar la aplicación, los casos de uso básicos que debe cumplir la app, priorizando cuáles son esenciales, definir la killer feature.
3. Realizar un boceto de la aplicación, no muy alejado de las alternativas existentes si su diseño se considera bueno.
4. Implementar las funciones básicas de la aplicación

## Requisitos

**Funcionales:**
- El sistema permitirá registrar egresos o ingresos del usuario.
- El sistema permitirá trabajar con precios en moneda extranjera.
- Cada registro se debe poder identificar posteriormente, mediante una foto, geolocalización, fecha o notas
- El sistema permitirá completar datos de la índole de la operación, datos sobre el comprador/vendedor, etiquetas para clasificar.
- El sistema generar un mapa mostrando los lugares donde se realizaron gastos en un periodo de tiempo.
- Se debe poder crear etiquetas para aplicar en operaciones.
- Se debe poder recuperar los datos de las operaciones.
- Se debe poder realizar la conversión de moneda extranjera.
- Se debe permitir filtrar los gastos según su fecha, índole o etiqueta.
- Se debe mostrar sumas totales para los datos con o sin filtro.
- Se debe mostrar resúmenes históricos de ingresos y egresos, individuales y combinados.
- Se debe permitir exportar los datos.

**No funcionales:**
- La interfaz debe funcionar sin conexión a internet.
- La carga debe ser rápida para el usuario.
- Se debe poder realizar un respaldo periódico y privado de los datos fuera del dispositivo, y recuperarlos.
# DOCUMENTAR EL RAZONAMIENTO

Generar evidencias del diseño y testing.

Para los diagramas de secuencia usar sequencediagram.org

Plantear los r
## Prior art
[Mis gastos](https://f-droid.org/es/packages/org.totschnig.myexpenses/)