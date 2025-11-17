import React from 'react';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="Strich1">
        <div className="Strich2">
          <div className="bubble" />
          <div className="bubble1" />
          <div className="bubble2" />
          <div className="bubble3" />
          <div className="bubble4" />
        </div>
      </div>
      <style jsx>{`
        @keyframes dropAndShift {
          0% { transform: translate(0px, 15px); }
          16.67% { transform: translate(80px, 13px); }
          33.34% { transform: translate(40px, 10px); }
          50.01% { transform: translate(40px, -30px); }
          66.68% { transform: translate(40px, 55px); }
          83.35% { transform: translate(40px, 10px); }
          100% { transform: translate(0px, 15px); }
        }

        .loader-wrapper {
          position: relative;
          width: 130px;
          height: 130px;
        }

        .Strich1 {
          position: absolute;
          width: 130px;
          height: 50px;
          background: #2d5f2e;
          border-radius: 25px;
          transform: rotate(45deg);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          z-index: 0;
        }

        .Strich2 {
          position: absolute;
          width: 130px;
          height: 50px;
          background: #1e4620;
          border-radius: 25px;
          transform: rotate(-90deg);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          z-index: 0;
        }

        .bubble {
          position: absolute;
          top: 0;
          left: 15px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ffb3c1, #e64980, #ff8787);
          animation: dropAndShift 5s ease-in-out infinite;
          z-index: 1;
        }

        .bubble1 {
          position: absolute;
          top: 0;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle at 30% 30%, #edb3ff, #ac49e6, #fb87ff);
          border-radius: 50%;
          left: 8px;
          animation: dropAndShift 6s ease-in-out infinite;
          z-index: 2;
        }

        .bubble2 {
          position: absolute;
          top: 0;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle at 30% 30%, #b3d8ff, #4963e6, #87a7ff);
          border-radius: 50%;
          left: 12px;
          animation: dropAndShift 4s ease-in-out infinite;
          z-index: 3;
        }

        .bubble3 {
          position: absolute;
          top: 0;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle at 30% 30%, #b3ffbc, #35a32f, #75ba61);
          border-radius: 50%;
          left: 10px;
          animation: dropAndShift 7s ease-in-out infinite;
          z-index: 4;
        }

        .bubble4 {
          position: absolute;
          top: 0;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle at 30% 30%, #f6ddab, #d4af37, #f6ddab);
          border-radius: 50%;
          left: 14px;
          animation: dropAndShift 3s ease-in-out infinite;
          z-index: 5;
        }
      `}</style>
    </div>
  );
};

export default Loader;