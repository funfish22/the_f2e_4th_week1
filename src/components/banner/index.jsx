import "./style.scss"
import lightning from "@/assets/images/banner/lightning.png"
import vision from "@/assets/images/banner/vision.png"
import titleFlicker from "@/assets/images/banner/titleFlicker.png"

const Banner = () => {
    return (
        <div className="banner">
            <div className="hero">
                <h1 className='hero__title hero__title--en'>The F2E 4th</h1>
                <h2 className='hero__title hero__title--cn'>互動網頁設計</h2>
                <p className="hero__info">UI 設計師 x 前端工程師最強合作，<br />三大主題來襲網頁互動關卡<br />等你來挑戰 !</p>
                <img className="hero__lightning hero__lightning--one" src={lightning} alt="lightning" />
                <img className="hero__lightning hero__lightning--two" src={lightning} alt="lightning" />
                <img className="hero__titleFlicker" src={titleFlicker} alt="hero__titleFlicker" />
            </div>
            <div className="vision">
                <img className="vision__img" src={vision} alt="vision" />
            </div>
        </div>
    )
}

export default Banner;