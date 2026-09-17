import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Mail, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  Briefcase, 
  Award, 
  Send, 
  Copy, 
  Check, 
  Code,
  Layers,
  Terminal,
  Settings,
  Menu,
  X,
  Phone,
  MapPin,
  Calendar,
  Image as ImageIcon,
  User,
  Heart
} from 'lucide-react';

// Custom inline SVG icons for brands (Github & Linkedin)
const Github = ({ size = 24, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ANIRUDH_DATA = {
  name: "Anirudh Patel",
  title: "Marketer & Growth Strategist",
  subtitle: "PGPM Candidate @ Great Lakes | Ex-Credila Sales Executive",
  about: "Commercially minded marketer with 28 months of professional experience, combining strong business acumen and a data-led approach to identify growth opportunities, optimize conversion funnels, and scale revenue across corporate segments.",
  phone: "+91 62635 58264",
  email: "anirudh.ft271016@greatlakes.edu.in",
  linkedin: "https://www.linkedin.com/in/anirudh-patel-474996215",
  resumeUrl: "/resume.pdf",
  profilePic: "/assets/images/profile.jpg", // User uploaded profile photo
  education: [
    {
      degree: "PGPM (Post Graduate Program in Management)",
      institution: "Great Lakes Institute of Management, Chennai",
      period: "2026 - 2027",
      grade: "3.49 / 4.0 CGPA",
      details: "Focusing on Marketing Strategy, Digital Growth, and Brand Management. Active in corporate engagements and committee roles."
    },
    {
      degree: "BBA (Bachelor of Business Administration)",
      institution: "Dr. APJ Abdul Kalam University, Indore",
      period: "2019 - 2022",
      grade: "65.58%",
      details: "Built foundational business administration principles, market logic, and customer relation skills."
    },
    {
      degree: "12th Standard",
      institution: "The Emerald Heights International School, Indore",
      period: "2019",
      grade: "96.0%",
      details: "Academic top tier. Secured a 100% Sports Scholarship and captained the varsity Football team."
    }
  ],
  experience: [
    {
      id: "exp-credila",
      role: "Sales Executive",
      company: "Credila Financial Services Limited",
      period: "Jun 2024 – Apr 2025",
      location: "Indore, India",
      description: "Directed retail loan conversions, managed a large financial portfolio, and introduced system efficiency workflows.",
      bullets: [
        "Managed an end-to-end portfolio of ₹50Cr, driving funnel conversion from lead qualification to final closing to generate ₹30Cr in top-line disbursement and ₹7.5Cr Net Lifetime Revenue.",
        "Analysed customer profiles and financial requirements to develop tailored solutions, resolving documentation bottlenecks and sustaining a 45%–55% lead-to-deal sanction ratio.",
        "Managed high-priority customer issues and cross-border transaction challenges, minimising delays and achieving 300% of target within 11 months through strong customer engagement and solution-oriented selling.",
        "Identified and resolved communication gaps by introducing a real-time tracking dashboard, improving client trust and resulting in a 100% surge in inbound leads."
      ],
      tags: ["Value Selling", "Portfolio Mgmt", "Client Relations", "Process Optimization"],
      award: "Highest Performer Credila (2025)"
    },
    {
      id: "exp-teleperformance",
      role: "Customer Care Executive",
      company: "Teleperformance",
      period: "Mar 2022 – Sep 2023",
      location: "Indore, India",
      description: "Managed high-priority client accounts for portfolio retention and conflict resolution.",
      bullets: [
        "Managed premier 'Diamond' seller accounts for retention and portfolio growth, maintaining 90% Seller SSAT across high-value accounts and minimising competitor migration.",
        "Addressed merchant operational escalations and resolved transaction issues to safeguard account health."
      ],
      tags: ["Account Retention", "Customer Centricity", "Escalation Resolution", "Active Listening"]
    }
  ],
  projects: [
    {
      title: "Herbs & Hopes 2026",
      subtitle: "Revenue Scale-Up & Digital Growth Strategy",
      description: "Designed a trial-led acquisition and conversion model by reducing purchase friction and optimising the digital customer journey, creating a scalable approach to boost website-led sales.",
      tags: ["D2C Acquisition", "Customer Journey", "Conversion Optimization"],
      link: "https://anirudh191919.github.io/herbsnhopes-campaign/",
      linkText: "View Live Campaign"
    },
    {
      title: "3DU Internship 2026",
      subtitle: "Market Entry & Go-to-Market Strategy",
      description: "Developed the Go-to-Market roadmap by aligning customer segmentation, value proposition and marketing-mix levers, establishing a scalable approach for customer acquisition and growth.",
      tags: ["Go-to-Market", "Customer Acquisition", "Value Proposition"]
    },
    {
      title: "PepsiCo Internship 2026",
      subtitle: "Market Research & Channel Strategy",
      description: "Analysed retail-level data across product assortment, pricing, SKU availability and in-store visibility to identify distribution and merchandising gaps, generating actionable channel insights for retail strategy.",
      tags: ["Retail Analytics", "Channel Strategy", "Distribution Insights"]
    },
    {
      category: "AGENTIC AI / AUTOMATION",
      title: "MBA Email & Task Agent",
      subtitle: "Intelligent Email Filtering & Task Automation",
      description: "Built an AI agent that monitors MBA college and competition-related emails, filters important and actionable messages, extracts deadlines and required actions, and automatically creates relevant tasks with deadlines in Google Tasks.",
      tags: ["Email Automation", "AI Agent", "Task Management"]
    }
  ],
  skills: [
    "Customer Acquisition & Lead Conversion",
    "Growth & Digital Marketing",
    "Commercial Analytics",
    "Cross-Functional Leadership",
    "Value-Based Solution Selling",
    "Social Media Strategy",
    "Client Engagement",
    "Market Research"
  ],
  achievements: [
    {
      title: "INDIA U-18 Asian Games Football",
      detail: "Selected to represent India at the U-18 Asian Games Football selection camp (2019).",
      category: "sports"
    },
    {
      title: "Hyrox 1st Runner-Up",
      detail: "Secured 1st runner-up place at the Hyrox fitness challenge held at GLIM Chennai (2026).",
      category: "sports"
    },
    {
      title: "Highest Performer Credila",
      detail: "Awarded Highest Performer at HDFC Credila Financial Services (2025).",
      category: "work"
    },
    {
      title: "Rest In Pitch Finalist",
      detail: "Finalist in the 'Rest In Pitch' case presentation event at Great Lakes Chennai (2026).",
      category: "college"
    },
    {
      title: "100% Sports Scholarship",
      detail: "Recipient of full academic scholarship for athletic achievements from EHIS (2019).",
      category: "sports"
    }
  ],
  responsibilities: [
    {
      role: "Placement Committee Member (Business Development)",
      organization: "Great Lakes Institute of Management",
      year: "2026 - Present",
      details: "Formulating business development outreach, engaging top corporate recruiters, and coordinating student corporate alignment."
    },
    {
      role: "Project Lead, Karma Yoga",
      organization: "Great Lakes Institute of Management",
      year: "2026",
      details: "Leading socio-economic research and rural community growth campaigns under the GLIM experiential leadership program."
    },
    {
      role: "Varsity Football Captain",
      organization: "The Emerald Heights International School",
      year: "2020",
      details: "Captained the football team at National, State, and District levels, managing tournament strategies and squad training."
    }
  ],
  photos: {
    root: [
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.21 AM.jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.23 AM (1).jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.23 AM (2).jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.23 AM.jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.24 AM (1).jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.24 AM (2).jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.24 AM.jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.25 AM (1).jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.25 AM (2).jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.25 AM.jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.26 AM.jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.27 AM (1).jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.27 AM (2).jpeg",
      "/assets/images/WhatsApp Image 2026-08-19 at 2.41.27 AM.jpeg"
    ],
    college: [
      "/assets/images/College/WhatsApp Image 2026-08-19 at 2.37.07 AM.jpeg",
      "/assets/images/College/WhatsApp Image 2026-08-19 at 2.40.05 AM.jpeg",
      "/assets/images/College/WhatsApp Image 2026-08-19 at 2.40.07 AM (1).jpeg",
      "/assets/images/College/WhatsApp Image 2026-08-19 at 2.41.16 AM.jpeg"
    ],
    school: [
      "/assets/images/School/WhatsApp Image 2026-08-19 at 2.41.17 AM.jpeg"
    ],
    sports: [
      "/assets/images/Sports/WhatsApp Image 2026-08-19 at 2.40.04 AM (1).jpeg",
      "/assets/images/Sports/WhatsApp Image 2026-08-19 at 2.40.04 AM.jpeg",
      "/assets/images/Sports/WhatsApp Image 2026-08-19 at 2.40.05 AM (1).jpeg",
      "/assets/images/Sports/WhatsApp Image 2026-08-19 at 2.40.06 AM (1).jpeg",
      "/assets/images/Sports/WhatsApp Image 2026-08-19 at 2.40.06 AM (2).jpeg",
      "/assets/images/Sports/WhatsApp Image 2026-08-19 at 2.40.06 AM.jpeg",
      "/assets/images/Sports/WhatsApp Image 2026-08-19 at 2.40.07 AM.jpeg",
      "/assets/images/Sports/WhatsApp Image 2026-08-19 at 2.41.16 AM (1).jpeg",
      "/assets/images/Sports/WhatsApp Image 2026-08-19 at 2.41.17 AM (1).jpeg"
    ],
    football: [
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.28 AM (1).jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.28 AM (2).jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.28 AM.jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.29 AM (1).jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.29 AM (2).jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.29 AM (3).jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.29 AM.jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.30 AM (1).jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.30 AM (2).jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.30 AM.jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.31 AM (1).jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.31 AM (2).jpeg",
      "/assets/images/Achievement football/WhatsApp Image 2026-08-19 at 2.41.31 AM.jpeg"
    ],
    karmaYoga: [
      "/assets/images/karma yoga/WhatsApp Image 2026-08-19 at 2.37.08 AM (1).jpeg",
      "/assets/images/karma yoga/WhatsApp Image 2026-08-19 at 2.37.08 AM (2).jpeg",
      "/assets/images/karma yoga/WhatsApp Image 2026-08-19 at 2.37.08 AM.jpeg",
      "/assets/images/karma yoga/WhatsApp Image 2026-08-19 at 2.37.09 AM (1).jpeg",
      "/assets/images/karma yoga/WhatsApp Image 2026-08-19 at 2.37.09 AM.jpeg",
      "/assets/images/karma yoga/WhatsApp Image 2026-08-19 at 2.40.03 AM (1).jpeg",
      "/assets/images/karma yoga/WhatsApp Image 2026-08-19 at 2.40.03 AM.jpeg"
    ]
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [activePhotoTab, setActivePhotoTab] = useState('college');
  
  // Interactive Journey Milestones Expanding
  const [expandedMilestone, setExpandedMilestone] = useState('glim'); // Default first expanded
  
  // Photo Lightbox modal
  const [lightboxImg, setLightboxImg] = useState(null);
  
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'about', 'journey', 'photos', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ANIRUDH_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      setFormStatus('error');
      return;
    }
    setFormStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/xaewlagw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          message: formMessage
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormName('');
        setFormEmail('');
        setFormMessage('');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Formspree submission error:", error);
      setFormStatus('error');
    }
  };

  // Get all photos flat-mapped or categorized
  const getCategorizedPhotos = () => {
    switch(activePhotoTab) {
      case 'college':
        return ANIRUDH_DATA.photos.college.map(url => ({ url, category: 'College & BBA' }));
      case 'school':
        return ANIRUDH_DATA.photos.school.map(url => ({ url, category: 'School Days' }));
      case 'sports':
        return [
          ...ANIRUDH_DATA.photos.sports.map(url => ({ url, category: 'Sports & Training' })),
          ...ANIRUDH_DATA.photos.football.map(url => ({ url, category: 'Football Achievement' }))
        ];
      case 'karma':
        return ANIRUDH_DATA.photos.karmaYoga.map(url => ({ url, category: 'Karma Yoga Leadership' }));
      case 'all':
      default:
        return [
          ...ANIRUDH_DATA.photos.college.map(url => ({ url, category: 'College' })),
          ...ANIRUDH_DATA.photos.karmaYoga.map(url => ({ url, category: 'Karma Yoga' })),
          ...ANIRUDH_DATA.photos.sports.map(url => ({ url, category: 'Sports' })),
          ...ANIRUDH_DATA.photos.football.map(url => ({ url, category: 'Football' })),
          ...ANIRUDH_DATA.photos.school.map(url => ({ url, category: 'School' }))
        ];
    }
  };

  const currentPhotos = getCategorizedPhotos();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans transition-colors duration-300">
      
      {/* Lightbox / Fullscreen Image Viewer Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-zinc-400 p-2"
            onClick={() => setLightboxImg(null)}
          >
            <X size={28} />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <img 
              src={lightboxImg.url} 
              alt={lightboxImg.category} 
              className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">{lightboxImg.category}</span>
              <p className="text-sm mt-1">Anirudh Patel - Journey Photo</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            {ANIRUDH_DATA.name}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {[
              { id: 'projects', label: 'Projects' },
              { id: 'about', label: 'About' },
              { id: 'journey', label: 'My Journey' },
              { id: 'photos', label: 'Photo Gallery' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`capitalize transition-colors hover:text-emerald-500 dark:hover:text-emerald-400 ${
                  activeSection === item.id 
                    ? 'text-emerald-600 dark:text-emerald-400' 
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 shadow-sm"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 space-y-3 transition-colors duration-305">
            {[
              { id: 'projects', label: 'Projects' },
              { id: 'about', label: 'About' },
              { id: 'journey', label: 'My Journey' },
              { id: 'photos', label: 'Photo Gallery' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'bg-zinc-105 dark:bg-zinc-900 text-emerald-500' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="max-w-5xl mx-auto px-4 pt-8 pb-8 md:pt-14 md:pb-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-center md:text-left order-2 md:order-1">
          <span className="inline-block px-3 py-1 text-xs font-bold bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-full mb-3 uppercase tracking-wider">
            Welcome to my Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
            Hi, I'm <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">{ANIRUDH_DATA.name}</span>
          </h1>
          <p className="text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-200 mb-2">
            {ANIRUDH_DATA.title}
          </p>
          <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
            {ANIRUDH_DATA.subtitle}
          </p>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-6 max-w-xl leading-relaxed">
            {ANIRUDH_DATA.about}
          </p>

          {/* Social and Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-6">
            <a
              href={ANIRUDH_DATA.resumeUrl}
              download="Marketing_Resume_Anirudh.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-5 py-2.5 font-semibold transition-all duration-200 shadow-sm text-sm"
            >
              <FileText size={16} />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-lg px-5 py-2.5 font-semibold transition-all duration-200 shadow-sm text-sm"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-6">
            <a href={ANIRUDH_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs md:text-sm font-semibold" aria-label="LinkedIn">
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
            <a href={`mailto:${ANIRUDH_DATA.email}`} className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs md:text-sm font-semibold" aria-label="Email">
              <Mail size={18} />
              {ANIRUDH_DATA.email.split('@')[0]}
            </a>
          </div>
        </div>

        {/* Profile Picture Card */}
        <div className="md:col-span-5 order-1 md:order-2 flex justify-center">
          <div className="relative group w-64 h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-2xl rotate-3 scale-102 blur-sm group-hover:rotate-6 transition-all duration-300" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <img 
                src={ANIRUDH_DATA.profilePic} 
                alt={ANIRUDH_DATA.name} 
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-zinc-200 dark:border-zinc-900" />

      {/* Projects Section - Front Page Spotlight */}
      <section id="projects" className="max-w-5xl mx-auto px-4 pt-8 pb-14 md:pt-12 md:pb-18">
        <h2 className="text-3xl font-bold tracking-tight mb-3 text-center flex items-center justify-center gap-2">
          <Code className="text-emerald-500" size={24} />
          Marketing & Growth Projects
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mb-8 md:mb-10 max-w-lg mx-auto">
          Core live business projects and marketing campaigns designed under academic and professional supervision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ANIRUDH_DATA.projects.map((proj, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-between p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] hover:border-emerald-500/50 shadow-sm transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
                    {proj.category || "Campaign / Strategy"}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors p-0.5"
                      title={proj.linkText || "View Live Campaign"}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight mb-1">
                  {proj.link ? (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      {proj.title}
                    </a>
                  ) : (
                    proj.title
                  )}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-450 font-semibold mb-4 leading-none">
                  {proj.subtitle}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {proj.link && (
                  <div className="mb-4 pt-1">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/80 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-black transition-all duration-200 group/link shadow-xs"
                    >
                      <span>{proj.linkText || "View Live Campaign"}</span>
                      <ExternalLink size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                {proj.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-zinc-105 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-zinc-200 dark:border-zinc-900" />

      {/* About & Skills Section (Core Profile & Competencies) */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
              Core Profile
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
              <p>
                I am an MBA candidate (PGPM) at Great Lakes Institute of Management, specializing in business acquisition, D2C strategy, and commercial growth.
              </p>
              <p>
                My professional experience spanning 28 months includes running ₹50Cr revenue funnels at HDFC Credila and managing premium enterprise seller accounts at Teleperformance.
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ANIRUDH_DATA.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] shadow-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-zinc-200 dark:border-zinc-900" />

      {/* Interactive Timeline Journey */}
      <section id="journey" className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-center flex items-center justify-center gap-2">
          <Briefcase className="text-emerald-500" size={24} />
          My Journey So Far
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mb-12">
          Click on any milestone to view expanded details, certificates, and associated gallery photos.
        </p>

        {/* Interactive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Milestone Buttons */}
          <div className="md:col-span-5 space-y-4">
            
            {/* 1. GLIM PGPM */}
            <button 
              onClick={() => setExpandedMilestone('glim')}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 text-sm shadow-sm flex flex-col justify-between ${
                expandedMilestone === 'glim' 
                  ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10' 
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-extrabold text-zinc-900 dark:text-white">Great Lakes (PGPM)</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">2026 - 2027</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 font-medium">Chennai, India • Business & Marketing Candidate</p>
            </button>

            {/* 2. Credila Work */}
            <button 
              onClick={() => setExpandedMilestone('credila')}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 text-sm shadow-sm flex flex-col justify-between ${
                expandedMilestone === 'credila' 
                  ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10' 
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-extrabold text-zinc-900 dark:text-white">Credila Financial Services</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">2024 - 2025</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 font-medium">Sales Executive • ₹50Cr Portfolio Management</p>
            </button>

            {/* 3. Teleperformance */}
            <button 
              onClick={() => setExpandedMilestone('teleperformance')}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 text-sm shadow-sm flex flex-col justify-between ${
                expandedMilestone === 'teleperformance' 
                  ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10' 
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-extrabold text-zinc-900 dark:text-white">Teleperformance</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">2022 - 2023</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 font-medium">Customer Care Executive • Diamond Sellers Retention</p>
            </button>

            {/* 4. Undergrad BBA */}
            <button 
              onClick={() => setExpandedMilestone('bba')}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 text-sm shadow-sm flex flex-col justify-between ${
                expandedMilestone === 'bba' 
                  ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10' 
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-extrabold text-zinc-900 dark:text-white">Dr. APJ Abdul Kalam University</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">2019 - 2022</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 font-medium">BBA Graduate • Indore, India</p>
            </button>

            {/* 5. Schooling & Football Captain */}
            <button 
              onClick={() => setExpandedMilestone('school')}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 text-sm shadow-sm flex flex-col justify-between ${
                expandedMilestone === 'school' 
                  ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10' 
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-extrabold text-zinc-900 dark:text-white">Emerald Heights School</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">2019</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 font-medium">12th Grade (96%) • India U-18 Football Camp</p>
            </button>

          </div>

          {/* Interactive Dynamic Detail Panel */}
          <div className="md:col-span-7 bg-white dark:bg-[#0c0c0f] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-md min-h-[420px] transition-all duration-300">
            
            {/* GLIM Detail Panel */}
            {expandedMilestone === 'glim' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white">Great Lakes Institute of Management</h3>
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500">BATCH OF 2026-27</span>
                </div>
                <div className="flex gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1"><MapPin size={14} /> Chennai</span>
                  <span className="flex items-center gap-1"><Award size={14} /> CGPA: 3.49 / 4.0</span>
                </div>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                  Focusing on general management and advanced marketing analytics. Extensively engaged in student governance and experiential learning projects.
                </p>
                <div className="border-t border-zinc-100 dark:border-zinc-900 pt-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Key Positions & Projects:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-zinc-550 dark:text-zinc-400">
                    <li><strong>Placement Committee Member (BD)</strong> - Pitching corporate accounts and expanding brand placement opportunities.</li>
                    <li><strong>Project Lead, Karma Yoga</strong> - Supervised a community-based leadership survey and development campaign.</li>
                    <li><strong>Rest In Pitch Finalist (2026)</strong> - Solved live marketing case problems.</li>
                  </ul>
                </div>
                {/* Associated Photos Strip */}
                <div className="border-t border-zinc-100 dark:border-zinc-900 pt-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">College & Sports Photos (Click to view):</h4>
                  <div className="flex gap-2.5 overflow-x-auto pb-2">
                    {ANIRUDH_DATA.photos.college.map((url, idx) => (
                      <img 
                        key={`college-${idx}`}
                        src={url} 
                        alt="College" 
                        onClick={() => setLightboxImg({ url, category: 'College & BBA' })}
                        className="w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-80 border border-zinc-200 dark:border-zinc-800 transition"
                      />
                    ))}
                    {ANIRUDH_DATA.photos.sports.map((url, idx) => (
                      <img 
                        key={`sports-${idx}`}
                        src={url} 
                        alt="Sports" 
                        onClick={() => setLightboxImg({ url, category: 'Sports & Athletics' })}
                        className="w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-80 border border-zinc-200 dark:border-zinc-800 transition"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Credila Detail Panel */}
            {expandedMilestone === 'credila' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white">Credila Financial Services Ltd.</h3>
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500">JUN 2024 - APR 2025</span>
                </div>
                <div className="flex gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1"><MapPin size={14} /> Indore, India</span>
                  <span className="flex items-center gap-1"><Award size={14} className="text-emerald-500" /> Highest Performer Award (2025)</span>
                </div>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-bold">
                  Sales Executive | Experience: 11 Months
                </p>
                <div className="border-t border-zinc-100 dark:border-zinc-900 pt-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Key Achievements & Roles:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-zinc-550 dark:text-zinc-400">
                    <li>Managed end-to-end loan conversion pipeline totaling <strong>₹50Cr</strong>, successfully generating <strong>₹30Cr top-line disbursements</strong> and ₹7.5Cr Net Lifetime Revenue.</li>
                    <li>Sustained consistent lead-to-deal sanction ratios between <strong>45% to 55%</strong> through precise profiling and bottleneck resolution.</li>
                    <li>Achieved <strong>300% of sales targets</strong> in 11 months, specializing in high-priority customer accounts and cross-border payment solutions.</li>
                    <li>Built a real-time lead tracking dashboard, resulting in a <strong>100% surge in inbound organic leads</strong>.</li>
                  </ul>
                </div>

              </div>
            )}

            {/* Teleperformance Detail Panel */}
            {expandedMilestone === 'teleperformance' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white">Teleperformance</h3>
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500">MAR 2022 - SEP 2023</span>
                </div>
                <div className="flex gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1"><MapPin size={14} /> Indore, India</span>
                  <span className="flex items-center gap-1"><User size={14} /> Customer Care Executive</span>
                </div>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                  Assigned to retention and account growth of premier e-commerce Diamond seller portfolios.
                </p>
                <div className="border-t border-zinc-100 dark:border-zinc-900 pt-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Roles & Metrics:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-zinc-550 dark:text-zinc-400">
                    <li>Maintained an average of <strong>90% Seller SSAT</strong> score across high-value client portfolios.</li>
                    <li>Proactively prevented competitor migration of critical sellers by resolving service delays and merchant escalations.</li>
                    <li>Acquired skills in professional negotiation, active listening, and merchant CRM operations.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* BBA Detail Panel */}
            {expandedMilestone === 'bba' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white">Dr. APJ Abdul Kalam University</h3>
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500">2019 - 2022</span>
                </div>
                <div className="flex gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1"><MapPin size={14} /> Indore, India</span>
                  <span className="flex items-center gap-1"><Award size={14} /> Score: 65.58%</span>
                </div>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                  Completed Bachelor of Business Administration, laying the groundwork for strategic management, business accounting, and consumer psychology.
                </p>

              </div>
            )}

            {/* School Detail Panel */}
            {expandedMilestone === 'school' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white">Emerald Heights International School</h3>
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500">GRADUATED 2019</span>
                </div>
                <div className="flex gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1"><MapPin size={14} /> Indore, India</span>
                  <span className="flex items-center gap-1"><Award size={14} /> Score: 96% in 12th</span>
                </div>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                  Academic top tier. Captain of the high school football team while balancing rigorous CBSE curricula.
                </p>
                <div className="border-t border-zinc-100 dark:border-zinc-900 pt-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Athletic Highlights:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-zinc-550 dark:text-zinc-400">
                    <li>Represented India in the <strong>U-18 Asian Games Football selection camp</strong> (2019).</li>
                    <li>Secured <strong>100% Sports Scholarship</strong> from EHIS due to outstanding athletic merit.</li>
                    <li>Led the school football team to victories at National, State, and District levels as captain (2020).</li>
                  </ul>
                </div>
                {/* Associated Photos Strip */}
                <div className="border-t border-zinc-100 dark:border-zinc-900 pt-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">School & Football Photos (Click to view):</h4>
                  <div className="flex gap-2.5 overflow-x-auto pb-2">
                    {ANIRUDH_DATA.photos.school.map((url, idx) => (
                      <img 
                        key={`school-${idx}`}
                        src={url} 
                        alt="School" 
                        onClick={() => setLightboxImg({ url, category: 'School Days' })}
                        className="w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-80 border border-zinc-200 dark:border-zinc-800 transition"
                      />
                    ))}
                    {ANIRUDH_DATA.photos.football.map((url, idx) => (
                      <img 
                        key={`football-${idx}`}
                        src={url} 
                        alt="Football" 
                        onClick={() => setLightboxImg({ url, category: 'Football Achievement' })}
                        className="w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-80 border border-zinc-200 dark:border-zinc-800 transition"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-zinc-200 dark:border-zinc-900" />

      {/* Interactive Photo Gallery Hub */}
      <section id="photos" className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-center flex items-center justify-center gap-2">
          <ImageIcon className="text-emerald-500" size={24} />
          Interactive Photo Journal
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mb-10 max-w-lg mx-auto">
          Explore photos highlighting my school days, college achievements, sports milestones, and Karma Yoga leadership project. Click any photo to expand.
        </p>

        {/* Categories filters for photos */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'college', label: 'College & GLIM' },
            { id: 'school', label: 'School' },
            { id: 'sports', label: 'Sports & Football' },
            { id: 'karma', label: 'Karma Yoga' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActivePhotoTab(tab.id)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg border transition-all duration-200 shadow-sm ${
                activePhotoTab === tab.id
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2 border border-zinc-200 dark:border-zinc-900 p-4 rounded-xl bg-white dark:bg-[#0c0c0f] shadow-inner">
          {currentPhotos.map((photo, index) => (
            <div 
              key={index} 
              onClick={() => setLightboxImg(photo)}
              className="relative group aspect-square rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900 cursor-pointer border border-zinc-100 dark:border-zinc-800 shadow-sm"
            >
              <img 
                src={photo.url} 
                alt={photo.category} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2 text-center text-white">
                <div>
                  <span className="text-sm font-semibold text-emerald-400 tracking-wider">Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-zinc-200 dark:border-zinc-900" />

      {/* Achievements & Responsibilities */}
      <section id="achievements" className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Achievements list */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-2">
              <Award className="text-emerald-500" size={24} />
              Key Achievements
            </h2>
            <div className="space-y-4">
              {ANIRUDH_DATA.achievements.map((ach, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] shadow-sm flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-55 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400">
                    <Award size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white">{ach.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{ach.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-2">
              <User className="text-emerald-500" size={24} />
              Positions of Responsibility
            </h2>
            <div className="space-y-4">
              {ANIRUDH_DATA.responsibilities.map((pos, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-extrabold text-sm text-zinc-900 dark:text-white leading-tight">
                      {pos.role}
                    </h3>
                    <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md">
                      {pos.year}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">{pos.organization}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-450 leading-relaxed">{pos.details}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-zinc-200 dark:border-zinc-900" />

      {/* Interactive Contact & Resume Download Section */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-center flex items-center justify-center gap-2">
          <Mail className="text-emerald-500" size={24} />
          Let's Work Together
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mb-12 max-w-md mx-auto">
          Feel free to download my resume, connect on LinkedIn, or drop a message directly using the form below. Let's discuss new opportunities or collaborations!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          
          {/* Action Hub Panel */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Resume Download Box */}
            <div className="p-6 rounded-xl border-2 border-emerald-500 bg-white dark:bg-[#0c0c0f] shadow-md relative overflow-hidden">
              <div className="absolute right-0 top-0 bg-emerald-500 text-black font-extrabold text-[9px] uppercase px-3 py-1 rotate-12 translate-x-2 translate-y-1 shadow-sm">
                Verified
              </div>
              <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                <FileText className="text-emerald-500" size={20} />
                Executive Resume
              </h3>
              <p className="text-xs text-zinc-550 dark:text-zinc-400 leading-relaxed mb-6">
                Download my full, verified 1-page marketing and sales resume containing exhaustive KPI details.
              </p>
              <a 
                href={ANIRUDH_DATA.resumeUrl} 
                download="Marketing_Resume_Anirudh.pdf"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-3 font-semibold transition shadow-sm"
              >
                <FileText size={16} />
                Download Resume (PDF)
              </a>
            </div>

            {/* Direct Phone & Email info */}
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Contact Number</p>
                  <a href={`tel:${ANIRUDH_DATA.phone}`} className="text-sm font-semibold text-zinc-850 dark:text-zinc-200 hover:text-emerald-500 transition-colors">
                    {ANIRUDH_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-zinc-100 dark:border-zinc-900 pt-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">
                    <Mail size={18} />
                  </span>
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Email Address</p>
                    <p className="text-sm font-semibold text-zinc-850 dark:text-zinc-200 truncate">{ANIRUDH_DATA.email}</p>
                  </div>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 hover:text-emerald-500 transition-colors shrink-0"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* LinkedIn Connection */}
            <a 
              href={ANIRUDH_DATA.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] hover:border-emerald-500/50 shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-500 group-hover:text-emerald-500 transition-colors">
                    <Linkedin size={20} />
                  </span>
                  <div>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">LinkedIn Profile</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-500 transition-colors">anirudh-patel-474996215</p>
                  </div>
                </div>
                <span className="text-zinc-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1 duration-200">
                  <ChevronRight size={18} />
                </span>
              </div>
            </a>

          </div>

          {/* Quick Message Form */}
          <div className="md:col-span-3 bg-white dark:bg-[#0c0c0f] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-md">
            <h3 className="font-extrabold text-lg mb-6">Drop Me A Message</h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wider">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  disabled={formStatus === 'submitting'}
                  placeholder="Enter your name"
                  className="w-full bg-[#ffffff] dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-zinc-950 dark:text-zinc-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wider">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  disabled={formStatus === 'submitting'}
                  placeholder="Enter your email"
                  className="w-full bg-[#ffffff] dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-zinc-950 dark:text-zinc-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wider">Message Details</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  disabled={formStatus === 'submitting'}
                  placeholder="How can we collaborate?"
                  className="w-full bg-[#ffffff] dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-zinc-950 dark:text-zinc-100 transition-all"
                />
              </div>

              {formStatus === 'success' && (
                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-400 rounded-lg text-sm flex items-center gap-2">
                  <Check size={16} className="text-emerald-500" />
                  Your message has been sent successfully! I will reply shortly.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/30 text-rose-800 dark:text-rose-450 rounded-lg text-sm flex items-center gap-2">
                  <X size={16} className="text-rose-500" />
                  Failed to send message. Please fill in all required fields.
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-3.5 font-bold transition-all shadow-sm disabled:opacity-50"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-center py-8 text-xs text-zinc-500 dark:text-zinc-500 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {ANIRUDH_DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse mx-0.5" /> for Great Lakes PGPM Journey
          </div>
          <div className="flex gap-4">
            <a href={ANIRUDH_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 dark:hover:text-white transition-colors">LinkedIn</a>
            <a href={`mailto:${ANIRUDH_DATA.email}`} className="hover:text-zinc-800 dark:hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
