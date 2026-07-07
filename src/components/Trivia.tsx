import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  onComplete: (score: number) => void;
}

const QUESTIONS = [
  {
    title: 'Línea Esfumel - Manchas',
    text: 'Paciente con melasma por fotoenvejecimiento. ¿Cuál es el principio activo ideal de VALUGE para bloquear la melanina?',
    options: ['Ácido Tranexámico (Esfumel TX)', 'Agua termal', 'Alcohol en gel'],
    correctIndex: 0,
  },
  {
    title: 'Línea Vansame - Texturas',
    text: 'Para un paciente con piel grasa y arrugas finas, ¿qué vehículo/textura de la línea Vansame es el adecuado?',
    options: ['Crema pesada', 'Vansame GS - Gel', 'Ungüento'],
    correctIndex: 1,
  },
  {
    title: 'Línea Valurea - Hidratación',
    text: 'Paciente con xerosis extrema y descamación. ¿Qué porcentaje de Urea contiene la emulsión corporal Valurea?',
    options: ['2%', '5%', '10%'],
    correctIndex: 2,
  },
];

export function Trivia({ onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQ = QUESTIONS[currentIndex];

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < QUESTIONS.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        onComplete(score + (isCorrect ? 1 : 0));
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
          Pregunta {currentIndex + 1} de {QUESTIONS.length}
        </span>
        <div className="flex gap-1">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full transition-colors ${
                i === currentIndex
                  ? 'bg-blue-600'
                  : i < currentIndex
                  ? 'bg-slate-300'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8"
        >
          <div className="mb-8">
            <h3 className="text-blue-700 font-semibold mb-3">{currentQ.title}</h3>
            <p className="text-slate-800 text-lg leading-relaxed">{currentQ.text}</p>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;
              
              let buttonClass = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300';
              
              if (isAnswered) {
                if (isCorrect) {
                  buttonClass = 'bg-emerald-50 border-emerald-500 text-emerald-800';
                } else if (isSelected && !isCorrect) {
                  buttonClass = 'bg-red-50 border-red-500 text-red-800';
                } else {
                  buttonClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
                }
              } else if (isSelected) {
                buttonClass = 'bg-blue-50 border-blue-600 text-blue-800';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all flex items-center justify-between ${buttonClass}`}
                >
                  <span className="font-medium">{option}</span>
                  {isAnswered && isCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </motion.div>
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <XCircle className="w-5 h-5 text-red-600" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
