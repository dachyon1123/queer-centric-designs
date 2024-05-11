import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

import logo from "../assets/logo.png";
import facebookLogo from "../assets/svg/facebook.svg";
import instagramLogo from "../assets/svg/instagram.svg";
import linkedinLogo from "../assets/svg/linkedin.svg";
import pinterestLogo from "../assets/svg/pinterest.svg";
import bgImage from '../assets/svg/stacked-waves-haikei.svg'

export default function Homepage() {
  return (
    <>
      <main className="flex items-center justify-evenly bg-[#FAF7EF]">
        <div className="">
          <img src={logo} alt="" className="w-[800px] h-auto" />
          <p className="text-center font-poetsen text-[#BE5D74] -translate-y-36">
            CONNECT WITH ME
          </p>
          <div className="flex justify-center items-center gap-4 mt-4 -translate-y-32">
            <img src={instagramLogo} alt="" className="" />
            <img src={pinterestLogo} alt="" className="" />
            <img src={facebookLogo} alt="" className="" />
            <img src={linkedinLogo} alt="" className="" />
          </div>
        </div>
        <section className="flex flex-col items-start gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="font-poetsen text-bold text-5xl text-[#BE5D74]">
              Find community in fiber arts
            </h2>
            <p className="max-w-[700px] font-poetsen text-[#E1A2AE] text-lg">
              If you are looking to sell your work, commission an artist,
              collaborate on a piece, or just find peers interested in fiber
              arts, then this is the right space for you. DM us to find out how
              you can become a part of the organization
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-poetsen text-bold text-3xl text-[#BE5D74]">
              OUR GOALS
            </h3>
            <p className="max-w-[600px] font-poetsen text-[#E1A2AE] text-lg">
              We are a community based business hoping to bring people together
              through our work and love of each others’ work. We aim to create a
              community center where people can come together to celebrate each
              others differences and skills. If you would like to invest in our
              goal see the QR code below.
            </p>
          </div>
        </section>
      </main>
      <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-no-repeat bg-fill bg-left">
        <div className="flex flex-col justify-center items-center">
          <div className="font-poetsen text-bold text-2xl text-[#BE5D74] mb-10 px-10 underline underline-offset-8">Featured Patterns</div>
          <Carousel />
        </div>
        <div className="flex flex-col justify-center items-center mb-20">
          <div className="font-poetsen text-bold text-2xl text-[#BE5D74] mb-10 mt-32 px-10 underline underline-offset-8">Featured Artists</div>
          <Carousel />
        </div>
      </div>
      <Footer />
    </>
  );
}
