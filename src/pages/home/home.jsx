import "./home.css";
import rasm from "../../assets/rasm.svg"
import img1 from '../../assets/icons/1.png'
import img2 from '../../assets/icons/2.png'
import img3 from '../../assets/icons/3.png'
import img4 from '../../assets/icons/4.png'
import img5 from '../../assets/icons/5.png'
import img6 from '../../assets/icons/6.png'

const Home = () => {
  const services = [
    {
      icon: img1,
      title: "КОНСАЛТИНГ",
      text: "Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей.",
    },
    {
      icon: img2,
      title: "МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ",
      text: "Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.",
    },
    {
      icon: img3,
      title: "ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ",
      text: "Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию будущего проекта.",
    },
    {
      icon: img4,
      title: "ФИРМЕННЫЙ SHOW-ROOM",
      text: "Пройдите тест-драйв оборудования перед приобретением.",
    },
    {
      icon: img5,
      title: "ПОСТАВКА ЗАПЧАСТЕЙ",
      text: "Поставка как гарантийных, так и постгарантийных запчастей.",
    },
    {
      icon: img6,
      title: "ДОСТАВКА ПО ВСЕМУ УЗБЕКИСТАНУ",
      text: "Мы доставляем оборудование по всему Узбекистану.",
    },
  ];

  return (
    <section className="home">
      <div className="home-left">
        <h1>
          МЫ ПРЕДЛАГАЕМ <br />
          ПОЛНЫЙ КОМПЛЕКС УСЛУГ
        </h1>

        <div className="services">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <img className="icon" src={item.icon}/>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="home-right">
        <img src={rasm} alt="Gym" />
      </div>
    </section>
  );
};

export default Home;