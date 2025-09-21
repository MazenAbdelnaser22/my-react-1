// src/components/Testimonials.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonials.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination , Autoplay} from "swiper/modules";
export interface Client {
  id: number;
  name: string;
  username: string;
  email: string;
   address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: number;
  website: string;
   company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const Testimonials = () => {
  const [clients, setClients] = useState<Client[]>([]);

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
          What <span className="text-[#e85f19]">Clients Say!</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          See How Our Digital Marketing Agency Helped Clients Achieve Their Goals
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-28 py-6">
        <Swiper
          modules={[Navigation, Pagination , Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 , disableOnInteraction: false }}
          //  loop={true}
          // speed={1000} 
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, navigation: true },
            1024: { slidesPerView: 3, navigation: true },
          }}
          observer={true} 
           observeParents={true} 
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id} className="h-full">
              <div className="bg-white shadow-lg border border-amber-50 rounded-2xl p-6 h-full max-h-[200px] flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.email}</p>
                  <p className="mt-4 line-clamp-1 text-gray-700 italic">
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
