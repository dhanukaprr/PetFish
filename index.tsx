import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- Constants & Mock Data ---

const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'ALL AQUA', icon: '🌊' },
  { id: 'fish', name: 'FISH', icon: '🐠' },
  { id: 'corals', name: 'CORALS', icon: '🪸' },
  { id: 'plants', name: 'PLANTS', icon: '🌿' },
  { id: 'supplies', name: 'SUPPLIES', icon: '🫧' }
];

const PRODUCTS = [
  {
    id: 1,
    name: "TROPICAL MIX",
    desc: "Premium flakes for vibrant scales",
    price: "$29.99 / 500G",
    category: 'supplies',
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    color: '#FF9A24'
  },
  {
    id: 2,
    name: "ALGAE WAFER",
    desc: "Sinking nutrition for bottom feeders",
    price: "$19.99 / 200G",
    category: 'supplies',
    image: "https://images.unsplash.com/photo-1520244030490-675e47c1f836?auto=format&fit=crop&q=80&w=400",
    rating: 4,
    color: '#FFC529'
  },
  {
    id: 3,
    name: "VITALITY PELLETS",
    desc: "Slow-release growth formula",
    price: "$34.99 / 400G",
    category: 'supplies',
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    color: '#A5E6B4'
  }
];

const TESTIMONIALS = [
  {
    name: "AMELIA WRIGHT",
    location: "USA",
    text: "My reef tank feels healthier and more vibrant than ever. The service is always smooth, and I trust their biology-first approach completely.",
    image: "https://i.pravatar.cc/150?u=amelia",
    color: '#FFC529'
  },
  {
    name: "JORDAN CLARK",
    location: "CANADA",
    text: "Great selection, fast delivery, and helpful guidance. It's my go-to place whenever I need something specific for my marine setup.",
    image: "https://i.pravatar.cc/150?u=jordan",
    color: '#A5E6B4'
  },
  {
    name: "SOFIA REED",
    location: "UK",
    text: "I love how truly personal their advice is. Every purchase has been worth it, and my Discus are thriving under their care plan.",
    image: "https://i.pravatar.cc/150?u=sofia",
    color: '#FF9A24'
  }
];

// --- Sub-components ---

const Button = ({ children, variant = 'primary', onClick, style }: any) => {
  const baseStyle: React.CSSProperties = {
    padding: '0.8rem 2rem',
    borderRadius: '15px',
    fontWeight: '700',
    fontSize: '0.9rem',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    ...style
  };

  const variants: any = {
    primary: { backgroundColor: 'var(--primary)', color: 'white' },
    secondary: { backgroundColor: 'var(--green)', color: 'var(--secondary)' },
    outline: { backgroundColor: 'transparent', border: '2px solid var(--secondary)', color: 'var(--secondary)' },
    brown: { backgroundColor: 'var(--brown)', color: 'white' }
  };

  return (
    <button style={{ ...baseStyle, ...variants[variant] }} onClick={onClick}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }: any) => (
  <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '3rem' }}>
    <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--secondary)', lineHeight: 1.1, textTransform: 'uppercase' }}>
      {title}
    </h2>
    {subtitle && <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '600px', marginLeft: centered ? 'auto' : '0', marginRight: centered ? 'auto' : '0' }}>
      {subtitle}
    </p>}
  </div>
);

// --- Pages ---

const Home = ({ setActivePage }: any) => {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>VIBRANT <br/> WAVES</h1>
          <p style={styles.heroSubtitle}>
            We bring health, beauty, and harmony to your tank — because your aquatic friends deserve nothing less than joy.
          </p>
          <div style={styles.heroCTA}>
            <div style={styles.heroSmallCard}>
              <img src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=150" style={styles.heroSmallImg} />
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.8rem' }}>TANK CARE MADE SIMPLE</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Expert advice for every finny friend.</p>
                <button style={styles.inlineBtn} onClick={() => setActivePage('products')}>Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.heroGraphic}>
          <div style={styles.blobContainer}>
            <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800" style={styles.heroMainImg} />
          </div>
          {/* Circular floaties */}
          <div style={{ ...styles.floatCircle, top: '0', right: '0', background: 'var(--primary)' }}>🐠</div>
          <div style={{ ...styles.floatCircle, bottom: '20%', left: '-20px', background: 'var(--yellow)' }}>🐚</div>
          <div style={{ ...styles.floatCircle, top: '20%', left: '-40px', background: 'var(--green)' }}>🫧</div>
        </div>

        <div style={styles.heroStats}>
          <div style={styles.heroStatItem}>
            <div style={{ ...styles.statIcon, backgroundColor: 'var(--yellow)' }}>🏆</div>
            <div>
              <p style={styles.statNum}>14</p>
              <p style={styles.statText}>years experience</p>
            </div>
          </div>
          <div style={styles.heroStatItem}>
            <div style={{ ...styles.statIcon, backgroundColor: 'var(--primary)' }}>🐠</div>
            <div>
              <p style={styles.statNum}>850+</p>
              <p style={styles.statText}>rare species</p>
            </div>
          </div>
          <div style={styles.heroStatItem}>
            <div style={{ ...styles.statIcon, backgroundColor: 'var(--green)' }}>📦</div>
            <div>
              <p style={styles.statNum}>42</p>
              <p style={styles.statText}>shipping zones</p>
            </div>
          </div>
          <div style={styles.heroStatItem}>
            <div style={{ ...styles.statIcon, backgroundColor: 'var(--brown)' }}>🫧</div>
            <div>
              <p style={styles.statNum}>12K+</p>
              <p style={styles.statText}>happy tanks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pills */}
      <section style={styles.featurePillsSection}>
        <div style={styles.featurePillRow}>
          <div style={{ ...styles.featurePill, background: '#303030', color: 'white' }}>
            <span style={{ fontSize: '1.5rem' }}>🌊</span>
            <div>
              <p style={{ fontWeight: 700 }}>YOUR TANK'S NEEDS</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Tailored plans for your setup.</p>
            </div>
          </div>
          <div style={{ ...styles.featurePill, background: 'var(--primary)', color: 'white' }}>
            <span style={{ fontSize: '1.5rem' }}>🥗</span>
            <div>
              <p style={{ fontWeight: 700 }}>SMART NUTRITION</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Vet-approved aquatic meals.</p>
            </div>
          </div>
          <div style={{ ...styles.featurePill, background: '#303030', color: 'white' }}>
            <span style={{ fontSize: '1.5rem' }}>🛡️</span>
            <div>
              <p style={{ fontWeight: 700 }}>CARE WITH LOVE</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Live arrival guarantee.</p>
            </div>
          </div>
          <div style={{ ...styles.featurePill, background: '#303030', color: 'white' }}>
            <span style={{ fontSize: '1.5rem' }}>✨</span>
            <div>
              <p style={{ fontWeight: 700 }}>HAPPY AQUA STORIES</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>55+ real tales of success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Bar */}
      <div style={styles.appointmentBar}>
        <Button variant="brown">Schedule Consultation 📅</Button>
        <p style={{ flex: 1, margin: '0 2rem', fontWeight: 600 }}>We're here to make aqua care easier, kinder, and full of life — every single day.</p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[1, 2, 3].map(i => <div key={i} style={styles.miniAvatar}>🐠</div>)}
        </div>
      </div>

      {/* About Section */}
      <section style={styles.section}>
        <div style={styles.aboutGrid}>
          <div style={styles.aboutImages}>
            <div style={{ ...styles.aboutImgCard, background: '#F8BBD0' }}>
              <img src="https://images.unsplash.com/photo-1524704659690-3f7a3fe19bb7?auto=format&fit=crop&q=80&w=400" style={styles.aboutImg} />
            </div>
            <div style={{ ...styles.aboutImgCard, background: '#E8F5E9', marginTop: '-100px', marginLeft: '100px' }}>
              <img src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=400" style={styles.aboutImg} />
            </div>
          </div>
          <div>
            <SectionHeading title="ABOUT US" subtitle="" />
            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>BETTER CARE FOR YOUR BEST FINNY FRIEND</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Our aquatic center focuses on more than just selling. We offer preventative care, water chemistry checkups, and compassionate support for both you and your pet.
            </p>
            <Button variant="secondary">Explore Services</Button>
          </div>
        </div>
      </section>

      {/* Categories & Nutrition */}
      <section style={{ ...styles.section, textAlign: 'center' }}>
        <SectionHeading title="TOP AQUATIC CATEGORIES & NUTRITION" subtitle="We offer carefully selected food and products focused on nutrition, wellness, and daily care for all aquatic life." centered />
        
        <div style={styles.categoryFilters}>
          {PRODUCT_CATEGORIES.map(cat => (
            <button key={cat.id} style={styles.catFilterBtn}>
              <span style={styles.catIcon}>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>

        <div style={styles.productGrid}>
          {PRODUCTS.map(product => (
            <div key={product.id} style={styles.productCard}>
              <div style={{ ...styles.productImgBox, background: product.color }}>
                <img src={product.image} style={styles.productImg} />
              </div>
              <div style={styles.productInfo}>
                <h4 style={styles.productName}>{product.name}</h4>
                <p style={styles.productDesc}>{product.desc}</p>
                <p style={styles.productPrice}>{product.price}</p>
                <div style={styles.ratingRow}>
                  {'⭐'.repeat(product.rating)}
                </div>
                <div style={styles.cartIcon}>🛒</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiration Section */}
      <section style={{ ...styles.section, background: '#FFF' }}>
        <div style={styles.inspireGrid}>
          <div style={styles.inspireLeft}>
             <img src="https://images.unsplash.com/photo-1520244030490-675e47c1f836?auto=format&fit=crop&q=80&w=600" style={styles.inspireImg} />
          </div>
          <div>
            <SectionHeading title="WHAT INSPIRES OUR AQUA CARE?" subtitle="We rescue, nourish, and protect aquatic life with love — giving them comfort, safety, and a second chance." />
            <div style={styles.inspireList}>
              <div style={styles.inspireItem}>
                <span>6890 - REEFS SAVED</span> <span style={{ fontSize: '1.5rem' }}>👉</span>
              </div>
              <div style={styles.inspireItem}>
                <span>529 - FOREVER TANKS</span> <span style={{ fontSize: '1.5rem' }}>👉</span>
              </div>
              <div style={styles.inspireItem}>
                <span>3418 - THANKFUL VOICES</span> <span style={{ fontSize: '1.5rem' }}>👉</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ ...styles.section, textAlign: 'center' }}>
        <SectionHeading title="WHAT PEOPLE SAY ABOUT US" subtitle="Real stories from people who trust us with their aquatic friends' wellness and daily care." centered />
        <Button variant="secondary" style={{ marginBottom: '4rem' }}>Read More Reviews</Button>
        
        <div style={styles.testimonialGrid}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} style={{ ...styles.testimonialCard, backgroundColor: t.color }}>
              <span style={styles.quoteMark}>"</span>
              <p style={styles.testimonialText}>{t.text}</p>
              <div style={styles.testimonialUser}>
                <img src={t.image} style={styles.testimonialAvatar} />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontWeight: 800 }}>{t.name}</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>{t.location}</p>
                </div>
              </div>
              <span style={{ ...styles.quoteMark, bottom: '20px', right: '20px', top: 'auto' }}>"</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div style={styles.section}>
      <SectionHeading title="OUR FULL COLLECTION" subtitle="Browse our wide selection of aquatic friends and premium supplies." />
      <div style={styles.productGrid}>
        {/* Reuse Product Card but with expanded data */}
        {Array(8).fill(0).map((_, i) => (
           <div key={i} style={styles.productCard}>
           <div style={{ ...styles.productImgBox, background: i % 2 === 0 ? 'var(--primary)' : 'var(--green)' }}>
             <img src={`https://images.unsplash.com/photo-${1516734212186 + i}-a967f81ad0d7?auto=format&fit=crop&q=80&w=400`} style={styles.productImg} />
           </div>
           <div style={styles.productInfo}>
             <h4 style={styles.productName}>SPECIMEN #{i + 101}</h4>
             <p style={styles.productDesc}>Healthy and quarantined aquatic life</p>
             <p style={styles.productPrice}>$49.99</p>
             <div style={styles.ratingRow}>⭐⭐⭐⭐⭐</div>
             <div style={styles.cartIcon}>🛒</div>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div style={styles.section}>
      <div style={styles.contactContainer}>
        <div style={styles.contactForm}>
          <SectionHeading title="GET IN TOUCH" subtitle="Have questions about your tank? Our experts are here to help." />
          <input style={styles.input} placeholder="Full Name" />
          <input style={styles.input} placeholder="Email Address" />
          <textarea style={{ ...styles.input, height: '150px' }} placeholder="Tell us about your setup..."></textarea>
          <Button variant="primary">Send Inquiry</Button>
        </div>
        <div style={styles.contactImage}>
           <img src="https://images.unsplash.com/photo-1520244030490-675e47c1f836?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ activePage, setActivePage }: any) => (
  <nav style={styles.nav}>
    <div style={styles.logoGroup} onClick={() => setActivePage('home')}>
      <div style={styles.logoCircle}>🐠</div>
      <h1 style={styles.logoText}>AQUAAURA</h1>
    </div>
    <div style={styles.navLinks}>
      {['home', 'shop', 'about', 'adoption', 'tips', 'contact'].map(link => (
        <button 
          key={link} 
          onClick={() => setActivePage(link === 'home' ? 'home' : (link === 'shop' ? 'products' : (link === 'contact' ? 'contact' : 'home')))}
          style={{ ...styles.navLink, fontWeight: (activePage === link || (link === 'shop' && activePage === 'products')) ? 700 : 400 }}
        >
          {link.toUpperCase()}
        </button>
      ))}
    </div>
    <Button variant="secondary" onClick={() => setActivePage('contact')}>Book Now</Button>
  </nav>
);

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerInner}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4rem' }}>
        <div style={styles.logoGroup}>
          <div style={styles.logoCircle}>🐠</div>
          <h1 style={{ ...styles.logoText, color: 'white' }}>AQUAAURA</h1>
        </div>
        <div style={{ display: 'flex', gap: '3rem', color: 'white', fontWeight: 600 }}>
          <span>SHOP</span>
          <span>ABOUT US</span>
          <span>ADOPTION</span>
          <span>CONTACT</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
        <p>© AquaAura Boutique. All rights reserved.</p>
        <p>+91 9810920699</p>
        <p>Designed for Harmony</p>
      </div>
      <div style={styles.footerImgWrap}>
        <img src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800" style={styles.footerImg} />
      </div>
    </div>
  </footer>
);

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main style={{ flex: 1 }}>
        {activePage === 'home' && <Home setActivePage={setActivePage} />}
        {activePage === 'products' && <ProductsPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

// --- Styles ---

const styles: Record<string, React.CSSProperties> = {
  nav: {
    padding: '1.5rem 5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'var(--bg-warm)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    cursor: 'pointer'
  },
  logoCircle: {
    width: '45px',
    height: '45px',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: 800,
    letterSpacing: '1px'
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem'
  },
  navLink: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.85rem',
    color: 'var(--secondary)',
    transition: 'opacity 0.2s'
  },
  section: {
    padding: '6rem 5%',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%'
  },
  hero: {
    padding: '4rem 5%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 100px',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    alignItems: 'center',
    minHeight: '80vh',
    position: 'relative'
  },
  heroContent: {
    maxWidth: '550px'
  },
  heroTitle: {
    fontSize: 'clamp(3rem, 10vw, 7rem)',
    lineHeight: 0.9,
    fontWeight: 900,
    color: 'var(--secondary)',
    marginBottom: '2rem'
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    marginBottom: '3rem',
    maxWidth: '400px'
  },
  heroSmallCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    backgroundColor: 'white',
    padding: '1.2rem',
    borderRadius: '25px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    maxWidth: '350px'
  },
  heroSmallImg: {
    width: '80px',
    height: '80px',
    borderRadius: '20px',
    objectFit: 'cover'
  },
  inlineBtn: {
    background: 'var(--green)',
    border: 'none',
    padding: '0.3rem 1rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 700,
    marginTop: '0.5rem',
    cursor: 'pointer'
  },
  heroGraphic: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  blobContainer: {
    width: '100%',
    aspectRatio: '1',
    backgroundColor: 'var(--primary)',
    borderRadius: '50% 50% 30% 70% / 60% 40% 60% 40%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 30px 60px rgba(255, 154, 36, 0.2)'
  },
  heroMainImg: {
    width: '110%',
    height: '110%',
    objectFit: 'cover'
  },
  floatCircle: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    zIndex: 2
  },
  heroStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    justifyContent: 'center'
  },
  heroStatItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  statIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    color: 'white'
  },
  statNum: {
    fontSize: '1.8rem',
    fontWeight: 800,
    lineHeight: 1
  },
  statText: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontWeight: 600
  },
  featurePillsSection: {
    padding: '2rem 5%',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  featurePillRow: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap'
  },
  featurePill: {
    flex: 1,
    minWidth: '250px',
    padding: '2.5rem',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  },
  appointmentBar: {
    margin: '4rem 5%',
    padding: '1rem 3rem',
    backgroundColor: 'white',
    borderRadius: '60px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 15px 40px rgba(0,0,0,0.03)'
  },
  miniAvatar: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    backgroundColor: '#eee',
    border: '2px solid white',
    marginLeft: '-10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem'
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '6rem',
    alignItems: 'center'
  },
  aboutImages: {
    position: 'relative',
    height: '500px'
  },
  aboutImgCard: {
    width: '350px',
    height: '400px',
    borderRadius: '40px',
    overflow: 'hidden',
    padding: '2rem'
  },
  aboutImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '30px'
  },
  categoryFilters: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '4rem',
    flexWrap: 'wrap'
  },
  catFilterBtn: {
    backgroundColor: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    fontWeight: 700,
    fontSize: '0.85rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    cursor: 'pointer'
  },
  catIcon: {
    fontSize: '1.2rem'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem'
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '40px',
    overflow: 'hidden',
    paddingBottom: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
    transition: 'transform 0.3s ease'
  },
  productImgBox: {
    height: '350px',
    margin: '1rem',
    borderRadius: '30px',
    overflow: 'hidden',
    padding: '2rem'
  },
  productImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  productInfo: {
    padding: '1.5rem 2rem',
    position: 'relative'
  },
  productName: {
    fontSize: '1.3rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    marginBottom: '0.5rem'
  },
  productDesc: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    marginBottom: '1rem'
  },
  productPrice: {
    fontSize: '1.4rem',
    fontWeight: 800
  },
  ratingRow: {
    marginTop: '1rem'
  },
  cartIcon: {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    width: '45px',
    height: '45px',
    backgroundColor: 'var(--brown)',
    borderRadius: '15px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  inspireGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
    alignItems: 'center'
  },
  inspireLeft: {
    borderRadius: '50px',
    overflow: 'hidden',
    height: '500px'
  },
  inspireImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  inspireList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  inspireItem: {
    backgroundColor: 'var(--bg-warm)',
    padding: '1.5rem 2.5rem',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: '1.1rem'
  },
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem'
  },
  testimonialCard: {
    padding: '3rem 2.5rem',
    borderRadius: '40px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  quoteMark: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '4rem',
    opacity: 0.2,
    fontWeight: 900
  },
  testimonialText: {
    fontSize: '1.1rem',
    fontWeight: 500,
    marginBottom: '2.5rem',
    lineHeight: 1.6
  },
  testimonialUser: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  testimonialAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  footer: {
    backgroundColor: 'var(--secondary)',
    padding: '6rem 5% 4rem 5%',
    position: 'relative',
    marginTop: '150px'
  },
  footerInner: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  footerImgWrap: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '300px',
    height: '250px',
    zIndex: 1
  },
  footerImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  contactContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  input: {
    padding: '1.2rem',
    borderRadius: '20px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    outline: 'none',
    fontSize: '1rem'
  }
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}