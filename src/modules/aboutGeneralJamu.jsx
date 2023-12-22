import "../assets/css/aboutGeneralJamu.css";
import { useEffect, useRef } from "react";
import { Sidebar } from "../components/sidebar";
import { TweenMax, Power3 } from "gsap";

export const AboutGeneralJamus = () => {
  let img_jamus_1 = useRef(null);
  let about_jamu_detail = useRef(null);
  let title = useRef(null);
  let title2 = useRef(null);
  let desc = useRef(null)
  let img_jamus_2 = useRef(null);

  useEffect(() => {
    // Animation for img_jamus_1
    TweenMax.to(img_jamus_1, 0.8, {
      opacity: 1,
      y: 10,
      delay: 0.5,
      ease: Power3.easeOut,
    });
    TweenMax.to(img_jamus_2, 0.8, {
      opacity: 1,
      y: 10,
      delay: 0.5,
      ease: Power3.easeOut,
    });

    // Animation for about_jamu_detail
    TweenMax.to(about_jamu_detail, 0.8, {
      opacity: 1,
      y: 10,
      ease: Power3.easeOut,
    });

    TweenMax.to(desc, 0.8, {
      opacity: 1,
      y: 10,
      delay: 1,
      ease: Power3.easeOut,
    });

    // Animation for about_manfaat_jamu
    TweenMax.to(title, 0.8, { opacity: 1, y: 10, ease: Power3.easeOut });
    TweenMax.to(title2, 0.8, { opacity: 1, y: 10, ease: Power3.easeOut });

    const handleScroll = (event) => {
      event.preventDefault();

      const horizontalScrollDistance = 400;
      const scrollAmount =
        event.deltaY > 0 ? horizontalScrollDistance : -horizontalScrollDistance;

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

  return (
    <div id="scrollContainer" className="mainContainer  ">
      <Sidebar />
      <div className="contatainerLeft w-screen h-screen flex flex-col max-[768px]:flex-col-reverse   lg:ml-32 sm:ml-0 md:ml-32 ">
        <div className=" containerAtas max-[768px]:h-max lg:h-auto jamu-img flex max-[768px]:flex-col max-[768px]:p-8   gap-3 flex-1">
          <div
            className="img-1 w-full border-solid border-2 border-black  p-2 rounded-2xl translate-y-40 opacity-0"
            ref={(el) => {
              img_jamus_1 = el;
            }}
          >
            <img
              className="w-full h-full"
              src={require("../assets/img/jamus-3.png")}
              alt=""
            />
          </div>
          <div
            className="img-2 w-full border-solid border-2 border-black  p-2 rounded-2xl rotate-180 translate-y-40 opacity-0"
            ref={(el) => {
              img_jamus_2 = el;
            }}
          >
            <img
              className="w-full h-full"
              src={require("../assets/img/jamus-3.png")}
              alt=""
            />
          </div>
        </div>
        <div className="containerBawah flex max-[768px]:flex-col max-[768px]:gap-7 max-[768px]:w-screen  max-[768px]:h-max max-[768px]:items-center h-1/3 gap-1">
          <div
            className="jamu-title w-full sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-playfair flex items-end max-[768px]:justify-center max-[768px]:items-center max-[768px]:text-5xl translate-y-40 opacity-0"
            ref={(el) => {
              title = el;
            }}
          >
            <h1>EXPLORE THE AUTHENTIC DRINK</h1>
          </div>
          <div className="desc flex w-1/2 max-[768px]:w-screen flex-col justify-center items-center translate-y-40 opacity-0"   ref={(el) => {
              desc = el;
            }}>
            <div className="shortDesc flex-1 flex items-end justify-center max-[768px]:p-6">
              <p className=" text-justify ">
                Indonesian traditional herbal drink that turun temurun from
                nenek moyang
              </p>
            </div>
            <div className="flex gap-4 w-full justify-center items-center  flex-1 max-[768px]:justify-start  max-[768px]:p-6 ">
              <p className="font-bold">Scroll</p>
              <hr width="50%" size="1" style={{ color: "black" }} />
            </div>
          </div>
          <div
            className="jamu-title w-3/4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl  max-[768px]:items-center max-[768px]:text-5xl max-[768px]:w-screen  font-playfair flex items-end translate-y-40 opacity-0"
            ref={(el) => {
              title2 = el;
            }}
          >
            <h1>ORIGINAL FROM NATURE</h1>
          </div>
          <div className="img w-3/4 max-[768px]:hidden flex items-end">
            <img src={require("../assets/img/jamus-4.png")} alt="" />
          </div>
        </div>
      </div>
      <div
        className="flex max-[768px]:flex-col h-1/2  max-[768px]:gap-7"
        style={{ width: "100vw" }}
      >
        <div className=" jamuDesc-2 sm:ml-0 sm:mt-32 lg:ml-32 md:ml-24 md:mt-0 lg:mt-0  flex flex-col items-center justify-center ">
          <div className="text-justify w-3/4">
            Jamu di Indonesia biasa digunakan sebagai obat herbal atau hasil
            meramu bahan-bahan yang berasal dari alam dan memiliki khasiat untuk
            kesehatan. Jamu tidak hanya berfungsi sebagai obat, tetapi juga
            untuk menjaga kebugaran tubuh dan mencegah dari penyakit. Jamu juga
            biasa digunakan untuk membantu meningkatkan nafsu makan bagi
            anak-anak. Jamu juga dapat disebut obat rumahan karena biasanya
            dibuat sendiri di rumah dari bahan-bahan yang ada di sekitar, yaitu
            kunyit, kencur, jahe, lengkuas, dan jenis rimpang atau tanaman
            lainnya.
          </div>
        </div>
        <div className=" jamuDesc-2  flex flex-col items-center justify-center">
          <div className="text-justify w-3/4">
            Sampai saat ini jamu masih menjadi ramuan yang dijaga kelestariannya
            sebagai kekayaan kearifan lokal, terutama di lingkungan keraton,
            seperti di Keraton Yogyakarta dan Surakarta. Seiring dengan kemajuan
            teknologi, jamu juga sudah dikembangkan menjadi bentuk kapsul,
            bubuk, dan minuman cair. Namun, jamu yang biasa disajikan di rumah
            atau di lingkungan keraton lebih segar karena tanpa pengawet dan
            sekali konsumsi. 2 Jamu di Indonesia bukan sekadar ramuan
            tradisional yang berkhasiat. Akan tetapi, orang orang terdahulu
            memiliki upaya untuk tetap menjaga kelestarian alam.
          </div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col max-[768px]:">
        <div className="w-full flex max-[768px]:flex-col flex-1 max-[768px]:justify-center max-[768px]:items-center  max-[768px]:gap-7">
          <div className="jamu-title w-1/2 p-32 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl  font-playfair flex justify-center items-center  max-[768px]:justify-center max-[768px]:text-5xl  max-[768px]:p-0 ">
            <h1>CONNECTING PEOPLES</h1>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              className="w-1/2 h-3/4 max-[768px]:h-max max-[768px]:w-screen "
              src={require("../assets/img/jamus-5.png")}
              alt=""
            />
          </div>
        </div>
        <div className=" jamuDesc-2  flex flex-col items-center justify-center flex-1">
          <div className="text-justify w-3/4">
            Mengolah Jamu tidak terlalu rumit, kebanyakan hanya mengambil sari
            dari perasan tumbuhan herbal. Ada juga dengan ditumbuk. Seringkali
            berbahan dasar kunyit, temulawak, lengkuas, jahe, kencur, dan kayu
            manis. Khusus gula jawa, gula batu, dan jeruk nipis biasanya
            digunakan sebagai penambah rasa segar dan rasa manis. Uniknya, dalam
            pembuatan jamu juga disesuaikan takaran tiap bahan, suhu, lama
            menumbuk atau merebus, dan lainnya. Jika tidak diperhatikan dengan
            baik, akan kehilangan khasiat dari bahan-bahannya bahkan bisa
            membahayakan tubuh. Begitu juga dengan perkembangannya, tradisi
            minum Jamu mengalami pasang surut sesuai zamannya. Secara garis
            besar terbagi dari zaman pra-sejarah saat pengolahan hasil hutan
            marak berkembang, zaman penjajahan jepang, zaman awal kemerdekaan
            Indonesia, hingga saat ini.
          </div>
        </div>
      </div>
    </div>
  );
};
