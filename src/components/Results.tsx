import { motion } from 'motion/react';
import { Award, Trophy } from 'lucide-react';
import { UserData } from '../types';

interface Props {
  score: number;
  user: UserData;
  onNext: () => void;
}

export function Results({ score, user, onNext }: Props) {
  // Simulate a leaderboard, injecting the current user
  const mockLeaderboard = [
    { name: 'Dr. A. Gómez', score: 3 },
    { name: 'Dra. S. Martínez', score: 3 },
    { name: user.name, score: score, isCurrentUser: true },
    { name: 'Dr. L. Fernández', score: 2 },
    { name: 'Dra. M. Silva', score: 1 },
  ].sort((a, b) => b.score - a.score);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md mx-auto p-6"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
          className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Award className="w-10 h-10" />
        </motion.div>

        <h2 className="text-2xl font-bold text-slate-900 mb-2">¡Desafío Completado!</h2>
        <p className="text-slate-600 mb-6">
          Excelente desempeño, {user.name}.<br />
          Respondiste <strong className="text-blue-700">{score} de 3</strong> correctas.
        </p>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-left">
          <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h3>Tabla de Posiciones</h3>
          </div>
          <div className="space-y-2">
            {mockLeaderboard.map((entry, idx) => (
              <div
                key={idx}
                className={`flex justify-between items-center p-3 rounded-lg text-sm ${
                  entry.isCurrentUser
                    ? 'bg-blue-100 border border-blue-200 font-semibold text-blue-900'
                    : 'bg-white border border-slate-100 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-medium w-4">{idx + 1}.</span>
                  <span>{entry.name}</span>
                </div>
                <span className="font-mono bg-white px-2 py-1 rounded shadow-sm">
                  {entry.score} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
      >
        Explorar Línea Científica VALUGE
      </button>
    </motion.div>
  );
}
