import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Droplet, Sparkles, Wind, ShieldCheck, Asterisk } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'esfumel',
    name: 'ESFUMEL TX',
    subtitle: 'Despigmentante Intensivo',
    indication: 'Indicado para el tratamiento del melasma y fotoenvejecimiento severo. Fórmula con Ácido Tranexámico que bloquea la síntesis de melanina.',
    textureName: 'Serum Ligero',
    icon: Sparkles,
    color: 'blue',
    imageUrl: 'https://www.valuge.com.ar/images/home/showcase/esfumel.png',
    textureCss: 'bg-gradient-to-br from-yellow-50 to-white border border-yellow-200/50 shadow-[inset_0_-10px_20px_rgba(253,224,71,0.2)] backdrop-blur-sm rounded-full',
  },
  {
    id: 'vansame',
    name: 'VANSAME GS',
    subtitle: 'Seborregulador y Anti-age',
    indication: 'Ideal para pieles grasas o con tendencia acneica. Formulado con Ácido Glicólico. Controla el sebo mientras reduce arrugas finas.',
    textureName: 'Gel Acuoso',
    icon: Wind,
    color: 'emerald',
    imageUrl: 'https://www.valuge.com.ar/images/home/categorias/gel.jpg',
    textureCss: 'bg-gradient-to-br from-blue-50/80 to-white/40 border border-blue-200/50 shadow-[inset_0_-10px_20px_rgba(96,165,250,0.2)] backdrop-blur-md rounded-[2rem]',
  },
  {
    id: 'valurea',
    name: 'VALUREA 10%',
    subtitle: 'Hidratación Extrema',
    indication: 'Emulsión corporal formulada con Urea al 10% para xerosis, hiperqueratosis y descamación. Restaura la barrera cutánea eficientemente.',
    textureName: 'Emulsión Cremosa',
    icon: Droplet,
    color: 'indigo',
    imageUrl: 'https://www.valuge.com.ar/images/home/showcase/valurea.png',
    textureCss: 'bg-white border-2 border-slate-100 shadow-[inset_0_-15px_15px_rgba(241,245,249,0.5),0_10px_20px_rgba(0,0,0,0.05)] rounded-full',
  },
  {
    id: 'ecelon',
    name: 'ECELÓN',
    subtitle: 'Limpieza Piel Sensible',
    indication: 'Sustituto del jabón para la limpieza profunda y suave de pieles extremadamente sensibles, reactivas o atópicas.',
    textureName: 'Loción Limpiadora',
    icon: ShieldCheck,
    color: 'teal',
    imageUrl: 'https://www.valuge.com.ar/images/home/showcase/ecelon.png',
    textureCss: 'bg-gradient-to-tr from-teal-50 to-white border border-teal-100/50 shadow-[inset_0_-10px_15px_rgba(45,212,191,0.15)] backdrop-blur-sm rounded-full',
  },
  {
    id: 'lopecian',
    name: 'LOPECIAN',
    subtitle: 'Cuidado Capilar',
    indication: 'Tratamiento integral para la caída del cabello y fragilidad capilar. Aporta nutrientes esenciales para fortalecer el bulbo piloso.',
    textureName: 'Loción / Cápsulas',
    icon: Asterisk,
    color: 'purple',
    imageUrl: null,
    textureCss: 'bg-gradient-to-br from-purple-50 to-white border border-purple-100/50 shadow-[inset_0_-10px_20px_rgba(192,132,252,0.15)] rounded-full',
  },
];

export function Vademecum() {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0].id);
  const [showModal, setShowModal] = useState(false);

  const activeProduct = PRODUCTS.find((p) => p.id === activeTab)!;

  return (
    <div className="w-full max-w-md mx-auto p-6 pb-24">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Vademécum Interactivo</h2>
        <p className="text-slate-500 text-sm">
          Explore las texturas y principios activos de nuestras líneas principales.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 bg-slate-100 p-1.5 rounded-2xl overflow-x-auto snap-x snap-mandatory no-scrollbar hide-scrollbar">
        {PRODUCTS.map((prod) => (
          <button
            key={prod.id}
            onClick={() => setActiveTab(prod.id)}
            className={`flex-none px-4 py-2.5 text-xs font-bold tracking-wide uppercase rounded-xl transition-all snap-center ${
              activeTab === prod.id
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {prod.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative"
        >
          {/* 3D Texture Visualization Container */}
          <div className="h-64 bg-slate-50 relative flex items-center justify-center overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 -left-4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
              <div className="absolute top-0 -right-4 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
            </div>

            {/* Floating Texture Object / Image */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut"
              }}
              className="relative z-10 flex items-center justify-center h-full w-full"
            >
              {activeProduct.imageUrl ? (
                <img 
                  src={activeProduct.imageUrl} 
                  alt={activeProduct.name}
                  className="max-h-56 max-w-[80%] object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className={`w-32 h-32 relative flex items-center justify-center ${activeProduct.textureCss}`}>
                  <activeProduct.icon className={`w-8 h-8 text-${activeProduct.color}-400 opacity-50`} />
                </div>
              )}
            </motion.div>

            {/* Texture Label */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="inline-block bg-white/80 backdrop-blur text-slate-600 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                Textura: {activeProduct.textureName}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-900">{activeProduct.name}</h3>
            <p className="text-blue-600 font-medium text-sm mb-4">{activeProduct.subtitle}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activeProduct.indication}
            </p>
            
            <button className="flex items-center text-sm font-semibold text-slate-900 hover:text-blue-700 transition-colors group">
              Ver monografía científica
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 rounded-xl shadow-lg shadow-blue-700/20 transition-all active:scale-[0.98]"
          >
            Solicitar Muestras Médicas
          </button>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.1 }}
                className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Nuestro visitador médico se pondrá en contacto pronto para coordinar la entrega en su consultorio.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-3 rounded-xl transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
