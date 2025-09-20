// src/components/Testimonials.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
        <p className="text-gray-600">
          See How Our Digital Marketing Agency Helped Clients Achieve Their Goals
        </p>
      </div>

      <div className="container mx-auto px-28 py-8">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="font-semibold">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.email}</p>
                <p className="mt-4 text-gray-700">
                  "{client.company.catchPhrase}"
                </p>
                <div className="mt-3 text-yellow-500">
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
