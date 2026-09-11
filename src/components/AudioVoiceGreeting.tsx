import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Radio, 
  Globe2,
  Headphones
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AudioVoiceGreeting: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [showTranscript, setShowTranscript] = useState<boolean>(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  const durationSeconds = 28;

  // Web Speech API / Web Audio tone player simulation
  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      setIsPlaying(true);
      setProgress(0);

      // Attempt native speech synthesis if available
      if ('speechSynthesis' in window) {
        const transcriptText = `Hi there! I'm Olumide Oderinde. Thank you for viewing my customer support portfolio. If you are looking for a specialist who brings genuine empathy to live chat, stays composed during tough escalations, and delivers rapid first-contact resolutions, I would love to connect. I am fully available for international remote teams with 100% US and European timezone coverage. Let's talk soon!`;
        const utterance = new SpeechSynthesisUtterance(transcriptText);
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        
        // Find best natural English voice if possible
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(v => v.lang.startsWith('en') && !v.name.includes('Google'));
        if (englishVoice) {
          utterance.voice = englishVoice;
        }

        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(100);
          if (intervalRef.current) clearInterval(intervalRef.current);
        };

        window.speechSynthesis.speak(utterance);
      }

      // Smooth progress animation
      const startTime = Date.now();
      const interval = window.setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const currentProg = Math.min((elapsed / durationSeconds) * 100, 100);
        setProgress(currentProg);

        if (currentProg >= 100) {
          setIsPlaying(false);
          clearInterval(interval);
        }
      }, 200);

      intervalRef.current = interval;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div 
      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4"
      id="voice-greeting-card"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
              <span>Recruiter Audio Intro: Voice & Spoken English</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                Verified C2 Fluency
              </span>
            </h4>
            <p className="text-[11px] text-slate-500">
              Listen to Olumide's vocal cadence, calm pacing, and professional English delivery.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="text-xs text-indigo-600 hover:text-indigo-700 font-medium self-start sm:self-auto"
        >
          {showTranscript ? 'Hide Transcript' : 'View Transcript'}
        </button>
      </div>

      {/* Audio Player Bar */}
      <div className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
        <button
          onClick={togglePlay}
          className={`w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 ${
            isPlaying 
              ? 'bg-indigo-700 ring-2 ring-indigo-300' 
              : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105'
          }`}
          title={isPlaying ? 'Pause voice message' : 'Play voice message'}
          id="audio-greeting-toggle-btn"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-white" />
          ) : (
            <Play className="w-5 h-5 fill-white ml-0.5" />
          )}
        </button>

        {/* Waveform Visualization Bars */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Radio className={`w-3 h-3 ${isPlaying ? 'text-emerald-500 animate-pulse' : 'text-slate-400'}`} />
              <span>{isPlaying ? 'Playing Audio...' : 'Audio Intro (0:28)'}</span>
            </span>
            <span>{Math.round((progress / 100) * durationSeconds)}s / {durationSeconds}s</span>
          </div>

          <div className="flex items-center gap-1 h-7">
            {[40, 65, 30, 85, 95, 60, 45, 75, 90, 50, 70, 80, 40, 65, 85, 55, 70, 95, 45, 60, 80, 50, 70, 40].map((height, idx) => {
              const barProg = (idx / 24) * 100;
              const hasPlayed = barProg <= progress;

              return (
                <div
                  key={idx}
                  className={`w-full rounded-full transition-all duration-150 ${
                    hasPlayed 
                      ? 'bg-indigo-600' 
                      : 'bg-slate-200'
                  } ${isPlaying ? 'animate-pulse' : ''}`}
                  style={{
                    height: isPlaying ? `${Math.max(20, (height * (progress % 10 + 5)) / 12)}%` : `${height}%`,
                    animationDelay: `${idx * 40}ms`
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Transcript text */}
      {showTranscript && (
        <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/70 text-xs text-slate-700 leading-relaxed italic space-y-1">
          <span className="font-semibold text-slate-900 not-italic block text-[11px] uppercase tracking-wider text-slate-500">
            Audio Transcript:
          </span>
          <p>
            "Hi there! I'm Olumide Oderinde. Thank you for checking out my customer support portfolio. If you're looking for a specialist who brings active empathy to live chat, de-escalates high-stress customer escalations with calm composure, and takes pride in fast, first-contact resolution—I'd love to chat. I'm fully aligned with US and European timezones, have a rock-solid redundant remote setup, and I'm ready to hit the ground running with your team on Day 1. Looking forward to speaking with you!"
          </p>
        </div>
      )}
    </div>
  );
};
