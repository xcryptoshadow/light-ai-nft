/* eslint-disable @next/next/no-img-element */
import Navbar from '@/components/layout/Navbar';
import React from 'react';
import Hero from '@/components/layout/Hero';
import Explore from '@/components/Explore';
import Footer from '@/components/layout/Footer';

const Home = () => {
  return (
    <div className="min-w-[360px]">
      <div className="relative mx-auto bg-black">
        <div className="bg-[url('/bg-stars.png')] bg-repeat-x bg-center relative">
          <div
            className="absolute w-full h-[calc(700px)] overflow-hidden z-0"
            style={{ maxWidth: '1440px' }}
          >
            {/* <img
              alt="Cream NFT Planet"
              loading="lazy"
              width="311"
              height="311"
              decoding="async"
              data-nimg="1"
              className="relative float-right hidden min-[413px]:block animate-[spin_250s_linear_infinite] drop-shadow-[0_0_100px_rgba(255,215,163,.5)]"
              style={{
                color: 'transparent',
                width: '311px',
                marginRight: '-133px',
                top: '-44px',
              }}
              src="/planet-nft-cream.png"
            /> */}
            {/* <img
              alt="Purple NFT Planet"
              loading="lazy"
              width="308"
              height="308"
              className="relative top-[240px] float-left hidden min-[413px]:block animate-[-spin_250s_linear_infinite] drop-shadow-[0_0_100px_rgba(138,58,134,1)]"
              style={{
                color: 'transparent',
                width: '308px',
                marginLeft: '-128px',
              }}
              src="/planet-nft-purple.png"
            /> */}
          </div>
          <div>
            <Navbar />
          </div>
        </div>
        <div className="bg-[url('/bg-stars.png')]">
          <Hero />
        </div>
        <div className="mt-16">
          <Explore />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
