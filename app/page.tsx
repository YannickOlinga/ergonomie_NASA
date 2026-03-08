import { Search, User, Twitter, Instagram, ArrowRight } from 'lucide-react'
import './style.css'

export default function Home() {
  return (
    <>
      <header className="mt-0">
        <nav className="flex flex-col md:flex-row items-center pt-5 justify-between px-4 md:px-8 lg:px-12">
          <div className="explore flex items-center gap-2 md:gap-4 w-full md:w-auto mb-4 md:mb-0">
            <h2 className="font-bold text-lg md:text-xl">EXPLORE</h2>
            <input type="text" placeholder="Search" className="bg-transparent px-2 md:px-4 h-8 md:ml-4 lg:ml-10 flex-1 md:flex-none" />
          </div>
          <div className="logo mb-4 md:mb-0">
            <img src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" className="mx-auto md:ml-8 lg:ml-20" alt="Logo" width={60} height={60} />
          </div>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4 md:ml-8 lg:ml-20 justify-center md:justify-end font-bold text-sm md:text-base lg:text-xl w-full md:w-auto text-center">
            <li><a href="#" className="block py-1">New & Events</a></li>
            <li><a href="#" className="block py-1">Multimedia</a></li>
            <li><a href="#" className="block py-1">NASA+</a></li>
          </ul>
        </nav>
        <div className="text px-4 md:px-8 lg:px-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-8 md:mt-12 lg:mt-20">Total Lunar Eclipse</h1>
          <p className="text-sm md:text-base lg:text-xl font-bold mt-6 md:mt-8 lg:mt-10">A total lunar eclipse occurs when the entire Moon passes <br /> through  shadow.</p>
          <button className="bg-red-500 rounded-lg p-3 md:p-4 font-bold btn mt-6 md:mt-8 lg:mt-10 text-sm md:text-base">Your questions answered</button>
        </div>
        <div className="header-footer flex flex-col md:flex-row justify-between mt-12 md:mt-16 lg:mt-20 gap-6 md:gap-4 px-4 md:px-8 lg:px-12">
          <div className="border-t border-gray-400 w-full md:w-1/4 pt-4 md:pt-0">
            <h2 className="text-lg md:text-xl font-bold mb-2">What&apos;s up</h2>
            <a href="#" className="font-bold text-sm md:text-base flex items-center gap-2">Skywatching Tips <ArrowRight className="bg-red-500 rounded-full p-1" /></a>
          </div>
          <div className="border-t border-gray-400 w-full md:w-1/4 pt-4 md:pt-0">
            <h2 className="text-lg md:text-xl font-bold mb-2">Lunar observations</h2>
            <a href="#" className="font-bold text-sm md:text-base flex items-center gap-2">Daily Moon Guide <ArrowRight className="bg-red-500 rounded-full p-1" /></a>
          </div>
          <div className="border-t border-gray-400 w-full md:w-1/4 pt-4 md:pt-0">
            <h2 className="text-lg md:text-xl font-bold mb-2">Explore More</h2>
            <a href="#" className="font-bold text-sm md:text-base flex items-center gap-2">The moon and Eclipses <ArrowRight className="bg-red-500 rounded-full p-1" /></a>
          </div>
        </div>

      </header>
      <section className="Feature-section pt-12 md:pt-16 lg:pt-20 px-4 md:px-8 lg:px-12">
        <div className="text_div flex flex-col md:flex-row w-full justify-between items-start md:items-center mb-8 md:mb-10 lg:mb-12">
          <div className="text_un font-bold text-2xl md:text-4xl lg:text-6xl mb-4 md:mb-0">Featured News</div>
          <div className="text_deux">
            <a href="#" className="font-bold text-sm md:text-base lg:text-lg hover:underline">Recently Published</a>
          </div>
        </div>
        <div className="img_div flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="one lg:w-1/3">
            <img src="https://images-assets.nasa.gov/image/iss073e0988452/iss073e0988452~large.jpg?w=1536&h=862&fit=crop&crop=faces%2Cfocalpoint" alt="Image" className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-lg" />
          </div>
          <div className="two lg:w-1/3">
            <img src="https://images-assets.nasa.gov/image/iss073e0988458/iss073e0988458~large.jpg?w=768&h=431&fit=crop&crop=faces%2Cfocalpoint" alt="Image" className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-lg" />
          </div>
          <div className="three flex flex-col gap-4 lg:w-1/3">
            <div className="up h-24 md:h-32 lg:h-44 bg-cover bg-center rounded-lg"></div>
            <div className="down h-24 md:h-32 lg:h-44 bg-cover bg-center rounded-lg"></div>
          </div>
        </div>
       
         </section>
      <section className='bg-[url("https://www.nasa.gov/wp-content/uploads/2023/02/artemisiicrewposterorig-notext-01.jpg")] bg-cover bg-center mt-12 md:mt-16 lg:mt-20 h-64 md:h-96 lg:h-screen relative'>
        <div className="absolute inset-0  bg-opacity-40 flex  mt-120 ">
          <div className="text-center text-white px-4">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Artemis II</h2>
            <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto">The first crewed Artemis flight marks a key step toward long‑term return <br /> to the Moon and future missions to Mars.</p>
          </div>
        </div>
      </section>
    </>
  );
}
