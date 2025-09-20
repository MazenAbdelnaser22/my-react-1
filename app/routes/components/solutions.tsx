const Solutions = () => {
  return (
    <section id="Solutions" className="bg-orange-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* الصورة */}
        <div className="flex-1 flex justify-center">
          <img src="img/img2.jfif" alt="Solutions" className="w-full max-w-sm" />
        </div>

        {/* النصوص */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Simple <span className="text-orange-500">Solutions!</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis placeat aliquam voluptates saepe, omnis repudiandae architecto aspernatur veniam iusto nostrum maxime facilis? Beatae, nisi quas. Deserunt, blanditiis quos esse minus nulla dignissimos!
          </p>

          {/* الخطوات */}
          <div className="space-y-6">
            {/* خطوة */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold shadow-md">
                1
              </span>
              <div>
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold shadow-md">
                2
              </span>
              <div>
                <h3 className="text-lg font-semibold">Consult</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold shadow-md">
                3
              </span>
              <div>
                <h3 className="text-lg font-semibold">Place Order</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold shadow-md">
                4
              </span>
              <div>
                <h3 className="text-lg font-semibold">Payment</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          {/* الأزرار */}
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
              Get Started
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition">
              Read more
            </button>
          </div>
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
  );
};

export default Solutions;
