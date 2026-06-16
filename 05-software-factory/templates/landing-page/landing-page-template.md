# 🗂️ Blueprint: Landing Page de Alta Conversión (Single Page)

## 🎯 Objetivo Técnico y de Negocio
Diseñar una página de un solo scroll optimizada para dispositivos móviles, cuyo único fin sea que el usuario realice una acción (llenar un formulario o tocar el botón de WhatsApp).

## 🧱 Estructura de Componentes Frontend (React / Tailwind)
El archivo `src/app/page.js` en Next.js debe renderizar estos bloques en orden vertical:
1. **`<Hero />`:** Título con propuesta de valor clara, subtítulo persuasivo, imagen real de alta calidad y un botón de llamada a la acción (CTA) llamativo.
2. **`<SocialProof />`:** Carrusel de logos, testimonios de clientes reales o capturas de reseñas de Google Maps.
3. **`<Benefits />`:** Cuadrícula (Grid) de 3 a 4 tarjetas explicando por qué elegir este servicio (propuestas de valor del profesional).
4. **`<LeadForm />`:** Formulario limpio y validado.
5. **`<FAQ />`:** Acordeón (`<details>` o componente shadcn) con las 5 preguntas más frecuentes del rubro para derribar objeciones.
6. **`<Footer />`:** Datos de contacto, dirección física, links a redes y avisos legales/matrículas obligatorias.

## 💾 Especificación del Formulario (Inputs a validar en React)
- **Nombre Completo:** `text`, requerido, mínimo 3 caracteres.
- **Teléfono/WhatsApp:** `tel`, requerido, solo números.
- **Email (Opcional):** `email`, validación de formato correcto.
- **Mensaje/Motivo:** `textarea`, opcional, para que el cliente detalle su necesidad.

## 🛢️ Modelo de Base de Datos (Estructura SQL para PostgreSQL)
Cuando este formulario se envíe, la API en Express debe guardarlo en esta tabla:
```sql
CREATE TABLE landing_leads (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    message TEXT,
    source_url VARCHAR(255), -- Para saber desde qué campaña llegó
    status VARCHAR(50) DEFAULT 'Nuevo', -- Nuevo, Contactado, Cancelado, Vendido
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);