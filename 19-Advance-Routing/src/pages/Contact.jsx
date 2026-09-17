import React from 'react'

const Contact = () => {
  return (
    <div>
      <>
      <style>{`
        @keyframes l6 {
          100% { transform: scaleX(var(--s, 1)) rotate(360deg); }
        }
        .loader-dot::before,
        .loader-dot::after {
          content: "";
          height: 50px; /* Increased size */
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(farthest-side, #000 95%, #0000) 35% 35% / 15px 15px no-repeat, #fff;
          animation: l6 1s infinite linear;
        }
        .loader-dot::after {
          --s: -1;
          animation-delay: -0.1s;
        }
      `}</style>

      <div className="flex items-center justify-center min-h-screen w-full bg-black">
        <div className="inline-flex gap-6 loader-dot"></div>
      </div>
    </>
    </div>
  )
}

export default Contact
