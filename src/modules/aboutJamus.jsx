import "../assets/css/about-jamus.css";
import { useEffect, useRef } from "react";
import { Sidebar } from "../components/sidebar";
import { useParams } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

export const AboutJamus = () => {
  let { jamu } = useParams();
  let img_jamus_1 = useRef(null);
  let about_jamu_detail = useRef(null);
  let aboutManfaatRef = useRef(null);
  let img_jamus_2 = useRef(null);
  let img_jamus_3 = useRef(null);

  console.log(jamu);

  const jamuTitleTop = () =>{
    switch (jamu) {
      case "beras-kencur":
        return "BERAS"
      case "jamu-kunyit":
        return "JAMU"
      case "jamu-temulawak":
        return "JAMU"
      case "jamu-empon":
        return "JAMU"
      case "jamu-brotowali":
        return "JAMU"
      default:
        return null;
    }
  }

  const jamuTitleBottom = () =>{
    switch (jamu) {
      case "beras-kencur":
        return "KENCUR"
      case "jamu-kunyit":
        return "KUNYIT"
      case "jamu-temulawak":
        return "TEMULAWAK"
      case "jamu-empon":
        return "EMPON"
      case "jamu-brotowali":
        return "BROTOWALI"
      default:
        return null;
    }
  }

  const jamuDesc = () => {
    switch (jamu) {
      case "beras-kencur":
        return "Beras kencur adalah minuman penyegar khas Jawa. Minuman ini juga digolongkan sebagai jamu karena memiliki khasiat meningkatkan nafsu makan. Beras kencur sangat populer karena memiliki rasa yang manis dan segar. Bahan utama beras kencur adalah beras (yang dihaluskan) dan kencur. Kombinasi beras dan kencur banyak mengandung Vitamin B yang dapat merangsang lambung memberikan rasa lapar, selain itu, jamu beras kencur jika diminum secara rutin setiap hari bisa membantu menebalkan dinding perut untuk menyembuhkan penyakit maag (untuk penyembuhan maag ini tidak boleh dicampur dengan jahe dan untuk asam jawa boleh sedikit saja).";
      case "jamu-kunyit":
        return "Jamu kunyit asam merupakan minuman tradisional khas Indonesia yang diolah dari percampuran kunyit dan asam jawa. Kombinasi kunyit yang terkenal dengan kandungan kurkumin dan asam jawa yang kaya mineral penting, seperti magnesium, menjadikan jamu kunyit asam memiliki banyak manfaat untuk kesehatan."
      case "jamu-temulawak":
        return "Jamu temulawak adalah salah satu jenis jamu tradisional yang berasal dari Indonesia. Jamu ini terkenal karena kandungan utamanya, yaitu temulawak. Temulawak sendiri adalah tumbuhan herbal yang memiliki nama ilmiah Curcuma xanthorrhiza. Tumbuhan ini tumbuh di daerah tropis seperti Indonesia, Malaysia, dan Thailand. Dalam jamu temulawak, akar temulawak yang telah dikeringkan dan dihaluskan menjadi serbuk, digunakan sebagai bahan utama dalam pembuatannya."
      case "jamu-empon":
        return "Jamu empon ialah minuman herbal yang dibuat dari ekstrak empon-empon. Minuman ini sudah dijadikan sebagai minuman kesehatan oleh masyarakat Indonesia sejak zaman dahulu.  Selain bisa menjaga kesehatan tubuh, empon-empon juga bermanfaat untuk mengobati berbagai penyakit. Jamu empon terbuat dari sejenis tanaman penyegar atau penyedap rasa sebagai bahan dasar pengobatan rumahan. Tanaman obat atau penyedap yang digunakan sebagai empon-empon sebagian besar berupa rimpang yang batangnya menyebar di bawah permukaan tanah, seperti kunyit, jahe merah, jahe, serai, dan temulawak."
      case "jamu-brotowali":
        return "Jamu brotowali sering dijadikan sebagai minuman herbal untuk membantu mengurangi gejala rematik, menyembuhkan penyakit kuning, hingga memulihkan penderita diabetes tipe 2. Dengan bahan-bahan tambahan dari apotek hidup maupun bumbu dapur, Anda pun bisa meracik jamu ini di rumah. Jamu brotowali terkenal akan rasanya yang sangat pahit yang bertahan di mulut bahkan hingga beberapa jam setelah Anda meminumnya, inilah mengapa jamu ini dikenal dengan nama jamu pahitan. Kendati demikian, manfaat jamu brotowali sangat berkhasiat bagi kesehatan.        "
      default:
        return null;
    }
  };

  const manfaatDescTop = () =>{
    switch (jamu){
      case "beras-kencur":
        return "Jamu beras kencur sudah lama dikenal dan dikonsumsi oleh masyarakat Indonesia. Ramuan tradisional ini dipercaya dapat memberikan berbagai manfaat kesehatan, mulai dari meningkatkan daya tahan tubuh hingga mencegah beberapa penyakit tertentu. Seperti namanya, jamu beras kencur terbuat dari beras dan rimpang kencur yang dihaluskan bersama. Beragam manfaat yang ditawarkan jamu beras kencur tak lepas dari kandungan nutrisi kedua bahan tersebut.";
      case "jamu-kunyit":
        return "Kunyit tak hanya untuk melezatkan masakan, tetapi juga baik untuk kesehatan tubuh. Bumbu dapur yang dapat menjadi pewarna kuning alami ini dikenal sebagai obat herba untuk mengatasi dan mencegah berbagai masalah kesehatan, mulai dari gangguan pernapasan hingga penyakit kronis. Manfaat kunyit untuk kesehatan tubuh telah dipercaya sejak lama dan kerap dijadikan pengobatan tradisional. Hal ini karena kandungan kurkumin yang terdapat pada rimpang kunyit. Selain memberi warna pada kunyit, kurkumin juga diduga memiliki khasiat yang baik untuk kesehatan tubuh."
      case "jamu-temulawak":
        return "Temulawak adalah tanaman di Indonesia yang karena kandungannya dimanfaatkan sebagai ramuan jamu. Ada beragam manfaat jamu temulawak yang hebat untuk kesehatan tubuh. Tanaman bernama latin Curcuma Xanthorrhiza Roxb biasanya dimanfaatkan bagian rimpangnya karena kaya kandungan antioksidan.Temulawak banyak ditemukan terutama di sepanjang pulau Jawa, Bali, Sumatera Utara, Riau, Jambi, Kalimantan Barat, Kalimantan Timur, Sulawesi Utara dan Selatan."
      case "jamu-empon":
        return "Belakangan ini, jamu empon-empon mulai dikenal masyarakat setelah beredar berita bahwa Presiden Joko Widodo sering mengonsumsinya. Pada dasarnya, empon-empon merupakan sebutan masyarakat Jawa untuk kelompok tanaman rimpang atau akar tinggal yang biasa dimanfaatkan sebagai jamu, seperti jahe, kunyit, kencur dan temulawak. Setiap orang mungkin memiliki racikan jamunya sendiri-sendiri, dengan varietas dalam jenis rimpang yang ditunjukkan oleh kebutuhan dan selera yang unik. Semua hal dipertimbangkan, mengingat ada cukup banyak bahan-bahan dalam obat alami empon-empon. "
      case "jamu-brotowali":
        return "Brotowali atau yang memiliki nama ilmiah Tinospora crispa merupakan tanaman dari keluarga Menispermaceae. Tanaman ini banyak ditemukan di Asia Tenggara dan India bagian timur laut. Brotowali termasuk dalam obat herbal tradisional yang sudah dimanfaatkan selama bertahun-tahun oleh masyarakat Indonesia untuk menyembuhkan penyakit, salah satunya diabetes melitus."
      default:
        return null;
      
    }
  }

  const manfaatDescBottom = () =>{
    switch (jamu){
      case "beras-kencur":
        return "Berikut adalah beberapa manfaat jamu beras kencur yang bisa Anda rasakan: Antikanker,  Antiradang, Antioksidan,  Antibakteri, Antidiabetes, Mengatasi Jerawat Pada Kulit Wajah, Membentuk Pinggang Menjadi Ramping, Mengobati Batuk, Melangsingkan Tubuh, Menyegarkan Badan, dan Meningkatkan daya tahan tubuh.";
      case "jamu-kunyit":
        return "kunyit memiliki beragam manfaat yang baik untuk kesehatan, seperti: Meredakan nyeri sendi, Mencegah penyakit jantung,  Meningkatkan kesehatan kulit, Meringankan gangguan menstruasi, Mengatasi gangguan saluran pencernaan, Mengurangi kolesterol, Mengontrol kadar gula darah,  Mencegah kanker, dan Membantu meringankan depresi."
      case "jamu-temulawak":
        return "Jamu temulawak memiliki banyak sekali manfaat sebagai berikut : Merangsang Produksi Empedu, Mencegah Penyakit Kambuhan, 3. Mengurangi Sakit Akibat Osteoartritis, Mencegah Kanker, Mengurangi Risiko Terkena Penyakit Jantung, Meringankan Gejala PMS, dan Meningkatkan Nafsu Makan."
      case "jamu-empon":
        return "Berikut ini 4 manfaat jamu empon-empon untuk kesehatan : Menghangatkan Tubuh, Mencegah Flu, Meningkatkan Daya Tahan Tubuh, dan Menjaga Kesehatan Pencernaan"
      case "jamu-brotowali":
        return "Sejauh ini, manfaat jamu pahitan brotowali yang dipercaya secara turun-temurun ialah:Menurunkan demam, Membantu mempercepat penyembuhan kolera, Mengurangi gejala rematik, Menyembuhkan penyakit kuning, Menambah nafsu makan, Membantu mengobati diabetes tipe 2 (karena dipercaya dapat membantu mengontrol kadar gula darah), Sebagai immunomodulator, Mencegah penyakit malaria, Sebagai antivirus dan antibakteri,Mengurangi gejala atau reaksi alergi pada tubuh, dan Menjadi antioksidan."
      default:
        return null;
      
    }
  }

  useEffect(() => {
    // Animation for img_jamus_1
    TweenMax.to(img_jamus_1, 0.8, {
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

    // Animation for about_manfaat_jamu
    TweenMax.to(aboutManfaatRef, 0.8, {
      opacity: 1,
      y: 10,
      ease: Power3.easeOut,
    });

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
    <div id="scrollContainer" className="main-container  ">
      <Sidebar />
      <div className="about-jamus">
        <div className="jamus-details">
          <div className="tittle">
            <h1>{jamuTitleTop()}</h1>
            <h1>{jamuTitleBottom()}</h1>
            <div className="scroll-container">
              <div className="text">
                <p>Scroll</p>
              </div>
              <hr width="20%" size="1" style={{ color: "black" }} />
            </div>
          </div>
          <div
            className="jamus-desc"
            ref={(el) => {
              about_jamu_detail = el;
            }}
          >
            <p>{jamuDesc() || "No description available"}</p>
          </div>
        </div>
        <div
          className="jamus-img"
          ref={(el) => {
            img_jamus_1 = el;
          }}
        >
          <img src={require("../assets/img/jamus-1.png")} alt="" />
        </div>
      </div>
      <div className="manfaat-jamus ">
        <div className="jamus-details  ">
          <div className="tittle">
            <h1>MANFAAT</h1>
          </div>
          <div
            className="jamus-desc  "
            ref={(el) => {
              aboutManfaatRef = el;
            }}
          >
            <p>
              {manfaatDescTop()}
              <br />
              <br />
              {manfaatDescBottom()}
            </p>
          </div>
        </div>
        <div className="jamus-img">
          <div
            className="img-jamus-1"
            ref={(el) => {
              img_jamus_2 = el;
            }}
          >
            <img
              id="img-jamus-1"
              src={require("../assets/img/jamus-2.png")}
              alt=""
            />
          </div>
          <div
            className="img-jamus-2"
            ref={(el) => {
              img_jamus_3 = el;
            }}
          >
            <img
              id="img-jamus-2"
              src={require("../assets/img/jamus-1.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
