import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Download, ExternalLink, Menu, X, Code2, Database, Server, BriefcaseBusiness } from 'lucide-react';

const API = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
const projects = [
  { title: 'Bank Management System', status: 'Completed', stack: 'Python · Django · MySQL', text: 'A banking application to manage customer accounts, deposits, withdrawals and balance enquiries.', features: ['Customer account management', 'Deposit and withdrawal operations', 'Balance enquiry', 'Input validation and exception handling'] },
  { title: 'Job Portal Application', status: 'Completed', stack: 'Python · Django · React · MySQL', text: 'A full-stack job portal connecting job seekers and recruiters.', features: ['User registration and login', 'Job posting and search', 'Job applications', 'CRUD operations and REST APIs'] },
  { title: 'E-commerce Website', status: 'Planned', stack: 'Python · Django · React · MySQL', text: 'Planned online shopping platform for product browsing, cart and order management.', features: ['Product catalogue', 'Shopping cart', 'Order management'] },
  { title: 'YouTube Clone', status: 'Planned', stack: 'React · JavaScript · HTML · CSS', text: 'Planned video browsing interface with search, categories and playback.', features: ['Video search', 'Category browsing', 'Video playback UI'] },
  { title: 'House Price Prediction', status: 'Planned', stack: 'Python · Pandas · NumPy · Scikit-learn', text: 'Planned machine-learning project to estimate house prices from property data.', features: ['Data preparation', 'Model training', 'Price prediction'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''});
  const [formState, setFormState] = useState({loading:false, message:'', error:false});
  const links = ['About','Skills','Experience','Projects','Education','Certifications','Contact'];
  const closeMenu = () => setMenuOpen(false);

  async function submitContact(e) {
    e.preventDefault();
    setFormState({loading:true, message:'', error:false});
    try {
      const response = await fetch(`${API}/contact/`, {
        method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || Object.values(data).flat().join(' '));
      setForm({name:'', email:'', subject:'', message:''});
      setFormState({loading:false, message:data.message || 'Message sent successfully.', error:false});
    } catch (err) {
      setFormState({loading:false, message:err.message || 'Unable to send. Please try again.', error:true});
    }
  }

  return <div>
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu}>KH<span>.</span></a>
      <button className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'nav open':'nav'}>
        {links.map(x=><a key={x} href={`#${x.toLowerCase()}`} onClick={closeMenu}>{x}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot"/> AVAILABLE FOR OPPORTUNITIES</p>
          <h1>Hi, I'm <span>Kapil Hande.</span><br/>Python Full Stack Developer.</h1>
          <p className="hero-text">I build responsive web applications and practical backend solutions using Python, Django, React and MySQL.</p>
          <div className="actions">
            <a className="btn primary" href="#projects">Explore projects <ArrowUpRight size={17}/></a>
            <a className="btn secondary" href="/assets/Kapil_Hande_Resume.pdf" target="_blank" rel="noreferrer">View resume <Download size={16}/></a>
          </div>
          <div className="socials">
            <a href="https://github.com/kapil-hande" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
            <a href="https://linkedin.com/in/kapil-hande" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
            <a href="mailto:kapilhande143@gmail.com" aria-label="Email"><Mail/></a>
          </div>
        </div>
        <div className="hero-art">
          <div className="photo-frame"><img src="/assets/profile.jpg" alt="Kapil Hande profile"/></div>
          <div className="floating-card"><Code2 size={19}/><span>Full Stack Development</span></div>
          <div className="hero-caption">BUILD · LEARN · IMPROVE</div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="section-label">01 / ABOUT ME</div>
        <div><h2>Turning ideas into <span>useful applications.</span></h2>
          <p className="large-copy">I am a Python Developer fresher with hands-on knowledge of backend and full-stack development. I enjoy solving problems, working with databases and building clean, user-friendly web experiences.</p>
          <p>My technical foundation includes Python, Django, REST APIs, MySQL, HTML, CSS, JavaScript and React. I also have internship experience contributing to a web-based CRM system.</p>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-label">02 / TECHNICAL SKILLS</div><h2>Tools I work <span>with.</span></h2>
        <div className="skill-grid">
          <Skill icon={<Code2/>} title="Programming" items="Python · OOP · Data Structures & Algorithms"/>
          <Skill icon={<Server/>} title="Backend" items="Django · Django REST Framework · REST APIs"/>
          <Skill icon={<Database/>} title="Database" items="MySQL · SQL · Database Design · CRUD"/>
          <Skill icon={<BriefcaseBusiness/>} title="Frontend & Tools" items="HTML5 · CSS3 · JavaScript · React · Git · GitHub · Postman"/>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-label">03 / EXPERIENCE</div><h2>Where I've <span>contributed.</span></h2>
        <article className="experience-card">
          <div className="exp-top"><div><h3>Application Developer Intern</h3><p className="company">Nexa nova Pro Tech Pvt. Ltd. · Pune</p></div><span className="pill">6 months</span></div>
          <p className="muted">March 2026 – August 2026 · Customer Relationship Management (CRM) System</p>
          <ul><li>Built responsive interfaces using HTML, CSS, JavaScript and Bootstrap.</li><li>Implemented CRUD functionality for customer and lead management.</li><li>Integrated REST APIs and used Python and SQL for application logic and database operations.</li><li>Contributed to debugging, testing, dashboard improvements and form validation.</li></ul>
          <p className="stack">Python · SQL · HTML · CSS · JavaScript · Bootstrap · REST API · Git · GitHub</p>
          <a className="text-link" href="/assets/Internship_Intent_Letter.pdf" target="_blank" rel="noreferrer">View internship intent letter <ExternalLink size={15}/></a>
          <p className="note">Document label is kept accurate: the available PDF is an internship intent letter, not a completion certificate.</p>
        </article>
      </section>

      <section className="section" id="projects">
        <div className="section-label">04 / SELECTED WORK</div><h2>Projects & <span>experiments.</span></h2>
        <p className="section-intro">Completed projects are separated from planned portfolio work so the project status stays transparent.</p>
        <div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.title}>
          <div className="project-number">0{i+1}</div><div className={p.status==='Completed'?'status done':'status'}>{p.status}</div>
          <h3>{p.title}</h3><p>{p.text}</p><ul>{p.features.map(f=><li key={f}>{f}</li>)}</ul><div className="stack">{p.stack}</div>
        </article>)}</div>
      </section>

      <section className="section education" id="education">
        <div className="section-label">05 / EDUCATION</div><h2>Learning is <span>ongoing.</span></h2>
        <div className="education-list">
          <Edu title="Bachelor of Computer Applications (BCA)" place="Rajiv Gandhi College, Nanded · SRTM University" result="CGPA 8.33" period="June 2023 – May 2026"/>
          <Edu title="Higher Secondary (12th)" place="Vai. Dhunda Maharaj College, Degloor" result="48.33%" period="June 2021 – June 2023"/>
          <Edu title="Secondary School (10th)" place="Sadhana High School, Degloor" result="72.80%" period="June 2020 – June 2021"/>
        </div>
      </section>

      <section className="section cert" id="certifications">
        <div className="section-label">06 / CERTIFICATION</div><h2>Building my <span>foundation.</span></h2>
        <article className="cert-card"><div className="cert-mark">FB</div><div><h3>Python Data Science</h3><p>FirstBit Solutions, Pune · January 2026 – August 2026</p><p className="muted">Course coverage includes Core Python, MySQL, web programming, data analytics, machine learning, Flask and Django.</p><a className="text-link" href="/assets/Kapil_Subhashrao_Hande_Certificate.pdf" target="_blank" rel="noreferrer">View certificate <ExternalLink size={15}/></a></div></article>
      </section>

      <section className="section contact" id="contact">
        <div className="section-label">07 / CONTACT</div><h2>Let's build something <span>meaningful.</span></h2>
        <div className="contact-grid"><div className="contact-info">
          <p>Have an opportunity or a project idea? Send me a message.</p>
          <a href="mailto:kapilhande143@gmail.com"><Mail/> kapilhande143@gmail.com</a>
          <a href="tel:+917219354623"><Phone/> +91 7219354623</a>
          <p><MapPin/> Pune, Maharashtra, India</p>
          <div className="socials"><a href="https://github.com/kapil-hande" target="_blank" rel="noreferrer"><Github/></a><a href="https://linkedin.com/in/kapil-hande" target="_blank" rel="noreferrer"><Linkedin/></a></div>
        </div>
        <form className="contact-form" onSubmit={submitContact}>
          <div className="form-row"><label>Full name<input required minLength="2" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label></div>
          <label>Subject<input required minLength="3" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} placeholder="What is this about?"/></label>
          <label>Message<textarea required minLength="10" rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Write your message..."/></label>
          <button className="btn primary" disabled={formState.loading}>{formState.loading?'Sending...':'Send message'} <ArrowUpRight size={16}/></button>
          {formState.message && <p className={formState.error?'form-message error':'form-message'}>{formState.message}</p>}
        </form></div>
      </section>
    </main>
    <footer><a className="brand" href="#home">KH<span>.</span></a><p>Designed & built by Kapil Hande · © {new Date().getFullYear()}</p><a href="#home">Back to top ↑</a></footer>
  </div>;
}

function Skill({icon,title,items}) { return <article className="skill-card"><div className="skill-icon">{icon}</div><h3>{title}</h3><p>{items}</p></article> }
function Edu({title,place,result,period}) { return <article className="edu-row"><div><h3>{title}</h3><p>{place}</p><small>{period}</small></div><strong>{result}</strong></article> }

export default App;
