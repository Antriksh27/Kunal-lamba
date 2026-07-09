import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Contact - Kunal Lamba',
  description: 'Get in touch with Kunal Lamba for catering, consulting, TV, and singing inquiries.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-onyx min-h-screen text-alabaster pt-32 pb-20">
      <Section className="relative z-10 w-full overflow-hidden">
        {/* Gritty Noise Overlay */}
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        
        <Container className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading and Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="font-body text-[#BFFF00] uppercase tracking-[0.2em] font-semibold mb-3 block px-3 py-1 bg-[#BFFF00]/10 border border-[#BFFF00]/20 rounded-sm w-max">
                Let&apos;s Connect
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black italic tracking-wide text-alabaster uppercase mb-6 leading-tight">
                Start a Conversation.
              </h1>
              <p className="font-body text-alabaster/70 text-base leading-relaxed max-w-lg">
                Whether you&apos;re planning an elite catering event, looking for restaurant consulting, or interested in live singing performances and broadcast collaborations, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-alabaster/10">
              {/* Direct Contact */}
              <div className="flex flex-col space-y-2">
                <span className="font-body text-xs text-alabaster/50 uppercase tracking-widest">Direct Inquiries</span>
                <a href="mailto:kunal@kunallamba.com" className="font-body text-lg font-bold text-[#BFFF00] hover:text-alabaster transition-colors">
                  kunal@kunallamba.com
                </a>
              </div>

              {/* Socials or other info can go here */}
              <div className="flex flex-col space-y-2">
                <span className="font-body text-xs text-alabaster/50 uppercase tracking-widest">Follow</span>
                <div className="flex items-center space-x-4">
                  <a href="#" className="font-body text-sm font-semibold text-alabaster/80 hover:text-[#BFFF00] transition-colors uppercase tracking-wider">Instagram</a>
                  <a href="#" className="font-body text-sm font-semibold text-alabaster/80 hover:text-[#BFFF00] transition-colors uppercase tracking-wider">LinkedIn</a>
                  <a href="#" className="font-body text-sm font-semibold text-alabaster/80 hover:text-[#BFFF00] transition-colors uppercase tracking-wider">YouTube</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2 bg-alabaster/5 backdrop-blur-sm border border-alabaster/10 rounded-sm p-8 md:p-10 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="font-body text-xs font-semibold text-alabaster/70 uppercase tracking-widest">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-onyx border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-[#BFFF00] focus:ring-1 focus:ring-[#BFFF00] transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="font-body text-xs font-semibold text-alabaster/70 uppercase tracking-widest">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-onyx border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-[#BFFF00] focus:ring-1 focus:ring-[#BFFF00] transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-body text-xs font-semibold text-alabaster/70 uppercase tracking-widest">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-onyx border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-[#BFFF00] focus:ring-1 focus:ring-[#BFFF00] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="font-body text-xs font-semibold text-alabaster/70 uppercase tracking-widest">
                  Area of Interest
                </label>
                <select 
                  id="interest" 
                  className="w-full bg-onyx border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-[#BFFF00] focus:ring-1 focus:ring-[#BFFF00] transition-all appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select an option</option>
                  <option value="catering">Catering & Events</option>
                  <option value="consulting">Restaurant Consulting</option>
                  <option value="singing">Live Singing Performance</option>
                  <option value="tv">TV / Broadcast / Media</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-body text-xs font-semibold text-alabaster/70 uppercase tracking-widest">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-onyx border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-[#BFFF00] focus:ring-1 focus:ring-[#BFFF00] transition-all resize-none"
                  placeholder="Tell us about your event, project, or inquiry..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full inline-flex items-center justify-center font-body font-bold transition-all duration-300 rounded-sm px-8 py-4 text-sm uppercase tracking-[0.2em] border border-[#BFFF00]/50 text-[#BFFF00] hover:bg-[#BFFF00] hover:text-onyx active:scale-95 shadow-xl mt-4 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </div>
  );
}
