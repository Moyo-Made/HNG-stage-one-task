document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(-12, -4);
        const day = now.toLocaleDateString('en-GB', { weekday: 'long' });
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
        document.querySelector('[data-testid="currentDay"]').textContent = day;
    }
    updateTime();
    setInterval(updateTime, 1000);
});
