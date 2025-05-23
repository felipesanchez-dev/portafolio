---
layout: /src/layouts/ProjectLayout.astro
title: "ChatGPT Assistant"
pubDate: 2025-04-07
description: "ChatGPT Assistant es una aplicación desarrollada con Expo y TypeScript. Este proyecto sirve como una demostración básica de cómo utilizar los modelos de OpenAI para generación de texto"
languages: ["react", "expo"]
image:
  url: "/images/projects/ChatGPT.webp"
  alt: "Interfaz de usuario de la app móvil de pronóstico del clima"
---

**ChatGPT Assistant** es una aplicación desarrollada con **Expo** y **TypeScript**. Este proyecto sirve como una demostración básica de cómo utilizar los modelos de OpenAI para generación de texto, generación de imágenes y funcionalidades de conversión de voz a texto. Los usuarios pueden interactuar con estos modelos a través de la aplicación, la cual es compatible con plataformas **Android**, **iOS** y **Web**.

<div class="mt-5 mb-8 flex flex-wrap gap-4">

  <div class="w-fit h-fit from-transparentbg-conic/[from_var(--border-angle)] p-px hover:shadow-lg hover:shadow-mint-500/30 rounded-full animate-rotate-border">
    <a style="text-decoration:none" href="https://github.com/felipesanchez-dev/ChatIA-GPT"
       class="group cursor-pointer leading-none hover:scale-110 font-medium flex gap-2 transition-all ease-in-out justify-center items-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 max-xl:px-5 max-sm:py-2 max-sm:px-3 text-lg max-xl:text-base max-sm:text-sm dark:bg-zinc-800 bg-zinc-800 no-underline decoration-none"
       target="_blank" rel="noopener noreferrer" role="button" aria-label="Ver código fuente del proyecto Huellitas en Casa en GitHub">
      <svg class="size-7" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M51.8,25.1C47.1,15.6,37.3,9,26,9S4.9,15.6,0.2,25.1c-0.3,0.6-0.3,1.3,0,1.8C4.9,36.4,14.7,43,26,43 s21.1-6.6,25.8-16.1C52.1,26.3,52.1,25.7,51.8,25.1z M26,37c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S32.1,37,26,37z"></path> <path d="M26,19c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S29.9,19,26,19z"></path> </g> </g></svg>
      <span class="decoration-none text-gray-200">Ver Demo</span>
    </a>
  </div>

  <div class="w-fit h-fit from-transparentbg-conic/[from_var(--border-angle)] p-px hover:shadow-lg hover:shadow-mint-500/30 rounded-full animate-rotate-border">
    <a style="text-decoration:none" href="https://github.com/felipesanchez-dev/ChatIA-GPT"
       class="group cursor-pointer leading-none hover:scale-110 font-medium flex gap-2 transition-all ease-in-out justify-center items-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 max-xl:px-5 max-sm:py-2 max-sm:px-3 text-lg max-xl:text-base max-sm:text-sm dark:bg-zinc-800 bg-zinc-800 no-underline decoration-none"
       target="_blank" rel="noopener noreferrer" role="button" aria-label="Ver código fuente del proyecto Huellitas en Casa en GitHub">
      <svg class="size-7" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#ffffff]"> </path> </g> </g> </g> </g></svg>
      <span class="decoration-none text-gray-200">Ver Código</span>
    </a>
  </div>
  
</div>

## 🚀 Características

- **Generación de Texto:** Genera texto utilizando los modelos GPT de OpenAI a partir de un **prompt** proporcionado por el usuario.
- **Generación de Imágenes:** Crea imágenes basadas en descripciones textuales utilizando el modelo **DALL-E** de OpenAI.
- **Conversión de Voz a Texto:** Convierte las palabras habladas en texto mediante el modelo de reconocimiento de voz de OpenAI.
- **Demo Interactiva:** Accede a una demo funcional de la aplicación donde puedes probar en vivo la interacción con los modelos de OpenAI.

## Interactuar con la Demo de la Aplicación

Demo Interactiva: Si quieres probar una demo funcional de la aplicación sin necesidad de realizar ninguna configuración adicional, solo haz clic en el botón de "Iniciar Demo" que aparecerá en la interfaz principal. Esto descargará la demo de la aplicación directamente y podrás experimentar la interacción con los modelos de OpenAI.

## 📱 Plataformas Compatibles

- **Android:** Accede a la aplicación desde cualquier dispositivo Android.  
  [Apk Demo [.apk]](https://expo.dev/artifacts/eas/6vaEZKC7Cfsx8xATErykjk.apk)

- **iOS:** La aplicación es compatible con dispositivos Apple (iPhone, iPad).
- **Web:** Puedes usar la aplicación directamente en tu navegador.

### 🔧 Personalización

API Keys de OpenAI:
Para utilizar los modelos de OpenAI, necesitarás obtener tus claves API. Sigue estos pasos:

Dirígete a OpenAI y crea una cuenta o inicia sesión.
Genera tus claves API desde el panel de OpenAI.
Añade tu clave API en la aplicacion en la seccion de **API KEY**

### 🚨 Recuerda:

Asegúrate de tener tus credenciales API configuradas correctamente para que la aplicación funcione sin problemas. Si no configuraste tu clave API correctamente, la app no podrá interactuar con los servicios de OpenAI.

> **Nota:**  
> La demo está diseñada para ofrecer una experiencia rápida y sencilla. Si deseas modificar la aplicación o realizar pruebas más avanzadas, te recomendamos seguir los pasos de instalación y configuración detallados anteriormente.

## 🛠️ Tecnologías Usadas

#### **Expo** (para desarrollo de aplicaciones multiplataforma)

#### **TypeScript** (para garantizar la robustez del código)

#### **OpenAI API** (para utilizar los modelos de generación de texto, imágenes y voz a texto)

#### **React Native** (para la construcción de la interfaz móvil)

#### Web (funciona en navegadores)

## 🌐 Uso

## 📄 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Eres libre de utilizar, modificar y distribuir el código. ¡Las contribuciones son bienvenidas! 😊

## 💬 Codigo fuente y soporte!

¿Tienes alguna pregunta sobre el proyecto, ideas para nuevas funcionalidades, o simplemente quieres charlar sobre desarrollo móvil y tecnologías? ¡Me encantaría escucharte!

📧 **Correo:** [felipe@felipesanchezdev.site](mailto:felipe@felipesanchezdev.site) <br>
🔗 **GitHub del Proyecto:** [[Codigo fuente](https://github.com/felipesanchez-dev/ChatIA-GPT)]

---
