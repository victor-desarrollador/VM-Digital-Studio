'use client';
import { useState } from 'react';

export default function LeadForm({ sourceUrl = 'directo' }) {
  const [formData, setFormData] = useState({
    client_name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    // Validación básica en el cliente
    if (!formData.client_name || !formData.phone) {
      setStatus({ loading: false, success: null, error: 'Por favor, completa los campos obligatorios.' });
      return;
    }

    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      
      const response = await fetch(`${backendUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source_url: sourceUrl })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el formulario.');
      }

      setStatus({ loading: false, success: data.message, error: null });
      // Limpiar formulario si fue exitoso
      setFormData({ client_name: '', phone: '', email: '', message: '' });
      
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Error de conexión con el servidor.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800">Solicitar Información</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre Completo *</label>
        <input
          type="text"
          name="client_name"
          value={formData.client_name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2 text-gray-900 border"
          placeholder="Ej. Juan Pérez"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">WhatsApp / Teléfono *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2 text-gray-900 border"
          placeholder="Ej. +54 9 11 1234 5678"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Correo Electrónico (Opcional)</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2 text-gray-900 border"
          placeholder="juan@ejemplo.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">¿En qué podemos ayudarte?</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2 text-gray-900 border"
          placeholder="Cuéntanos brevemente tu consulta..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status.loading}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 transition-colors"
      >
        {status.loading ? 'Enviando...' : 'Enviar Consulta'}
      </button>

      {/* Mensajes de Estado de la API */}
      {status.success && <p className="text-sm text-green-600 bg-green-50 p-2 rounded-md font-medium text-center">{status.success}</p>}
      {status.error && <p className="text-sm text-red-600 bg-red-50 p-2 rounded-md font-medium text-center">{status.error}</p>}
    </form>
  );
}