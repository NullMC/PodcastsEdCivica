function setupAudioPlayer(audioSrc, playBtnId, seekBarId, currentTimeId, durationId) {
    const playPauseBtn = document.getElementById(playBtnId);
    const seekBar = document.getElementById(seekBarId);
    const currentTimeDisplay = document.getElementById(currentTimeId);
    const durationDisplay = document.getElementById(durationId);

    
    const audio = new Audio(audioSrc);
    let isPlaying = false;

    
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    
    audio.addEventListener('timeupdate', () => {
        seekBar.value = (audio.currentTime / audio.duration) * 100;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        durationDisplay.textContent = formatTime(audio.duration);
    });

    
    seekBar.addEventListener('input', () => {
        audio.currentTime = (seekBar.value / 100) * audio.duration;
    });
}
