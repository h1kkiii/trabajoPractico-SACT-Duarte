# trabajoPractico-SACT-Duarte

Este repositorio contiene dos versiones del sitio web "Colores": una estática y otra servida con un servidor Node.js.

## Type1: Versión Estática
La carpeta `type1` contiene la versión original del sitio, que se ejecuta directamente en el navegador sin necesidad de un servidor.

### Cómo ejecutar:
1. Abre el archivo `type1/index.html` directamente en tu navegador web haciendo doble clic en el archivo.
2. El sitio cargará con la funcionalidad completa: un campo de entrada de texto y un botón que cambia de colores al hacer clic.

### Funcionalidad:
- Campo de texto: Al presionar Enter, muestra una alerta con el texto introducido (o un mensaje si está vacío).
- Botón: Cicla entre 3 estados de colores al hacer clic.

## Type2: Versión con Servidor Node.js
La carpeta `type2` contiene la misma funcionalidad, pero servida a través de un servidor HTTP usando Node.js, Express y dotenv para configuración de variables de entorno.

### Requisitos:
- Node.js instalado (versión 14 o superior).
- Navega a la carpeta `type2` en la terminal.

### Cómo ejecutar:
1. Instala las dependencias: `npm i`.
2. Crea un archivo `.env` en `type2` con la configuración (`PORT=3000`).
3. Ejecuta el servidor: `node servidor.js`.
4. Abre tu navegador y ve a `http://localhost:3000`.
5. El sitio cargará con la misma funcionalidad que `type1`.

### Notas:
Me olvidé de poner la carpeta node_modules en el `.gitignore`.