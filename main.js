class MenuItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .menu-item {
                    background-color: var(--card-bg, white);
                    border-radius: 10px;
                    box-shadow: 0 4px 8px var(--card-shadow, rgba(0,0,0,0.1));
                    padding: 1.5rem;
                    text-align: center;
                    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
                }
                .menu-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px var(--card-shadow, rgba(0,0,0,0.2));
                }
                h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                    color: var(--primary-color, #6F4E37);
                }
                p {
                    margin: 0;
                    color: var(--text-color, #333);
                }
                .price {
                    font-weight: bold;
                    color: var(--accent-color, #D2B48C);
                    margin-top: 1rem;
                    display: block;
                }
            </style>
            <div class="menu-item">
                <h3>${this.getAttribute('name')}</h3>
                <p>${this.getAttribute('description')}</p>
                <span class="price">${this.getAttribute('price')}</span>
            </div>
        `;
    }
}

customElements.define('menu-item', MenuItem);

const menuItems = [
    { name: 'Espresso', description: 'A strong, concentrated coffee.', price: '$2.50' },
    { name: 'Latte', description: 'Espresso with steamed milk and a thin layer of foam.', price: '$3.50' },
    { name: 'Cappuccino', description: 'Espresso with equal parts steamed milk and foam.', price: '$3.50' },
    { name: 'Americano', description: 'Espresso diluted with hot water.', price: '$3.00' },
    { name: 'Mocha', description: 'Espresso with steamed milk, chocolate, and whipped cream.', price: '$4.00' },
    { name: 'Macchiato', description: 'Espresso with a dollop of foamed milk.', price: '$3.00' },
];

const menuContainer = document.querySelector('.menu-items');

menuItems.forEach(item => {
    const menuItem = document.createElement('menu-item');
    menuItem.setAttribute('name', item.name);
    menuItem.setAttribute('description', item.description);
    menuItem.setAttribute('price', item.price);
    menuContainer.appendChild(menuItem);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = 'White Mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? 'White Mode' : 'Dark Mode';
});
