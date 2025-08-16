document.addEventListener('DOMContentLoaded', () => {
    // 헤더 스크롤 효과
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 타이핑 효과
    const typingTexts = document.querySelectorAll('.typing-text');
    let delay = 0;
    
    function startTypingEffect(element, text, typingDelay) {
        let i = 0;
        element.style.width = '0';
        element.style.animation = `typing 0.5s steps(${text.length}, end) ${typingDelay}s forwards, blink-caret 0.75s step-end infinite`;
    }

    typingTexts.forEach(element => {
        const text = element.getAttribute('data-text');
        if (text) {
            startTypingEffect(element, text, delay);
            delay += 3.5;
        }
    });

    // 최종 텍스트 페이드인 효과
    const heroContent = document.querySelector('.hero-content');
    const heroFinalText = document.querySelector('.hero-content .final-text');
    const heroFadeInText = document.querySelectorAll('.hero-content .fade-in-text');

    heroFadeInText[0].style.transitionDelay = '0s';
    heroFadeInText[1].style.transitionDelay = '0s';

    function showFinalText() {
        heroFinalText.style.opacity = '1';
        heroFinalText.style.transform = 'scale(1)';
    }

    setTimeout(() => {
        heroFadeInText[0].style.opacity = '1';
        heroFadeInText[0].style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        heroFadeInText[1].style.opacity = '1';
        heroFadeInText[1].style.transform = 'translateY(0)';
    }, 1000);

    // 여기를 수정: 100밀리초 (1초)로 지연 시간 설정
    setTimeout(showFinalText, 1800);

    // 스크롤 시 요소 등장 효과
    const revealItems = document.querySelectorAll('.reveal-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
                
                // about 섹션의 타이핑 효과
                if (entry.target.id === 'about') {
                    const aboutFadeInTexts = document.querySelectorAll('.about-fade-in');
                    const aboutTypingTexts = document.querySelectorAll('.about-typing');
                    
                    let aboutDelay = 0;
                    aboutFadeInTexts[0].style.opacity = '1';
                    aboutFadeInTexts[0].style.transform = 'translateY(0)';

                    setTimeout(() => {
                        aboutTypingTexts.forEach(element => {
                            const text = element.getAttribute('data-text');
                            if (text) {
                                element.style.animation = `typing 2s steps(${text.length}, end) ${aboutDelay}s forwards, blink-caret 0.75s step-end infinite`;
                                
                            }
                        });
                    }, 500);
                    
                    setTimeout(() => {
                        aboutFadeInTexts[1].style.opacity = '1';
                        aboutFadeInTexts[1].style.transform = 'translateY(0)';
                    }, (aboutDelay * 1000) + 500);
                }
                
                // 포트폴리오 섹션의 타이핑 효과
                if (entry.target.querySelector('.portfolio-typing-text')) {
                    const portfolioTexts = document.querySelectorAll('.portfolio-typing-text');
                    const portfolioFadeInTexts = document.querySelectorAll('.portfolio-divider .fade-in-text');
                    const portfolioFinalText = document.querySelector('.portfolio-final-text');
                    let portfolioDelay = 0;

                    portfolioFadeInTexts[0].style.opacity = '1';
                    portfolioFadeInTexts[0].style.transform = 'translateY(0)';
                    
                    setTimeout(() => {
                        portfolioTexts.forEach(element => {
                            const text = element.getAttribute('data-text');
                            if (text) {
                                element.style.animation = `typing 2s steps(${text.length}, end) ${portfolioDelay}s forwards, blink-caret 0.75s step-end infinite`;
                                portfolioDelay += 2.5;
                            }
                        });
                    }, 500);
                    
                    setTimeout(() => {
                        portfolioFadeInTexts[1].style.opacity = '1';
                        portfolioFadeInTexts[1].style.transform = 'translateY(0)';
                    }, (portfolioDelay * 1000) + 500);
                    
                    setTimeout(() => {
                        portfolioFinalText.style.opacity = '1';
                        portfolioFinalText.style.transform = 'scale(1)';
                    }, (portfolioDelay * 1000) + 2000);
                }
            }
        });
    }, {
        threshold: 0.1
    });

    revealItems.forEach(item => {
        observer.observe(item);
    });
//translateY(-300)

});