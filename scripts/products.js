// Products page functionality

// Product data
const productData = {
    teknoinnovasi: {
        title: 'PT Tekno Inovasi Indonesia',
        category: 'Website Corporate',
        description: 'Website corporate yang dirancang khusus untuk PT Tekno Inovasi Indonesia, sebuah perusahaan teknologi terdepan. Website ini menampilkan profil perusahaan, layanan yang ditawarkan, portfolio project, dan sistem manajemen konten yang memudahkan tim untuk mengupdate informasi terbaru.',
        features: [
            'Design responsive untuk semua device',
            'Content Management System (CMS)',
            'SEO optimization untuk ranking Google',
            'Company profile yang komprehensif',
            'Portfolio showcase interaktif',
            'Contact form dengan email notification',
            'Blog system untuk artikel perusahaan',
            'Multi-language support (ID/EN)'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap']
    },
    fashionstore: {
        title: 'Fashion Store Online',
        category: 'E-Commerce Platform',
        description: 'Platform e-commerce lengkap untuk bisnis fashion online dengan fitur-fitur canggih seperti sistem pembayaran terintegrasi, manajemen inventory otomatis, dan dashboard admin yang user-friendly. Dilengkapi dengan aplikasi mobile untuk kemudahan berbelanja.',
        features: [
            'Katalog produk dengan filter canggih',
            'Shopping cart dan wishlist',
            'Multiple payment gateway (Midtrans, PayPal)',
            'Inventory management system',
            'Order tracking real-time',
            'Admin dashboard dengan analytics',
            'Customer review dan rating system',
            'Mobile app untuk iOS dan Android',
            'Email marketing integration',
            'Discount dan coupon system'
        ],
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API', 'React Native', 'Redux']
    },
    digitalmarketing: {
        title: 'Digital Marketing Agency',
        category: 'Landing Page',
        description: 'Landing page yang dioptimalkan untuk konversi tinggi, dirancang khusus untuk digital marketing agency. Dilengkapi dengan form lead generation yang efektif, testimonial interaktif, dan integrasi analytics untuk tracking performa campaign.',
        features: [
            'High-converting landing page design',
            'Lead generation forms dengan validation',
            'Testimonial carousel interaktif',
            'Service showcase dengan animasi',
            'Call-to-action buttons yang strategis',
            'Google Analytics dan Facebook Pixel',
            'A/B testing capability',
            'Page speed optimization (90+ score)',
            'Social media integration',
            'Email autoresponder integration'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Google Analytics', 'Mailchimp API']
    },
    johndoe: {
        title: 'John Doe Creative Portfolio',
        category: 'Portfolio Website',
        description: 'Website portfolio yang stunning untuk desainer grafis dan creative professional. Menampilkan karya-karya terbaik dengan galeri interaktif, animasi smooth, dan design yang memukau untuk memberikan kesan profesional kepada calon klien.',
        features: [
            'Interactive portfolio gallery',
            'Smooth scroll animations',
            'Project case studies detail',
            'Client testimonials slider',
            'Contact form dengan file upload',
            'Blog untuk sharing creative process',
            'Social media integration',
            'Mobile-optimized gallery',
            'Loading animations yang menarik',
            'Dark/light mode toggle'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Three.js', 'Swiper.js']
    },
    healthclinic: {
        title: 'Prima Health Clinic',
        category: 'Website Corporate',
        description: 'Website untuk klinik kesehatan dengan sistem booking appointment online yang terintegrasi. Menyediakan informasi lengkap tentang dokter, layanan medis, dan jadwal praktek. Dilengkapi dengan portal khusus untuk dokter dan pasien.',
        features: [
            'Online appointment booking system',
            'Doctor profiles dan schedules',
            'Patient portal untuk medical records',
            'Service information yang detail',
            'Health articles dan tips',
            'Emergency contact information',
            'Insurance information system',
            'Medical equipment showcase',
            'Testimonial dari pasien',
            'Multi-location support'
        ],
        technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'Calendar API']
    },
    fooddelivery: {
        title: 'Food Delivery Platform',
        category: 'E-Commerce Platform',
        description: 'Platform delivery makanan dengan sistem real-time tracking yang canggih. Menghubungkan customer, restaurant, dan delivery driver dalam satu ecosystem yang terintegrasi. Dilengkapi dengan multiple payment options dan dashboard management untuk semua stakeholder.',
        features: [
            'Real-time order tracking dengan GPS',
            'Multi-restaurant marketplace',
            'Driver assignment algorithm',
            'Multiple payment methods',
            'Restaurant dashboard untuk menu management',
            'Customer rating dan review system',
            'Push notifications untuk update order',
            'Delivery time estimation',
            'Promo dan discount management',
            'Analytics dashboard untuk insights'
        ],
        technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Google Maps API', 'Firebase', 'Stripe']
    }
};

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hidden');
                    // Re-trigger AOS animation
                    card.classList.add('aos-animate');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});

// Modal functionality
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');

function openModal(productId) {
    const product = productData[productId];
    if (!product) return;

    // Create modal content
    const modalContent = `
        <div class="modal-header">
            <h2>${product.title}</h2>
            <p class="modal-category">${product.category}</p>
        </div>
        
        <div class="modal-image ${getImageClass(product.category)}">
            <div class="website-preview">
                <div class="browser-bar">
                    <div class="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="browser-url">${getWebsiteUrl(productId)}</div>
                </div>
                <div class="preview-content">
                    <div class="preview-header">${getPreviewIcon(product.category)}</div>
                    <h3>${product.title.split(' ').slice(0, 2).join(' ')}</h3>
                    <p>${product.category}</p>
                </div>
            </div>
        </div>
        
        <div class="modal-description">
            <p>${product.description}</p>
        </div>
        
        <div class="modal-features">
            <h3>Fitur Utama</h3>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-tech">
            <h3>Teknologi yang Digunakan</h3>
            <div class="tech-tags">
                ${product.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function getImageClass(category) {
    const classes = {
        'Website Corporate': 'corporate-bg',
        'E-Commerce': 'ecommerce-bg',
        'E-Commerce Platform': 'ecommerce-bg',
        'Landing Page': 'landing-bg',
        'Portfolio Website': 'portfolio-bg'
    };
    return classes[category] || 'corporate-bg';
}

function getWebsiteUrl(productId) {
    const urls = {
        teknoinnovasi: 'teknoinnovasi.co.id',
        fashionstore: 'fashionstore.id',
        digitalmarketing: 'digitalmarketing.pro',
        johndoe: 'johndoe.design',
        healthclinic: 'healthclinic.co.id',
        fooddelivery: 'fooddelivery.app'
    };
    return urls[productId] || 'example.com';
}

function getPreviewIcon(category) {
    const icons = {
        'Website Corporate': '🏢',
        'E-Commerce': '🛒',
        'E-Commerce Platform': '🍕',
        'Landing Page': '📈',
        'Portfolio Website': '🎨'
    };
    return icons[category] || '🏢';
}

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    const overlay = card.querySelector('.product-overlay');
    const image = card.querySelector('.product-image');
    
    card.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// Intersection Observer for product cards animation
const productObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Initially hide cards for animation
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    productObserver.observe(card);
});

// Add loading effect for images
document.querySelectorAll('.image-placeholder').forEach(placeholder => {
    placeholder.style.position = 'relative';
    placeholder.style.overflow = 'hidden';
    
    // Add shimmer effect
    const shimmer = document.createElement('div');
    shimmer.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        animation: shimmer 2s infinite;
    `;
    
    placeholder.appendChild(shimmer);
});

// Add shimmer animation
const shimmerStyle = document.createElement('style');
shimmerStyle.textContent = `
    @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }
`;
document.head.appendChild(shimmerStyle);

// Search functionality (bonus feature)
function addSearchFunctionality() {
    const searchContainer = document.querySelector('.filter-section .container');
    const searchInput = document.createElement('input');
    
    searchInput.type = 'text';
    searchInput.placeholder = 'Cari produk...';
    searchInput.className = 'product-search';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 0.75rem 1rem;
        border: 2px solid var(--border-color);
        border-radius: 50px;
        font-size: 1rem;
        margin-bottom: 1rem;
        transition: var(--transition);
    `;
    
    searchContainer.insertBefore(searchInput, searchContainer.firstChild);
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-info h3').textContent.toLowerCase();
            const description = card.querySelector('.product-description').textContent.toLowerCase();
            const category = card.querySelector('.product-category').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', addSearchFunctionality);

// Add smooth transitions for filter changes
const style = document.createElement('style');
style.textContent = `
    .product-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .product-card.hidden {
        opacity: 0;
        transform: scale(0.8) translateY(20px);
        pointer-events: none;
    }
    
    .product-search:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
`;
document.head.appendChild(style);