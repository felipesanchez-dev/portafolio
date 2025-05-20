---
layout: /src/layouts/ProjectLayout.astro
title: "Juego: Laberinto de Moustros"
pubDate: 2025-05-19
description: "Laberinto de Monstruos Un emocionante juego 2D de acción y aventura, desarrollado en Python con la popular librería PyGame."
languages: ["python"]
image:
  url: "/images/projects/laberinto.webp"
  alt: "Laberinto de Monstruos"
---

Este proyecto es **open source**. Se ha puesto especial énfasis en la **Programación Orientada a Objetos (POO)** con el fin de crear una experiencia que no solo sea divertida, sino también profundamente didáctica.

## 📜 Sobre el Juego

En **Laberinto de Monstruos**, te encontrarás en una misteriosa isla habitada por criaturas hostiles. Tu misión es clara: explorar, combatir y superar a todos los monstruos y jefes formidables que custodian cada rincón. Solo al vencer a los guardianes de la isla podrás desbloquear el portal escondido y asegurar tu escape.

Estarás equipado con un variado arsenal de espadas y contarás con habilidades mágicas como regeneración, hechizos de daño en área ¡y mucho más! Prepárate para una aventura desafiante y entretenida. **Ten en cuenta que si tu contador de vida llega a cero (indicando que has muerto), el juego se reiniciará completamente sin guardar tus avances. ¡Esto añade una capa extra de dificultad a tu misión!**

## ✨ Características Principales

- **Exploración 2D:** Navega por una isla llena de secretos y peligros.
- **Combate Dinámico:** Enfréntate a diversos monstruos y jefes desafiantes.
- **Arsenal Variado:** Utiliza diferentes espadas para adaptarte a cada combate.
- **Poderes Mágicos:** Desata habilidades como regeneración, daño de área y más.
- **Progresión:** Derrota jefes para desbloquear el portal de escape.
- **Educativo:** Desarrollado con POO y PyGame, ideal para aprender y ver conceptos en acción.

## 🎮 Controles

Para navegar y luchar en la isla, necesitarás dominar los siguientes controles:

- **Movimiento:**
  - `⬆` - Mover Arriba
  - `⬇` - Mover Abajo
  - `⬅` - Mover Izquierda
  - `➡` - Mover Derecha
    _(El juego permite movimiento en 8 direcciones, incluyendo diagonales)._
- **Cambiar de Arma:** Tecla `Q`
- **Cambiar de Poder Mágico:** Tecla `W`
- **Atacar / Usar Habilidad:** `Barra Espaciadora`

## 👨‍💻 Desarrollo y Código Fuente

Este juego fue concebido y desarrollado por aprendizaje. El código fuente está completamente disponible para ti. ¡Siéntete libre de explorarlo, utilizarlo y modificarlo! Esperamos que te sirva como herramienta de aprendizaje y experimentación.

## 📚 ¡Tutorial Completo Próximamente!

Como parte de este proyecto, se ha realizado una **grabación completa de más de 10 horas** que documenta todo el proceso de desarrollo del juego, paso a paso. Este material se publicará en los próximos días en mi 🌐 **Sitio Web:** [felipesanchezdev.site](https://felipesanchezdev.site).

Actualmente, el sitio web se encuentra en mantenimiento mientras se implementa una nueva sección de blog. El tutorial completo se publicará en dicha sección tan pronto como esté disponible. ¡Mantente atento a las actualizaciones!

El objetivo es ofrecer un **tutorial exhaustivo y explicativo**, detallando qué significa cada línea de código y cómo se integran los diferentes componentes del juego. ¡Una oportunidad única para ver el desarrollo de un juego con PyGame desde cero!

---

¡Espero que disfrutes de **Laberinto de Monstruos** y que el código te sea de gran utilidad en tu camino de aprendizaje con Python y PyGame!

---

## 📄 Documentación

### 📁 `main.py`

> **Ubicación:** `client/src/main.py` > **Propósito:** Punto de entrada principal del juego **Laberinto de Moustros**. Inicializa la ventana, el bucle principal y la música, y gestiona los eventos globales.

## 1. Importaciones

- **socket:** (No utilizado directamente en este archivo, pero preparado para futuras funciones de red).
- **pygame, sys:** Librerías principales para gráficos, eventos y cierre del juego.
- **settings:** Importa constantes globales como `WIDTH`, `HEIGTH`, `FPS`, `WATER_COLOR`, etc.
- **Level:** Clase que gestiona la lógica del nivel, sprites y el jugador.

---

## 2. Clase `Game`

La clase principal que representa el ciclo de vida del juego.

### 2.1. `__init__`

- **Inicialización de Pygame:** Prepara todos los módulos de Pygame.
- **Ventana:** Crea la ventana del juego con el tamaño definido en `settings.py`.
- **Título:** Establece el nombre de la ventana.
- **Reloj:** Controla los FPS del juego.
- **Nivel:** Instancia la clase `Level`, que contiene toda la lógica del mapa, jugador y enemigos.
- **Música:** Carga y reproduce en bucle la música principal del juego.

---

### 2.2. `run`

- **Bucle principal:** Se ejecuta indefinidamente hasta que el usuario cierra la ventana.
- **Gestión de eventos:**
  - **Salir:** Si el usuario cierra la ventana, termina el programa limpiamente.
  - **Tecla `M`:** Alterna el menú de mejoras del jugador.
- **Dibujo:**
  - **Fondo:** Rellena la pantalla con el color del agua (`WATER_COLOR`).
  - **Nivel:** Llama al método `run()` de la clase `Level` para actualizar y dibujar todos los elementos del juego.
  - **Actualización:** Refresca la pantalla y mantiene la velocidad de fotogramas constante.

---

## 3. Ejecución del Juego

- Si el archivo se ejecuta directamente, crea una instancia de `Game` y llama a su método `run()` para iniciar el juego.

---

## 4. Eventos y Controles

- **Cerrar ventana:** Sale del juego.
- **Tecla `M`:** Abre/cierra el menú de mejoras del jugador.

---

## 5. Notas sobre el Audio

- El archivo de audio principal debe estar en `client/audio/main.ogg`.
- El volumen está reducido al 20% para no ser invasivo.
- La música se reproduce en bucle infinito durante toda la partida.

---

## 6. Dependencias

- [pygame](https://www.pygame.org/)
- Python 3.x
- Archivos y carpetas definidos en `settings.py` y `level.py`

## 📝 Resumen

Este archivo es el **corazón** del juego: inicializa la ventana, la música, el bucle principal y delega la lógica del juego a la clase `Level`. Es el punto de partida para cualquier modificación global del comportamiento del juego.

---

## 📁 `player.py`

> **Ubicación:** `client/src/player.py`  
> **Propósito:** Define la clase `Player`, que representa al jugador principal del juego, gestionando su movimiento, ataques, magias, animaciones, estadísticas y lógica de muerte/reinicio.

---

## 🧩 Paradigma: Programación Orientada a Objetos (POO)

Este archivo es un claro ejemplo de **POO** en Python.  
La clase `Player` hereda de la clase base `Entity`, encapsulando atributos y comportamientos propios del jugador.  
Esto permite reutilizar y extender funcionalidades, facilitando la mantenibilidad y escalabilidad del código.

## 1. Clase `Player`

### 1.1. Inicialización y atributos

- **Herencia:**  
  `Player` hereda de `Entity`, lo que le otorga capacidades de movimiento, animación y colisiones.
- **Atributos principales:**
  - `image`, `rect`, `hitbox`: Gráficos y colisiones.
  - `animations`: Diccionario de animaciones por estado.
  - `status`: Estado actual (ej: 'down', 'up_attack', etc).
  - `attacking`, `attack_cooldown`, `attack_time`: Control de ataques.
  - `weapon`, `magic`: Arma y magia equipadas, con índices para cambiar entre ellas.
  - `stats`, `max_stats`, `upgrade_cost`: Estadísticas y mejoras del jugador.
  - `health`, `energy`, `exp`, `speed`: Valores actuales de vida, energía, experiencia y velocidad.
  - `vulnerable`, `hurt_time`, `invulnerability_duration`: Control de daño e invulnerabilidad temporal.
  - `is_dead`, `trigger_game_restart`: Lógica de muerte y reinicio del juego.

### 1.2. Métodos principales

- **import_player_assets:**  
  Carga todas las animaciones del jugador desde los recursos gráficos.

- **input:**  
  Gestiona la entrada del usuario (movimiento, ataque, magia, cambio de arma/magia).  
  Si el jugador está muerto, ignora las entradas.

- **get_status:**  
  Actualiza el estado (`status`) del jugador según su movimiento y acciones.

- **cooldowns:**  
  Controla los tiempos de espera para ataques, cambios de arma/magia e invulnerabilidad.

- **animate:**  
  Actualiza el frame de animación según el estado actual y aplica efectos visuales (parpadeo al recibir daño).

- **get_full_weapon_damage / get_full_magic_damage:**  
  Calculan el daño total considerando estadísticas y arma/magia equipada.

- **energy_recovery:**  
  Recupera energía automáticamente según la estadística de magia.

- **update:**  
  Método principal llamado cada frame.  
  Gestiona entradas, actualizaciones de estado, movimiento, recuperación de energía, lógica de muerte y animación.

---

## 2. Principales responsabilidades

- **Movimiento y animación:**  
  El jugador puede moverse en 4 direcciones y tiene animaciones para cada estado (idle, ataque, etc).

- **Ataques y magias:**  
  Permite atacar con armas o lanzar magias, cada una con su propio cooldown y efectos.

- **Gestión de estadísticas:**  
  Vida, energía, ataque, magia, velocidad y experiencia, con posibilidad de mejorar mediante el menú de upgrades.

- **Invulnerabilidad temporal:**  
  Tras recibir daño, el jugador es invulnerable durante un breve periodo (efecto parpadeo).

- **Cambio de arma y magia:**  
  El jugador puede alternar entre diferentes armas y magias disponibles.

- **Muerte y reinicio:**  
  Si la vida llega a 0, se activa la bandera `is_dead` y se llama a la función de reinicio del juego.

---

## 3. Notas sobre el diseño

- **Extensible:**  
  Gracias a la herencia y la separación de responsabilidades, es fácil añadir nuevas armas, magias o comportamientos.

- **Encapsulamiento:**  
  Los atributos y métodos están bien organizados, facilitando el mantenimiento y la comprensión del código.

- **Reutilización:**  
  Al heredar de `Entity`, se evita duplicar lógica común entre jugador y enemigos.

## 📝 Resumen

El archivo `player.py` es un pilar fundamental del juego, implementando toda la lógica y comportamiento del personaje principal bajo un enfoque orientado a objetos.  
Permite una experiencia de juego fluida, personalizable y fácilmente ampliable.

---

## 📁 `ui.py`

> **Ubicación:** `client/src/ui.py`  
> **Propósito:** Gestiona y dibuja la interfaz gráfica de usuario (UI) del juego, mostrando barras de vida, energía, experiencia, armas y magias equipadas.

---

## 🧩 Paradigma: Programación Orientada a Objetos (POO)

La clase `UI` encapsula toda la lógica y los datos relacionados con la interfaz gráfica del jugador.  
Esto permite separar claramente la presentación visual del resto de la lógica del juego, facilitando la mantenibilidad y la extensión del código.

---

---

## 1. Clase `UI`

### 1.1. Inicialización y atributos

- **display_surface:**  
  Superficie principal donde se dibuja la UI (la ventana del juego).
- **font:**  
  Fuente utilizada para los textos de la interfaz.
- **health_bar_rect, energy_bar_rect, experience_bar_rect:**  
  Rectángulos que definen la posición y tamaño de las barras de vida, energía y experiencia.
- **weapon_graphics, magic_graphics:**  
  Listas de imágenes de armas y magias, cargadas desde los recursos definidos en `settings.py`.

### 1.2. Métodos principales

- **show_bar(current, max_amount, bg_rect, color):**  
  Dibuja una barra de progreso (vida, energía, experiencia) con su fondo y borde.

- **show_exp(exp):**  
  Muestra la cantidad actual de experiencia en la esquina inferior derecha de la pantalla.

- **selection_box(left, top, has_switched):**  
  Dibuja una caja de selección para indicar el arma o magia equipada, resaltando si ha habido un cambio reciente.

- **weapon_overlay(weapon_index, has_switched):**  
  Muestra el sprite del arma equipada en la interfaz, usando la caja de selección.

- **magic_overlay(magic_index, has_switched):**  
  Muestra el sprite de la magia equipada en la interfaz, usando la caja de selección.

- **display(player):**  
  Método principal que dibuja todos los elementos de la interfaz según el estado actual del jugador.

---

## 2. Principales responsabilidades

- **Visualización de estadísticas:**  
  Muestra de forma clara y visual la vida, energía y experiencia del jugador.
- **Equipamiento:**  
  Indica qué arma y magia están equipadas actualmente, con sprites y cajas de selección.
- **Feedback visual:**  
  Resalta los cambios de arma/magia y muestra la experiencia de forma destacada.

---

## 3. Notas sobre el diseño

- **Separación de responsabilidades:**  
  Toda la lógica de la interfaz está contenida en una sola clase, facilitando su modificación y extensión.
- **Escalabilidad:**  
  Es sencillo añadir nuevas barras, iconos o elementos visuales siguiendo el mismo patrón.
- **Reutilización:**  
  Los métodos como `show_bar` y `selection_box` pueden ser reutilizados para otros elementos visuales.

---

## 📝 Resumen

El archivo `ui.py` es esencial para la experiencia de usuario, proporcionando información visual clara y atractiva sobre el estado del jugador y sus recursos.  
Su diseño orientado a objetos permite mantener el código organizado y fácilmente ampliable.

---

# Guía de Instalación: Laberinto de Monstruos

Esta guía te ayudará a configurar el entorno de desarrollo para el proyecto "Laberinto de Monstruos". Se recomienda el uso de entornos virtuales de Python para gestionar las dependencias del proyecto de forma aislada.

## Requisitos Previos

- **Python 3.x:** Asegúrate de tener Python 3 instalado en tu sistema. Puedes descargarlo desde [python.org](https://www.python.org/).
- **Git:** Necesitarás Git para clonar el repositorio. Puedes descargarlo desde [git-scm.com](https://git-scm.com/).

# 📌 Nota Importante sobre Recursos Gráficos

Para acelerar el desarrollo de este proyecto, se han utilizado recursos visuales del excelente paquete **[Ninja Adventure Asset Pack](https://pixel-boy.itch.io/ninja-adventure-asset-pack)**, una creación de **Pixel-boy**.

> ✨ ¡Todo el reconocimiento y los créditos por el arte son para ellos! 🎨

---

## 💬 ¡Conectemos!

📧 **Correo:** [felipe@felipesanchezdev.site](mailto:felipe@felipesanchezdev.site) <br>
🔗 **GitHub del Proyecto:** [[Codigo fuente](https://github.com/felipesanchez-dev/Laberinto-de-Moustros)]

---
