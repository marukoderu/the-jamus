import "../assets/css/step-by-step.css";

import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const StepByStep = () => {
  const { recipeName } = useParams();

  let recipeContent;

	useEffect(() => {
        AOS.init();
        AOS.refresh();
        
        const handleScroll = (event) => {
            event.preventDefault();
      
            const horizontalScrollDistance = 400;
            const scrollAmount = event.deltaY > 0 ? horizontalScrollDistance  : -horizontalScrollDistance;
    
            window.scrollBy({
              left: scrollAmount,
              behavior: "smooth",
            });
          };
      
          window.addEventListener("wheel", handleScroll, { passive: false });
      
          return () => {
            window.removeEventListener("wheel", handleScroll);
          };
        }, []);
  
  const Divider = () => (
    <div className="divider md:py-8 p-4">
      <div className="md:border-r-2 md:border-r-white md:h-full border-b-2 border-b-white w-full"></div>
    </div>
  );

  switch (recipeName) {
    case 'beras-kencur':
    recipeContent = (
      <>
      <div id="scrollContainer" className="container-steps bg-primary flex md:flex-row flex-col">
      <Sidebar />
        <div className="title-steps flex justify-center items-center bg-primary pt-10 lg:w-1/5 w-full">
          <div className="flex flex-col md:pl-20 md:ml-10 md:pr-72 pr-0 sm:px-auto pt-14 gap-8 justify-center items-center text-white font-playfair">
            <p data-aos="fade-right" data-aos-duration="1000" className="font-neue font-normal lg:text-2xl text-lg">A step<span className="font-playfair">-</span>by<span className="font-playfair">-</span>step how to make jamu</p>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="lg:text-9xl text-7xl">BERAS</h1>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="lg:text-9xl text-7xl lg:pl-64 md:pl-64 -mt-6">KENCUR</h1>
            <p data-aos="fade-left" data-aos-duration="1000" className="font-neue font-bold lg:text-2xl text-lg tracking-wider mt-8">Scroll <span className="ornament"></span></p>
          </div>
        </div>
		    <Divider />
        
        <div className="flex md:flex-row flex-col w-full text-white">
            <div className="jamu-ingre mx-auto flex flex-col font-playfair justify-center px-10 md:my-0 my-8">
              <h1 data-aos="fade-right" data-aos-duration="1000" className="text-5xl">INGREDIENTS</h1>
              <ol data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="list-decimal mt-8 md:text-2xl text-xl text-left md:px-20">
                <li>1500 ml air</li>
                <li>150 gram gula jawa</li>
                <li>125 gram kencur</li>
                <li>50 gram beras putih</li>
                <li>5 sdm gula pasir</li>
                <li>5 ruas jahe</li>
              </ol>
            </div>
            <Divider />

            {/* Langkah 1  */}
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">1</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-64 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/bk-1.png")} alt="" className="rounded-xl mb-0" />
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">
                  Cuci bersih beras, kemudian rendam dalam air selama 1 jam. Setelah itu, sisihkan.
                </p>
              </div>
            </div>
            <Divider />

            {/* Langkah 2 */}
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">2</h1>
              </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">
                  Rebus asam jawa, gula pasir, gula merah, dan jahe dengan air sampai mendidih. Setelah itu tunggu sampai agak dingin. Saring airnya. Sisihkan.
                </p>
                <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/bk-2.png")} alt="" className="rounded-xl mb-0" />
              </div>
            </div>
            <Divider />

            {/* Langkah 3 */}
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">3</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-64 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/bk-3.png")} alt="" className="rounded-xl mb-0" />
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">
                  Cuci bersih kencur yang masih segar. Kupas kulitnya dan potong-potong.
                </p>
              </div>
            </div>
            <Divider />

            {/* Langkah 4 */}
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">4</h1>
              </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">
                  Tiriskan air rendaman beras. Blender beras, kencur, dan air rebusan gula hingga halus.
                </p>
                <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/bk-4.png")} alt="" className="rounded-xl mb-0" />
              </div>
            </div>
            <Divider />

            {/* Langkah 5 */}
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">5</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-64 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/bk-5.png")} alt="" className="rounded-xl mb-0" />
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">
                  Saring jamu beras kencur. Peras ampas blenderan sampai benar-benar kering. Sajikan jamu beras kencur.
                </p>
              </div>
            </div>
            <Divider />
        </div>
    </div>
    </>
    );
    break;
    case 'kunyit-asam':
    recipeContent = (
      <>
      <div id="scrollContainer" className="container-steps bg-primary flex md:flex-row flex-col">
      <Sidebar />
        <div className="title-steps flex justify-center items-center bg-primary pt-10 lg:w-1/5 w-full">
          <div className="flex flex-col md:pl-20 md:ml-10 md:pr-72 pr-0 sm:px-auto pt-14 gap-8 justify-center items-center text-white font-playfair">
            <p data-aos="fade-right" data-aos-duration="1000" className="font-neue font-normal lg:text-2xl text-lg">A step<span className="font-playfair">-</span>by<span className="font-playfair">-</span>step how to make jamu</p>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="lg:text-9xl text-7xl">KUNYIT</h1>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="lg:text-9xl text-7xl md:pl-56 -mt-6">ASAM</h1>
            <p data-aos="fade-left" data-aos-duration="1000" className="font-neue font-bold lg:text-2xl text-lg tracking-wider mt-8">Scroll <span className="ornament"></span></p>
          </div>
        </div>
		    <Divider />
        
        <div className="flex md:flex-row flex-col w-full text-white">
        <div className="jamu-ingre mx-auto flex flex-col font-playfair justify-center px-10 md:my-0 my-8">
          <h1 data-aos="fade-right" data-aos-duration="1000" className="text-5xl">INGREDIENTS</h1>
          <ol data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="list-decimal mt-8 md:text-2xl text-xl text-left md:px-20">
            <li>500 ml air</li>
            <li>1 jari telunjuk kunyit</li>
            <li>40 gram gula aren</li>
            <li>20 gram asam jawa</li>
            <li>2 jumput garam</li>
            <li>2 sdm madu</li>
          </ol>
        </div>
        <Divider />


            {/* Langkah 1  */}
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">1</h1>
              </div>
              <div className="flex flex-col px-12 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/ka-1.png")} alt="" className="rounded-xl mb-0 lg:w-[700px]" />
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">
                  Kunyit yang sudah dicuci bersih, diparut. Disisihkan.
                </p>
              </div>
            </div>
            <Divider />

            {/* Langkah 2 */}
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">2</h1>
              </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">
                Didihkan air. Masukkan gula, asam, dan garam. Masak hingga semua bahan larut.
                </p>
                <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/ka-2.png")} alt="" className="rounded-xl mb-0" />
              </div>
            </div>
            <Divider />

            {/* Langkah 3 */}
              <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">3</h1>
              </div>
              <div className="flex flex-col px-12 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/ka-3.png")} alt="" className="rounded-xl mb-0 lg:w-[700px]" />
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">
                Masukkan kunyit parut ke rebusan. Aduk rata.
                </p>
              </div>
            </div>
            <Divider />

            {/* Langkah 4 */}
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">4</h1>
              </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-64 gap-12">
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">
                Saring jamu kunyit asam. Tambahkan madu.
                </p>
                <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/ka-4.png")} alt="" className="rounded-xl lg:w-[700px]" />
              </div>
            </div>
            <Divider />

            {/* Langkah 5 */}
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">5</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-64 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/ka-5.png")} alt="" className="rounded-xl mb-0" />
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">
                Setelah uap panasnya hilang, bisa disimpan di dalam kulkas. Bisa dinikmati juga dengan es batu.
                </p>
              </div>
            </div>
            <Divider />
      </div>
      </div>
    </>
    );
    break;
    case 'temulawak':
    recipeContent = (
      <>
      <div id="scrollContainer" className="container-steps bg-primary flex md:flex-row flex-col">
      <Sidebar />
        <div className="title-steps flex justify-center items-center bg-primary pt-10 lg:w-1/5 w-full">
          <div className="flex flex-col md:pl-20 md:ml-10 md:pr-72 pr-0 sm:px-auto pt-14 gap-8 justify-center items-center text-white font-playfair">
            <p data-aos="fade-right" data-aos-duration="1000" className="font-neue font-normal lg:text-2xl text-lg">A step<span className="font-playfair">-</span>by<span className="font-playfair">-</span>step how to make jamu</p>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="lg:text-8xl text-6xl md:ml-52">TEMULAWAK</h1>
            <p data-aos="fade-left" data-aos-duration="1000" className="font-neue font-bold lg:text-2xl text-lg tracking-wider mt-8">Scroll <span className="ornament"></span></p>
          </div>
        </div>
		    <Divider />
        
        <div className="flex md:flex-row flex-col w-full text-white">
        <div className="jamu-ingre mx-auto flex flex-col font-playfair justify-center px-10 md:my-0 my-8">
          <h1 data-aos="fade-right" data-aos-duration="1000" className="text-5xl">INGREDIENTS</h1>
          <ol data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="list-decimal mt-8 md:text-2xl text-xl text-left md:px-20">
            <li>2 liter air</li>
            <li>400 gram gula aren</li>
            <li>200 gram kencur</li>
            <li>200 gram kunyit</li>
            <li>200 gram temulawak</li>
            <li>200 gram lempuyang</li>
          </ol>
        </div>
        <Divider />

        {/* Langkah 1 */}
        <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">1</h1>
              </div>
              <div className="flex flex-col px-12 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/te-1.png")} alt="" className="rounded-xl mb-0 lg:w-[700px]" />
                <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">
                Kupas temulawak, jahe dan kunyit kemudian iris tipis-tipis.
                </p>
              </div>
            </div>
            <Divider />

        {/* Langkah 2 */}
        <div className="jamu-steps mx-auto flex md:flex-row flex-col">
          <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
            <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">2</h1>
          </div>
          <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
            <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">
            Masukan sere geprek dan kayu manis
            </p>
            <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/te-2.png")} alt="" className="rounded-xl mb-0 md:min-w-[800px]" />
          </div>
        </div>
        <Divider />

        {/* Langkah 3 */}
        <div className="jamu-steps mx-auto flex md:flex-row flex-col">
          <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
            <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">3</h1>
          </div>
          <div className="flex flex-col px-12 lg:-mt-20 gap-12">
            <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/te-3.png")} alt="" className="rounded-xl mb-0 md:min-w-[800px]" />
            <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">
            Masukan gula merah dan garam
            </p>
          </div>
        </div>
        <Divider />

        {/* Langkah 4 */}
        <div className="jamu-steps mx-auto flex md:flex-row flex-col">
          <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
            <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">4</h1>
          </div>
          <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
            <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">
            Masukan air dan asam Jawa. Rebus semua bahan sampai mendidih, koreksi rasa jika kurang manis bisa ditambahkan gula merah/gula pasir
            </p>
            <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/te-4.png")} alt="" className="rounded-xl mb-0" />
          </div>
        </div>
        <Divider />

        {/* Langkah 5 */}
        <div className="jamu-steps mx-auto flex md:flex-row flex-col">
          <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
            <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">5</h1>
          </div>
          <div className="flex flex-col px-12 lg:-mt-64 gap-12">
            <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/te-5.png")} alt="" className="rounded-xl mb-0" />
            <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">
            Setelah mendidih tambahkan merebus 10 menit. Matikan kompor dan saring sebelum disajikan. Dinikmati hangat atau dingin lebih enak.
            </p>
          </div>
        </div>
        <Divider />
      </div>

      </div>
    </>
    );
    break;
    case 'empon-empon':
    recipeContent = (
      <>
      <div id="scrollContainer" className="container-steps bg-primary flex md:flex-row flex-col">
      <Sidebar />
        <div className="title-steps flex justify-center items-center bg-primary pt-10 lg:w-1/5 w-full">
          <div className="flex flex-col md:pl-20 md:ml-10 md:pr-72 pr-0 sm:px-auto pt-14 gap-8 justify-center items-center text-white font-playfair">
            <p data-aos="fade-right" data-aos-duration="1000" className="font-neue font-normal lg:text-2xl text-lg">A step<span className="font-playfair">-</span>by<span className="font-playfair">-</span>  step how to make jamu</p>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="lg:text-9xl text-7xl">EMPON</h1>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="lg:text-9xl text-7xl lg:pl-64 md:pl-64 -mt-6">EMPON</h1>
            <p data-aos="fade-left" data-aos-duration="1000" className="font-neue font-bold lg:text-2xl text-lg tracking-wider mt-8">Scroll <span className="ornament"></span></p>
          </div>
        </div>
		    <Divider />
        
        <div className="flex md:flex-row flex-col w-full text-white">
        <div className="jamu-ingre mx-auto flex flex-col font-playfair justify-center px-10 md:my-0 my-8">
              <h1 data-aos="fade-right" data-aos-duration="1000" className="text-5xl">INGREDIENTS</h1>
              <ol data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="list-decimal mt-8 md:text-2xl text-xl text-left md:px-20">
                <li>300 gram jahe</li>
                <li>200 gram temulawak</li>
                <li>Kencur secukupnya</li>
                <li>Kunyit secukupnya</li>
                <li>2 lembar daun pandan</li>
                <li>4 batang serai</li>
                <li>4 batang kayu manis</li>
                <li>300 mL air</li>
                <li>2 buah gula merah, hancurkan atau iris tipis</li>
              </ol>
            </div>
            <Divider />
          <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">1</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-36 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/te-2.png")} alt="" className="rounded-xl mb-0" />
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">Bersihkan semua bahan. Iris jahe, temulawak, kencur, dan kunyit. Serai cukup digeprek sedikit.</p>
              </div>
            </div>
            <Divider />
          <div className="jamu-steps mx-auto flex md:flex-row flex-col">
                <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">2</h1>
                </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">Masukkan semua bahan ke dalam panci, lalu rebus hingga mendidih.</p>
                  <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/mp-2.png")} alt="" className="rounded-xl mb-0" />
              </div>
          </div>
            <Divider />
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">3</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-33 gap-12">
                  <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/mp-3.png")} alt="" className="rounded-xl mb-0" />
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">Matikan api, lalu diamkan sejenak hingga semua bahan meresap.</p>
              </div>
            </div>
            <Divider />
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
                <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">4</h1>
                </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">Tuang empon empon ke dalam gelas. Gunakan saringan untuk memisahkan jamu dari ampas rimpangnya. Sajikan selagi hangat.</p>
                  <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/mp-4.png")} alt="" className="rounded-xl mb-0" />
              </div>
          </div>
            <Divider />
        </div>
      </div>
    </>
    );
    break;
    case 'brontowali':
    recipeContent = (
      <>
      <div id="scrollContainer" className="container-steps bg-primary flex md:flex-row flex-col">
      <Sidebar />
        <div className="title-steps flex justify-center items-center bg-primary pt-10 lg:w-1/5 w-full">
          <div className="flex flex-col md:pl-20 md:ml-10 md:pr-72 pr-0 sm:px-auto pt-14 gap-8 justify-center items-center text-white font-playfair">
            <p data-aos="fade-right" data-aos-duration="1000" className="font-neue font-normal lg:text-2xl text-lg">A step<span className="font-playfair">-</span>by<span className="font-playfair">-</span>  step how to make jamu</p>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="lg:text-8xl text-5xl md:ml-52">BRONTOWALI</h1>
            <p data-aos="fade-left" data-aos-duration="1000" className="font-neue font-bold lg:text-2xl text-lg tracking-wider mt-8">Scroll <span className="ornament"></span></p>
          </div>
        </div>
		    <Divider />
        
        <div className="flex md:flex-row flex-col w-full text-white">
        <div className="jamu-ingre mx-auto flex flex-col font-playfair justify-center px-10 md:my-0 my-8">
              <h1 data-aos="fade-right" data-aos-duration="1000" className="text-5xl">INGREDIENTS</h1>
              <ol data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="list-decimal mt-8 md:text-2xl text-xl text-left md:px-20">
                <li>1/4 kilogram Sambiloto</li>
                <li>1 batang brotowali</li>
                <li>125 gram kencur</li>
                <li>1 genggam akar alang-alang</li>
                <li>1 genggam ceplik sari</li>
                <li>3 liter air</li>
              </ol>
            </div>
            <Divider />
          <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">1</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-32 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/br-1.png")} alt="" className="rounded-xl mb-0" />
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">Cuci bersih semua bahan jamu brotowali, termasuk brotowali itu sendiri, hingga benar-benar bersih.</p>
              </div>
            </div>
            <Divider />
          <div className="jamu-steps mx-auto flex md:flex-row flex-col">
                <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">2</h1>
                </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">Masukkan bahan yang sudah dicuci ke dalam panci yang telah diisi dengan air secukupnya. Nyalakan api dan biarkan air mendidih.</p>
                  <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/br-2.png")} alt="" className="rounded-xl mb-0" />
              </div>
          </div>
            <Divider />
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">3</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-64 gap-12">
                  <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/ka-3.png")} alt="" className="rounded-xl mb-0" />
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">Rebus semua bahan dalam panci hingga mendidih. Pertahankan intensitas api agar bahan-bahan benar-benar direbus dengan baik.</p>
              </div>
            </div>
            <Divider />
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">4</h1>
              </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">    Setelah proses merebus selesai, saring cairan hasil rebusan untuk memisahkan ampas atau serpihan bahan yang tidak larut. Gunakan saringan atau kain bersih untuk melakukan penyaringan.</p>
                  <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/br-3.png")} alt="" className="rounded-xl mb-0" />
              </div>
           </div>
            <Divider />
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">5</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-32 gap-12">
                  <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/brontowali.png")} alt="" className="rounded-xl mb-0" />
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">    Dinginkan cairan jamu brotowali yang sudah disaring hingga mencapai suhu yang nyaman. Sajikan dalam gelas atau wadah bersih. Jamu brotowali yang telah disiapkan sekarang siap untuk diminum.</p>
              </div>
            </div>
            <Divider />
        </div>
      </div>
    </>
    );
    break;
    default:
      recipeContent = (
        <>
      <div id="scrollContainer" className="container-steps bg-primary flex md:flex-row flex-col">
      <Sidebar />
        <div className="title-steps flex justify-center items-center bg-primary pt-10 lg:w-1/5 w-full">
          <div className="flex flex-col md:pl-20 md:ml-10 md:pr-72 pr-0 sm:px-auto justify-center items-center text-white font-playfair">
            <p data-aos="fade-right" data-aos-duration="1000" className="font-normal text-5xl">Resep tidak ditemukan:(</p>
          </div>
        </div>
		    <Divider />
      </div>
      </>
      )
  }
  

  return (
    <>
      {recipeContent}
    </>
  );
  
};