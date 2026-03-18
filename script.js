        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const lightLabel = document.querySelector('.theme-label.light');
        const darkLabel = document.querySelector('.theme-label.dark');
        
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            lightLabel.style.color = '#aaa';
            darkLabel.style.color = '#3a86ff';
        } else {
            lightLabel.style.color = '#ff9e00';
            darkLabel.style.color = '#666';
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                lightLabel.style.color = '#aaa';
                darkLabel.style.color = '#3a86ff';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                lightLabel.style.color = '#ff9e00';
                darkLabel.style.color = '#666';
            }
        });
        
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        const navOverlay = document.getElementById('navOverlay');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
        });
        
        navOverlay.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navOverlay.classList.remove('active');
            });
        });
        
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        const typingText = document.getElementById('typingText');
        const texts = [
            "Front-End Web Developer",
            "CTF Web Challenge Solver",
            "Python Certified Developer",
            "Security Enthusiast"
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeText() {
            const currentText = texts[textIndex];
            
            if (!isDeleting && charIndex <= currentText.length) {
                typingText.textContent = currentText.substring(0, charIndex);
                charIndex++;
                typingSpeed = 100;
            } else if (isDeleting && charIndex >= 0) {
                typingText.textContent = currentText.substring(0, charIndex);
                charIndex--;
                typingSpeed = 50;
            } else {
                isDeleting = !isDeleting;
                
                if (!isDeleting) {
                    textIndex = (textIndex + 1) % texts.length;
                }
                
                typingSpeed = 1000;
            }
            
            setTimeout(typeText, typingSpeed);
        }
        
        setTimeout(typeText, 1000);
        
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
            
            contactForm.reset();
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
