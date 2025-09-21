

export default function Slider() {
    return(
        <>
        <div className="slider h-full pt-20">
    {/* <!-- Decorative Circles --> */}
<div className="circles">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

    <div className="container mx-auto sm:px-10 md:px-10 lg:px-26 py-8 h-full ">
  <div className="flex flex-col-reverse md:flex-row items-center gap-8">
    
    {/* النصوص */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-4">
        We create <br /><span className="text-[#e85f19]">solutions</span> 
        for  <br /> your business
      </h1>
      <p className="text-gray-600 mb-6">
        Our team keeps a keen eye on emerging trends and technologies 
        to ensure your marketing campaigns remain cutting-edge Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex px-3 sm:flex-row gap-4 justify-between md:justify-start">
        <button className="bg-[#e85f19] text-white px-6 py-3 rounded-lg  hover:bg-orange-600 transition">
          Get Started
        </button> 
        <button className="flex items-center gap-2 text-gray-700 font-medium">
          <span>Explore more</span>
          <svg xmlns="http://www.w3.org/2000/svg" 
               fill="none" 
               viewBox="0 0 24 24" 
               strokeWidth={2} 
               stroke="currentColor" 
               className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>

    {/* الصورة */}
    <div className="flex-1 flex justify-center">
      <img src="img/img1.jfif" alt="Hero" className="w-full max-w-md" />
    </div>
  </div>
</div>

        {/* <!-- Decorative Circles --> */}
<div className="circles2">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</div>

        </>
    )
}
