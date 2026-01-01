// Set the release date
const releaseDate = new Date("Jan 1, 2026 0:00:00").getTime();

// Update countdown every second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`; 

    // If countdown finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Released!";
        document.getElementById("NR").innerHTML = "Latest Release!";
    }
}, 1000);




// Set the Bday date
const BDAYY = new Date("Jan 30, 2026 0:00:00").getTime();

// Update countdown every second
const xmasfunc = setInterval(() => {
    const now = new Date().getTime();
    const distance = BDAYY - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("bday").innerHTML =
        `My Birthday in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If countdown finished
    if (distance < 0) {
        clearInterval(xmasfunc);
        document.getElementById("bday").innerHTML = "Happy Birthday DJ Camo!";
    }
}, 1000);



// Sound FX button (id "playSoundBtn") - simple one-shot beep using Web Audio API
// Plays one short tone when clicked and disables the button so it only plays once
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('playSoundBtn');
    if (!btn) return;

    // internal flag to avoid changing button appearance
    let isPlaying = false;
    btn.addEventListener('click', () => {
        if (isPlaying) return;
        isPlaying = true;

        // Try to play local audio file first; file name has spaces so encode it
        const audioSrc = encodeURI('ElevenLabs_Text_to_Speech_audio.mp3');
        const audio = new Audio(audioSrc);
        audio.preload = 'auto';

        const finish = () => {
            isPlaying = false;
        };

        audio.addEventListener('ended', () => finish());
        audio.addEventListener('error', () => {
            // fallback to generated beep
            playBeep().finally(finish);
        });

        audio.play().catch(() => {
            // If playing the file fails (e.g., unsupported format), fallback to beep
            playBeep().finally(finish);
        });

        function playBeep() {
            return new Promise((resolve) => {
                try {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    const ctx = new AudioContext();
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();

                    osc.type = 'sine';
                    osc.frequency.value = 440; // A4

                    // quick fade in
                    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 0.01);

                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start();

                    // stop after 500ms and close context
                    setTimeout(() => {
                        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.02);
                        setTimeout(() => {
                            try { osc.stop(); } catch(e) {}
                            try { ctx.close(); } catch(e) {}
                            resolve();
                        }, 30);
                    }, 500);
                } catch (e) {
                    console.error('Audio play failed', e);
                    resolve();
                }
            });
        }
    });

});

