import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [buttonText, setButtonText] = useState('SUBSCRIBE FOR FREE');
  const [buttonBg, setButtonBg] = useState('bg-[#e4f66a]');
  const [buttonColor, setButtonColor] = useState('text-black');
  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setButtonText('Subscribing...');
    setIsDisabled(true);

    setTimeout(() => {
      setButtonText('✓ Subscribed!');
      setButtonBg('bg-[#4caf50]');
      setButtonColor('text-white');

      setTimeout(() => {
        setButtonText('SUBSCRIBE FOR FREE');
        setButtonBg('bg-[#e4f66a]');
        setButtonColor('text-black');
        setIsDisabled(false);
        setEmail('');
      }, 2000);
    }, 1000);
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-16 flex justify-center font-['Inter',sans-serif]">
      <div className="max-w-6xl w-full px-6">
        
        {/* Top Grid Links & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-16 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              
              <li><Link to="/homepage" className="footer-link inline-block">Homepage</Link></li>
              <li><Link to="/about" className="footer-link inline-block">About</Link></li>
              <li><Link to="/episodes" className="footer-link inline-block">Episodes</Link></li>
              <li><Link to="/product" className="footer-link inline-block">Product</Link></li>
              <li><Link to="/contact" className="footer-link inline-block">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact & Legal</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="footer-link inline-block">testing@test.com</a></li>
              <li><Link to="#" className="footer-link inline-block">Privacy Policy</Link></li>
              <li><Link to="#" className="footer-link inline-block">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Join the Conversation</h3>
            <div className="flex gap-3 mt-4">
              <a href="#" className="social-btn bg-white text-black rounded-full w-9 h-9 inline-flex items-center justify-center hover:-translate-y-[3px] hover:bg-[#e4e8ec] hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)] transition-all duration-300">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="social-btn bg-white text-black rounded-full w-9 h-9 inline-flex items-center justify-center hover:-translate-y-[3px] hover:bg-[#e4e8ec] hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)] transition-all duration-300">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="social-btn bg-white text-black rounded-full w-9 h-9 inline-flex items-center justify-center hover:-translate-y-[3px] hover:bg-[#e4e8ec] hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)] transition-all duration-300">
                <i className="fab fa-twitter text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold md:w-1/2 leading-tight">
            Never Miss an Episode –<br />Join Our Community!
          </h2>
          <form className="w-full md:w-[40%] flex flex-col" onSubmit={handleSubscribe}>
            <label className="text-xs text-gray-400 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input bg-transparent border-b border-gray-500 outline-none py-2 mb-4 text-white focus:border-b-[#e4f66a] transition-colors duration-300" 
              placeholder="your@email.com" 
            />
            <button 
              type="submit" 
              disabled={isDisabled}
              className={`btn-subscribe ${buttonBg} ${buttonColor} font-bold py-4 rounded-full w-full text-xs tracking-widest hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(228,246,106,0.3)] transition-all duration-300`}
            >
              {buttonText}
            </button>
          </form>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            Copyright © 2026 | <Link to="/privacy" className="footer-link inline-block text-gray-400">Privacy Policy</Link>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;