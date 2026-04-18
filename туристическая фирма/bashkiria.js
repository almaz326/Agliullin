/* ========================================
   ДАННЫЕ: ТУРЫ ПО БАШКОРТОСТАНУ
   ======================================== */

const toursData = [
    {
        id: 1,
        title: "🕳️ Капова пещера + Шульган-Таш",
        category: "cultural",
        price: "3 500 ₽",
        duration: "1 день",
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Посещение знаменитой пещеры с наскальными рисунками палеолита, музей, дегустация мёда [[1]][[33]]"
    },
    {
        id: 2,
        title: "⛰️ Восхождение на Иремель",
        category: "hiking",
        price: "4 200 ₽",
        duration: "1 день",
        img: "https://images.unsplash.com/photo-1464822759085-2f3661248589?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Трекинг к священной вершине Южного Урала, панорамные виды, опытный гид [[29]]"
    },
    {
        id: 3,
        title: "🏔️ Озеро Банное (Якты-Куль)",
        category: "family",
        price: "5 000 ₽",
        duration: "2 дня / 1 ночь",
        img: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Отдых на горном озере, купание, рыбалка, база отдыха, трансфер из Уфы [[24]][[36]]"
    },
    {
        id: 4,
        title: "🚣 Сплав по реке Белая (Агидель)",
        category: "water",
        price: "6 800 ₽",
        duration: "3 дня / 2 ночи",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Активный сплав по главной реке Башкирии, ночёвки на берегу, костры и песни [[17]][[20]]"
    },
    {
        id: 5,
        title: "🗻 Шиханы: Торатау и Юрактау",
        category: "cultural",
        price: "2 800 ₽",
        duration: "1 день",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Экскурсия к уникальным горам-останцам, легенды башкирского народа, фотосессия [[4]]"
    },
    {
        id: 6,
        title: "🌲 Мурадымовское ущелье",
        category: "hiking",
        price: "3 900 ₽",
        duration: "1 день",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Прогулка по живописному каньону, пещеры, водопад Большой Куперля, экотропы [[2]]"
    },
    {
        id: 7,
        title: "🏙️ Обзорная экскурсия по Уфе",
        category: "cultural",
        price: "2 500 ₽",
        duration: "4 часа",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Памятник Салавату Юлаеву, мечеть Ляля-Тюльпан, набережная, дегустация башкирских блюд [[6]]"
    },
    {
        id: 8,
        title: "🧊 Аскинская ледяная пещера",
        category: "extreme",
        price: "4 500 ₽",
        duration: "1 день",
        img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Уникальная ледяная пещера Урала, реликтовый лёд даже летом, необычные фото [[5]]"
    },
    {
        id: 9,
        title: "🐎 Конный тур по хребту Крака",
        category: "extreme",
        price: "8 900 ₽",
        duration: "3 дня / 2 ночи",
        img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Верховая прогулка по горным тропам, ночёвка в юрте, башкирская кухня у костра [[17]]"
    },
    {
        id: 10,
        title: "👨‍👩‍👧‍👦 Семейный уикенд в Павловке",
        category: "family",
        price: "7 200 ₽",
        duration: "2 дня / 1 ночь",
        img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Отдых на водохранилище, рыбалка, баня, детские активности, трансфер из Уфы [[14]]"
    },
    {
        id: 11,
        title: "🌊 Водопад Атыш + Голубое озеро",
        category: "hiking",
        price: "3 700 ₽",
        duration: "1 день",
        img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Посещение необычного водопада, бьющего из скалы, и карстового Голубого озера [[28]]"
    },
    {
        id: 12,
        title: "🧭 Мультитур: Горы + Пещеры + Озёра",
        category: "extreme",
        price: "15 900 ₽",
        duration: "5 дней / 4 ночи",
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc: "Комплексный тур: Иремель, Капова пещера, Банное, Шиханы — максимум впечатлений! [[12]][[13]]"
    }
];

/* ========================================
   ДАННЫЕ: ОТЗЫВЫ
   ======================================== */
const reviewsData = [
    { 
        name: "Елена, Москва", 
        text: "Поездка на Иремель — это нечто! Виды потрясающие, гид Алмаз — профессионал. Обязательно вернёмся летом!", 
        rating: 5, 
        img: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
    { 
        name: "Дмитрий, Казань", 
        text: "Сплав по Белой превзошёл ожидания. Организация на высоте, еда вкусная, компания подобралась отличная. Рекомендую!", 
        rating: 5, 
        img: "https://randomuser.me/api/portraits/men/32.jpg" 
    },
    { 
        name: "Семья Ивановых, Уфа", 
        text: "Отдыхали с детьми на Банном. Всё понравилось: чистое озеро, уютная база, экскурсии интересные. Спасибо!", 
        rating: 4, 
        img: "https://randomuser.me/api/portraits/women/68.jpg" 
    },
    { 
        name: "Айгуль, Стерлитамак", 
        text: "Экскурсия к Шиханам открыла для меня красоту родного края. Очень душевно, с легендами и историями.", 
        rating: 5, 
        img: "https://randomuser.me/api/portraits/women/22.jpg" 
    }
];