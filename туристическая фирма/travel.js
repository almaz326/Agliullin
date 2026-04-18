/* ========================================
   ДАННЫЕ: ТУРЫ ПО БАШКОРТОСТАНУ
   ======================================== */
const toursData = [
    { id: 1, title: "🕳️ Капова пещера + Шульган-Таш", category: "cultural", price: "3 500 ₽", duration: "1 день", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Наскальные рисунки палеолита, музей, дегустация мёда" },
    { id: 2, title: "⛰️ Восхождение на Иремель", category: "hiking", price: "4 200 ₽", duration: "1 день", img: "https://images.unsplash.com/photo-1464822759085-2f3661248589?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Трекинг к священной вершине, панорамы, опытный гид" },
    { id: 3, title: "🏔️ Озеро Банное (Якты-Куль)", category: "family", price: "5 000 ₽", duration: "2 дня / 1 ночь", img: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Горное озеро, купание, рыбалка, трансфер из Уфы" },
    { id: 4, title: "🚣 Сплав по реке Белой", category: "water", price: "6 800 ₽", duration: "3 дня / 2 ночи", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Сплав по главной реке Башкирии, костры и песни" },
    { id: 5, title: "🗻 Шиханы: Торатау и Юрактау", category: "cultural", price: "2 800 ₽", duration: "1 день", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Горы-останцы, легенды, фотосессия" },
    { id: 6, title: "🌲 Мурадымовское ущелье", category: "hiking", price: "3 900 ₽", duration: "1 день", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Каньон, пещеры, водопад Большой Куперля" },
    { id: 7, title: "🏙️ Обзорная экскурсия по Уфе", category: "cultural", price: "2 500 ₽", duration: "4 часа", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Салават Юлаев, Ляля-Тюльпан, башкирская кухня" },
    { id: 8, title: "🧊 Аскинская ледяная пещера", category: "extreme", price: "4 500 ₽", duration: "1 день", img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Реликтовый лёд даже летом, необычные фото" },
    { id: 9, title: "🐎 Конный тур по хребту Крака", category: "extreme", price: "8 900 ₽", duration: "3 дня / 2 ночи", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Горные тропы, ночёвка в юрте, кухня у костра" },
    { id: 10, title: "👨‍👩‍👧‍👦 Семейный уикенд в Павловке", category: "family", price: "7 200 ₽", duration: "2 дня / 1 ночь", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Водохранилище, рыбалка, баня, детские активности" },
    { id: 11, title: "🌊 Водопад Атыш + Голубое озеро", category: "hiking", price: "3 700 ₽", duration: "1 день", img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Водопад из скалы, карстовое озеро" },
    { id: 12, title: "🧭 Мультитур: Горы + Пещеры + Озёра", category: "extreme", price: "15 900 ₽", duration: "5 дней / 4 ночи", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", desc: "Иремель, Капова, Банное, Шиханы — максимум впечатлений!" }
];

const reviewsData = [
    { name: "Елена, Москва", text: "Поездка на Иремель — это нечто! Виды потрясающие, гид Алмаз — профессионал.", rating: 5, img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Дмитрий, Казань", text: "Сплав по Белой превзошёл ожидания. Организация на высоте, еда вкусная.", rating: 5, img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Семья Ивановых, Уфа", text: "Отдыхали с детьми на Банном. Чистое озеро, уютная база. Спасибо!", rating: 4, img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Айгуль, Стерлитамак", text: "Экскурсия к Шиханам открыла красоту родного края. Очень душевно!", rating: 5, img: "https://randomuser.me/api/portraits/women/22.jpg" }
];

/* ========================================
   DOM ЭЛЕМЕНТЫ
   ======================================== */
const toursContainer = document.getElementById('tours-container');
const reviewsSlider = document.getElementById('reviews-slider');
const modal = document.getElementById('bookingModal');
const tourNameInput = document.getElementById('tour-name');
const toastEl = document.getElementById('toast');
const header = document.getElementById('header');

/* ========================================
   ФУНКЦИИ
   ======================================== */
function renderTours(filter = 'all') {
    toursContainer.innerHTML = '';
    const filtered = filter === 'all' ? toursData : toursData.filter(t => t.category === filter);
    
    if (filtered.length === 0) {
        toursContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">Пока нет туров в этой категории.</p>';
        return;
    }
    
    filtered.forEach(tour => {
        const card = document.createElement('div');
        card.className = 'tour-card';
        card.innerHTML = `
            <div style="position:relative;">
                <img src="${tour.img}" alt="${tour.title}" style="width:100%; height:200px; object-fit:cover;">
                <button class="fav-btn" data-action="fav" aria-label="В избранное"><i class="fas fa-heart"></i></button>
            </div>
            <div class="tour-details">
                <h3>${tour.title}</h3>
                <p style="font-size:0.9rem; color:#666; margin: 10px 0; flex-grow:1;">${tour.desc}</p>
                <div class="tour-meta">
                    <span><i class="far fa-clock"></i> ${tour.duration}</span>
                    <span style="color:var(--primary-color); font-weight:bold;">${tour.price}</span>
                </div>
                <button class="btn" style="width:100%; margin-top:15px;" data-action="modal" data-value="${tour.title}">Забронировать</button>
            </div>
        `;
        toursContainer.appendChild(card);
    });
}

function renderReviews() {
    reviewsSlider.innerHTML = '';
    reviewsData.forEach(review => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <img src="${review.img}" alt="${review.name}" class="review-avatar" loading="lazy">
            <h3>${review.name}</h3>
            <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p>"${review.text}"</p>
        `;
        reviewsSlider.appendChild(item);
    });
}

function showToast(message, type = 'success') {
    toastEl.textContent = message;
    toastEl.className = `toast show ${type}`;
    setTimeout(() => { toastEl.className = 'toast'; }, 4000);
}

function openModal(tourName) {
    tourNameInput.value = tourName;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const icon = document.querySelector('.burger i');
    nav.classList.toggle('active');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

function toggleFav(btn) {
    const isFav = btn.classList.toggle('active');
    showToast(isFav ? '❤️ Добавлено в избранное' : '💔 Удалено', isFav ? 'success' : 'error');
    
    if (isFav) {
        const tourTitle = btn.closest('.tour-card').querySelector('h3').textContent;
        let favs = JSON.parse(localStorage.getItem('bashkiria_favorites') || '[]');
        if (!favs.includes(tourTitle)) {
            favs.push(tourTitle);
            localStorage.setItem('bashkiria_favorites', JSON.stringify(favs));
        }
    }
}

/* ========================================
   ИНИЦИАЛИЗАЦИЯ И СОБЫТИЯ
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderTours();
    renderReviews();

    // Фильтры
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTours(btn.dataset.filter);
        });
    });

    // Делегирование событий (модальные окна, избранное)
    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-action]');
        if (!target) return;
        
        if (target.dataset.action === 'modal') {
            openModal(target.dataset.value);
        } else if (target.dataset.action === 'fav') {
            toggleFav(target);
        }
    });

    // Закрытие модалки
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.style.display === 'flex') closeModal(); });

    // Бургер-меню
    document.querySelector('.burger').addEventListener('click', toggleMenu);
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('nav-menu');
            const icon = document.querySelector('.burger i');
            nav.classList.remove('active');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Форма бронирования
    document.getElementById('bookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const phone = document.getElementById('phone').value.replace(/\s/g, '');
        if (!/^(\+7|8)\(?\d{3}\)?\d{7}$/.test(phone)) {
            showToast('⚠️ Введите корректный номер телефона', 'error');
            return;
        }
        closeModal();
        showToast('✅ Заявка отправлена! Ждите звонка.', 'success');
        e.target.reset();
    });

    // Поиск (имитация)
    document.getElementById('searchForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('🔍 Поиск туров по Башкирии запущен!', 'success');
    });

    // Слайдер отзывов
    let currentSlide = 0;
    let slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % reviewsData.length;
        reviewsSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 5000);

    document.querySelector('.reviews-container').addEventListener('mouseenter', () => clearInterval(slideInterval));
    document.querySelector('.reviews-container').addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % reviewsData.length;
            reviewsSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 5000);
    });

    // Эффект шапки при скролле
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});