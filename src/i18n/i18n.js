import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navHorses: 'Horses',
        navExperiences: 'Experiences',
        navLocation: 'Location',
        navBooking: 'Booking',

        eyebrowHero: 'Horse riding club',
        heroTitle: 'Ride, connect and create memories with horses',
        heroSubtitle:
          'Private horse riding lessons, peaceful countryside rides and dreamy photoshoots with our beautiful horses.',
        bookRide: 'Book a ride',
        meetHorses: 'Meet our horses',

        offerEyebrow: 'What we offer',
        offerTitle: 'Experiences for beginners, families and dreamers',
        lessonsTitle: 'Riding lessons',
        lessonsText: 'Safe private lessons for beginners and returning riders.',
        forestTitle: 'Forest trail rides',
        forestText:
          'Slow peaceful rides through nature with an experienced guide.',
        photoshootTitle: 'Horse photoshoots',
        photoshootText:
          'Romantic, family or pregnancy photoshoots with horses.',

        horsesEyebrow: 'Our horses',
        horsesTitle: 'Meet the stars of our stable',
        breed: 'Breed',
        origin: 'Origin',
        loves: 'Loves',

        locationEyebrow: 'Where we are',
        locationTitle: 'Countryside riding near Prague',
        locationText:
          'Visit our calm riding club surrounded by fields, forest paths and peaceful nature. Free parking is available for all visitors.',
        address: 'Prague countryside, Czech Republic',
        open: 'Open daily by appointment',
        parking: 'Parking available',

        bookingEyebrow: 'Book your visit',
        bookingTitle: 'Ready for your first ride?',
        name: 'Your name',
        email: 'Email address',
        date: 'Preferred date',
        message: 'Tell us more...',
        send: 'Send request',
      },
    },

    cz: {
      translation: {
        navHorses: 'Koně',
        navExperiences: 'Zážitky',
        navLocation: 'Kde nás najdete',
        navBooking: 'Rezervace',

        eyebrowHero: 'Jezdecký klub',
        heroTitle: 'Jízda na koni, spojení s přírodou a krásné vzpomínky',
        heroSubtitle:
          'Soukromé lekce jízdy na koni, klidné vyjížďky do přírody a kouzelné focení s našimi koňmi.',
        bookRide: 'Rezervovat jízdu',
        meetHorses: 'Poznat naše koně',

        offerEyebrow: 'Co nabízíme',
        offerTitle: 'Zážitky pro začátečníky, rodiny i snílky',
        lessonsTitle: 'Lekce jízdy',
        lessonsText:
          'Bezpečné soukromé lekce pro začátečníky i jezdce, kteří se k jízdě vracejí.',
        forestTitle: 'Vyjížďky do lesa',
        forestText: 'Klidné vyjížďky přírodou se zkušeným průvodcem.',
        photoshootTitle: 'Focení s koňmi',
        photoshootText: 'Romantické, rodinné nebo těhotenské focení s koňmi.',

        horsesEyebrow: 'Naši koně',
        horsesTitle: 'Poznejte hvězdy naší stáje',
        breed: 'Plemeno',
        origin: 'Původ',
        loves: 'Má rád/a',

        locationEyebrow: 'Kde nás najdete',
        locationTitle: 'Jízda na venkově nedaleko Prahy',
        locationText:
          'Navštivte náš klidný jezdecký klub obklopený poli, lesními cestami a přírodou. Parkování je pro návštěvníky zdarma.',
        address: 'Venkov u Prahy, Česká republika',
        open: 'Otevřeno denně po domluvě',
        parking: 'Parkování k dispozici',

        bookingEyebrow: 'Rezervujte si návštěvu',
        bookingTitle: 'Jste připraveni na první jízdu?',
        name: 'Vaše jméno',
        email: 'E-mailová adresa',
        date: 'Preferovaný termín',
        message: 'Napište nám více...',
        send: 'Odeslat poptávku',
      },
    },

    ru: {
      translation: {
        navHorses: 'Лошади',
        navExperiences: 'Услуги',
        navLocation: 'Локация',
        navBooking: 'Запись',

        eyebrowHero: 'Конный клуб',
        heroTitle: 'Верховая езда, природа и красивые воспоминания',
        heroSubtitle:
          'Индивидуальные уроки верховой езды, спокойные прогулки на природе и атмосферные фотосессии с нашими лошадьми.',
        bookRide: 'Записаться',
        meetHorses: 'Наши лошади',

        offerEyebrow: 'Что мы предлагаем',
        offerTitle: 'Занятия для новичков, семей и мечтателей',
        lessonsTitle: 'Уроки верховой езды',
        lessonsText:
          'Безопасные индивидуальные занятия для новичков и тех, кто возвращается к езде.',
        forestTitle: 'Прогулки по лесу',
        forestText:
          'Спокойные прогулки на природе с опытным сопровождающим.',
        photoshootTitle: 'Фотосессии с лошадьми',
        photoshootText:
          'Романтические, семейные или беременные фотосессии с лошадьми.',

        horsesEyebrow: 'Наши лошади',
        horsesTitle: 'Познакомьтесь со звёздами нашей конюшни',
        breed: 'Порода',
        origin: 'Происхождение',
        loves: 'Любит',

        locationEyebrow: 'Где мы находимся',
        locationTitle: 'Верховая езда за городом рядом с Прагой',
        locationText:
          'Приезжайте в наш спокойный конный клуб среди полей, лесных тропинок и природы. Для гостей есть бесплатная парковка.',
        address: 'Пригород Праги, Чехия',
        open: 'Открыто ежедневно по записи',
        parking: 'Есть парковка',

        bookingEyebrow: 'Запись на визит',
        bookingTitle: 'Готовы к первой прогулке?',
        name: 'Ваше имя',
        email: 'Email',
        date: 'Желаемая дата',
        message: 'Напишите нам подробнее...',
        send: 'Отправить заявку',
      },
    },
  },

  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n