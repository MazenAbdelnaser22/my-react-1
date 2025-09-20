const Services = () => {
    return (
        <>
            {/* titel*/}
            <div id="Services" className="text-center max-w-2xl mx-auto px-8 pt-2">
                <h1 className="text-3xl font-bold mb-4">
                    We Provide The Best <span className="text-orange-500">Services</span>
                </h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non expedita nostrum repellendus! Rerum, quidem quae?
                </p>
            </div>

            {/* الكروت */}
            <div className="container mx-auto sm:px-10 md:px-10 lg:px-26 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">

                    {/* كرت 1 */}
                    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition relative">
                        {/* الأيقونة فوق شمال */}
                        <div className="absolute -top-2 -left-0 w-14 h-14 flex items-center justify-center rounded-br-2xl bg-yellow-100 shadow-md">
                            <span className="text-yellow-500 text-2xl">🔍</span>
                        </div>

                        {/* النصوص */}
                        <h3 className="text-lg font-semibold mt-10 mb-2">Seo/SEM</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                             Lorem ipsum dolor sit amet.
                        </p>
                    </div>


                    {/* كرت 2 */}
                       <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition relative">
                        <div className="absolute -top-2 -left-0 w-14 h-14 flex text-green-600 items-center justify-center rounded-br-2xl bg-purple-100 mb-4 shadow-md">
                            <span className="text-green-600 text-2xl">📢</span>
                        </div>
                        <h3 className="text-lg font-semibold mt-10 mb-2">Viral Campaign</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
            

                    {/* كرت 3 */}
                         <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition relative">
                        <div className="absolute -top-2 -left-0 w-14 h-14 flex items-center justify-center rounded-br-2xl bg-yellow-100 shadow-md">
                            <span className=" text-purple-500 text-2xl">📈</span>
                        </div>
                        <h3 className="text-lg font-semibold mt-10 mb-2">Marketing</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                             Lorem ipsum dolor sit amet.
                        </p>
                    </div>

                    {/* كرت 4 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition relative">
                        <div className="absolute -top-2 -left-0 w-14 h-14 flex items-center justify-center rounded-br-2xl bg-red-100 mb-4 shadow-md">
                            <span className="text-red-500 text-2xl">⚙️</span>
                        </div>
                        <h3 className="text-lg font-semibold mt-10 mb-2">Others</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                             Lorem ipsum dolor sit amet.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Services;
