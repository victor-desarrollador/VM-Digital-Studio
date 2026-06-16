// En el futuro, aquí requeriremos Prisma o el cliente SQL para interactuar con PostgreSQL
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

/**
 * Procesa el envío de un formulario de contacto de una Landing Page o Web Institucional
 */
const createLead = async (req, res, next) => {
    try {
        const { client_name, phone, email, message, source_url } = req.body;

        // ==========================================
        // VALIDACIONES DE BACKEND (Seguridad)
        // ==========================================
        if (!client_name || client_name.trim().length < 3) {
            return res.status(400).json({
                status: 'error',
                message: 'El nombre es obligatorio y debe tener al menos 3 caracteres.'
            });
        }

        if (!phone || phone.trim().length < 6) {
            return res.status(400).json({
                status: 'error',
                message: 'El número de teléfono o WhatsApp es obligatorio para el contacto.'
            });
        }

        // ==========================================
        // SIMULACIÓN DE GUARDADO (Paso previo a la base de datos)
        // ==========================================
        const newLead = {
            client_name: client_name.trim(),
            phone: phone.trim(),
            email: email ? email.trim().toLowerCase() : null,
            message: message ? message.trim() : '',
            source_url: source_url || 'directo',
            status: 'Nuevo',
            created_at: new Date()
        };

        // TODO: Aquí irá la consulta real a la base de datos:
        // await prisma.landing_leads.create({ data: newLead });
        
        console.log('📥 Nuevo Lead recibido en la Fábrica de Software:', newLead);

        // Responder al frontend de Next.js de manera exitosa
        return res.status(201).json({
            status: 'success',
            message: 'Formulario recibido correctamente. Un asesor se contactará a la brevedad.',
            data: {
                client_name: newLead.client_name,
                status: newLead.status
            }
        });

    } catch (error) {
        // Manda el error al manejador global que creamos en app.js
        next(error);
    }
};

module.exports = {
    createLead
};