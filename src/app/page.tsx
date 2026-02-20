'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, ReactNode } from 'react';

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
  { title: 'Social Media Marketing', desc: 'From initial contact to conversion, deliver personalized experiences that drive engagement and revenue.', img: '/images/landpress-startup-4.png', href: '/digital-marketing-agency-in-dublin/' },
  { title: 'Web Design for Local Businesses', desc: 'Increase visibility, attract more customers, and drive conversions for sustained growth and success.', img: '/images/landpress-startup-6.png', href: '/web-design-and-seo-dublin/' },
];

const bundleServices = [
  { title: 'Brand communication', desc: 'Craft compelling brand stories and messaging strategies that resonate with your audience. Strengthen brand identity, build trust, and drive engagement across all channels.' },
  { title: 'Seo strategy consultation', desc: 'Navigate the complexities of technology with our expert consultation services.' },
  { title: 'Graphic design', desc: 'Transform your brand vision into stunning visuals. From logos to marketing materials.' },
  { title: 'UI/UX product design', desc: 'Deliver exceptional user experiences with intuitive UI/UX design. Our designers combine creativity and functionality to create interactions that keep users engaged.' },
  { title: 'Product development', desc: 'Bring your ideas to life with our product development expertise. From conceptualization to launch, we guide you through every stage to create innovative solutions.' },
  { title: 'Website performance', desc: 'From updates to performance enhancements, we keep your systems running smoothly and efficiently.' },
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
  { name: 'Constantin', text: 'Great experience from start to finish. Everything was smooth and creative. The team is professional, supportive, and truly dedicated. Highly recommend!' },
  { name: 'Marius Bodor', text: 'Absolutely amazing guy, very happy with his work, good communication, very helpful and supportive, good skills, knowledgeable in everything he does, couldn\'t really ask for more... Definitely recommend without hesitation.' },
  { name: 'LadyCab Limited', text: 'I cannot recommend SEO Agency Dublin highly enough. From the very first conversation, Stephen and his team understood our vision and delivered outstanding results.' },
];

const footerServices = ['Digital Marketing Agency for Small Businesses', 'Advertising Agency', 'Local SEO Services', 'Web Design', 'Search Engine Optimization'];
const footerCompany = ['About', 'Blog', 'Contact', 'Reviews', 'Free Consultation'];

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

/* ───── Page ───── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px] lg:h-[80px]">
          <a href="/" className="flex-shrink-0">
            <Image src="/images/SEO-AGENCY.svg" alt="SEO Agency Dublin" width={180} height={60} className="h-[40px] lg:h-[50px] w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} className="text-[16px] font-medium text-body-dark hover:text-gold transition-colors">{link.text}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href="/contact/" className="px-6 py-3 text-[15px] font-medium text-white bg-teal rounded-full hover:bg-teal/90 transition-colors">Free consultation</a>
            <button className="px-6 py-3 text-[15px] font-medium text-body-dark bg-gold rounded-full hover:bg-gold/90 transition-colors">Let&apos;s connect</button>
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
              <a key={link.text} href={link.href} className="text-[16px] font-medium text-body-dark hover:text-gold transition-colors">{link.text}</a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <a href="/contact/" className="text-center px-6 py-3 text-[15px] font-medium text-white bg-teal rounded-full">Free consultation</a>
              <button className="px-6 py-3 text-[15px] font-medium text-body-dark bg-gold rounded-full">Let&apos;s connect</button>
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

      {/* CLIENT LOGOS - First Section */}
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

      {/* CLIENT LOGOS - Second Section */}
      <section className="bg-white py-10 lg:py-16">
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

      {/* SERVICES - Solutions for busy business owners */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeIn" className="mb-8 lg:mb-12">
            <h6 className="text-[14px] lg:text-[16px] font-medium text-teal mb-3">Start earning more traffic</h6>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark">
              Solutions <em className="not-italic font-semibold">for</em> busy business owners
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 100}>
                <a href={service.href} className="service-card bg-white rounded-2xl p-6 flex flex-col items-start h-full block">
                  <Image src={service.img} alt={service.title} width={280} height={200} className="w-full h-[160px] lg:h-[180px] object-contain mb-5" />
                  <h4 className="text-[16px] lg:text-[18px] font-semibold text-body-dark mb-2">{service.title}</h4>
                  <p className="text-[13px] lg:text-[14px] leading-[22px] lg:leading-[24px] text-body">{service.desc}</p>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BESPOKE BUNDLE */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeIn" className="text-center mb-10 lg:mb-14">
            <h2 className="text-[14px] lg:text-[16px] font-medium text-teal mb-3">SEO Agency Dublin</h2>
            <h3 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark mb-4">Your <em className="not-italic">bespoke</em> service bundle</h3>
            <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body max-w-[600px] mx-auto">Unlock your business&apos;s full potential with our comprehensive suite of services.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {bundleServices.map((s, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={(i % 3) * 100}>
                <div className="service-card p-6 rounded-2xl border border-gray-100 bg-white h-full">
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
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
              <li className="flex items-center gap-2 text-[14px] lg:text-[15px] text-body-dark">
                <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Enhance campaign effectiveness
              </li>
              <li className="flex items-center gap-2 text-[14px] lg:text-[15px] text-body-dark">
                <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Access comprehensive analytics
              </li>
              <li className="flex items-center gap-2 text-[14px] lg:text-[15px] text-body-dark">
                <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Improve customer targeting
              </li>
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

      {/* TESTIMONIALS */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="mb-10 lg:mb-14">
            <AnimateOnScroll animation="pulse">
              <p className="text-[13px] lg:text-[14px] font-medium text-teal mb-2">1200+ Happy Clients</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeIn" delay={100}>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark mb-4">Winning hearts and trust.<br />Customer success stories</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body max-w-[600px]">The best way to showcase our commitment is through the <a href="/clients/" className="text-teal hover:underline">experiences and stories</a> of those who have partnered with us.</p>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {googleReviews.map((r, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 100}>
                <div className="bg-cream rounded-2xl p-6 lg:p-8 relative h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-semibold text-[16px]">{r.name[0]}</div>
                    <p className="text-[15px] lg:text-[16px] font-semibold text-body-dark">{r.name}</p>
                  </div>
                  <p className="text-[13px] lg:text-[14px] leading-[22px] lg:leading-[24px] text-body mb-4">{r.text}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-gold-bright" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <div className="absolute top-6 right-6">
                    <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeIn" className="text-center mb-10 lg:mb-14">
            <p className="text-[13px] lg:text-[14px] font-medium text-teal mb-2">Flexible Pricing</p>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark mb-4">Get started. Pick a plan that suits your needs</h2>
            <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body max-w-[600px] mx-auto">Explore our flexible plans tailored to meet your needs and budget. Get started today and propel your business to new heights.</p>
          </AnimateOnScroll>
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

      {/* FAQ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <AnimateOnScroll animation="fadeIn" className="text-center mb-10 lg:mb-14">
            <p className="text-[13px] lg:text-[14px] font-medium text-teal mb-2">FAQs</p>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-body-dark mb-4">Questions? We&apos;re glad you asked</h2>
            <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-body">Here&apos;s a little more about how we operate. Got a more specific question? Feel free to get in touch.</p>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 100}>
                <details className="faq-item group bg-cream rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 lg:p-6 text-[16px] lg:text-[18px] font-medium text-body-dark">
                    {faq.q}
                    <span className="faq-icon text-2xl text-teal transition-transform">+</span>
                  </summary>
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-[14px] lg:text-[15px] leading-[24px] lg:leading-[26px] text-body">{faq.a}</div>
                </details>
              </AnimateOnScroll>
            ))}
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
                <h3 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-white mb-6 leading-[1.2]">Ready to unlock your business potential with SEO agency Dublin?</h3>
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
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-white mb-6">Let&apos;s talk about working together</h2>
              <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-white/70 mb-8">Need a quick question answered? Our support team is available to answer any queries seven days a week.</p>
              <div className="space-y-4">
                <h5 className="text-[18px] lg:text-[20px] font-semibold text-white">Contact information:</h5>
                <p className="text-[14px] lg:text-[16px] text-white/80">Email: contact@seoagencydublin.ie</p>
                <p className="text-[14px] lg:text-[16px] text-white/80">Phone: 0831227553</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200} className="lg:w-1/2 w-full">
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-5 py-3 lg:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[14px] lg:text-[15px] focus:outline-none focus:border-gold" />
                <input type="email" placeholder="Email" className="w-full px-5 py-3 lg:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[14px] lg:text-[15px] focus:outline-none focus:border-gold" />
                <input type="tel" placeholder="Phone" className="w-full px-5 py-3 lg:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[14px] lg:text-[15px] focus:outline-none focus:border-gold" />
                <textarea placeholder="Message" rows={4} className="w-full px-5 py-3 lg:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[14px] lg:text-[15px] focus:outline-none focus:border-gold resize-none" />
                <button type="submit" className="px-8 py-3 lg:py-4 text-[15px] lg:text-[16px] font-medium text-black bg-gold rounded-full hover:bg-gold/90 transition-colors">Submit</button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 lg:py-16 border-t border-gray-100">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div>
              <Image src="/images/SEO-AGENCY.svg" alt="SEO Agency Dublin" width={160} height={50} className="h-[40px] lg:h-[45px] w-auto mb-4" />
              <p className="text-[13px] lg:text-[14px] leading-[22px] lg:leading-[24px] text-body">Boost your local business in Dublin and surrounding areas with expert SEO services. Our tailored strategies enhance your online visibility, drive traffic, and improve your Google My Business profile.</p>
            </div>
            <div>
              <h3 className="text-[24px] lg:text-[28px] font-bold text-body-dark mb-4">0831227553</h3>
            </div>
            <div>
              <h4 className="text-[15px] lg:text-[16px] font-semibold text-body-dark mb-4">Services</h4>
              <ul className="space-y-2">
                {footerServices.map((s) => (<li key={s}><a href="#" className="text-[13px] lg:text-[14px] text-body hover:text-teal transition-colors">{s}</a></li>))}
              </ul>
            </div>
            <div>
              <h4 className="text-[15px] lg:text-[16px] font-semibold text-body-dark mb-4">SEO Agency Dublin</h4>
              <ul className="space-y-2">
                {footerCompany.map((s) => (<li key={s}><a href="#" className="text-[13px] lg:text-[14px] text-body hover:text-teal transition-colors">{s}</a></li>))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-[18px] lg:text-[20px] font-semibold text-body-dark">SEO Agency Dublin</h3>
            <p className="text-[13px] lg:text-[14px] text-body">© Seo Agency Dublin , powered with love by{' '}<a href="https://phew.digital" className="text-teal hover:underline">phew.digital</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
