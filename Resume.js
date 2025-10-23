document.addEventListener('DOMContentLoaded', function() {
    // افزودن انیمیشن به بخش‌ها
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // تغییر رنگ هدر هنگام اسکرول
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'linear-gradient(135deg, #2980b9, #2c3e50)';
        } else {
            header.style.background = 'linear-gradient(135deg, #3498db, #2c3e50)';
        }
    });
    
    // افکت برای آیتم‌های تجربه کاری
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.animationDelay = (index * 0.2) + 's';
    });
    
    // دکمه تغییر زبان
    const languageSwitch = document.getElementById('languageSwitch');
    if (languageSwitch) {
        languageSwitch.addEventListener('click', function() {
            // اینجا آدرس صفحه انگلیسی را قرار دهید
            window.open('./ResumeEn.html', '_self');
        });
    }
    
    
});

// تابع برای تغییر تم
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // ذخیره تنظیمات تم در localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// بارگذاری تم ذخیره شده
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

});
