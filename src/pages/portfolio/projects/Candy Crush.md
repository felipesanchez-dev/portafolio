---
layout: /src/layouts/ProjectLayout.astro
title: "Candy Crush (En desarrollo👷🏻‍♂️)"
pubDate: 2025-05-28
description: "Este es un proyecto de Candy Crush desarrollado en React Native, un clon del popular juego de puzzle donde los jugadores deben hacer coincidir dulces para obtener puntos."
languages: ["react"]
image:
  url: "/images/projects/candy-crush.png"
  alt: "Interfaz de usuario de la app móvil de pronóstico del clima"
---

Este documento proporciona una visión general completa del repositorio de  **Candy Crush** desarrollador en  React Native, un juego de rompecabezas móvil match-3 construido con React Native 0.76.5. El juego implementa mecánicas clásicas de coincidencia de dulces con progresión de nivel, seguimiento de puntuación y sistemas de retroalimentación audiovisual.


<div class="mt-5 mb-8 flex flex-wrap gap-4">

  <div class="w-fit h-fit from-transparentbg-conic/[from_var(--border-angle)] p-px hover:shadow-lg hover:shadow-mint-500/30 rounded-full animate-rotate-border">
    <a style="text-decoration:none" href="https://github.com/felipesanchez-dev/Candy-Crush"
       class="group cursor-pointer leading-none hover:scale-110 font-medium flex gap-2 transition-all ease-in-out justify-center items-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 max-xl:px-5 max-sm:py-2 max-sm:px-3 text-lg max-xl:text-base max-sm:text-sm dark:bg-zinc-800 bg-zinc-800 no-underline decoration-none"
       target="_blank" rel="noopener noreferrer" role="button" aria-label="Ver código fuente del proyecto Huellitas en Casa en GitHub">
      <svg class="size-7" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M51.8,25.1C47.1,15.6,37.3,9,26,9S4.9,15.6,0.2,25.1c-0.3,0.6-0.3,1.3,0,1.8C4.9,36.4,14.7,43,26,43 s21.1-6.6,25.8-16.1C52.1,26.3,52.1,25.7,51.8,25.1z M26,37c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S32.1,37,26,37z"></path> <path d="M26,19c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S29.9,19,26,19z"></path> </g> </g></svg>
      <span class="decoration-none text-gray-200">Ver Demo</span>
    </a>
  </div>

  <div class="w-fit h-fit from-transparentbg-conic/[from_var(--border-angle)] p-px hover:shadow-lg hover:shadow-mint-500/30 rounded-full animate-rotate-border">
    <a style="text-decoration:none" href="https://github.com/felipesanchez-dev/Candy-Crush"
       class="group cursor-pointer leading-none hover:scale-110 font-medium flex gap-2 transition-all ease-in-out justify-center items-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 max-xl:px-5 max-sm:py-2 max-sm:px-3 text-lg max-xl:text-base max-sm:text-sm dark:bg-zinc-800 bg-zinc-800 no-underline decoration-none"
       target="_blank" rel="noopener noreferrer" role="button" aria-label="Ver código fuente del proyecto Huellitas en Casa en GitHub">
      <svg class="size-7" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#ffffff]"> </path> </g> </g> </g> </g></svg>
      <span class="decoration-none text-gray-200">Ver Código</span>
    </a>
  </div>
  
</div>

## Arquitectura de Alto Nivel
La aplicación sigue una arquitectura modular React Native con una clara separación entre la navegación, la lógica del juego, la gestión del estado y los componentes de UI.
<a href="/images/arquitectura.png">
<img src="/images/arquitectura.png" alt="Foto de la Programathon CUN | Felipe Reyes Sanchez" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;" />
</a>

## Características y Tecnologías Clave

# Características del Juego Principal

## Características del Juego Principal

<style>
  .tabla-modo th,
  .tabla-modo td {
    background-color: white;
    color: black;
    border: 1px solid #ddd; /* para que se vea el borde */
    padding: 8px;
  }
  .tabla-modo {
    border-collapse: collapse;
    width: 100%;
  }
</style>

<table class="tabla-modo">
  <thead>
    <tr>
      <th>Característica</th>
      <th>Implementación</th>
      <th>Componentes Clave</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nivel de Progresión</td>
      <td>Gestión del estado de Zustand con persistencia MMKV</td>
      <td><code>useLevelStore</code>, <code>gameLevels</code></td>
    </tr>
    <tr>
      <td>Juego de Match-3</td>
      <td>Coincidencia de azulejos a base de cuadrícula con gestos</td>
      <td><code>GameTile</code>, <code>gridUtils</code></td>
    </tr>
    <tr>
      <td>Sistema de Audio</td>
      <td>Gestión sonora basada en contexto</td>
      <td><code>SoundContext</code>, <code>SoundUtility</code></td>
    </tr>
    <tr>
      <td>Animaciones</td>
      <td>Lottie animaciones y Reanimado</td>
      <td><code>LottieView</code>, <code>useAnimatedStyle</code></td>
    </tr>
    <tr>
      <td>UI Responsive</td>
      <td>Componentes escalables con retroalimentación de gestos</td>
      <td><code>ScalePress</code>, <code>react-native-responsive-fontsize</code></td>
    </tr>
  </tbody>
</table>

## Tecnología Stack
La aplicación se basa en React Native 0.76.5 con las siguientes dependencias clave:

* Navegación: __@react-navigation/native__ para la gestión de pantalla
* Gestión Estatal: __zustand__ para el estado global con react-native-mmkv persistencia
* Animaciones: __react-native-reanimated__ y lottie-react-native
* Audio: __react-native-sound-player__ para efectos de sonido
* Gestos: __react-native-gesture-handler__ para interacciones táctiles

## Flujo de Aplicación y Navegación de Pantalla

El juego sigue un flujo de navegación lineal con persistencia de estado en todas las sesiones.

<a href="/images/flujo.png">
<img src="/images/flujo.png" alt="Foto de la Programathon CUN | Felipe Reyes Sanchez" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;" />
</a>

## Lógica del Juego

El sistema __Game Logic__ implementa la mecánica de juego central y las reglas para el juego de estilo **Candy Crush**. Este sistema es responsable de administrar la cuadrícula del juego, manejar las interacciones de los mosaicos, implementar la detección de coincidencias, el cálculo de puntuación y hacer cumplir las reglas del juego. __Game Logic__ sirve como el controlador central para todas las mecánicas de juego que ocurren durante las sesiones de juego activas.

### Integración de la Tienda de Nivel

El sistema Game Logic debe coordinarse con Level Store para el seguimiento del progreso y la gestión de la configuración del nivel.
<style>
  .tabla-modo th,
  .tabla-modo td {
    background-color: white;
    color: black;
    border: 1px solid #ddd;
    padding: 8px;
  }
  .tabla-modo {
    border-collapse: collapse;
    width: 100%;
  }
</style>

<table class="tabla-modo">
  <thead>
    <tr>
      <th>Punto de Integración</th>
      <th>Propósito</th>
      <th>Estado de Implementación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Configuración de Nivel</td>
      <td>Cargue reglas y objetivos específicos del nivel</td>
      <td>Planificado</td>
    </tr>
    <tr>
      <td>Seguimiento de Progreso</td>
      <td>Actualizar el estado de finalización y los puntajes</td>
      <td>Planificado</td>
    </tr>
    <tr>
      <td>Gestión de Puntuación Alta</td>
      <td>Rastrea y persiste las mejores puntuaciones</td>
      <td>Planificado</td>
    </tr>
    <tr>
      <td>Sistema de Logro</td>
      <td>Desbloquea logros basados en el rendimiento</td>
      <td>Planificado</td>
    </tr>
  </tbody>
</table>

## Funcionalidades Implementadas

### Sistema de Progresión

* 10 niveles únicos con diferentes configuraciones
* Sistema de desbloqueo progresivo
* Almacenamiento de puntuaciones máximas
* Persistencia de progreso entre sesiones

### Interfaz de Usuario
* Diseño responsivo adaptable a diferentes tamaños de pantalla
* Animaciones fluidas con Reanimated
* Sistema de navegación intuitivo
* Feedback visual y auditivo


## 💬 Codigo fuente y soporte!

¿Tienes alguna pregunta sobre el proyecto, ideas para nuevas funcionalidades, o simplemente quieres charlar sobre desarrollo móvil y tecnologías? ¡Me encantaría escucharte!

📧 **Correo:** [felipe@felipesanchezdev.site](mailto:felipe@felipesanchezdev.site) <br>
🔗 **GitHub del Proyecto:** [[Codigo fuente](https://github.com/felipesanchez-dev/Candy-Crush)]

---
