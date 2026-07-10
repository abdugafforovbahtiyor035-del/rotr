import Rectangle from "../../assets/Rectangle 60.svg"

function Mebel() {
  return (
    <div>
      <header>
        <div class="top-box">
          <p>КЛУБ TRUE</p>
          <h1 className="text">ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE</h1>
        </div>
      </header>

      <section class="plan">
        <img src={Rectangle} alt="" />
      </section>
    </div>
  );
}

export default Mebel;
