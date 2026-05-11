import { useTranslation } from 'react-i18next'
import './index.css'

const horses = [
  {
    name: 'Bella',
     image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=700&q=80',
    breed: {
      en: 'Czech Warmblood',
      ru: 'Чешский теплокровный',
      cz: 'Český teplokrevník',
    },
    origin: {
      en: 'South Bohemia',
      ru: 'Южная Богемия',
      cz: 'Jižní Čechy',
    },
    likes: {
      en: 'Carrots, apples and calm walks',
      ru: 'Морковь, яблоки и спокойные прогулки',
      cz: 'Mrkev, jablka a klidné procházky',
    },
  },

  {
    name: 'Atlas',
    image: 'https://images.unsplash.com/photo-1606107869722-d5cbadabe2f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    breed: {
      en: 'Friesian Mix',
      ru: 'Фризская смесь',
      cz: 'Fríský mix',
    },
    origin: {
      en: 'Moravia',
      ru: 'Моравия',
      cz: 'Morava',
    },
    likes: {
      en: 'Fresh grass and forest rides',
      ru: 'Свежую траву и прогулки по лесу',
      cz: 'Čerstvou trávu a lesní vyjížďky',
    },
  },

  {
    name: 'Luna',
    image: 'https://images.unsplash.com/photo-1450052590821-8bf91254a353?auto=format&fit=crop&w=700&q=80',
    breed: {
      en: 'Haflinger',
      ru: 'Хафлингер',
      cz: 'Hafling',
    },
    origin: {
      en: 'Austria',
      ru: 'Австрия',
      cz: 'Rakousko',
    },
    likes: {
      en: 'Bananas and gentle cuddles',
      ru: 'Бананы и ласку',
      cz: 'Banány a mazlení',
    },
  },
]

function App() {
  const { t, i18n } = useTranslation()

  return (
    <main>
      <header className="header">
        <div className="logo">Equora</div>

        <nav>
          <a href="#horses">{t('navHorses')}</a>
          <a href="#experiences">{t('navExperiences')}</a>
          <a href="#location">{t('navLocation')}</a>
          <a href="#booking">{t('navBooking')}</a>
        </nav>

        <div className="languages">
         <button className={i18n.language === 'en' ? 'active' : ''} onClick={() => i18n.changeLanguage('en')}>EN</button>
<button className={i18n.language === 'cz' ? 'active' : ''} onClick={() => i18n.changeLanguage('cz')}>CZ</button>
<button className={i18n.language === 'ru' ? 'active' : ''} onClick={() => i18n.changeLanguage('ru')}>RU</button>
        </div>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">{t('eyebrowHero')}</p>
          <h1>{t('heroTitle')}</h1>
          <p className="subtitle">{t('heroSubtitle')}</p>

          <div className="heroButtons">
            <a href="#booking" className="primaryButton">
              {t('bookRide')}
            </a>
            <a href="#horses" className="secondaryButton">
              {t('meetHorses')}
            </a>
          </div>
        </div>

        <div className="heroImage">
          <img
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=900&q=80"
            alt="Horse in nature"
          />
        </div>
      </section>

      <section className="section" id="experiences">
        <p className="eyebrow">{t('offerEyebrow')}</p>
        <h2>{t('offerTitle')}</h2>

        <div className="cards">
          <article className="card">
            <h3>{t('lessonsTitle')}</h3>
            <p>{t('lessonsText')}</p>
          </article>

          <article className="card">
            <h3>{t('forestTitle')}</h3>
            <p>{t('forestText')}</p>
          </article>

          <article className="card">
            <h3>{t('photoshootTitle')}</h3>
            <p>{t('photoshootText')}</p>
          </article>
        </div>
      </section>

      <section className="section horsesSection" id="horses">
        <p className="eyebrow">{t('horsesEyebrow')}</p>
        <h2>{t('horsesTitle')}</h2>

        <div className="horseGrid">
          {horses.map((horse) => (
            <article className="horseCard" key={horse.name}>
              <div className="horseImage">
  <img src={horse.image} alt={horse.name} />
</div>
              <h3>{horse.name}</h3>
              <p>
                <strong>{t('breed')}:</strong> {horse.breed[i18n.language]}
              </p>
              <p>
                <strong>{t('origin')}:</strong> {horse.origin[i18n.language]}
              </p>
              <p>
                <strong>{t('loves')}:</strong> {horse.likes[i18n.language]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section locationSection" id="location">
        <div>
          <p className="eyebrow">{t('locationEyebrow')}</p>
          <h2>{t('locationTitle')}</h2>
          <p>{t('locationText')}</p>
        </div>

        <div className="locationBox">
          <p>📍 {t('address')}</p>
          <p>🕘 {t('open')}</p>
          <p>🚗 {t('parking')}</p>
        </div>
      </section>

      <section className="bookingSection" id="booking">
        <p className="eyebrow">{t('bookingEyebrow')}</p>
        <h2>{t('bookingTitle')}</h2>

        <form className="bookingForm">
          <input type="text" placeholder={t('name')} />
          <input type="email" placeholder={t('email')} />
          <input type="text" placeholder={t('date')} />

          <select>
            <option>{t('lessonsTitle')}</option>
            <option>{t('forestTitle')}</option>
            <option>{t('photoshootTitle')}</option>
          </select>

          <textarea placeholder={t('message')} />
          <button type="button">{t('send')}</button>
        </form>
      </section>
    </main>
  )
}

export default App