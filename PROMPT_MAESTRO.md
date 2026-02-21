# 📘 03 – Prompt Maestro para Generación de Código

**Proyecto:** S&L Servicios Industriales

---

## 🧠 CONTEXTO GENERAL

Estamos desarrollando una Landing Page corporativa tipo brochure para:
* **Empresa:** S&L Servicios Industriales
* **Experiencia:** 20 años de experiencia
* **Ubicación:** San Miguel de Tucumán, Argentina
* **Cobertura:** Norte Argentino

**Objetivo:**
* No ecommerce.
* No carrito.
* No sistema complejo.
* Es un sitio institucional para:
    * Generar confianza.
    * Mostrar servicios destacados.
    * Permitir descargar catálogo PDF.
    * Facilitar contacto vía WhatsApp.

**Stack tecnológico:**
* Astro (base)
* React (componentes interactivos)
* CSS modular (NO frameworks pesados)
* Diseño mobile-first
* Deployment simple (Vercel o similar)

---

## 🎨 SISTEMA DE DISEÑO (RESPETAR ESTRICTAMENTE)

### Colores:
* **Primary Yellow (CTA only):** `#F2B705`
* **Dark Background:** `#111111`
* **Secondary Dark:** `#1E1E1E`
* **Light Gray:** `#EDEDED`
* **White Soft:** `#F8F9FA`

> ⚠️ **Restricción:** El amarillo SOLO debe usarse en botones, acentos y detalles. NO usar amarillo como fondo principal.

### Tipografías:
* **H1:** `Oswald`
* **Subtitles:** `Manrope`
* **Body:** `DM Sans`

**No usar:**
* Inter, Space Grotesk, Space Mono.
* Fuentes genéricas sin justificación.

---

## ✍ COPYWRITING BASE

La IA debe usar este copy inicial como base editable:

**HERO**
* **Título:** Soluciones Industriales Confiables Hace 20 Años
* **Subtítulo:** Mantenimiento mecánico y provisión de elementos de protección personal para empresas del Norte Argentino.
* **CTA Principal:** Solicitar Asesoramiento
* **CTA Secundario:** Descargar Catálogo

**QUIÉNES SOMOS**
Con más de 20 años de experiencia en el sector industrial, S&L Servicios Industriales brinda soluciones confiables, seguras y adaptadas a las necesidades de cada empresa. Trabajamos de manera personalizada, priorizando la calidad, la eficiencia y el cumplimiento en cada proyecto.

**SERVICIOS DESTACADOS**
* Mantenimiento Mecánico Industrial
* Elementos de Protección Personal
* Asesoramiento Técnico
* Provisión de Productos Industriales

**CATÁLOGO**
Descargue nuestro catálogo completo en PDF con el detalle de todos nuestros productos y especificaciones técnicas.

**CONTACTO**
¿Necesita asesoramiento o desea solicitar un producto? Contáctenos y reciba atención personalizada.

---

## 🧱 ESTRUCTURA DEL PROYECTO

La IA debe generar esta estructura:

```text
src/
├── components/
│    ├── Hero.astro
│    ├── About.astro
│    ├── Services.astro
│    ├── FeaturedProducts.astro
│    ├── Catalog.astro
│    ├── Contact.astro
│    ├── Navbar.astro
│    └── Footer.astro
│
├── layouts/
│    └── BaseLayout.astro
│
├── styles/
│    └── global.css
│
└── pages/
     └── index.astro

## 📏 RESTRICCIONES OBLIGATORIAS

### ❌ NO debes hacer:
* Instalar Tailwind sin que se le pida explícitamente.
* Usar Bootstrap.
* Usar librerías UI externas.
* Agregar animaciones exageradas.
* Usar colores fuera de la paleta.
* Crear lógica innecesaria.
* Agregar backend.
* Convertirlo en SPA completa.
* Usar grid patterns decorativos.
* Copiar estructuras genéricas de template.

### ✔ SÍ debes hacer:
* Diseñar mobile-first.
* Usar CSS limpio y organizado.
* Separar componentes correctamente.
* Usar variables CSS para colores.
* Usar buenas prácticas semánticas (`header`, `section`, `footer`).
* Optimizar estructura para SEO básico.
* Preparar navbar responsive con hamburguesa.
* Mantener coherencia tipográfica.
* Aplicar jerarquía visual clara.
* Mantener diseño sobrio pero moderno.

---

## 🎨 BASE CSS (DEBE USAR VARIABLES)

Ejemplo mínimo obligatorio en `global.css`:

```css
:root {
  --color-primary: #F2B705;
  --color-dark: #111111;
  --color-dark-secondary: #1E1E1E;
  --color-light: #F8F9FA;
  --color-gray: #EDEDED;
  --font-heading: 'Oswald', sans-serif;
  --font-subheading: 'Manrope', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}

body {
  margin: 0;
  font-family: var(--font-body);
  background-color: var(--color-dark);
  color: var(--color-light);
}

🧭 NAVEGACIÓN RESPONSIVE
Debe implementar:

Desktop: Horizontal navbar.

Mobile: Hamburguesa → menú fullscreen.

Ejemplo conceptual:

HTML
<nav>
  <div class="logo">S&L</div>
  <button class="menu-toggle">☰</button>
</nav>

El menú mobile debe:

Cubrir toda la pantalla.

Fondo oscuro.

Links grandes.

Cerrar al hacer click.

🏗 ORDEN DE CONSTRUCCIÓN (IMPORTANTE)
Debes generar el código en este orden:

BaseLayout

global.css

Navbar

Hero

About

Services

Catalog

Contact

Footer

Integración final en index.astro

🖼 IMÁGENES
Debes:
Usar imágenes placeholder temporales.
Comentar dónde reemplazar por imágenes reales.
Optimizar usando <img loading="lazy">.

No debes:

Insertar imágenes random irrelevantes.
Usar ilustraciones tipo startup tech.

📐 DISEÑO VISUAL
Estilo:

Fondo oscuro predominante.
Secciones alternadas oscuro / gris.
Botones con hover sutil.
Bordes suaves pero no exagerados.
Sombras mínimas.
Espaciado generoso.
Sistema de espaciado:
Base 8px scale.
Ejemplo: padding: 4rem 1.5rem;

📱 MOBILE FIRST PRIORIDAD
Debes diseñar primero para 375px.
Luego agregar media queries para:

768px
1024px

🎯 OBJETIVO FINAL DEL RESULTADO
El resultado debe verse:
Profesional.
Industrial moderno.
Con peso visual.
No genérico.
No plantilla común.
Agencia-level quality.

Debe sentirse como: Empresa sólida con 20 años de experiencia, confiable, segura y actualizada.