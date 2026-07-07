import { useState } from 'react';
import { motion } from 'motion/react';
import { UserData } from '../types';

interface Props {
  onComplete: (user: UserData) => void;
}

export function Registration({ onComplete }: Props) {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    specialty: '',
    license: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.specialty && formData.license && formData.email) {
      onComplete(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-md mx-auto p-6"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Desafío Clínico VALUGE</h2>
          <p className="text-slate-500 text-sm">
            Complete sus datos para participar del desafío interactivo y conocer nuestras novedades.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre y Apellido</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
              placeholder="Dr. Juan Pérez"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Especialidad</label>
            <select
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
              value={formData.specialty}
              onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            >
              <option value="" disabled>Seleccione una especialidad</option>
              <option value="Dermatología">Dermatología</option>
              <option value="Pediatría">Pediatría</option>
              <option value="Clínica Médica">Clínica Médica</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Matrícula / Registro Médico</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
              placeholder="MN 123456"
              value={formData.license}
              onChange={(e) => setFormData({ ...formData, license: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white"
              placeholder="doctor@ejemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-blue-700/20 transition-all active:scale-[0.98] mt-4"
          >
            Comenzar Desafío
          </button>
        </form>
      </div>
    </motion.div>
  );
}
