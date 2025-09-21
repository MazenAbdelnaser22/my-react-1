const Solutions = () => {
  return (
    <section id="Solutions" className="bg-orange-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* الصورة */}
        <div className="flex-1 flex justify-center">
          <img
            src="img/img2.jfif"
            alt="Solutions"
            className="w-full max-w-sm"
          />
        </div>

        {/* الخطوات */}
        <div className="relative flex-1">
          {/* الخط العمودي */}<h1 className="text-3xl font-bold mb-4">
                    Simple <span className="text-[#e85f19]">Solutions!</span>
                </h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non expedita nostrum repellendus! Rerum, quidem quae?
                </p>
                <br />
          <div className="absolute left-[1.25rem] top-39 bottom-8 w-0.5 bg-[#e85f19]"></div>

          <div className="space-y-6 ">
            {/* خطوة */}
            <div className="flex items-start gap-4 relative">
              <div className="relative flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e85f19] text-white font-bold shadow-md relative z-10">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            {/* باقي الخطوات */}
            <div className="flex items-start gap-4 relative">
              <div className="relative flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e85f19] text-white font-bold shadow-md relative z-10">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Consult</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="relative flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e85f19] text-white font-bold shadow-md relative z-10">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Place Order</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="relative flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e85f19] text-white font-bold shadow-md relative z-10">
                  4
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Payment</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ديكور الدواير */}
      <div className="absolute bottom-10 right-10 flex gap-2 opacity-30">
        <span className="w-3 mt-8 h-3 bg-orange-400 rounded-full"></span>
        <span className="w-3 mt-2 h-3 bg-orange-400 rounded-full"></span>
        <span className="w-3 mt-0 h-3 bg-orange-400 rounded-full"></span>
        <span className="w-3 mt-4 h-3 bg-orange-400 rounded-full"></span>
        <span className="w-3 mt-2 h-3 bg-orange-400 rounded-full"></span>
      </div>
    </section>
  );
};

export default Solutions;
