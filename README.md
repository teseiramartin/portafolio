# Portfolio de Martin Teseira

Portfolio profesional desarrollado con React, TypeScript y Vite, con interfaz en español e inglés.

## Requisitos

- Node.js 22.13 o superior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Archivos principales

- `app/page.tsx`: composición de las secciones y proveedor de idioma.
- `app/components/`: encabezado, foto, código animado, proyectos, experiencia y contacto.
- `app/i18n/es.ts` y `en.ts`: traducciones tipadas, incluidos textos alternativos y mensajes del formulario.
- `app/hooks/`: preferencias de tema y movimiento reducido.
- `app/data/projects.ts`: imágenes, tecnologías y enlaces de proyectos.
- `app/services/contact.ts`: transporte del formulario, independiente de la interfaz.
- `app/globals.css` y `app/portfolio.css`: estilos base y de los componentes.
- `src/main.tsx` e `index.html`: entrada Vite y metadatos iniciales. `app/layout.tsx` es un archivo heredado y no es la entrada de producción.
- `public/`: CV, favicon y recursos públicos.

## Idioma y animaciones

El selector ES/EN guarda la preferencia localmente y actualiza el atributo `lang` del documento. El español es el idioma inicial. Para cambiar textos, editar los dos diccionarios; TypeScript comprueba su estructura. Las capturas conservan el idioma original de las aplicaciones. Ambos botones de descarga usan el CV del idioma seleccionado: `public/Martin_Teseira_CV.pdf` para español y `public/Martin_Teseira_CV_en.pdf` para inglés. Las rutas se definen en `common.cvFile` de cada diccionario.

El código se escribe una vez al entrar o cambiar de idioma y conserva un cursor parpadeante al terminar. Las secciones se revelan una vez al entrar en pantalla mediante IntersectionObserver, combinando aparición gradual, entradas laterales, desplazamiento vertical y escala con demoras breves entre tarjetas. El componente `Reveal` admite `variant` y `delay`. Con `prefers-reduced-motion` se muestra el contenido directamente y el cursor queda fijo. La foto y las galerías usan diálogos nativos con cierre por Escape y restauración del foco.

El menú de idioma admite teclado (flechas, Inicio, Fin, Enter y Escape) y cierre al hacer clic afuera. Las banderas SVG de Argentina y Reino Unido se incluyen localmente desde [flag-icons v7.5.0](https://github.com/lipis/flag-icons/tree/v7.5.0), bajo licencia MIT conservada en `public/assets/flags/LICENSE`.

## Formulario de contacto

Destino: `teseiramartin@gmail.com`. Se utiliza [FormSubmit AJAX](https://formsubmit.co/ajax-documentation) sin credenciales en el cliente. El nombre, correo, asunto y mensaje se envían a ese servicio; el campo `email` permite responder al visitante desde el correo recibido.

**Activación necesaria una sola vez por formulario/origen:** enviar un mensaje desde la URL publicada, abrir el correo de activación de FormSubmit en la casilla destinataria y confirmar el formulario. Revisar spam si no llega. Luego enviar una prueba desde producción y comprobar recepción. Una prueba en localhost no confirma la activación del dominio de Vercel. [Instrucciones del proveedor](https://formsubmit.co/help).

El formulario sólo informa aceptación si el proveedor responde con éxito; esto no garantiza entrega final en la casilla. Ante rechazo, error de red o espera superior a 20 segundos conserva el mensaje para reintentar. Incluye campo honeypot, validación nativa, límites de longitud y bloqueo de envíos simultáneos. El correo directo queda visible como alternativa.

## Verificación

```bash
npm test
npm run lint
npm run format:check
```

`npm test` comprueba tipos, compila y ejecuta las pruebas de contacto. Estas simulan respuestas del proveedor; no envían correos reales. ESLint valida el frontend activo con reglas de TypeScript y React Hooks. La prueba heredada `rendered-html.test.mjs` esperaba un worker de Vinext y no aplica a la salida Vite actual.
