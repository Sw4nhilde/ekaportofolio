// Synthesized Web Audio API sound generator & authentic F1 MP3 triggers
// Zero lag - pre-buffered audio instances

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play authentic F1 radio notification chime
 * Used when: Clicking 'Pit Radio' in navbar & copying email
 */
export function playF1RadioNotification(): void {
  if (typeof window === 'undefined') return;
  try {
    const audio = new Audio('/audio/formula-1-radio-notification.mp3');
    audio.volume = 0.85;
    audio.play().catch(() => {
      // Fallback to synthesized beep if browser blocks audio autoplay
      playConfirmBeep();
    });
  } catch {
    playConfirmBeep();
  }
}

/**
 * Play walkie-talkie cambio radio sound
 * Used when: Transmitting via Pit Radio
 */
export function playWalkieTalkieCambio(): void {
  if (typeof window === 'undefined') return;
  try {
    const audio = new Audio('/audio/walkie-talkie-cambio.mp3');
    audio.volume = 0.9;
    audio.play().catch(() => {
      // Fallback to synthesized radio static if autoplay is prevented
      playRadioStatic();
    });
  } catch {
    playRadioStatic();
  }
}

/**
 * 1. Mechanical switch click on button/tab hovers
 */
export function playSwitchClick(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.025);

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.025);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.025);
  } catch {
    // Graceful fallback
  }
}

/**
 * 2. Low-frequency mechanical confirmation 'beep'
 */
export function playConfirmBeep(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
    osc.frequency.setValueAtTime(1760, ctx.currentTime + 0.06); // A6 chirp

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.16);
  } catch {
    // Graceful fallback
  }
}

/**
 * 3. Subtle radio squelch static
 */
export function playRadioStatic(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const bufferSize = ctx.sampleRate * 0.08; // 80ms noise burst
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.4;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Bandpass filter to sound like an authentic cockpit radio
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1600;
    filter.Q.value = 3.0;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.07, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
  } catch {
    // Graceful fallback
  }
}
