# 🗂️ Blueprint: Sitio Web Institucional / Corporativo Multi-página

## 🎯 Objetivo Técnico y de Negocio
Generar confianza institucional, posicionamiento SEO orgánico en Google y explicar a fondo múltiples líneas de servicios o productos de una empresa.

## 🗺️ Enrutamiento de Páginas (Next.js App Router)
Debe contar con las siguientes rutas físicas:
- `/` -> Home (Resumen de todo el sitio, accesos rápidos).
- `/nosotros` -> Historia de la empresa, equipo, visión y valores.
- `/servicios` -> Listado general de servicios de la pyme.
- `/servicios/[slug]` -> Ruta dinámica para detallar CADA servicio de forma individual (Clave para SEO).
- `/contacto` -> Formulario corporativo avanzado + mapa interactivo + datos de facturación.

## 🛢️ Modelo de Base de Datos Base (PostgreSQL)
Para un sitio institucional, además de guardar los contactos, necesitamos una tabla simple para que el dueño de la pyme (o vos en el mantenimiento) puedan subir contenidos o servicios dinámicamente:
```sql
CREATE TABLE company_services (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(150) NOT NULL,
    short_description TEXT NOT NULL,
    content TEXT NOT NULL, -- Contenido en Markdown o HTML
    image_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);