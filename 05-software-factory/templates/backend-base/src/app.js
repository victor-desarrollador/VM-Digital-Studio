const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// IMPORTACIÓN DE RUTAS
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// 1. MIDDLEWARES GLOBALES (Configuración inicial)
// ==========================================

// morgan: Muestra en la consola las peticiones HTTP que entran
app.use(morgan('dev'));

// cors: Conexión segura con el frontend de Next.js
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// json: Permite que Express entienda el formato JSON que envía Next.js
app.use(express.json());

// urlencoded: Procesa datos de formularios tradicionales si es necesario
app.use(express.urlencoded({ extended: true }));


// ==========================================
// 2. DECLARACIÓN DE ENDPOINTS / RUTAS
// ==========================================

// Endpoint para guardar los formularios de tus clientes (odontólogos, pymes, etc.)
app.use('/api/leads', leadRoutes);

// Ruta de prueba / Health Check unificada
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Servidor de VM Digital Studio operando correctamente',
        timestamp: new Date()
    });
});


// ==========================================
// 3. MIDDLEWARE DE MANEJO DE ERRORES GLOBAL
// ==========================================
// OBLIGATORIO: Va abajo de todas las rutas para capturar cualquier fallo en ellas.
app.use((err, req, res, next) => {
    console.error('❌ Error detectado en el servidor:', err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Ocurrió un error interno en el servidor de la agencia.'
    });
});


// ==========================================
// 4. INICIALIZACIÓN DEL SERVIDOR
// ==========================================
app.listen(PORT, () => {
    console.log(`🚀 Servidor Express de la fábrica corriendo en http://localhost:${PORT}`);
});

module.exports = app;