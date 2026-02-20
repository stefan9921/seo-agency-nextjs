'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef, ReactNode } from 'react';

/* ───── Scroll Animation Component ───── */
function AnimateOnScroll({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  animation?: 'fadeIn' | 'fadeInUp' | 'zoomIn' | 'pulse';
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-anim ${animation} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ───── Data ───── */
const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/company/' },
  { text: 'SEO', href: '/search-engine-optimization-dublin/' },
  { text: 'Web Design', href: '/web-design-agency-dublin/' },
  { text: 'PPC Advertising', href: '/ppc-agency/' },
  { text: 'Our Clients', href: '/portfolio/' },
  { text: 'Results', href: '/results/' },
];

const clientLogos = [
  { src: '/images/bunbowl.png', alt: 'web design client', href: 'http://bunandbowl.ie' },
  { src: '/images/kaestiling.png', alt: 'logo client web', href: 'http://kaestiling.ie' },
  { src: '/images/floractive.png', alt: 'logo client', href: 'http://floractive.ie' },
  { src: '/images/bovinityrestaurant.png', alt: 'client web design', href: 'http://bovinity.ie' },
  { src: '/images/toprenovations.png', alt: 'client seo and web design', href: 'http://toprenovations.ie' },
  { src: '/images/allbarchicken.png', alt: 'restaurant seo', href: 'https://allbarchicken.ie' },
  { src: '/images/cleaning-team-dublin.png', alt: 'local seo client', href: 'http://cleaningteam.ie' },
];

const clientLogos2 = [
  { src: '/images/cleaning-team-dublin.png', alt: 'local seo client', href: 'https://cleaningteam.ie/' },
  { src: '/images/bunbowl.png', alt: 'web design client', href: 'https://bunandbowl.ie/' },
  { src: '/images/kaestiling.png', alt: 'logo client web', href: 'https://dublinbathroomrenovation.ie/' },
  { src: '/images/sealodge-waterville-ireland.png', alt: 'Sea lodge waterville logo', href: 'https://floractive.ie/' },
  { src: '/images/floractive.png', alt: 'logo client', href: 'https://sealodgewaterville.ie' },
  { src: '/images/bovinityrestaurant.png', alt: 'client web design', href: 'https://bovinity.ie/' },
  { src: '/images/toprenovations.png', alt: 'client seo and web design', href: 'https://toprenovations.ie/' },
  { src: '/images/allbarchicken.png', alt: 'restaurant seo', href: 'https://allbarchicken.ie' },
];

const services = [
  { title: 'Lead Generation', desc: 'Automate email marketing and campaigns for increased revenue generation.', img: '/images/landpress-startup-7.png', href: '/local-seo-agency/' },
  { title: 'Search Engine Optimization', desc: 'Boost website traffic with proven strategies. Achieve higher rankings and attract quality leads.', img: '/images/landpress-startup-5.png', href: '/affordable-seo-agency/' },
  { title: 'Social Media Marketing', desc: 'From initial contact to conversion, deliver personalized experiences that drive engagement and revenue.', img: '/images/landpress-startup-6.png', href: '/digital-marketing-agency-in-dublin/' },
  { title: 'Web Design for Local Businesses', desc: 'Increase visibility, attract more customers, and drive conversions for sustained growth and success.', img: '/images/landpress-startup-4.png', href: '/web-design-and-seo-dublin/' },
];

const bundleServices = [
  { title: 'Brand communication', desc: 'Craft compelling brand stories and messaging strategies that resonate with your audience. Strengthen brand identity, build trust, and drive engagement across all channels.', icon: 'bullhorn' },
  { title: 'Seo strategy consultation', desc: 'Navigate the complexities of technology with our expert consultation services.', icon: 'chat' },
  { title: 'Graphic design', desc: 'Transform your brand vision into stunning visuals. From logos to marketing materials.', icon: 'paint' },
  { title: 'UI/UX product design', desc: 'Deliver exceptional user experiences with intuitive UI/UX design. Our designers combine creativity and functionality to create interactions that keep users engaged.', icon: 'pointer' },
  { title: 'Product development', desc: 'Bring your ideas to life with our product development expertise. From conceptualization to launch, we guide you through every stage to create innovative solutions.', icon: 'keyboard' },
  { title: 'Website performance', desc: 'From updates to performance enhancements, we keep your systems running smoothly and efficiently.', icon: 'speed' },
];

const integrationLogos = [
  { src: '/images/fb-ads.png', alt: 'facebook ads' },
  { src: '/images/logo4.webp', alt: 'google ads' },
  { src: '/images/logo2.webp', alt: 'ahrefs' },
  { src: '/images/lsa-ads.png', alt: 'google marketing' },
  { src: '/images/wordpress.png', alt: 'wordpress logo' },
  { src: '/images/logo5.webp', alt: 'google search console' },
  { src: '/images/google-analytics.png', alt: 'Google Analytics' },
];

const googleReviews = [
  { name: 'Constantin', initial: 'C', color: '#4285F4', date: 'February 18, 2026', text: 'Great experience from start to finish. Everything was smooth and creative. The team is professional, supportive, and truly dedicated. Highly recommend!' },
  { name: 'Marius Bodor', initial: 'M', color: '#EA4335', date: 'February 10, 2026', text: 'Absolutely amazing guy, very happy with his work, good communication, very helpful and supportive, good skills, knowledgeable in everything he does, couldn\'t really ask for more... Definitely recommend without hesitation.' },
  { name: 'LadyCab Limited', initial: 'L', color: '#34A853', date: 'January 25, 2026', text: 'I cannot recommend SEO Agency Dublin highly enough. From the very first conversation, Stephen and his team understood our vision and delivered outstanding results.' },
];

const footerServices = [
  { text: 'Digital Marketing Agency for Small Businesses', href: '/digital-marketing-agency-for-small-businesses/' },
  { text: 'Advertising Agency', href: '/advertising-agency-dublin/' },
  { text: 'Local SEO Services', href: '/affordable-local-seo-services-dublin/' },
  { text: 'Web Design', href: '/dublin-web-design-agency/' },
  { text: 'Search Engine Optimization', href: '/search-engine-optimization-dublin/' },
];

const footerCompany = [
  { text: 'About', href: '/company/' },
  { text: 'Blog', href: '/blog/' },
  { text: 'Contact', href: '/contact/' },
  { text: 'Reviews', href: '/reviews/' },
  { text: 'Free Consultation', href: '/contact/' },
];

const faqs = [
  { q: '1. What services do you offer?', a: 'We provide a comprehensive range of marketing solutions tailored to your business needs.' },
  { q: '2. How do I get started?', a: 'Simply reach out to us through our contact form, and we\'ll guide you through the process.' },
  { q: '3. Can I customize my service bundle?', a: 'Absolutely! We understand that every business is unique, and we\'re here to tailor our services accordingly.' },
  { q: '4. Do you offer ongoing support?', a: 'Yes, we provide continuous support to ensure your success even after the initial implementation.' },
  { q: '5. What sets you apart from other agencies?', a: 'Our commitment to delivering innovative solutions, personalized service, and measurable results distinguishes us in the industry.' },
  { q: '6. How long does it take to see results?', a: 'Results may vary depending on factors such as your industry, goals, and implementation. However, we strive for timely and impactful outcomes.' },
  { q: '7. Do you offer free consultations?', a: 'Yes, we offer consultations to discuss your needs and develop a customized strategy tailored to your objectives.' },
  { q: '8. Can you help with website optimization?', a: 'Absolutely! Website optimization is one of our specialties, and we\'ll work closely with you to enhance your online presence.' },
  { q: '9. Are your services scalable?', a: 'Yes, our services are designed to scale alongside your business growth, ensuring continued success and adaptability.' },
  { q: '10. How do I measure the success of your services?', a: 'We provide comprehensive analytics and regular progress reports to track the effectiveness of our services and measure your ROI.' },
];

const bundleIcons: Record<string, React.ReactNode> = {
  bullhorn: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  chat: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  paint: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  pointer: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  keyboard: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  speed: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

/* ───── Google Review Card ───── */
function GoogleReviewCard({ review }: { review: typeof googleReviews[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col relative min-w-[300px] lg:min-w-[350px]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[16px]" style={{ backgroundColor: review.color }}>
          {review.initial}
        </div>
        <div>
          <p className="text-[15px] font-semibold text-body-dark">{review.name}</p>
          <p className="text-[12px] text-gray-400">{review.date}</p>
        </div>
      </div>
      <div className="flex items-center gap-0.5 mb-3">
        {[...Array(5)].map((_, j) => (
          <svg key={j} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        ))}
      </div>
      <p className="text-[13px] leading-[22px] text-body flex-1">{review.text}</p>
      <div className="absolute top-5 right-5">
        <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
      </div>
    </div>
  );
}

/* ───── Cookie Consent Banner ───── */
function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('cookie-consent')) setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <Image src="/images/SEO-AGENCY.svg" alt="SEO Agency Dublin" width={120} height={40} className="h-[28px] w-auto" />
          <h3 className="text-[16px] font-semibold text-body-dark">Manage Consent</h3>
          <button onClick={() => { setVisible(false); localStorage.setItem('cookie-consent', 'denied'); }} className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <hr className="mb-3" />
        <p className="text-[12px] leading-[18px] text-body mb-4">
          To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functions.
        </p>
        {showPrefs && (
          <div className="mb-4 space-y-2">
            <label className="flex items-center gap-2 text-[13px] text-body-dark">
              <input type="checkbox" checked disabled className="accent-teal" /> Functional (Always active)
            </label>
            <label className="flex items-center gap-2 text-[13px] text-body-dark">
              <input type="checkbox" className="accent-teal" /> Preferences
            </label>
            <label className="flex items-center gap-2 text-[13px] text-body-dark">
              <input type="checkbox" className="accent-teal" /> Statistics
            </label>
            <label className="flex items-center gap-2 text-[13px] text-body-dark">
              <input type="checkbox" className="accent-teal" /> Marketing
            </label>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <button onClick={() => { setVisible(false); localStorage.setItem('cookie-consent', 'accepted'); }} className="w-full py-2.5 text-[13px] font-semibold text-white bg-teal rounded-lg hover:bg-teal/90">Accept</button>
          <button onClick={() => { setVisible(false); localStorage.setItem('cookie-consent', 'denied'); }} className="w-full py-2.5 text-[13px] font-semibold text-body-dark bg-gray-100 rounded-lg hover:bg-gray-200">Deny</button>
          <button onClick={() => setShowPrefs(!showPrefs)} className="w-full py-2.5 text-[13px] font-semibold text-body-dark border border-gray-200 rounded-lg hover:bg-gray-50">View preferences</button>
        </div>
      </div>
    </div>
  );
}

/* ───── Page ───── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  return (
    <div className="min-h-screen bg-cream">
      {/* COOKIE CONSENT */}
      <CookieConsent />

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/353831227553"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[9998] w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px] lg:h-[80px]">
          <a href="/" className="flex-shrink-0">
            <Image src="/images/SEO-AGENCY.svg" alt="SEO Agency Dublin" width={180} height={60} className="h-[40px] lg:h-[50px] w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} className={`text-[16px] font-medium transition-colors ${link.text === 'Home' ? 'text-gold' : 'text-body-dark hover:text-gold'}`}>{link.text}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href="/contact/" className="px-6 py-3 text-[15px] font-medium text-body-dark bg-gold rounded-full hover:bg-gold/90 transition-colors">Free consultation</a>
            <button className="px-6 py-3 text-[15px] font-medium text-white bg-teal rounded-full hover:bg-teal/90 transition-colors">Let&apos;s connect</button>
          </div>
          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 relative w-8 h-8 justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-body-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`w-6 h-0.5 bg-body-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-body-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
        {/* Mobile nav */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
          <nav className="flex flex-col px-6 pb-6 pt-2 gap-4 bg-white border-t border-gray-100">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} className={`text-[16px] font-medium transition-colors ${link.text === 'Home' ? 'text-gold' : 'text-body-dark hover:text-gold'}`}>{link.text}</a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <a href="/contact/" className="text-center px-6 py-3 text-[15px] font-medium text-body-dark bg-gold rounded-full">Free consultation</a>
              <button className="px-6 py-3 text-[15px] font-medium text-white bg-teal rounded-full">Let&apos;s connect</button>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-cream">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-[55%] space-y-4 lg:space-y-6">
            <AnimateOnScroll animation="fadeIn">
              <h1 className="text-[16px] lg:text-[18px] font-medium text-teal">SEO Agency Dublin</h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <h2 className="text-[30px] sm:text-[40px] lg:text-[52px] font-semibold leading-[1.15] text-body-dark">
                Marketing revolution. Unlimited success{' '}
                <Image src="/images/270c.svg" alt="✌️" width={40} height={40} className="inline-block w-8 h-8 lg:w-10 lg:h-10" />
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body max-w-[520px]">
                Join us in revolutionizing your marketing strategies for unlimited success. Let&apos;s achieve your goals together.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="/contact/" className="px-6 lg:px-8 py-3 lg:py-4 text-[15px] lg:text-[16px] font-medium text-white bg-teal rounded-full hover:bg-teal/90 transition-colors">Free consultation</a>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <Image src="/images/testimonial1.jpg" alt="client" width={36} height={36} className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                    <Image src="/images/testimonial2.jpg" alt="business owner" width={36} height={36} className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                    <Image src="/images/testimonial3.jpg" alt="happy client" width={36} height={36} className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                  </div>
                  <span className="text-[14px] lg:text-[16px] font-medium text-body-dark">Loved by thousands</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fadeIn" delay={200} className="lg:w-[45%] flex justify-center">
            <Image src="/images/landpress-startup-8.png" alt="business automation" width={550} height={500} className="w-full max-w-[400px] lg:max-w-[550px] h-auto" priority />
          </AnimateOnScroll>
        </div>
      </section>

      {/* CLIENT LOGOS - First Carousel */}
      <section className="bg-white py-10 lg:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeIn">
            <h2 className="text-[22px] lg:text-[29px] font-semibold text-black mb-8 lg:mb-10">A few of the companies we have helped grow</h2>
          </AnimateOnScroll>
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <a key={i} href={logo.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[120px] lg:w-[160px] mx-4 lg:mx-6 flex items-center justify-center h-[60px] lg:h-[80px]">
                  <Image src={logo.src} alt={logo.alt} width={140} height={60} className="max-h-[45px] lg:max-h-[60px] w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS - Second Carousel (opposite direction) */}
      <section className="bg-white pb-10 lg:pb-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeIn">
            <h2 className="text-[22px] lg:text-[29px] font-semibold text-black mb-8 lg:mb-10">A few of the companies we have helped grow!</h2>
          </AnimateOnScroll>
          <div className="overflow-hidden">
            <div className="flex animate-scroll-right whitespace-nowrap">
              {[...clientLogos2, ...clientLogos2].map((logo, i) => (
                <a key={i} href={logo.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[120px] lg:w-[160px] mx-4 lg:mx-6 flex items-center justify-center h-[60px] lg:h-[80px]">
                  <Image src={logo.src} alt={logo.alt} width={140} height={60} className="max-h-[45px] lg:max-h-[60px] w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - Split Layout */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left dark teal panel */}
          <div className="lg:w-[42%] bg-teal py-14 lg:py-24 px-6 lg:px-12 xl:pl-[calc((100vw-1320px)/2+1rem)] relative z-10">
            <AnimateOnScroll animation="fadeInUp">
              <h6 className="text-[14px] lg:text-[16px] font-medium text-gold mb-4">Start earning more traffic</h6>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-white leading-[1.2] mb-6">
                Solutions <em className="not-italic">for</em> busy business owners
              </h2>
              <p className="text-[14px] lg:text-[16px] leading-[26px] text-white/80">
                Drive revenue with <a href="/social-media-marketing-agency-ireland/" className="text-white underline hover:text-gold">Social Media Marketing</a>, boost <a href="/search-engine-optimization-dublin/" className="text-white underline hover:text-gold">SEO rankings</a>, and <a href="/web-design-agency-dublin/" className="text-white underline hover:text-gold">Web Design</a> to optimize the customer journey effortlessly.
              </p>
            </AnimateOnScroll>
          </div>
          {/* Right side - 2x2 grid overlapping */}
          <div className="lg:w-[62%] bg-cream py-8 lg:py-14 px-4 sm:px-6 lg:pr-[calc((100vw-1320px)/2+1rem)] lg:-ml-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {services.map((service, i) => (
                <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 100}>
                  <a href={service.href} className="service-card bg-white rounded-2xl p-5 lg:p-6 flex flex-col items-start h-full block shadow-sm">
                    <Image src={service.img} alt={service.title} width={280} height={200} className="w-full h-[140px] lg:h-[160px] object-contain mb-4" />
                    <h4 className="text-[16px] lg:text-[18px] font-semibold text-body-dark mb-2">{service.title}</h4>
                    <p className="text-[13px] lg:text-[14px] leading-[22px] lg:leading-[24px] text-body">{service.desc}</p>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BESPOKE BUNDLE */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeIn" className="text-center lg:text-center mb-10 lg:mb-14">
            <h2 className="text-[14px] lg:text-[16px] font-medium text-teal mb-3">SEO Agency Dublin</h2>
            <h3 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark mb-4">Your <span className="text-gold">bespoke</span> service bundle</h3>
            <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body max-w-[600px] mx-auto">Unlock your business&apos;s full potential with our comprehensive suite of services.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {bundleServices.map((s, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={(i % 3) * 100}>
                <div className="service-card p-6 rounded-2xl border border-gray-100 bg-white h-full">
                  <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mb-4 text-teal">
                    {bundleIcons[s.icon]}
                  </div>
                  <h4 className="text-[16px] lg:text-[18px] font-semibold text-body-dark mb-2">{s.title}</h4>
                  <p className="text-[13px] lg:text-[14px] leading-[22px] lg:leading-[24px] text-body">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeIn" className="text-center mb-10 lg:mb-14">
            <h5 className="text-[14px] lg:text-[16px] font-medium text-teal mb-3">Seamless Integrations</h5>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark mb-4">Easy integration with your entire tech stack</h2>
            <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body max-w-[600px] mx-auto">Integrate with top marketing and SEO tools. Experience enhanced performance.</p>
            <ul className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-4">
              {['Enhance campaign effectiveness', 'Access comprehensive analytics', 'Improve customer targeting'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px] lg:text-[15px] text-body-dark">
                  <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {integrationLogos.map((logo, i) => (
              <AnimateOnScroll key={i} animation="zoomIn" delay={i * 100}>
                <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 lg:p-4 hover:shadow-md transition-shadow">
                  <Image src={logo.src} alt={logo.alt} width={60} height={60} className="w-auto h-[40px] lg:h-[50px] object-contain" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Google Reviews Carousel */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center lg:text-center mb-10 lg:mb-14">
            <AnimateOnScroll animation="pulse">
              <p className="text-[13px] lg:text-[14px] font-medium text-teal mb-2">1200+ Happy Clients</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeIn" delay={100}>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark mb-4">Winning hearts and trust.<br />Customer <span className="text-gold">success stories</span></h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body max-w-[600px] mx-auto">The best way to showcase our commitment is through the <a href="/clients/" className="text-teal hover:underline">experiences and stories</a> of those who have partnered with us.</p>
            </AnimateOnScroll>
          </div>
          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out gap-6" style={{ transform: `translateX(-${reviewIndex * 100}%)` }}>
                {googleReviews.map((r, i) => (
                  <div key={i} className="min-w-full md:min-w-[calc(33.333%-16px)] flex-shrink-0">
                    <GoogleReviewCard review={r} />
                  </div>
                ))}
              </div>
            </div>
            {/* Right arrow */}
            <button
              onClick={() => setReviewIndex((prev) => (prev + 1) % googleReviews.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Next review"
            >
              <svg className="w-5 h-5 text-body-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-10 lg:mb-14">
            <div className="lg:w-1/2">
              <AnimateOnScroll animation="fadeIn">
                <p className="text-[13px] lg:text-[14px] font-medium text-teal mb-2">Flexible Pricing</p>
                <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark"><span className="text-gold">Get started.</span> Pick a plan that suits your needs</h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:w-1/2 flex items-end">
              <AnimateOnScroll animation="fadeIn" delay={100}>
                <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body">Explore our flexible plans tailored to meet your needs and budget. Get started today and propel your business to new heights.</p>
              </AnimateOnScroll>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[900px] mx-auto">
            {[
              { name: 'Startup Local Business', price: '700', features: ['Basic SEO optimization', 'Social media integration', 'Performance reports', 'Website optimization', 'Access to knowledge base', 'Webpage speed optimzation'] },
              { name: 'Google My Business', price: '400', features: ['Listing optimization', 'Keyword research', 'Geo-Networks creation', 'Geo relevant photos and videos', 'Creation and optimization of products & services', 'Schema markup', 'Landing pages optimization'] },
            ].map((plan, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 150}>
                <div className="pricing-card bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 h-full flex flex-col">
                  <h5 className="text-[20px] lg:text-[24px] font-semibold text-body-dark mb-2">{plan.name}</h5>
                  <p className="text-[13px] lg:text-[14px] text-body mb-6">For individuals and small teams trying out for an unlimited period.</p>
                  <div className="mb-6">
                    <span className="text-[13px] lg:text-[14px] text-body">from </span>
                    <span className="text-[40px] lg:text-[50px] font-semibold text-body-dark leading-none">{plan.price}€</span>
                    <span className="text-[13px] lg:text-[14px] text-body"> /month</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-[14px] lg:text-[15px] text-body-dark">
                        <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact/" className="block w-full text-center px-6 py-4 text-[15px] lg:text-[16px] font-medium text-white bg-teal rounded-full hover:bg-teal/90 transition-colors">Free consultation</a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - 2 Column Layout */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left column */}
            <div className="lg:w-[38%] lg:sticky lg:top-[100px] lg:self-start">
              <AnimateOnScroll animation="fadeIn">
                <p className="text-[13px] lg:text-[14px] font-medium text-teal mb-3">FAQs</p>
                <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark mb-4">
                  <span className="text-gold">Questions?</span> We&apos;re glad you asked
                </h2>
                <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body">Here&apos;s a little more about how we operate. Got a more specific question? Feel free to get in touch.</p>
              </AnimateOnScroll>
            </div>
            {/* Right column - accordions */}
            <div className="lg:w-[62%]">
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <AnimateOnScroll key={i} animation="fadeInUp" delay={(i % 5) * 80}>
                    <details className="faq-item group bg-cream rounded-2xl overflow-hidden">
                      <summary className="flex items-center justify-between p-5 lg:p-6 text-[15px] lg:text-[17px] font-medium text-body-dark">
                        {faq.q}
                        <span className="faq-icon text-2xl text-teal transition-transform flex-shrink-0 ml-4">+</span>
                      </summary>
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-[14px] lg:text-[15px] leading-[24px] lg:leading-[26px] text-body">{faq.a}</div>
                    </details>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <AnimateOnScroll animation="fadeIn">
                <h2 className="text-[13px] lg:text-[14px] font-medium text-gold mb-3">Seo Agency Dublin</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={100}>
                <h3 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-white mb-6 leading-[1.2]"><span className="text-gold">Ready to unlock</span> your business potential with SEO agency Dublin?</h3>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-white/80 mb-8">We&apos;re building amazing tech, bringing together the best marketing minds out there.</p>
              </AnimateOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Automate and make better business decisions', desc: 'Automate your processes and gain insights to optimize efficiency and drive success in your business operations.' },
                  { icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', title: 'Drive sustainable growth in today\'s market', desc: 'Adapt to changing trends and seize opportunities to thrive in today\'s dynamic business landscape.' },
                ].map((item, i) => (
                  <AnimateOnScroll key={i} animation="fadeInUp" delay={300 + i * 100}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                      </div>
                      <div>
                        <h4 className="text-[14px] lg:text-[16px] font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-[13px] lg:text-[14px] text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
            <AnimateOnScroll animation="fadeIn" delay={200} className="lg:w-1/2 flex justify-center">
              <Image src="/images/landpress-startup-3.png" alt="SEO Agency Dublin" width={500} height={400} className="w-full max-w-[400px] lg:max-w-[500px]" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-teal-dark py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <AnimateOnScroll animation="fadeIn" className="lg:w-1/2">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-white mb-6">Let&apos;s talk about<br /><span className="text-gold">working together</span></h2>
              <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-white/70 mb-8">Need a quick question answered? Our support team is available to answer any queries seven days a week.</p>
              <div className="space-y-4">
                <h5 className="text-[18px] lg:text-[20px] font-semibold text-white">Contact information:</h5>
                <p className="text-[14px] lg:text-[16px] text-white/80">Email: contact@seoagencydublin.ie</p>
                <p className="text-[14px] lg:text-[16px] text-white/80">Phone: 0831227553</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200} className="lg:w-1/2 w-full">
              <form className="space-y-4">
                <div>
                  <label className="block text-[14px] font-medium text-white mb-1.5">Name <span className="text-red-400">*</span></label>
                  <input type="text" placeholder="Name" className="w-full px-5 py-3 lg:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[14px] lg:text-[15px] focus:outline-none focus:border-gold" required />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-white mb-1.5">Phone No <span className="text-red-400">*</span></label>
                  <div className="flex gap-2">
                    <div className="relative flex-shrink-0">
                      <select className="appearance-none w-[100px] px-3 py-3 lg:py-4 rounded-xl bg-white/10 border border-white/20 text-white text-[14px] focus:outline-none focus:border-gold pr-8">
                        <option value="+353">🇮🇪 +353</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+39">🇮🇹 +39</option>
                        <option value="+48">🇵🇱 +48</option>
                        <option value="+40">🇷🇴 +40</option>
                        <option value="+31">🇳🇱 +31</option>
                      </select>
                      <svg className="w-4 h-4 text-white/50 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <input type="tel" placeholder="Phone number" className="w-full px-5 py-3 lg:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[14px] lg:text-[15px] focus:outline-none focus:border-gold" required />
                  </div>
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-white mb-1.5">Email <span className="text-red-400">*</span></label>
                  <input type="email" placeholder="Email" className="w-full px-5 py-3 lg:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[14px] lg:text-[15px] focus:outline-none focus:border-gold" required />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-white mb-1.5">Comment or Message</label>
                  <textarea placeholder="Your message..." rows={4} className="w-full px-5 py-3 lg:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[14px] lg:text-[15px] focus:outline-none focus:border-gold resize-none" />
                </div>
                {/* Cloudflare Turnstile placeholder */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-white/30 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-[13px] text-white/60">Cloudflare Turnstile verification</span>
                </div>
                <button type="submit" className="px-8 py-3 lg:py-4 text-[15px] lg:text-[16px] font-medium text-black bg-gold rounded-full hover:bg-gold/90 transition-colors">Submit</button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 lg:py-16 border-t border-gray-100">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
            {/* Column 1: Logo, description, phone, map */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="/">
                <Image src="/images/SEO-AGENCY.svg" alt="SEO Agency Dublin" width={160} height={50} className="h-[40px] lg:h-[45px] w-auto mb-4" />
              </a>
              <p className="text-[13px] lg:text-[14px] leading-[22px] lg:leading-[24px] text-body mb-4">Boost your local business in Dublin and surrounding areas with expert SEO services. Our tailored strategies enhance your online visibility, drive traffic, and improve your Google My Business profile. Stand out and grow with our local SEO solutions.</p>
              <h3 className="text-[24px] lg:text-[28px] font-bold text-body-dark mb-4">0831227553</h3>
              {/* Google Maps embed */}
              <div className="w-full h-[200px] rounded-xl overflow-hidden bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.5633743039793!2d-6.179024399999999!3d53.40475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486711b251c8638f%3A0x5b4aa111211efce6!2sSeo%20Agency%20Dublin!5e0!3m2!1sen!2sie!4v1731237262283!5m2!1sen!2sie"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SEO Agency Dublin location"
                />
              </div>
            </div>
            {/* Column 2: Services */}
            <div>
              <h4 className="text-[15px] lg:text-[16px] font-semibold text-body-dark mb-4">Services</h4>
              <ul className="space-y-2">
                {footerServices.map((s) => (
                  <li key={s.text}><a href={s.href} className="text-[13px] lg:text-[14px] text-body hover:text-teal transition-colors">{s.text}</a></li>
                ))}
              </ul>
            </div>
            {/* Column 3: Company */}
            <div>
              <h4 className="text-[15px] lg:text-[16px] font-semibold text-body-dark mb-4">SEO Agency Dublin</h4>
              <ul className="space-y-2">
                {footerCompany.map((s) => (
                  <li key={s.text}><a href={s.href} className="text-[13px] lg:text-[14px] text-body hover:text-teal transition-colors">{s.text}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[13px] lg:text-[14px] text-body">© Seo Agency Dublin , powered with love by{' '}<a href="https://phew.digital" className="text-teal hover:underline">phew.digital</a></p>
            <div className="flex items-center gap-4">
              <a href="/terms-and-conditions/" className="text-[13px] text-body hover:text-teal transition-colors">Terms & Conditions</a>
              <a href="/privacy-policy-3/" className="text-[13px] text-body hover:text-teal transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
