import { useState } from "react";

import {
  RiSearchLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
  RiCheckDoubleFill,
  RiMessage2Line,
  RiMenuFill,
  RiAddLine,
  RiImage2Line,
  RiEmotionHappyLine,
  RiSendPlaneLine,
  RiMapPinLine,
  RiMore2Fill,
} from "react-icons/ri";
import { BiMicrophone } from "react-icons/bi";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="min-h-screen">
      {/*Header */}
      <header className="w-full h-[8vh] flex items-center justify-between px-8 bg-[#22222A]">
        <div>
          <img
            src="/src/assets/logo.png"
            alt=""
            className="w-50 h-10 object-cover"
          />
        </div>
        <div>
          <form className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                className="bg-[#050505] outline-none py-0 pl-4 pr-8 rounded text-gray-300"
                placeholder="Search"
              />
              <RiSearchLine className="absolute right-2 top-1 text-gray-300" />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <RiNotification3Line className="text-gray-300" />
            <span className="absolute text-white text-[10px] bg-purple-600 rounded-full font-bold  -top-2 -right-2 py-[2px]- px-[4px]">
              2
            </span>
          </div>
          {/* User */}
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt=""
              className="w-6 h-6 object-cover rounded-full ring-2 ring-white"
            />
            <RiArrowDownSLine className="text-gray-300" />
          </div>
        </div>
      </header>
      {/*Content */}
      <main className="h-[92vh] grid grid-cols-1  lg:grid-cols-8">
        {/* menu mobile */}
        <button
          onClick={toggleMenu}
          className="fixed bottom-4 right-4 bg-[#22222A] p-3 rounded-full text-white "
        >
          <RiMenuFill />
        </button>
        <section
          className={`col-span-2 bg-[#22222A] p-8 overflow-scroll overflow-x-hidden  transition-all top-0 w-[80%] h-full md:w-[50%] lg:w-full fixed ${
            showMenu ? "-left-0" : "-left-full"
          } lg:static`}
        >
          {/* Title and Search */}
          <div>
            <h1 className="text-white text-3xl mb-4">Messages</h1>
            <form className="hidden md:block mb-4">
              <div className="relative">
                <input
                  type="text"
                  className="bg-[#050505] w-full p-2 outline-none py-2 pl-4 pr-8 rounded text-gray-300"
                  placeholder="Search"
                />
                <RiSearchLine className="absolute right-2 top-3 text-gray-300" />
              </div>
            </form>
          </div>
          {/* Users */}
          <div>
            {/*User*/}
            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
                <RiCheckboxBlankCircleFill className="absolute text-green-500 -right-0 top-7 ring ring-white rounded-full" />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Killian James</h3>
                  <p className="text-green-300 text-xs">Typing...</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">4:30 PM</h3>
                  <span className="bg-red-600 text-white rounded-full -py-1 my-2 px-1 text-xs float-right">
                    2
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/mujer-pensativa-alegre-mujer-tocando-mejilla_74855-2652.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Design Team</h3>
                  <p className="text-gray-500 text-xs">Hello! Everyone</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">9:36 AM</h3>
                  <RiCheckDoubleFill className="text-blue-400 float-right" />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-usuario-emocionado-alegre-tableta-que-lleva-lentes_1262-18272.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Ahmed Medi</h3>
                  <p className="text-gray-500 text-xs">Wow really Cool 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">1:15 AM</h3>
                  <RiCheckDoubleFill className="text-blue-400 float-right" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 my-8 ">
              <RiMessage2Line className="text-gray-300" />
              <p className="text-gray-300">All messages</p>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-estilo-vida-mujer-morena-feliz-vestido-elegante-alegre-joven-divirtiendose-disfrutando-vacaciones-verano-fines-semana_273443-1585.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Claudia Maudi</h3>
                  <p className="text-green-300 text-xs">Typing...</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">4:30 PM</h3>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-madura-amable-generosa-elegante-camisa-cogidos-mano-sobre-su-pecho-sintiendose-agradecida-gran-regalo-su-cumpleanos-anciana-expresando-aprecio_343059-2871.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
                <RiCheckboxBlankCircleFill className="absolute text-green-500 -right-0 top-7 ring ring-white rounded-full" />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Novita</h3>
                  <p className="text-gray-500 text-xs">yeah, nice, design</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">4:30 PM</h3>
                  <span className="bg-red-600 text-white rounded-full -py-1 my-2 px-1 text-xs float-right">
                    2
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/persona-mayor-gesticular-aislado_23-2149193760.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Mille Nose</h3>
                  <p className="text-gray-500 text-xs">Awesome 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">4:30 PM</h3>
                  <span className="bg-red-600 text-white rounded-full -py-1 my-2 px-1 text-xs float-right">
                    1
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/hombre-muestra-promocion-presenta-nuevo-producto-expresion-segura-si-mismo-usa-gafas-jersey-informal-chaleco-muestra-espacio-blanco-gris_273609-54440.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Ahmed Medi</h3>
                  <p className="text-gray-500 text-xs">Wow really Cool 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">1:15 AM</h3>
                  <RiCheckDoubleFill className="text-blue-400 float-right" />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/fotos-premium/retrato-hombre-negocios-exitoso-seguro-traje-gris-camisa-azul-sonriendo-complacido-mirando-izquierda-pie-sobre-fondo-blanco_1258-33285.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Ahmed Medi</h3>
                  <p className="text-gray-500 text-xs">Wow really Cool 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">1:15 AM</h3>
                  <RiCheckDoubleFill className="text-blue-400 float-right" />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-usuario-emocionado-alegre-tableta-que-lleva-lentes_1262-18272.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Ahmed Medi</h3>
                  <p className="text-gray-500 text-xs">Wow really Cool 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">1:15 AM</h3>
                  <RiCheckDoubleFill className="text-blue-400 float-right" />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/psd-gratis/retrato-mujer-senior-sonriendo_23-2150115987.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Ahmed Medi</h3>
                  <p className="text-gray-500 text-xs">Wow really Cool 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">1:15 AM</h3>
                  <RiCheckDoubleFill className="text-blue-400 float-right" />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/apuesto-hombre-senior-exitoso-traje-senalando-dedo-sonriendo-descarado_176420-31768.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Ahmed Medi</h3>
                  <p className="text-gray-500 text-xs">Wow really Cool 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">1:15 AM</h3>
                  <RiCheckDoubleFill className="text-blue-400 float-right" />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/apuesto-hombre-negocios-vestido-traje-mostrando-numero-cinco-sonriendo-confiado-pie-sobre-fondo-blanco_141793-54181.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Ahmed Medi</h3>
                  <p className="text-gray-500 text-xs">Wow really Cool 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">1:15 AM</h3>
                  <RiCheckDoubleFill className="text-blue-400 float-right" />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center cursor-pointer mb-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/hombre-mantiene-brazos-cruzados-ve-expresion-alegre-segura-si-mismo-viste-camisa-formal-gafas-corregir-vision-pared-azul_273609-54788.jpg"
                  alt=""
                  className="w-12 h-10 object-cover rounded-full"
                />
              </div>
              <div className="w-full flex justify-between px-2">
                <div>
                  <h3 className="text-gray-300 font-semibold">Ahmed Medi</h3>
                  <p className="text-gray-500 text-xs">Wow really Cool 🔥</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs mb-2">1:15 AM</h3>
                  <RiCheckDoubleFill className="text-blue-400 float-right" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1E1F24] col-span-4  relative ">
          {/* header Group */}
          <div className="absolute w-full left-0 top-0  flex items-center gap-8 p-8 border-b border-gray-800">
            <div className="">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
                alt=""
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
            <div className="flex-1 flex justify-between items-center ">
              <div>
                <h1 className="text-3xl text-gray-300">Killian James</h1>
                <p className="text-gray-500">60 menbers, 10 online</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
                    alt=""
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <img
                    src="https://img.freepik.com/foto-gratis/mujer-pensativa-alegre-mujer-tocando-mejilla_74855-2652.jpg"
                    alt=""
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <img
                    src="https://img.freepik.com/foto-gratis/hombre-muestra-promocion-presenta-nuevo-producto-expresion-segura-si-mismo-usa-gafas-jersey-informal-chaleco-muestra-espacio-blanco-gris_273609-54440.jpg"
                    alt=""
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </div>
                <div>
                  <button className="bg-[#222222] p-3 text-gray-300 rounded-full">
                    <RiAddLine />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* send messages chat */}
          <div className="bg-[#22222A] absolute w-full bottom-0 p-6 ">
            <form className="relative">
              <input
                type="text"
                className="bg-[#1E1F24] py-2 pl-10 pr-28 w-full rounded-full outline-none text-gray-300"
              />
              <BiMicrophone className="absolute text-gray-300 left-4 top-3 text-xl hover:cursor-pointer" />
              {/* icon message */}
              <div className="flex justify-end gap-2 items-center text-xl text-gray-300 absolute right-4 top-3">
                <RiImage2Line className="hover:cursor-pointer" />
                <RiEmotionHappyLine className="hover:cursor-pointer" />
                <RiSendPlaneLine className="hover:cursor-pointer" />
                <RiMapPinLine className="hover:cursor-pointer" />
              </div>
            </form>
          </div>
          {/* content messages */}
          <div className="mt-32  p-8 ">
            <div className="flex justify-start gap-4 mb-4">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
                alt=""
                className="w-8 h-8 object-cover rounded-full"
              />
              <div>
                <h4 className="text-gray-300  font-semibold ">
                  Killian James
                  <span className="font-normal text-sm text-gray-500 px-8">
                    10:12 AM
                  </span>
                </h4>
                <div className="flex items-center  gap-2 ">
                  <p className="bg-[#292A30] mt-2 p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg  text-gray-200 ">
                    Hi, Are you still Web Designer
                  </p>
                  <button className="text-gray-300  mt-2">
                    <RiMore2Fill />
                  </button>
                </div>
                <div className="flex items-center justify-evenly gap-2 ">
                  <p className="bg-[#292a30] mt-2 p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg  text-gray-200 ">
                    Would love to see some desing 🙂
                  </p>
                  <button className="text-gray-300  mt-2">
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative my-8">
              <p className="text-gray-600 text-xs text-center  bg-[#1E1F24] py-1 px-4 absolute -top-[14px] ml-[50%] -translate-x-[50%] ">
                Today, March 24
              </p>
              <hr className="border-gray-600" />
            </div>
            <div className="flex justify-start gap-4 mb-4">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-madura-amable-generosa-elegante-camisa-cogidos-mano-sobre-su-pecho-sintiendose-agradecida-gran-regalo-su-cumpleanos-anciana-expresando-aprecio_343059-2871.jpg"
                alt=""
                className="w-8 h-8 object-cover rounded-full"
              />
              <div>
                <h4 className="text-gray-300  font-semibold ">
                  Novita
                  <span className="font-normal text-sm text-gray-500 px-8">
                    10:30 AM
                  </span>
                </h4>
                <div className="flex items-center gap-2 mb-2 ">
                  <p className="bg-[#292A30] mt-2 p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg  text-gray-200 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium dolor voluptatum nobis quod similique aspernatur
                    totam sint libero eaque eos quia
                  </p>
                  <button className="text-gray-300  mt-2">
                    <RiMore2Fill />
                  </button>
                </div>
                <div className="flex items-center  gap-2 mb-2 ">
                  <p className="bg-[#292a30] mt-2 p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg  text-gray-200 ">
                    Would love to see some desing 🙂
                  </p>
                  <button className="text-gray-300  mt-2">
                    <RiMore2Fill />
                  </button>
                </div>
                <div className="flex items-center  gap-2 mb-2 ">
                  <img
                    src="https://img.freepik.com/foto-gratis/joven-familia-su-pequeno-hijo-casa_1303-20993.jpg"
                    className="w-32 h-40 object-cover rounded-lg "
                  />
                  <img
                    src="https://img.freepik.com/foto-gratis/familia-joven-sus-hijos-casa-divirtiendose_1303-20999.jpg"
                    className="w-32 h-40 object-cover rounded-lg "
                  />
                  <button className="text-gray-300  mt-2">
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>


            <div className="flex justify-end gap-4 mb-4 ">
              <img
                src="https://img.freepik.com/foto-gratis/hombre-muestra-promocion-presenta-nuevo-producto-expresion-segura-si-mismo-usa-gafas-jersey-informal-chaleco-muestra-espacio-blanco-gris_273609-54440.jpg"
                alt=""
                className="w-8 h-8 object-cover rounded-full order-1"
              />
              <div>
                <h4 className="text-gray-300  font-semibolds text-right">
                  <span className="font-normal text-sm text-gray-500 px-8 ">
                    10:12 AM
                  </span>
                  Ahmed Medi
                </h4>
                <div className="flex items-center justify-end  gap-2 ">
                  <p className="bg-purple-500 mt-2 p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg  text-gray-200 order-1 ">
                    Hi, Are you still Web Designer
                  </p>
                  <button className="text-gray-300  mt-2">
                    <RiMore2Fill />
                  </button>
                </div>
                <div className="flex items-center justify-evenly gap-2 ">
                  <p className="bg-purple-500 mt-2 p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg  text-gray-200  order-1">
                    Would love to see some desing 🙂
                  </p>
                  <button className="text-gray-300  mt-2">
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
            
          </div>



          
        </section>
        <section className=" col-span-2">3</section>
      </main>
    </div>
  );
}
export default App;
//
