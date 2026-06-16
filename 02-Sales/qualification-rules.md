# 🧠 Reglas de Calificación y Scoring de Leads - VM Digital Studio

Este componente actúa como el núcleo lógico de nuestro Lead Qualification Engine. Evalúa la viabilidad de cada consulta entrante (vía Web o WhatsApp) sobre un máximo de 100 puntos.

## 📊 Matriz de Puntuación Estricta

### 1. Presupuesto Estimado / Intención de Gasto (Máximo 40 Puntos)
* **Puntaje: 40 pts (Fit Alto):** El cliente menciona un presupuesto alineado o superior a nuestros planes estándar/premium. O solicita un E-commerce completo (Tarifa: ARS 1.5M+ / USD 1000+) o un Sitio Institucional Custom (Tarifa: ARS 1M+ / USD 720+).
* **Puntaje: 25 pts (Fit Medio):** El cliente busca soluciones accesibles pero profesionales, alineadas a nuestro Plan Landing Page Estándar/Premium (Tarifa: ARS 420k - 635k / USD 300 - 450).
* **Puntaje: 10 pts (Fit Bajo):** El cliente busca presupuestos extremadamente económicos por debajo del costo mínimo de la agencia (menos de ARS 280k / USD 200) o intenta regatear el precio base.

### 2. Urgencia y Plazos de Entrega (Análisis de Tiempos - Máximo 30 Puntos)
* **Puntaje: 30 pts (Urgencia Óptima):** Plazo de entrega de 3 a 5 semanas. Permite el flujo normal de nuestra Software Factory (Secuencia: Entender -> Planificar -> Construir).
* **Puntaje: 20 pts (Proyecto Express):** Necesita la web en menos de 10 días. (Nota: Activa un recargo del 25% por prioridad).
* **Puntaje: 5 pts (Plazo Indefinido):** "Solo estoy averiguando precios para el próximo semestre", sin intención de inicio real a corto plazo.

### 3. Ajuste Tecnológico (Stack Fit - Máximo 30 Puntos)
* **Puntaje: 30 pts (Full Stack Fit):** Pide desarrollo a medida, landing page, paneles de administración, bases de datos o integraciones. Encaja 100% con Next.js + Express + PostgreSQL.
* **Puntaje: 15 pts (CMS Simple):** Pide tecnologías cerradas como WordPress o Shopify. (Se califica medio porque podemos ofrecer migrarlo a nuestro stack para mejorar velocidad).
* **Puntaje: 0 pts (No compatible):** Exige creadores de sitios no profesionales que no trabajamos (ej. Wix, Canva) y se niega a cambiar.

---

## ⚙️ Acciones Automatizadas según el Score Resultante

Una vez que la IA procesa el texto del cliente y calcula el Score (Ej: Presupuesto Medio [25] + Urgencia Óptima [30] + Stack Fit [30] = 85 puntos):

* **🔴 SCORE SUPERIOR A 75 (Prioridad Alta - Lead Caliente):**
  1. El sistema genera un archivo individual del cliente en `03-crm/leads/lead-[nombre].md`.
  2. Notifica inmediatamente a Víctor por WhatsApp con un resumen del diagnóstico.
  3. Ejecuta el `proposal-agent` para rellenar la plantilla de propuesta formal en base al servicio solicitado.
  4. Dispara el link de Calendly/Agenda para cerrar una llamada humana.

* **🟡 SCORE ENTRE 40 Y 75 (Prioridad Media - Lead en Nutrición):**
  1. Registra el lead en `03-crm/leads/`.
  2. El bot de WhatsApp (OpenWA) responde enviando de forma automática el catálogo de servicios y precios estandarizados de la agencia.
  3. Programa un recordatorio de seguimiento (Follow-up) en 48 horas.

* **🔵 SCORE INFERIOR A 40 (Prioridad Baja - Lead Descalificado):**
  1. El bot responde con un mensaje de cortesía predeterminado aclarando los precios mínimos de la agencia.
  2. Archiva el contacto en la base de datos para futuras campañas de email marketing masivas, sin requerir tiempo manual de Víctor.