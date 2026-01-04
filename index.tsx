import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- Data Types & Constants ---
interface FishProduct {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  stats: {
    temp: string;
    size: string;
    care: 'Easy' | 'Intermediate' | 'Expert';
  };
}

const FISH_DATA: FishProduct[] = [
  {
    id: 1,
    name: "Royal Blue Betta",
    category: "Freshwater",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=400",
    description: "Elegant flowing fins with deep cobalt pigmentation.",
    stats: { temp: "75-80°F", size: "2.5 inches", care: "Easy" }
  },
  {
    id: 2,
    name: "Golden Discus",
    category: "Freshwater",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=400",
    description: "The 'King of the Aquarium', known for its vibrant yellow hue.",
    stats: { temp: "82-86°F", size: "6 inches", care: "Expert" }
  },
  {
    id: 3,
    name: "Neon Tetra",
    category: "Freshwater",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1524704659690-3f7a3fe19bb7?auto=format&fit=crop&q=80&w=400",
    description: "Schooling fish that adds electric blue streaks to any tank.",
    stats: { temp: "70-81°F", size: "1.5 inches", care: "Easy" }
  },
  {
    id: 4,
    name: "Clown Anemonefish",
    category: "Saltwater",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400",
    description: "Iconic orange and white stripes, perfect for reef tanks.",
    stats: { temp: "72-78°F", size: "3 inches", care: "Intermediate" }
  },
  {
    id: 5,
    name: "Blue Tang",
    category: "Saltwater",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1520244030490-675e47c1f836?auto=format&fit=crop&q=80&w=400",
    description: "Brilliant blue body with a striking black 'palette' mark.",
    stats: { temp: "72-82°F", size: "12 inches", care: "Intermediate" }
  },
  {
    id: 6,
    name: "Ghost Shrimp",
    category: "Invertebrates",
    price: "$1.99",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
    description: "Transparent scavengers that keep your aquarium floor clean.",
    stats: { temp: "65-80°F", size: "1.5 inches", care: "Easy" }
  }
];

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) => {
  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <h1 style={styles.logo} onClick={() => setActivePage('home')}>AQUAAURA</h1>
        <div style={styles.navLinks}>
          {['home', 'products', 'contact'].map(page => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              style={{
                ...styles.navBtn,
                color: activePage === page ? 'var(--primary)' : 'var(--light)',
                borderBottom: activePage === page ? '2px solid var(--primary)' : 'none'
              }}
            >
              {page.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onExplore }: { onExplore: () => void }) => {
  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <span style={styles.badge}>EST 2025</span>
        <h1 style={styles.heroTitle}>Breathe Life Into Your <br/><span style={styles.gradientText}>Aquatic Haven</span></h1>
        <p style={styles.heroSubtitle}>Discover the rarest species and premium supplies for your underwater world.</p>
        <div style={styles.heroActions}>
          <button style={styles.primaryBtn} onClick={onExplore}>View Collection</button>
          <button style={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
      <div style={styles.floatingBubbles}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`bubble bubble-${i}`} style={styles.bubble}></div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: "Expert Support", desc: "Biologist-led team available 24/7." },
    { title: "Ethical Sourcing", desc: "100% sustainably raised specimens." },
    { title: "Next-Day Delivery", desc: "Temperature-controlled shipping." }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {features.map((f, i) => (
          <div key={i} style={styles.glassCard}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{f.title}</h3>
            <p style={{ opacity: 0.8 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Products = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? FISH_DATA : FISH_DATA.filter(f => f.category === filter);

  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Current Specimens</h2>
        <div style={styles.filterGroup}>
          {['All', 'Freshwater', 'Saltwater', 'Invertebrates'].map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)}
              style={{
                ...styles.filterBtn,
                backgroundColor: filter === f ? 'var(--primary)' : 'transparent',
                color: filter === f ? 'var(--dark)' : 'var(--light)'
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div style={styles.productGrid}>
        {filtered.map(fish => (
          <div key={fish.id} style={styles.productCard}>
            <div style={styles.imgWrapper}>
              <img src={fish.image} alt={fish.name} style={styles.productImg} />
              <span style={styles.priceTag}>{fish.price}</span>
            </div>
            <div style={styles.productInfo}>
              <h3 style={{ marginBottom: '0.5rem' }}>{fish.name}</h3>
              <p style={styles.productDesc}>{fish.description}</p>
              <div style={styles.statsContainer}>
                <div style={styles.statItem}><span>Size:</span> {fish.stats.size}</div>
                <div style={styles.statItem}><span>Care:</span> {fish.stats.care}</div>
              </div>
              <button style={styles.cartBtn}>Inquiry Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }
    setStatus("Sent Successfully!");
    setTimeout(() => {
      setStatus(null);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section style={styles.section}>
      <div style={styles.contactContainer}>
        <div style={styles.contactInfo}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Looking for a specific breed? Our experts can source rare specimens globally.</p>
          <div style={styles.infoLine}>📍 123 Reef Avenue, Ocean City, OC</div>
          <div style={styles.infoLine}>📞 (555) 123-FISH</div>
          <div style={styles.infoLine}>✉️ hello@aquaaura.com</div>
        </div>
        <form style={styles.contactForm} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input 
              style={styles.input} 
              placeholder="Your Name" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input 
              style={styles.input} 
              type="email" 
              placeholder="your@email.com" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Inquiry Message</label>
            <textarea 
              style={{ ...styles.input, height: '120px', resize: 'none' }} 
              placeholder="Tell us about your tank setup..."
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button type="submit" style={styles.primaryBtn}>Send Message</button>
          {status && <div style={styles.toast}>{status}</div>}
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerTop}>
      <div>
        <h2 style={styles.logo}>AQUAAURA</h2>
        <p style={{ opacity: 0.6, marginTop: '1rem' }}>Bringing the ocean's depth to your living room.</p>
      </div>
      <div style={styles.footerLinks}>
        <div style={styles.linkCol}>
          <h4>Shop</h4>
          <span>Freshwater</span>
          <span>Saltwater</span>
          <span>Accessories</span>
        </div>
        <div style={styles.linkCol}>
          <h4>Company</h4>
          <span>About Us</span>
          <span>Shipping</span>
          <span>Returns</span>
        </div>
      </div>
    </div>
    <div style={styles.footerBottom}>
      © 2025 AquaAura. Designed for a sustainable future.
    </div>
  </footer>
);

const App = () => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <>
            <Hero onExplore={() => setActivePage('products')} />
            <Features />
          </>
        )}
        {activePage === 'products' && <Products />}
        {activePage === 'contact' && <Contact />}
      </main>
      <Footer />
      
      {/* Global CSS for animations */}
      <style>{`
        @keyframes bubbleFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.1; }
          50% { opacity: 0.4; }
          100% { transform: translateY(-500px) scale(1.5); opacity: 0; }
        }
        .bubble {
          position: absolute;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          pointer-events: none;
          animation: bubbleFloat 10s infinite linear;
        }
        .bubble-0 { width: 40px; height: 40px; left: 10%; animation-delay: 0s; }
        .bubble-1 { width: 20px; height: 20px; left: 30%; animation-delay: 2s; }
        .bubble-2 { width: 60px; height: 60px; left: 50%; animation-delay: 4s; }
        .bubble-3 { width: 30px; height: 30px; left: 70%; animation-delay: 1s; }
        .bubble-4 { width: 50px; height: 50px; left: 90%; animation-delay: 3s; }
        .bubble-5 { width: 25px; height: 25px; left: 15%; animation-delay: 5s; }
      `}</style>
    </div>
  );
};

// --- Styles ---

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(10, 25, 47, 0.85)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--glass-border)',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    cursor: 'pointer',
    color: 'var(--primary)',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  navBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    padding: '0.5rem 0',
    transition: 'all 0.3s ease',
  },
  hero: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '800px',
    zIndex: 2,
  },
  badge: {
    backgroundColor: 'rgba(0, 210, 255, 0.1)',
    color: 'var(--primary)',
    padding: '0.4rem 1rem',
    borderRadius: '50px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    display: 'inline-block',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    lineHeight: 1.1,
    marginBottom: '1.5rem',
  },
  gradientText: {
    background: 'linear-gradient(45deg, #00d2ff, #3a7bd5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.8,
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
  },
  heroActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  primaryBtn: {
    padding: '1rem 2.5rem',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'var(--primary)',
    color: 'var(--dark)',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
  },
  secondaryBtn: {
    padding: '1rem 2.5rem',
    borderRadius: '10px',
    border: '1px solid var(--primary)',
    backgroundColor: 'transparent',
    color: 'var(--primary)',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  section: {
    padding: '6rem 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  glassCard: {
    background: 'var(--glass)',
    border: '1px solid var(--glass-border)',
    padding: '2rem',
    borderRadius: '20px',
    backdropFilter: 'blur(5px)',
    transition: 'transform 0.3s ease',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
  },
  filterGroup: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  filterBtn: {
    padding: '0.5rem 1.2rem',
    borderRadius: '50px',
    border: '1px solid var(--glass-border)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2.5rem',
  },
  productCard: {
    background: 'var(--glass)',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid var(--glass-border)',
    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  imgWrapper: {
    position: 'relative',
    height: '240px',
    overflow: 'hidden',
  },
  productImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  priceTag: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'rgba(10, 25, 47, 0.8)',
    backdropFilter: 'blur(5px)',
    padding: '0.4rem 0.8rem',
    borderRadius: '50px',
    color: 'var(--primary)',
    fontWeight: 'bold',
  },
  productInfo: {
    padding: '1.5rem',
  },
  productDesc: {
    opacity: 0.7,
    fontSize: '0.9rem',
    marginBottom: '1rem',
    minHeight: '2.7rem',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',
    fontSize: '0.85rem',
  },
  statItem: {
    background: 'rgba(255,255,255,0.05)',
    padding: '0.3rem 0.7rem',
    borderRadius: '5px',
  },
  cartBtn: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'var(--light)',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  contactContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '4rem',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  infoLine: {
    marginBottom: '1rem',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  contactForm: {
    background: 'var(--glass)',
    padding: '3rem',
    borderRadius: '30px',
    border: '1px solid var(--glass-border)',
    position: 'relative',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    opacity: 0.8,
  },
  input: {
    width: '100%',
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid var(--glass-border)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    color: 'white',
    outline: 'none',
  },
  toast: {
    marginTop: '1.5rem',
    color: '#00ff9d',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '4rem 5% 2rem 5%',
    marginTop: 'auto',
  },
  footerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBottom: '3rem',
    borderBottom: '1px solid var(--glass-border)',
    flexWrap: 'wrap',
    gap: '3rem',
  },
  footerLinks: {
    display: 'flex',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  linkCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },
  footerBottom: {
    textAlign: 'center',
    paddingTop: '2rem',
    opacity: 0.5,
    fontSize: '0.8rem',
  },
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}