import React, { useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
  useEffect(() => {
    // Intro scroll/load animation
    gsap.from(".card", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });

    // 3D Tilt Effect
    const card = document.querySelector(".card");
    const handleMouseMove = (e) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        rotateY: x / 20,
        rotateX: -y / 20,
        duration: 0.4,
        ease: "power3.out"
      });
    };

    const handleMouseLeave = () => {
      if (!card) return;
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Ambient Float for Avatar
    gsap.to(".avatar", {
      y: -6,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf([".card", ".avatar"]);
    };
  }, []);

  // Toggle View State
  const handleToggle = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((sec) => sec.classList.toggle("active"));
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="scene" style={{ perspective: '1200px' }}>
        <article className="card w-[min(92vw,440px)] p-[2.6rem] bg-[linear-gradient(180deg,hsl(0_0%_100%/0.05),transparent_35%)] bg-[hsl(230,18%,11%)] rounded-[26px] border border-[hsl(0,0%,100%/0.08)] backdrop-blur-[20px] shadow-[0_0_80px_hsl(190,90%,55%/0.18)] transform-style-3d relative transition-transform duration-[150ms] ease-out">
          
          {/* Avatar with Custom Professional Photo */}
          <div className="avatar w-24 h-24 rounded-full overflow-hidden mb-[1.2rem] border-2 border-[hsl(0,0%,100%/0.15)] shadow-[0_0_30px_hsl(190,90%,55%/0.4)] translate-z-[40px]">
            <img 
              src="https://images.unsplash.com/photo-1772371272228-f4a8247cfe6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnRvb24lMjBwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="role text-[0.7rem] tracking-[0.25em] uppercase text-[hsl(190,95%,55%)]">
            Frontend & React Developer
          </div>
          
          <h1 className="name font-['Zalando_Sans_Expanded',sans-serif] text-[clamp(1.8rem,4vw,2.4rem)] my-[0.3rem] bg-[linear-gradient(90deg,#00f260,#0575e6,#7f00ff,#ff6a00)] bg-[size:300%_300%] animate-[gradientMove_6s_ease_infinite] [-webkit-background-clip:text] background-clip-text text-transparent">
            Sumit Kumar
          </h1>
          
          <p className="tagline text-[hsl(220,10%,65%)] text-[0.95rem]">
            Building scalable web apps, modern UI & clean React components
          </p>

          <section className="section about active mt-[1.8rem] leading-[1.7] text-[hsl(220,10%,65%)]">
            Passionate Web Developer specializing in React, Tailwind CSS, and interactive UI design. 
            I focus on turning complex designs into seamless, high-performance digital experiences with crisp component architectures.
          </section>

          <section className="section details mt-[1.8rem] hidden">
            <div className="skills flex flex-wrap gap-[0.6rem]">
              <span className="skill px-[0.45rem] py-[0.8rem] text-[0.75rem] rounded-full bg-[hsl(0,0%,100%/0.06)] border border-[hsl(0,0%,100%/0.08)] cursor-pointer hover:bg-[hsl(190,90%,55%/0.2)] hover:-translate-y-[2px] transition-all duration-300">React.js</span>
              <span className="skill px-[0.45rem] py-[0.8rem] text-[0.75rem] rounded-full bg-[hsl(0,0%,100%/0.06)] border border-[hsl(0,0%,100%/0.08)] cursor-pointer hover:bg-[hsl(190,90%,55%/0.2)] hover:-translate-y-[2px] transition-all duration-300">Tailwind CSS</span>
              <span className="skill px-[0.45rem] py-[0.8rem] text-[0.75rem] rounded-full bg-[hsl(0,0%,100%/0.06)] border border-[hsl(0,0%,100%/0.08)] cursor-pointer hover:bg-[hsl(190,90%,55%/0.2)] hover:-translate-y-[2px] transition-all duration-300">JavaScript (ES6+)</span>
              <span className="skill px-[0.45rem] py-[0.8rem] text-[0.75rem] rounded-full bg-[hsl(0,0%,100%/0.06)] border border-[hsl(0,0%,100%/0.08)] cursor-pointer hover:bg-[hsl(190,90%,55%/0.2)] hover:-translate-y-[2px] transition-all duration-300">GSAP Motion</span>
              <span className="skill px-[0.45rem] py-[0.8rem] text-[0.75rem] rounded-full bg-[hsl(0,0%,100%/0.06)] border border-[hsl(0,0%,100%/0.08)] cursor-pointer hover:bg-[hsl(190,90%,55%/0.2)] hover:-translate-y-[2px] transition-all duration-300">UI/UX Design</span>
            </div>
          </section>

          <footer className="footer mt-[2rem] flex justify-between items-center">
            <div className="status flex items-center gap-[0.4rem] text-[0.7rem] text-[hsl(220,10%,65%)]">
              <span className="dot w-[8px] h-[8px] bg-[hsl(190,95%,55%)] rounded-full shadow-[0_0_12px_hsl(190,95%,55%)]"></span> Available
            </div>
            <div 
              className="toggle cursor-pointer text-[0.7rem] tracking-[0.15em] uppercase text-[hsl(190,95%,55%)] hover:underline"
              onClick={handleToggle}
            >
              Toggle View
            </div>
          </footer>

        </article>
      </div>
    </div>
  );
};

export default About;