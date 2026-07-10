import "./Contact.css"
import lakatsa from "../../assets/lakatsa.png"

function Contact(){
    return(
        <div>
                   <div>

    <div class="title">
        <p>КОНТАКТЫ</p>
        <h1>ШОУ РУМ TRUE В ТАШКЕНТЕ</h1>
        <h3>ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD</h3>
    </div>

    <div class="wrapper">

        <div class="map">
         <img src={lakatsa} alt="" />
        </div>

        <div class="info">
            <h2>ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТЕР <br />В УЗБЕКИСТАНЕ - PROWELLNESS</h2>

            <p>📞 +998 (90)-606-66-66</p>

            <a href="#">info@prowellness.uz</a>

            <p>
                Адрес: Ташкент Сити, Boulevard,<br />
                Ул. Фурката 2А
            </p>

            <h4>
                ПН-СБ С 9:00-19:00 <br />
                ВС НЕ РАБОЧИЙ
            </h4>
        </div>

    </div>
       </div>
    
        </div>
    )
}
    



export default Contact