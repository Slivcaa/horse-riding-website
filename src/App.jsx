import './index.css'

const horses = [
  {
    name: 'Bella',
    breed: 'Czech Warmblood',
    origin: 'South Bohemia',
    likes: 'Carrots, apples and calm walks',
  },
  {
    name: 'Atlas',
    breed: 'Friesian Mix',
    origin: 'Moravia',
    likes: 'Fresh grass and forest rides',
  },
  {
    name: 'Luna',
    breed: 'Haflinger',
    origin: 'Austria',
    likes: 'Bananas and gentle cuddles',
  },
]

function App() {
  return (
    <main>
      <header className="header">
        <div className="logo">Equora</div>

        <nav>
          <a href="#horses">Horses</a>
          <a href="#experiences">Experiences</a>
          <a href="#location">Location</a>
          <a href="#booking">Booking</a>
        </nav>

        <div className="languages">
          <button>EN</button>
          <button>CZ</button>
          <button>RU</button>
        </div>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Horse riding club</p>
          <h1>Ride, connect and create memories with horses</h1>
          <p className="subtitle">
            Private horse riding lessons, peaceful countryside rides and dreamy
            photoshoots with our beautiful horses.
          </p>

          <div className="heroButtons">
            <a href="#booking" className="primaryButton">
              Book a ride
            </a>
            <a href="#horses" className="secondaryButton">
              Meet our horses
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
        <p className="eyebrow">What we offer</p>
        <h2>Experiences for beginners, families and dreamers</h2>

        <div className="cards">
          <article className="card">
            <h3>Riding lessons</h3>
            <p>Safe private lessons for beginners and returning riders.</p>
          </article>

          <article className="card">
            <h3>Forest trail rides</h3>
            <p>Slow peaceful rides through nature with an experienced guide.</p>
          </article>

          <article className="card">
            <h3>Horse photoshoots</h3>
            <p>Romantic, family or pregnancy photoshoots with horses.</p>
          </article>
        </div>
      </section>

      <section className="section horsesSection" id="horses">
        <p className="eyebrow">Our horses</p>
        <h2>Meet the stars of our stable</h2>

        <div className="horseGrid">
          {horses.map((horse) => (
            <article className="horseCard" key={horse.name}>
              <div className="horseImage"></div>
              <h3>{horse.name}</h3>
              <p>
                <strong>Breed:</strong> {horse.breed}
              </p>
              <p>
                <strong>Origin:</strong> {horse.origin}
              </p>
              <p>
                <strong>Loves:</strong> {horse.likes}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section locationSection" id="location">
        <div>
          <p className="eyebrow">Where we are</p>
          <h2>Countryside riding near Prague</h2>
          <p>
            Visit our calm riding club surrounded by fields, forest paths and
            peaceful nature. Free parking is available for all visitors.
          </p>
        </div>

        <div className="locationBox">
          <p>📍 Prague countryside, Czech Republic</p>
          <p>🕘 Open daily by appointment</p>
          <p>🚗 Parking available</p>
        </div>
      </section>

      <section className="bookingSection" id="booking">
        <p className="eyebrow">Book your visit</p>
        <h2>Ready for your first ride?</h2>

        <form className="bookingForm">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Preferred date" />
          <select>
            <option>Riding lesson</option>
            <option>Forest trail ride</option>
            <option>Horse photoshoot</option>
          </select>
          <textarea placeholder="Tell us more..." />
          <button type="button">Send request</button>
        </form>
      </section>
    </main>
  )
}

export default App