<script>
    import { inject } from '@vercel/analytics'
    import { onMount } from 'svelte';
    import "../style/app.css";
    let { children } = $props();

    let activeSection = $state('presentation');
    let customCursor;

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const rightColumn = document.querySelector('#right-section');
            const targetPosition = targetElement.offsetTop;
            const paddingOffset = 108;
            rightColumn.scrollTo({
                top: targetPosition - paddingOffset,
                behavior: 'smooth'
            });
        }
    }

    function handleMouseEnter(e) {
        if (e.target.matches('a, button, [role="button"], input[type="submit"], input[type="button"], .card')) {
            customCursor.classList.add('bg-white/50');
        }
    }

    function handleMouseClick(e) {
        customCursor.classList.add('w-2', 'h-2');
        customCursor.classList.remove('rounded-tl');
    }

    function handleMouseOut(e) {
        if (e.target.matches('a, button, [role="button"], input[type="submit"], input[type="button"], .card')) {
            customCursor.classList.remove('bg-white/50');
        }

    }

    function handleMouseUp(e) {
        customCursor.classList.remove('w-2', 'h-2', 'rounded-full');
        customCursor.classList.add('rounded-tl');
    }

    onMount(() => {
        customCursor = document.querySelector('.custom-cursor');
        console.log(customCursor);
        document.addEventListener('mousemove', e => {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mousedown', handleMouseClick);
        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('mouseup', handleMouseUp);

        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', scrollToSection);
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeSection = entry.target.id;
                }
            });
        }, {
            root: document.querySelector('#right-section'),
            threshold: 0.5
        });

        document.querySelectorAll('#right-section div[id]').forEach((section) => {
            observer.observe(section);
        });
    });
</script>

<div class="custom-cursor fixed border-2 border-white w-4 h-4 rounded-lg rounded-tl pointer-events-none z-50"></div>

<div class="fixed flex flex-col justify-between w-1/2 h-full items-start ps-40 py-24 pe-8 z-50">
    <div class="flex flex-col">
        <p class="text-5xl font-bold">
            Alessandro Longo
        </p>
        
        <div class="flex flex-row gap-4 items-center">
            <img class="size-8" src="images/logo-dark.png" alt="">
            <p class="text-lg font-thin m-0">
                Full stack developer - AI Enthusiast
            </p>
        </div>
    </div>

    <div class="flex flex-col justify-center items-start space-y-4">
        <a href="#presentation" class="nav-link text-2xl {activeSection === 'presentation' ? 'active' : ''}">Who am I?</a>
        <a href="#projects" class="nav-link text-2xl {activeSection === 'projects' ? 'active' : ''}">Projects</a>
        <a href="#contact" class="nav-link text-2xl {activeSection === 'contact' ? 'active' : ''}">Contact</a>
    </div>

    <div class="flex flex-row justify-start items-center gap-8 w-full">
        <a href="https://www.linkedin.com/in/alessandro-longo-2305d002" class="white opacity-50 hover:opacity-100 transition-all duration-200" aria-label="LinkedIn" target="_blank"><i class="cursor-pointer-none fa fa-linkedin fa-xl"></i></a>
        <a href="https://github.com/AlessandroLongo23" class="white opacity-50 hover:opacity-100 transition-all duration-200" aria-label="GitHub" target="_blank"><i class="cursor-pointer-none fa fa-github fa-xl"></i></a>
        <a href="" class="white opacity-50 hover:opacity-100 transition-all duration-200" aria-label="Instagram" target="_blank"><i class="cursor-pointer-none fa fa-instagram fa-xl"></i></a>
    </div>
</div>

<div id="right-section" class="absolute right-0 flex flex-col w-full h-screen pe-40 ps-8 py-24 overflow-y-auto">
    {@render children?.()}
</div>

<style>
    :global(*) {
        user-select: none;
        font-size: 16px;
    }

    .custom-cursor {
        transition: height 0.1s ease, width 0.1s ease, border-radius 0.3s ease, background-color 0.3s ease;
    }

    .nav-link {
        color: white;
        position: relative;
        padding-left: 1rem;
        transition: all 0.3s ease;
        opacity: .5;
        z-index: 50;
    }

    .nav-link::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.2rem;
        height: 0rem;
        background-color: transparent;
        transition: all 0.3s ease;
    }

    .nav-link.active::before {
        height: 2rem;
    }

    .nav-link:hover {
        opacity: 1;
    }

    .nav-link.active {
        color: white;
        opacity: 1;
    }

    .nav-link.active::before {
        background-color: white;
    }
</style>