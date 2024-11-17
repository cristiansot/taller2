# Taller 2

## MAIN.JS

## Scope de Variables

### Variables Declaradas

- **`equipoData`**  
  - **Scope:** Global.  
  - Declarada fuera de cualquier función, es accesible en todo el script.  
  - **Uso:** Almacena los datos extraídos del archivo `equipo.json`.

- **`cardsContainer`**  
  - **Scope:** Global.  
  - Selecciona el contenedor donde se insertarán dinámicamente las tarjetas.  
  - **Uso:** Se modifica directamente con el método `innerHTML` para renderizar contenido dinámico.

- **`dropdownItems`**  
  - **Scope:** Global.  
  - Contiene una lista de elementos del menú desplegable.  
  - **Uso:** Se itera sobre estos elementos para asignarles un evento `click`.

- **Variables dentro de funciones (`filteredData`, `especialidadSeleccionada`, `element`)**  
  - **Scope:** Local.  
  - Estas variables están declaradas con `let` dentro de funciones o bloques específicos.  
  - **Uso:** Se utilizan temporalmente para manipular datos o gestionar eventos dentro del ámbito de la función correspondiente.

---

## Uso de Operadores

### Operadores de Comparación

- **`===` y `!==`**  
  - **Uso:** Comparación estricta entre valores.  
  - Esto asegura que los valores y tipos coincidan.

### Operadores de Asignación

- **`=`**  
  - **Uso:** Asigna valores a las variables.  

### Operadores Lógicos

- **`&&` y `||`**  
  - **Uso:** Combinan condiciones lógicas.  

---

## Descripción del Código

### Propósito General
El código realiza las siguientes acciones principales:
1. **Carga de Datos:**  
   Utiliza `fetch` para obtener datos de un archivo `JSON` que contiene información de un equipo.
2. **Renderizado Dinámico:**  
   Genera tarjetas HTML dinámicamente según un filtro seleccionado.
3. **Interactividad:**  
   Permite a los usuarios filtrar las tarjetas a través de un menú desplegable.

## FORMULARIO DE CONTACTO

Este proyecto implementa un formulario de contacto interactivo donde el usuario ingresa su nombre, correo electrónico, asunto y mensaje. Los datos son validados antes de ser enviados, y se utiliza un sistema de "prompts" para recopilar los datos de manera interactiva.

## Descripción de la integración de prompts y validación de datos

El formulario está diseñado para que, al hacer clic en los campos de texto (nombre, correo electrónico, asunto y mensaje), se muestre un cuadro de diálogo (`prompt`) donde el usuario debe ingresar la información correspondiente. La integración de estos `prompts` se realiza mediante los siguientes eventos:

- **Campo de nombre**: Al hacer clic, el formulario solicita al usuario su nombre.
- **Campo de correo electrónico**: Al hacer clic, el formulario solicita el correo electrónico del usuario.
- **Campo de asunto**: Al hacer clic, el formulario solicita el asunto del mensaje.
- **Campo de mensaje**: Al hacer clic, el formulario solicita el mensaje que el usuario desea enviar.

Una vez que el usuario ha completado todos los campos, se valida la información ingresada antes de mostrar un mensaje de agradecimiento. Los criterios de validación son:

1. **Campos vacíos**: Si alguno de los campos está vacío, se mostrará una alerta pidiendo que se completen todos los campos.
2. **Nombre**: Se valida que el nombre no sea un número. Si el valor es un número, se muestra una alerta indicando que el nombre no es válido.
3. **Correo electrónico**: Se valida que el correo electrónico esté en el formato adecuado utilizando una expresión regular. Si el correo no es válido, se muestra una alerta indicando el error.

## Explicación del scope de variables y uso de operadores

En este proyecto se utilizan variables con el siguiente propósito:

- **`userNameInput`, `emailInput`, `asuntoInput`, `mensajeInput`, `submitBtn`**: Estas variables almacenan referencias a los elementos del DOM correspondientes a los campos del formulario y el botón de envío.
- **`emailValidation`**: Es una expresión regular que valida el formato del correo electrónico ingresado por el usuario.
- **Variables dentro de eventos**: En los controladores de eventos, se usan variables locales (por ejemplo, `userName`, `email`, `asunto`, `mensaje`) que contienen los valores ingresados por el usuario, y se utilizan para la validación y la generación del mensaje final.

### Uso de operadores:

- **Operador `!`**: En las validaciones de campos vacíos, se usa `!` para verificar si una variable está vacía.
- **Operador `trim()`**: Se utiliza para eliminar los espacios en blanco antes y después del texto ingresado por el usuario.
- **Operador `test()`**: Se utiliza para comprobar si el correo electrónico cumple con el formato adecuado según la expresión regular definida en `emailValidation`.

## Instrucciones sobre el uso del debugger y manejo de errores con try/catch

### Uso del Debugger

Para depurar el código en el navegador, sigue estos pasos:

1. Abrir las herramientas de desarrollo del navegador con `F12` o `Ctrl + Shift + I`.
2. Ir a la pestaña **Sources** (Fuentes).
3. Colocar puntos de interrupción (breakpoints) en el código donde se desea detener la ejecución y examinar el estado de las variables.
4. Usar el botón **Step Over** (Paso por encima) para avanzar por el código línea por línea y observar el flujo de ejecución.

### Manejo de Errores con try/catch

El bloque `try/catch` se utiliza para manejar posibles errores en el código. Si algo sale mal dentro del bloque `try`, el flujo de ejecución se detiene y el error se captura en el bloque `catch`, donde puedes mostrar un mensaje adecuado al usuario.

En este proyecto, el bloque `try/catch` envuelve la lógica de validación y envío del formulario. Si ocurre un error durante este proceso (por ejemplo, si hay un error inesperado con las validaciones), se captura y se muestra una alerta con el mensaje del error.