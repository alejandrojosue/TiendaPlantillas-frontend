<a name="readme-top"></a>

<div align="center">

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url] -->

# Web oficial de Plataforma de Contratación Freelance y Venta de Plantillas 🌟

¡Bienvenido a la web oficial de la Plataforma de Contratación Freelance y Venta de Plantillas! Aquí encontrarás toda la información relevante sobre nuestro proyecto y cómo contribuir a él.
[Reportar error](https://github.com/alejandrojosue/TiendaPlantillas-frontend/issues) · [Sugerir algo](https://github.com/alejandrojosue/TiendaPlantillas-frontend/issues)
</div>


## Características principales

- **Contratación Freelance**: Conoce los detalles de cómo contratar freelancers para tus proyectos.
- **Venta de Plantillas**: Explora una amplia variedad de plantillas disponibles para su compra.
- **Información sobre el Proyecto**: Accede a detalles sobre el proyecto, su misión y visión.

<details>
<summary>Tabla de contenidos</summary>

- [Web oficial de Plataforma de Contratación Freelance y Venta de Plantillas 🌟](#web-oficial-de-plataforma-de-contratación-freelance-y-venta-de-plantillas-)
  - [Características principales](#características-principales)
  - [Para empezar](#para-empezar)
    - [Prerequisitos](#prerequisitos)
  - [Contribuir al proyecto](#contribuir-al-proyecto)
  - [🚀 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🧞 Comandos](#-comandos)
  - [🛠️ Stack](#️-stack)

</details>

## Para empezar

### Prerequisitos

- NVM (recomendado para asegurar versión de Node) ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

  ```sh
  nvm use
  # o
  nvm use <version>
  ```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Contribuir al proyecto

Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. ¡Cualquier contribución que hagas es **muy apreciada**!

Si tienes alguna sugerencia que podría mejorar el proyecto, por favor haz un [_fork_](https://github.com/alejandrojosue/TiendaPlantillas-frontend/fork) del repositorio y crea una [_pull request_](https://github.com/alejandrojosue/TiendaPlantillas-frontend/pulls). También puedes simplemente abrir un [_issue_](https://github.com/alejandrojosue/TiendaPlantillas-frontend/issues) con la etiqueta "enhancement".

Aquí tienes una guía rápida:

1. Haz un [_fork_](https://github.com/alejandrojosue/TiendaPlantillas-frontend/fork) del Proyecto
2. Clona tu [_fork_](https://github.com/alejandrojosue/TiendaPlantillas-frontend/fork) (`git clone <URL del fork>`)
3. Añade el repositorio original como remoto (`git remote add upstream <URL del repositorio original>`)
4. Crea tu Rama de Funcionalidad (`git switch -c feature/CaracteristicaIncreible`)
5. Realiza tus Cambios (`git commit -m 'Add: alguna CaracterísticaIncreible'`)
6. Haz Push a la Rama (`git push origin feature/CaracteristicaIncreible`)
7. Abre una [_pull request_](https://github.com/alejandrojosue/TiendaPlantillas-frontend/pulls)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🚀 Estructura del Proyecto

Dentro del proyecto, verá las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── css/
│   ├── env/
│   ├── hooks/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── maper/
│   ├── pages/
│   ├── repositories/
│   ├── types/
│   └── util/
└── package.json
```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta según su nombre de archivo.

En `src/components/` es donde se colocan los componentes hechos con Astro/React/Vue/Svelte/Preact.

Cualquier activo estático, como imágenes, se puede colocar en el directorio `public/`.

Directorio `src/repositories/` es donde se crearan todas las conexiones a las apis que deba conectarse para mantener totalmente funcional el proyecto.

Todos los tipos de datos enviados u obtenidos por la api se encontrarán en `src/types/`.

`src/hooks/` En este directorio se colocan los hooks personalizados de Preact que se utilizan en toda la aplicación.

Las utilidades y funciones auxiliares que pueden ser reutilizadas en diferentes partes del proyecto se encuentra en `src/util/`.

En `src/env/` se encuentran los archivos relacionados con la configuración del entorno, como variables de entorno necesarias para la configuración del proyecto.

En `src/layouts/` se colocan los layouts utilizados en las páginas de la aplicación. Los layouts son plantillas que permiten reutilizar estructuras comunes entre diferentes páginas.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal.

| Comandos                  | Descripción                                           |
| :------------------------ | :---------------------------------------------------- |
| `npm install`             | Instalar dependencias                                 |
| `npm run dev`             | Iniciar servidor local dev en `localhost:4321`        |
| `npm run build`           | Contruye para producción tu proyecto `./dist/`        |
| `npm run preview`         | Vista previa de su compilación antes de implementarla |
| `npm run astro ...`       | Ejecute comandos CLI como `astro add`, `astro check`  |
| `npm run astro -- --help` | Obtenga ayuda para usar Astro CLI                     |

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🛠️ Stack

- [![Astro][astro-badge]][astro-url] - El framework web para sitios web impulsados por contenido.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript con sintaxis para tipos.
- [![Tailwind CSS][tailwind-badge]][tailwind-url] - Un framework CSS de utilidades para construir diseños personalizados rápidamente.
- [![Strapi][strapi-badge]][strapi-url] - Headless CMS para gestionar contenido.
- [![Preact][preact-badge]][preact-url] - Librería de frontend más veloz y ligera queReact.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[astro-url]: https://astro.build/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[strapi-url]: https://github.com/strapi/strapi
[preact-url]: https://preactjs.com/

[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logo=astro&logoColor=bd303a&color=352563
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[animations-badge]: https://img.shields.io/badge/@alejandrojosue/tailwind-animations-ff69b4?style=for-the-badge&logo=node.js&logoColor=white&color=blue
[strapi-badge]: https://img.shields.io/badge/Strapi-000000?style=for-the-badge&logo=strapi&logoColor=2e7df7&color=black
[preact-badge]: https://img.shields.io/badge/preact-bage?style=for-the-badge&logo=preact&logoColor=white&color=673ab8

[contributors-url]: https://github.com/alejandrojosue/TiendaPlantillas-frontend/graphs/contributors
[contributors-shield]: https://img.shields.io/github/contributors/alejandrojosue/TiendaPlantillas-frontend.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/alejandrojosue/TiendaPlantillas-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/alejandrojosue/TiendaPlantillas-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/alejandrojosue/TiendaPlantillas-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/alejandrojosue/TiendaPlantillas-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/alejandrojosue/TiendaPlantillas-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/alejandrojosue/TiendaPlantillas-frontend/issues


<!-- 
Para generar las etiquetas como esta:
[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logo=astro&logoColor=bd303a&color=352563

1. hay que visitar: https://shields.io/badges
2. En el panel derecho, llenar los campos: badge-Content, style (for-the-bagde), logo (tecnología como astro), colot y logoColor.
3. seleccionar formato al final (url, md, ...)
4. Ejecutar y copiar al final
-->