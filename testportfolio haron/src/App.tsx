import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: '50+', label: 'Projects Done' },
  { num: '3+', label: 'Years Experience' },
  { num: '100%', label: 'Client Satisfaction' },
]

const services = [
  { icon: '🌐', title: 'Website Design', desc: 'Modern, responsive websites built with precision. Every element crafted to look stunning and function flawlessly on any device.' },
  { icon: '🎯', title: 'UI/UX Design', desc: 'User-centered design that creates intuitive, seamless experiences. I wireframe, prototype, and design interfaces users love.' },
  { icon: '⚡', title: 'Landing Pages', desc: 'High-converting landing pages designed to turn visitors into customers. Built with conversion best practices in mind.' },
  { icon: '✨', title: 'Brand Identity', desc: 'Complete visual identity systems including logos, color palettes, typography, and brand guidelines.' },
  { icon: '🔧', title: 'Website Redesign', desc: 'Transform outdated designs into modern, high-performing digital experiences that actually convert.' },
]

const whyItems = [
  { icon: '🚀', title: 'Fast Delivery', desc: 'High-quality results without the wait. I respect your timeline and deliver premium work on schedule.' },
  { icon: '💎', title: 'Premium Quality', desc: 'Every pixel, every interaction — crafted with care. I never compromise on quality, ever.' },
  { icon: '🤝', title: 'Client Focused', desc: 'Your vision is my priority. I listen, understand, and translate your ideas into designs that represent you.' },
]

const process = [
  { num: '01', title: 'Discovery Call', desc: 'We discuss your goals, target audience, scope, and timeline to ensure alignment from day one.' },
  { num: '02', title: 'Design & Wireframe', desc: 'I create wireframes and initial designs based on your brand, preferences, and project goals.' },
  { num: '03', title: 'Refinement', desc: 'Based on your feedback, I refine the designs until every detail is exactly how you envisioned it.' },
  { num: '04', title: 'Final Delivery', desc: 'Your premium website is delivered — pixel-perfect, responsive, and ready to impress your audience.' },
]

const testimonials = [
  { quote: 'Haron completely transformed our website. The design is stunning and our conversions have tripled since the redesign.', name: 'James Miller', role: 'Startup Founder' },
  { quote: 'The attention to detail is unreal. Haron understood our vision perfectly and delivered a website that truly represents our brand.', name: 'Sarah Kim', role: 'Creative Director' },
  { quote: 'Professional, fast, and incredibly talented. Haron delivered premium quality work ahead of schedule.', name: 'David Rodriguez', role: 'E-commerce Owner' },
]

const faqData = [
  { q: 'How long does a project take?', a: 'Most projects are completed within 5–14 business days, depending on complexity and scope. I\'ll give you a clear timeline upfront.' },
  { q: "What's included in the price?", a: 'Full design, responsive layout, revisions until you\'re satisfied, and delivery of all source files. No hidden fees.' },
  { q: 'Do you work with clients remotely?', a: 'Absolutely! I work with clients worldwide via video calls, email, and collaborative tools like Figma and Notion.' },
  { q: 'Can you redesign my existing website?', a: 'Yes! I specialize in transforming outdated websites into modern, high-converting digital experiences.' },
  { q: "What if I'm not happy with the design?", a: 'I offer unlimited revisions until you\'re 100% satisfied. Your happiness is my top priority.' },
]

const skills = ['Figma', 'UI Design', 'UX Design', 'Web Design', 'Responsive', 'Prototyping', 'Conversion']

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)
    let anim = true
    const loop = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12
      if (ring.current) { ring.current.style.left = rx - 10 + 'px'; ring.current.style.top = ry - 10 + 'px' }
      if (dot.current) { dot.current.style.left = mx - 2 + 'px'; dot.current.style.top = my - 2 + 'px' }
      if (anim) requestAnimationFrame(loop)
    }
    loop()
    document.querySelectorAll('a,button,.service-card,.faq-item').forEach(el => {
      el.addEventListener('mouseenter', () => ring.current?.classList.add('hover'))
      el.addEventListener('mouseleave', () => ring.current?.classList.remove('hover'))
    })
    return () => { window.removeEventListener('mousemove', onMove); anim = false }
  }, [])
  return <>
    <div ref={ring} className="cursor-ring" />
    <div ref={dot} className="cursor-dot" />
  </>
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-q">
        {q}
        <span className={`faq-icon${open ? ' open' : ''}`}>+</span>
      </div>
      {open && <div className="faq-a">{a}</div>}
    </div>
  )
}

export default function App() {
  useScrollReveal()
  return (
    <>
      <Cursor />
      <div className="grain" />
      <nav className="navbar">
        <div className="nav-logo">HARON<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <button className="nav-cta" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>Start Project</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-glass" />
        <div className="hero-content">
          <div className="hero-badge">Available for Projects</div>
          <h1>I Design <span className="gradient-text">Premium</span><br />Digital Experiences</h1>
          <p className="hero-sub">UI/UX Designer crafting modern, high-converting websites that help ambitious brands stand out and grow.</p>
          <div className="hero-actions">
            <a href="#cta" className="btn-primary">Start Your Project →</a>
            <a href="#services" className="btn-secondary">View Services</a>
          </div>
          <div className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="about-grid">
          <div className="about-image reveal">
            <div className="avatar-icon">🎨</div>
            <div className="about-image-overlay" />
          </div>
          <div className="about-text reveal">
            <div className="section-tag">About Me</div>
            <h2>Hi, I'm Haron — I Build Websites That Convert</h2>
            <p>I'm a passionate UI/UX designer specializing in modern, premium website design. I help businesses and individuals create a strong online presence through clean, functional, and visually stunning designs that drive real results.</p>
            <p>Every project I take on gets my full attention. I focus on understanding your goals and delivering a website that exceeds expectations — on time, every time.</p>
            <div className="about-tags">
              {skills.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="section-tag">Services</div>
        <h2 className="section-title reveal">What I Do</h2>
        <p className="section-desc reveal">Full suite of design services to help you build a website that looks stunning and drives real business results.</p>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="service-card reveal">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section">
        <div className="section-tag">Why Work With Me</div>
        <h2 className="section-title reveal">The Haron Advantage</h2>
        <p className="section-desc reveal">I don't just design websites — I design experiences that leave a lasting impression.</p>
        <div className="why-grid">
          {whyItems.map(w => (
            <div key={w.title} className="why-card reveal">
              <div className="why-icon">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <div className="section-tag">My Process</div>
        <h2 className="section-title reveal">How We Work Together</h2>
        <p className="section-desc reveal">A clear, structured process that takes you from idea to launched website — without the stress.</p>
        <div className="process-timeline">
          {process.map(p => (
            <div key={p.num} className="process-item reveal">
              <div className="process-num">{p.num}</div>
              <div className="process-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section">
        <div className="section-tag">Testimonials</div>
        <h2 className="section-title reveal">What Clients Say</h2>
        <p className="section-desc reveal">Don't just take my word for it — here's what it's like working with me.</p>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.name} className="testimonial-card reveal">
              <p>"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="section-tag">FAQ</div>
        <h2 className="section-title reveal">Common Questions</h2>
        <p className="section-desc reveal">Everything you need to know before we start working together.</p>
        <div className="faq-list">
          {faqData.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta-section">
        <div className="section-tag">Let's Work Together</div>
        <h2 className="cta-title">Ready to Build Something <span className="gradient-text">Amazing</span>?</h2>
        <p className="cta-desc">Let's create a website that truly represents your brand and drives real results.</p>
        
      </section>

      <footer>
        <p>© 2026 Haron Mallem — UI/UX Designer. All rights reserved.</p>
      </footer>
    </>
  )
}
