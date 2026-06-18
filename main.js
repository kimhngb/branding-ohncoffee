class MenuItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .menu-item {
                    background-color: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 2rem;
                    text-align: left;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .menu-item:hover {
                    background-color: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.3);
                    transform: translateY(-5px);
                }
                h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                p {
                    margin: 0;
                    color: #888;
                    font-size: 0.9rem;
                    line-height: 1.6;
                }
                .price {
                    font-weight: 800;
                    color: #fff;
                    margin-top: 2rem;
                    display: block;
                    font-size: 1.1rem;
                }
            </style>
            <div class="menu-item">
                <div>
                    <h3>${this.getAttribute('name')}</h3>
                    <p>${this.getAttribute('description')}</p>
                </div>
                <span class="price">${this.getAttribute('price')}</span>
            </div>
        `;
    }
}

customElements.define('menu-item', MenuItem);

const menuItems = [
    { name: 'Espresso', description: 'Double shot of our signature volcanic blend.', price: '$4.50' },
    { name: 'Cold Brew', description: '24-hour slow-steeped for ultimate smoothness.', price: '$5.50' },
    { name: 'Oat Latte', description: 'Precision steamed oat milk with Ethiopia origin beans.', price: '$6.50' },
    { name: 'Hand Pour', description: 'Manual drip highlighting seasonal micro-lots.', price: '$7.50' },
    { name: 'Flat White', description: 'Velvety micro-foam over a concentrated ristretto.', price: '$5.50' },
    { name: 'Nitrous Cold Brew', description: 'Infused with nitrogen for a creamy, stout-like head.', price: '$6.00' },
];

const menuContainer = document.querySelector('.menu-items');
if (menuContainer) {
    menuItems.forEach(item => {
        const menuItem = document.createElement('menu-item');
        menuItem.setAttribute('name', item.name);
        menuItem.setAttribute('description', item.description);
        menuItem.setAttribute('price', item.price);
        menuContainer.appendChild(menuItem);
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Interactive Cursor Logic
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');
const glow = document.getElementById('cursor-glow');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    glow.style.left = `${mouseX}px`;
    glow.style.top = `${mouseY}px`;
});

// Follower with easing
function animateFollower() {
    const easing = 0.15;
    followerX += (mouseX - followerX) * easing;
    followerY += (mouseY - followerY) * easing;
    
    follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
    
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor Hover Effects
const links = document.querySelectorAll('a, button, .menu-item');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        follower.style.width = '80px';
        follower.style.height = '80px';
        follower.style.transform = `translate(${followerX - 40}px, ${followerY - 40}px)`;
        follower.style.background = 'rgba(255, 255, 255, 0.1)';
        cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px) scale(0.5)`;
    });
    link.addEventListener('mouseleave', () => {
        follower.style.width = '40px';
        follower.style.height = '40px';
        follower.style.background = 'transparent';
        cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px) scale(1)`;
    });
});

// Intersection Observer for Section Entrance
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
