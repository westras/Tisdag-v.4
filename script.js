const toggleBtn = document.querySelector('#toggleBtn');
const extraFacts = document.querySelector('#extraFacts');

toggleBtn.addEventListener('click', function() {
    extraFacts.classList.toggle('hidden');
    
    if (extraFacts.classList.contains('hidden')) {
        toggleBtn.textContent = 'Visa mer fakta';
    } else {
        toggleBtn.textContent = 'Dölj fakta';
    }
});


const themeBtn = document.querySelector('#themeBtn');
const body = document.querySelector('body');

themeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    
    
    if (body.classList.contains('dark-theme')) {
        themeBtn.textContent = '☀️ Ljust tema';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = '🌙 Mörkt tema';
        localStorage.setItem('theme', 'light');
    }
});


window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeBtn.textContent = '☀️ Ljust tema';
    }
});
