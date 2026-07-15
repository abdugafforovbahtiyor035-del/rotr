import "./about.css"
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"
import logo5 from "../../assets/logo5.png"
import logo6 from "../../assets/logo6.png"





function About() {
  return (
    <div>
        <h1>НАШИ ИННОВАЦИИ</h1>

    <div class="cards1">

        <div class="card1">
            <img src={logo1} alt="" />
            <h3>ТРЕНАЖЕР ЛЕСТНИЦА TRUE PALISADE</h3>
            <span></span>
        </div>

        <div class="card1">
          <img src={logo2} alt="" />
            <h3>ФУНКЦИОНАЛЬНЫЙ ТРЕНИНГ С COMPOSITE STRENGTH</h3>
            <span></span>
        </div>

        <div class="card1">
          <img src={logo3} alt="" />
            <h3>РАМЫ ДЛЯ СТРЕТЧИНГА TRUE STRETCH</h3>
            <span></span>
        </div>

        <div class="card1">
           <img src={logo4} alt="" />
            <h3>ЛАТЕРАЛЬНЫЙ ТРЕНАЖЕР TRUE TRAVERSE</h3>
            <span></span>
        </div>

        <div class="card1">
           <img src={logo5} alt="" />
            <h3>БЕГОВАЯ ДОРОЖКА TRUE ALPINE RUNNER</h3>
            <span></span>
        </div>

        <div class="card1">
           <img src={logo6} alt="" />
            <h3>ЭЛЛИПТИЧЕСКИЙ ТРЕНАЖЕР TRUE SPECTRUM</h3>
            <span></span>
        </div>

    </div>
      
    </div>
  );
}

export default About;
