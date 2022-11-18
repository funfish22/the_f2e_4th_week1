import "./style.scss"
import circleMaskOne from "@/assets/images/troubled/troubled-mask1.png"
import circleMaskTwo from "@/assets/images/troubled/troubled-mask2.png"
import setp1 from "@/assets/images/troubled/step1.png"
import setp2 from "@/assets/images/troubled/step2.png"
import setp3 from "@/assets/images/troubled/step3.png"

const Troubled = () => {
    return (
        <section className="troubled">
            <img src={circleMaskOne} alt="" className="circle-mask circle-mask--one" />
            <img src={circleMaskTwo} alt="" className="circle-mask circle-mask--two" />
            <div className="container">
                <h1 className="title">你是否也有以下困擾?</h1>
                <ul className="step">
                    <li className="step-list">
                        <div className="step-list-img">
                            <img src={setp1} alt="" className="step-list-img__img" />
                        </div>
                        <p className="step-list__info">羨慕別人的酷酷網頁動畫嗎?</p>
                    </li>
                    <li className="step-list">
                        <div className="step-list-img">
                            <img src={setp2} alt="" className="step-list-img__img" />
                        </div>
                        <p className="step-list__info">滿足不了同事的許願?</p>
                    </li>
                    <li className="step-list">
                        <div className="step-list-img">
                            <img src={setp3} alt="" className="step-list-img__img" />
                            <span className="step-list-img__decorate">?</span>
                        </div>
                        <p className="step-list__info">動畫技能數太雜無從下手?</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Troubled;