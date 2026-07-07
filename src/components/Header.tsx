import { FlaskConical } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full bg-slate-900 shadow-sm border-b border-slate-800 py-4 px-6 flex items-center justify-center sticky top-0 z-10">
      <div className="flex items-center gap-3 text-white">
        <svg viewBox="0 0 132 139" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <path d="M35.958 101.529H36.185L79.7975 0H88.6335L40.3097 111.765H31.5873L0.594971 33.8304H9.54451L35.958 101.529Z" fill="currentColor"></path>
          <path d="M97.1097 33.8301H89.0684L42.1448 138.349H51.2078L92.8525 42.6283L122.823 111.765H132L97.1097 33.8301Z" fill="currentColor"></path>
        </svg>
        <h1 className="text-xl font-bold tracking-tight">
          VALUGE <span className="font-light text-slate-300">Laboratorio</span>
        </h1>
      </div>
    </header>
  );
}
