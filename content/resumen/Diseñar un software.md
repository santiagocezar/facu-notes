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
- Controlar los consumos e ingresos del usuario comparando con un presupuesto estimado por el usuario que se renueva automáticamente cada cierto periodo de tiempo.
- **Registrar los datos básicos de un movimiento, si es consumo o ingreso, la fecha, el lugar, el monto y que moneda.**
- **Editar datos de movimientos existentes para corregir y agregar más información, la índole del movimiento, datos del tercero, etiquetas definidas por el usuario, comprobantes o notas.**
- **Saber cuando, donde y con que tercero se realizó cierto movimiento.**
- Registrar movimientos usando un comprobante de compra o transferencia.
- Exportar e importar datos en formato de tabla.
- **Comparar el valor en moneda local, histórico y actual para movimientos en moneda extranjera.**
- Generar resúmenes de los movimientos para distintos periodos de tiempo, con totales, cuáles fueron los mayores consumos o ingresos y agrupándolos por índole.

**No funcionales:**
- Debe funcionar sin conexión a internet.
- Debe realizar un respaldo periódico y privado de los datos fuera del dispositivo.
- La importación de los datos debe tener retrocompatibilidad
- La carga debe ser rápida para el usuario.


**Viejos:**
- Ordenar el listado por fecha o monto.
- Agrupar el listado por distintos periodos de tiempo (día, mes, año).
- Filtrar los movimientos por sus datos identificatorios (fecha, índole, etiquetas)
- Buscar movimientos por su contenido
- Mostrar en un mapa los lugares donde se registraron movimientos.
- Convertir precios entre dólares y pesos.
- Mostrar información sobre un movimiento
- Se debe mostrar resúmenes históricos de ingresos y egresos, individuales y combinados.
- Exportar los datos.
- Importar los datos.
# DOCUMENTAR EL RAZONAMIENTO

Generar evidencias del diseño y testing.

Para los diagramas de secuencia usar sequencediagram.org

- Diagramas BPMN
- Los requerimientos SON LO QUE EL USUARIO NECESITA
- Diagramas de casos de uso NO HACE FALTA PQ ESTÁ EL BPMN
- Descripciones de casos de uso PARA LOS QUE IMPLEMENTEMOS EN EL PROTOTIPO
- Un prototipo
- 5 casos de prueba
- Mockup

```mermaid

```
## Prior art
[Mis gastos](https://f-droid.org/es/packages/org.totschnig.myexpenses/)