import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Registration } from './components/Registration';
import { Trivia } from './components/Trivia';
import { Results } from './components/Results';
import { Vademecum } from './components/Vademecum';
import { ScreenState, UserData } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('registration');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [score, setScore] = useState<number>(0);

  const handleRegistrationComplete = (data: UserData) => {
    setUserData(data);
    setCurrentScreen('trivia');
  };

  const handleTriviaComplete = (finalScore: number) => {
    setScore(finalScore);
    setCurrentScreen('results');
  };

  const handleResultsComplete = () => {
    setCurrentScreen('vademecum');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="w-full relative z-10 py-8">
          <AnimatePresence mode="wait">
            {currentScreen === 'registration' && (
              <motion.div key="reg" className="w-full">
                <Registration onComplete={handleRegistrationComplete} />
              </motion.div>
            )}
            
            {currentScreen === 'trivia' && (
              <motion.div key="trivia" className="w-full">
                <Trivia onComplete={handleTriviaComplete} />
              </motion.div>
            )}

            {currentScreen === 'results' && userData && (
              <motion.div key="results" className="w-full">
                <Results 
                  score={score} 
                  user={userData} 
                  onNext={handleResultsComplete} 
                />
              </motion.div>
            )}

            {currentScreen === 'vademecum' && (
              <motion.div key="vademecum" className="w-full">
                <Vademecum />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
