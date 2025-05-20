---
layout: /src/layouts/ProjectLayout.astro
title: "Huellitas en Casa"
pubDate: 2025-05-19
description: "Huellitas en Casa es una Aplicación Web Progresiva (PWA) integral diseñada para refugios de animales y organizaciones de rescate como la Fundación CAPA"
languages: ["React", "tailwind", "firebase", "ts", "cloudinary", "nextjs"]
image:
  url: "/images/projects/Huellitas.webp"
  alt: "Laberinto de Monstruos"
---

"Huellitas en Casa" es una Aplicación Web Progresiva (PWA) integral diseñada para refugios de animales y organizaciones de rescate como la Fundación CAPA. Permite gestionar eficientemente mascotas (incluyendo historiales clínicos con IA), rastrear adopciones, manejar comunicaciones internas (anuncios) y tareas, administrar donaciones y voluntarios, procesar reportes de maltrato animal con seguimiento, y gestionar jornadas de atención veterinaria. Proporciona una interfaz amigable y basada en roles (Admin, Veterinario, Colaborador) para que el personal maneje las tareas diarias, asegurando que los animales reciban el mejor cuidado y encuentren hogares amorosos, al mismo tiempo que empodera al público para reportar incidentes y solicitar adopciones. Ideal para la adopción de perros y gatos en Ibagué, Tolima.

## ✨ Características Principales ✨

- **📊 Dashboard Interactivo y Personalizado por Rol:**
  - Resumen de métricas cruciales según el rol del usuario (Admin, Veterinario, Colaborador).
  - **Admin:** Métricas completas (total de mascotas, adoptadas, disponibles, en tratamiento, visitas programadas, solicitudes de adopción pendientes, voluntarios activos, donaciones del mes, denuncias recientes, jornadas activas). Gráficos de tendencias de adopciones, donaciones y denuncias (con filtros por tipo de reporte, barrio, etc.).
  - **Veterinario:** Estadísticas de mascotas (total, en tratamiento, próximas citas), mini-calendario con citas veterinarias y tareas.
  - **Colaborador:** Estadísticas básicas de mascotas, tareas asignadas, jornadas activas.
  - Mini-calendario integrado para próximas visitas veterinarias, tareas y eventos (incluye eventos de jornadas).
  - Sección de "Acciones Frecuentes" para acceso rápido a funcionalidades clave según el rol.
- **🐶 Gestión Integral de Mascotas:**
  - 🐾 Registrar nuevas mascotas (perros, gatos u otras especies).
  - 🐾 Ver una lista detallada de todas las mascotas registradas con capacidades de búsqueda y filtrado.
  - 🐾 Editar información existente de las mascotas.
  - 🐾 Eliminar registros de mascotas (con borrado de imagen asociada en Cloudinary).
  - 🐾 Almacenar detalles completos: nombre, especie, raza, edad, sexo, color, estado (disponible, adoptado, tratamiento, fallecido), información de salud (registros de vacunación específicos por especie con checkboxes, o manual para "otro"; estado de esterilización), peso y observaciones.
  - 🐾 Carga de imágenes personalizadas a Cloudinary (carpeta `Capa Ibague/mascotas`) o uso de imágenes predeterminadas por especie (perro/gato) si no se carga una. Modal para visualización ampliada de imágenes.
  - 🐾 **Historial Clínico con IA:**
    - Registrar y gestionar visitas veterinarias para cada mascota desde su ficha o el calendario.
    - Sección de detalles clínicos en la visita (motivo, diagnóstico, tratamiento, medicamentos, seguimiento, veterinario).
    - Botón para generar un historial clínico completo en formato Markdown asistido por IA (Genkit/Gemini), basado en todas las visitas registradas.
    - Opción para descargar el historial clínico en formato PDF estilizado.
- **🏡 Gestión de Adopciones Avanzada:**
  - 🐾 **Página Pública de Adopción (`/adopt`):** Galería de mascotas disponibles para adopción (estado "disponible"), accesible sin iniciar sesión, con filtros y visualización de imágenes.
  - 🐾 **Formulario Público de Solicitud de Adopción (`/adopt/request/[petId]`):** Formulario para que interesados soliciten adoptar una mascota específica, proponiendo opcionalmente fecha y hora para una visita.
  - 🐾 **Gestión Interna de Solicitudes de Adopción (`/admin/manage-adoption-requests`):** Sección para Admins para revisar, aprobar (para visita) o rechazar solicitudes. Las solicitudes aprobadas para visita generan una entrada en el calendario si se propuso fecha/hora. Envío de correo de confirmación (borrador mailto) al aprobar.
  - 🐾 **Registro Manual de Solicitud de Adopción (`/adoption-requests/new-manual`):** Formulario público (accesible sin login) que permite al personal o interesados ingresar manualmente solicitudes de adopción y proponer citas, seleccionando mascotas disponibles o en tratamiento.
  - 🐾 **Registro de Adopción Directa (`/adoptions/new`):** Para Admins, registrar adopciones (usualmente tras una visita exitosa), vinculando mascotas a sus nuevos adoptantes, recopilando información detallada del adoptante.
  - 🐾 **Historial de Adopciones (`/adoptions`):** Ver un historial de todas las adopciones con búsqueda y filtrado. Modal para ver detalles completos.
  - 🐾 Actualiza automáticamente el estado de la mascota a "adoptado" tras el registro exitoso.
  - 🐾 Generar y descargar certificados de adopción personalizados en PDF.
- **📢 Sistema de Anuncios Internos (`/announcements`):**
  - 🐾 Centro de comunicación interna para el personal y voluntarios.
  - 🐾 Anuncios automáticos para próximas visitas veterinarias, nuevas solicitudes de adopción, tareas pendientes, nuevas denuncias de maltrato, nuevas jornadas.
  - 🐾 Creación manual de anuncios con diferentes prioridades y tipos.
  - 🐾 Indicadores de anuncios no leídos en la UI para el usuario actual. Opción para marcar todos como leídos.
- **📅 Calendario y Gestión de Visitas (`/calendar`):**
  - 🐾 Vista de calendario completo para visitas veterinarias, citas relacionadas con adopciones (generadas desde solicitudes aprobadas) y otros eventos.
  - 🐾 Creación y gestión de visitas por Admins y Veterinarios. Colaboradores solo lectura.
  - 🐾 Estilos mejorados para modo oscuro.
- **🌍 Gestión de Jornadas de Atención y Adopción (`/jornadas`):**
  - 🐾 **Creación y Edición de Jornadas:**
    - Campos: Nombre, tipo de jornada (esterilización, vacunación, mixta, etc.), barrio (catálogo Ibagué + "Otro"), dirección exacta, fecha, hora inicio/fin, responsable (nombre y cargo), objetivos, estado (En Espera, Abierta, Cerrada, Cancelada, Pospuesta), notas adicionales.
    - Estado inicial "En Espera" por defecto.
    - Transición automática a "Abierta" si la fecha/hora de inicio coincide con la actual (revisado por Admin al ver la lista).
    - Cierre manual por Admin (cambia a "Cerrada" y registra `closedAt`), solo si hay mascotas atendidas.
  - 🐾 **Registro de Mascotas Atendidas:**
    - Dentro de cada jornada, se registran las mascotas atendidas (subcolección).
    - Campos: Nombre mascota, especie, raza (opcional), edad, procedimientos aplicados (multi-select), observaciones clínicas, estado final (adoptado, en seguimiento, regresa al albergue).
    - Datos del representante/dueño: Nombre, tipo de documento, número de documento, celular (WhatsApp), teléfono alterno (opcional), correo (opcional), dirección.
    - Opción para enlazar con una mascota existente en el sistema (autocompletar datos).
    - Si una mascota existente es adoptada durante la jornada, su estado en el registro principal se actualiza a "Adoptado".
  - 🐾 **Listados y Filtros:**
    - Tabla de jornadas con búsqueda y filtros por barrio, estado y rango de fechas.
    - Tabla de mascotas atendidas dentro de cada jornada, con filtros (especie, procedimiento, estado final).
  - 🐾 **Reportes de Jornadas (`/jornadas/reports`):**
    - Dashboard analítico (placeholder para gráficas avanzadas y Gemini AI).
    - Se muestra información detallada si se accede con `?jornadaId=ID`.
    - Gráficas básicas de distribución de especies, procedimientos y estados finales para la jornada seleccionada.
- **🙋 Gestión de Voluntarios (`/volunteers`):** (Admin)
  - 🐾 Registrar y gestionar perfiles de voluntarios (información de contacto, rol, disponibilidad, estado activo/inactivo).
  - 🐾 Enlace para ver tareas asignadas a un voluntario específico.
- **📝 Gestión de Tareas (`/tasks`):** (Admin, Veterinario, Colaborador con limitaciones)
  - 🐾 Crear, asignar (a voluntarios o general, o a una mascota) y rastrear tareas.
  - 🐾 Establecer prioridad y fechas de entrega.
  - 🐾 Integración con el sistema de anuncios para notificaciones de tareas nuevas/vencidas (si asignadas y con fecha).
- **💰 Gestión de Donaciones (`/donations`):** (Admin para gestión completa, Colaborador para registrar)
  - 🐾 Registrar varios tipos de donaciones (monetarias, alimento, medicamentos, etc.).
  - 🐾 Campos de formulario dinámicos según el tipo de donación (ej: valor para monetaria, cantidad/marca para alimento).
  - 🐾 Ver historial de donaciones con opciones de filtrado.
- **📄 Reportes y Estructuración de Datos con IA (`/reports`):** (Admin)
  - 🐾 Generar y exportar reportes personalizables en formato CSV para mascotas, adopciones y donaciones.
  - 🐾 Filtros para reportes de donaciones (tipo, mes, año).
  - 🐾 **Integración con Genkit (Gemini):** Estructuración de datos brutos mediante IA en CSV bien formados, optimizados para Excel (legible) o crudo (para sistemas), manejando caracteres especiales y formato de datos.
  - 🐾 El usuario puede seleccionar el estilo de exportación CSV.
- **🚨 Sistema de Reporte de Maltrato Animal:**
  - 🐾 **Formulario Público de Reporte (`/report`):** Reporte anónimo o identificado de maltrato o abandono animal. Incluye ubicación (fijo en Ibagué, Tolima, con selección de barrio), descripción detallada, información del animal y carga multimedia (hasta 5 archivos, máx 10MB c/u vía Cloudinary a carpeta `Capa Ibague/reportes`) con previsualización. Genera un código de seguimiento único (alfanumérico en mayúsculas).
  - 🐾 **Gestión Administrativa (`/admin/reports`):** Sección segura para Admins para revisar, gestionar y actualizar el estado de las denuncias (Recibida, En Investigación, Procesada, Concluida). Incluye notas internas/públicas.
  - 🐾 **Seguimiento Público (`/track`):** Permite a los denunciantes verificar el estado de su envío usando el código único y ver notas públicas.
  - 🐾 Generación automática de anuncio interno al recibir nueva denuncia.
- **👤 Sistema de Roles y Gestión de Usuarios (`/admin/users`):** (Admin)
  - 🐾 **Roles:** Admin (control total), Veterinario (gestión de salud animal), Colaborador (acceso básico).
  - 🐾 **Creación de Usuarios por Admin:** Admins pueden crear cuentas de usuario (con email, nombre, rol, especialización para veterinarios, contraseña temporal). Firebase envía email de verificación (requerido para login) y el admin envía un correo para el establecimiento de la contraseña.
  - 🐾 **Gestión de Usuarios:** Admins pueden ver lista de usuarios, editar (nombre, rol, especialización, estado), desactivar/reactivar, y enviar reseteo de contraseña.
  - 🐾 **Autenticación:** Inicio de sesión seguro usando Firebase Authentication (email/contraseña) en `/login`. Se requiere verificación de email.
  - 🐾 **Página de Cuenta (`/account`):** Usuarios pueden ver su email, rol, editar su nombre, y solicitar restablecimiento de contraseña.
- **🌙 Modo Oscuro:** Tema configurable por el usuario (claro/oscuro) para mejorar la accesibilidad y preferencia, con persistencia.
- **🐛 Reporte de Fallos:** Botón de soporte en la interfaz para que los usuarios reporten bugs o problemas directamente al desarrollador mediante un borrador de correo pre-llenado.
- **📱 Diseño Responsivo y PWA:** La aplicación está diseñada como una Aplicación Web Progresiva, instalable en dispositivos para una experiencia similar a la nativa con capacidades offline para contenido cacheado y rendimiento optimizado en varios tamaños de pantalla.

## 🛠️ Tech Stack 🛠️

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Base de Datos y Autenticación:** Firebase (Firestore, Firebase Authentication) - Optimizado para el nivel gratuito.
- **Estilos:** Tailwind CSS
- **Componentes UI:** ShadCN UI
- **Iconos:** Lucide React
- **Gráficos:** Recharts
- **Gestión de Formularios:** React Hook Form
- **Validación de Esquemas:** Zod
- **Gestión de Estado:** React Hooks (useState, useEffect, useContext)
- **GenAI:** Genkit (Firebase Genkit con Google AI - Gemini) para estructuración de reportes CSV asistida por IA e historiales clínicos de mascotas.
- **Gestión Multimedia:** Cloudinary (para adjuntos en reportes de maltrato animal y fotos de mascotas).
- **PWA Service Worker:** Service worker personalizado para cacheo y capacidades offline.
- **Generación de PDF:** html2pdf.js (para certificados de adopción e historiales clínicos).

## 📂 Estructura del Proyecto 📂

El proyecto sigue una estructura estándar de Next.js App Router:

- `src/app/`: Contiene todas las rutas, layouts y páginas.
  - `(app)/`: Grupo para rutas de aplicación autenticadas (ej., `/dashboard`, `/pets`, `/admin/reports`, `/admin/users`, `/admin/manage-adoption-requests`, `/jornadas`).
  - `(auth)/`: Grupo para rutas de autenticación (ej., `/login`).
  - Rutas públicas como `/`, `/adopt`, `/report`, `/track`, `/adoption-requests/new-manual` están en el nivel raíz de `src/app/`.
  - `layout.tsx`: Layout raíz para toda la aplicación, incluyendo configuración de PWA y tema.
  - `globals.css`: Estilos globales y configuración del tema de Tailwind CSS.
- `src/components/`: Componentes React reutilizables, organizados por característica (auth, pets, adoptions, dashboard, reports, layout, theme, ui, admin, announcements, calendar, donations, tasks, volunteers, visits, support, jornadas, etc.).
- `src/hooks/`: Hooks React personalizados (useAuth, useToast, useAnnouncements, useIsMobile).
- `src/lib/`: Funciones de utilidad y configuraciones de librerías (Firebase, utils, trackingCode).
- `src/schemas/`: Esquemas Zod para validación de datos de formularios (auth, pet, adoption, adoptionRequest, announcement, visit, report, task, volunteer, user, donation, bugReport, jornada, atencionJornada, etc.).
- `src/actions/`: Acciones de servidor (ej., subidas a Cloudinary, borrado de Cloudinary).
- `src/ai/`: Archivos relacionados con Genkit para funcionalidades de IA (flujos, inicialización de Genkit).
- `src/support/`: Componentes para el sistema de reporte de fallos.
- `public/`: Activos estáticos, incluyendo `manifest.json` (recuerda actualizar `name` y `short_name` a "Huellitas en Casa"), `sw.js` para PWA, e imágenes por defecto.
- `middleware.ts`: Middleware de Next.js para protección de rutas y redirecciones.
- Archivos de Configuración: `components.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `package.json`.
- Documentación: `README.md`, `cotizacion.md`, `docs/user-guide.md`.

## 🔑 Funcionalidades Clave Explicadas 🔑

(Esta sección detallaría cada módulo principal similar a la sección "Características" pero con más información técnica si es necesario, ej., cómo están estructuradas las colecciones de Firestore para cada uno, componentes clave involucrados y lógica específica como integración de IA para reportes o Cloudinary para subidas.)

- **🔒 Autenticación y Roles:** Firebase Authentication, sistema de roles (Admin, Veterinario, Colaborador), sesiones basadas en cookies, protección de rutas vía middleware, gestión de usuarios por Admin (incluyendo creación de cuentas con verificación de email y envío de link para establecer contraseña).
- **🐕 Gestión de Mascotas:** `PetForm`, `PetsTable`, seguimiento de vacunas específico por especie, imágenes predeterminadas o subidas a Cloudinary, historial clínico con IA y PDF.
- **💖 Flujo de Adopción:** Galería pública (`PetsGallery`), `AdoptionRequestForm` (público), `ManualAdoptionRequestForm` (público para staff/interesados), `AdoptionRequestsTable` (revisión admin en `/admin/manage-adoption-requests`, con generación de visita en calendario al aprobar y borrador de email de confirmación), `AdoptionForm` (registro formal), `AdoptionCertificate` (PDF).
- **📣 Anuncios y Calendario:** Actualizaciones en tiempo real, generación automática para eventos (nuevas denuncias, solicitudes de adopción, visitas, tareas), `AnnouncementsTable`, `CalendarView` con `react-big-calendar`.
- **🌍 Gestión de Jornadas:** `JornadaForm` para creación/edición. `JornadasTable` para listar. `JornadaDetailClientPage` para ver detalles y gestionar `mascotasAtendidas` (subcolección). `AtencionJornadaFormDialog` para registrar mascotas atendidas y datos de representantes. Lógica para estados de jornada ("en espera", "abierta", "cerrada").
- **🤝 Gestión de Voluntarios y Tareas:** `VolunteerFormDialog`, `VolunteersTable`, `TaskFormDialog`, `TasksTable`.
- **🎁 Gestión de Donaciones:** `DonationFormDialog`, `DonationsTable`, formulario dinámico.
- **📈 Módulo de Reportes CSV:** `ReportsPage` con generación de CSV asistida por IA (`structureReportFlow`). Placeholder para reportes de jornadas.
- **🛡️ Reporte de Maltrato Animal:** `ReportForm` (público con subidas a Cloudinary), `AdminReportsTable` & `ReportDetailsClientPage` (admin), `TrackReportClientPage` (seguimiento público).
- **PWA y Tema:** Componente `PWASetup`, `manifest.json`, `sw.js` para cacheo offline e instalabilidad. `ThemeProvider` y botones de toggle para modo oscuro/claro.
- **🐞 Reporte de Fallos:** Diálogo para que los usuarios reporten problemas, generando un borrador de correo al desarrollador.

## 💬 ¡Conectemos!

📧 **Correo:** [felipe@felipesanchezdev.site](mailto:felipe@felipesanchezdev.site) <br>
