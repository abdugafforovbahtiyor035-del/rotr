import "./mebel.css"
import Rectangle from "../../assets/Rectangle 60.svg"

function Mebel() {
  return (
    <div>
      <header>
        <br /><br /><br />
        <div class="top-box">
          <br /><br />
          <p className="text">КЛУБ TRUE</p>
          <br />
          <h1 className="">ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE</h1>
        </div>
      </header>
        <br /><br />
      <section class="plan">
        <img src={Rectangle} alt="" />
      </section>
    </div>
  );
}

export default Mebel;
