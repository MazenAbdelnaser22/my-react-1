// src/components/Testimonials.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="Testimonials" className="bg-white py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          What <span className="text-orange-500">Clients Say!</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          See How Our Digital Marketing Agency Helped Clients Achieve Their Goals
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-28 py-6">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ enabled: true }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, navigation: true },
            1024: { slidesPerView: 3, navigation: true },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-white shadow-lg border border-amber-50 rounded-2xl p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.email}</p>
                  <p className="mt-4 text-gray-700 italic">
                    "{client.company.catchPhrase}"
                  </p>
                </div>
                <div className="mt-4 text-yellow-500">
                  {"⭐".repeat(Math.floor(Math.random() * 5) + 1)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
