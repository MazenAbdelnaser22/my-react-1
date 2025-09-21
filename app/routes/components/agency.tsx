const Agency = ()=>{
    return (
        <>
           <section id="Agency" className="py-16 sm:px-10 md:px-10 lg:px-26 relative overflow-hidden">
      <div className="container mx-auto  py-8 flex flex-col md:flex-row items-center gap-10">
        {/* النصوص */}
        <div className="flex-1 ">
          <h2 className="text-3xl font-bold mb-4 md:text-center pl-2 lg:text-left">
            Our <span className="text-[#e85f19]">Agency</span>
          </h2>
          <p className="text-gray-600 sm:text-center md:text-center  wrap-anywhere lg:text-left pl-2 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Perferendis placeat aliquam voluptates saepe, omnis repudiandae architecto aspernatur veniam iusto nostrum maxime facilis? Beatae, nisi quas. <br />
             Deserunt, blanditiis quos esse minus nulla dignissimos! <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.  <br />
            At numquam omnis, iure earum quasi sint. <br />
             Tenetur ducimus blanditiis enim non saepe harum laborum, amet dignissimos, nostrum, dolorum debitis quod sequi!
          </p>


          {/* الأزرار */}
          <div className="mt-8 ml-2 flex gap-4">
            <button className="bg-[#e85f19] text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
              Get Started
            </button>
        
          </div>
        </div>
        
    {/* الصورة */}
        <div className="flex-1">
          <img src="img/img3.jfif" alt="Solutions" className="w-full max-w-sm" />
        </div>
      </div>

      {/* ديكور الدواير */}
      <div className="absolute bottom-10 right-10 flex gap-2 opacity-30">
        <span className="w-3 mt-8 h-3 bg-orange-400 rounded-full"></span>
        <span className="w-3 mt-2 h-3 bg-orange-400 rounded-full"></span>
        <span className="w-3 mt-0  h-3 bg-orange-400 rounded-full"></span>
        <span className="w-3 mt-4 h-3 bg-orange-400 rounded-full"></span>
        <span className="w-3 mt-4.5-0 h-3 bg-orange-400 rounded-full"></span>
      </div>
    </section>
        </>
    );
}

export default Agency