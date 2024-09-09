document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('mainVideo');
    const videoLinks = document.querySelectorAll('.video-list a');

    videoLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const newVideoSrc = event.target.getAttribute('data-video');
            videoPlayer.src = `videos/${newVideoSrc}`;
            videoPlayer.play();
        });
    });
});
