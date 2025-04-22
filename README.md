# Portafolio Web - Omar Caiguan Ojeda

Portafolio profesional desarrollado con React, TypeScript y Vite. Presenta mis proyectos, tecnologías dominadas y permite contacto directo. El sitio es moderno, responsivo y cuenta con animaciones fluidas para una experiencia de usuario atractiva.

## Características principales

- **Navbar interactivo:**
  - Navegación fluida entre secciones: Sobre mí, Tecnologías, Proyectos y Contacto.
  - Soporte para scroll suave a secciones específicas del About.
  - Menú hamburguesa responsivo para dispositivos móviles.

- **Animaciones avanzadas:**
  - Transiciones de entrada y salida usando Framer Motion.
  - Animación tipo máquina de escribir en la sección "Sobre mí".
  - Animaciones reveal suaves y repetibles al hacer scroll en títulos, tarjetas y secciones.
  - Iconos de tecnologías con efecto de agrandamiento al pasar el mouse.
  - Imágenes de proyectos con zoom y desenfoque inicial (blur-to-sharp) al cargar y efecto zoom al hover.
  - Botones y campos de formularios animados (scale y glow al interactuar).

- **Páginas y secciones:**
  - **Home:** Presentación personal, animación de bienvenida y acceso rápido a About.
  - **About:**
    - Sección "Sobre mí" con animación de texto tipo máquina de escribir.
    - Tecnologías agrupadas por categorías, cada icono tiene efecto interactivo.
    - Proyectos destacados con imágenes animadas (blur y zoom), links a GitHub y despliegues.
    - Sección de contacto y formulario funcional vía EmailJS, con campos y botón animados.

- **Integraciones:**
  - **Framer Motion:** Animaciones de componentes y transiciones.
  - **React Router:** Navegación SPA entre Home y About.
  - **EmailJS:** Formulario de contacto funcional (requiere variables en `.env`).
  - **React Icons:** Iconografía moderna y variada.

- **Estilo y UX:**
  - Diseño responsive adaptado a móviles y escritorio.
  - Fondo animado tipo "matrix".
  - Favicon personalizado.

## Instalación y uso

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/omar-caiguan-ojeda/omar-caiguan-portfolio.git
   cd omar-caiguan-portfolio
   ```
2. **Instala dependencias:**
   ```sh
   npm install
   ```
3. **Configura EmailJS (opcional):**
   Crea un archivo `.env` con tus claves de EmailJS:
   ```env
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_USER_ID=tu_user_id
   ```
4. **Inicia el proyecto:**
   ```sh
   npm run dev
   ```

## Estructura del proyecto

- `src/components/`: Componentes reutilizables (Navbar, Footer, CodeBackground, etc).
- `src/pages/`: Páginas principales (Home, About).
- `index.html`: Entrada principal y referencia al favicon.
- `icon.png`: Favicon personalizado.

## Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza el build localmente.

## Créditos y agradecimientos

- [React](https://react.dev/), [Vite](https://vitejs.dev/), [Framer Motion](https://www.framer.com/motion/), [EmailJS](https://www.emailjs.com/), [React Icons](https://react-icons.github.io/react-icons/)

---

Desarrollado por **Omar Leonardo Caiguan Ojeda**

---

> Siéntete libre de usar este portafolio como inspiración para tus propios proyectos.
