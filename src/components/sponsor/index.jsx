import styles from "./style.module.scss";
import sponsor01 from "@/assets/images/sponsor/sponsor01.png";
import sponsor02 from "@/assets/images/sponsor/sponsor02.png";
import sponsor03 from "@/assets/images/sponsor/sponsor03.png";

const Sponsor = () => {
    return (
        <section className={styles.root}>
            <div className="sponsorRoot">
                <div className="container">
                    <h1 className="title">贊助單位</h1>
                    <ul className="sponsor-list">
                        <li className="sponsor-list__li">
                            <img src={sponsor01} alt="凱鈿行動科技" />
                        </li>
                        <li className="sponsor-list__li">
                            <img src={sponsor02} alt="版塊設計" />
                        </li>
                        <li className="sponsor-list__li">
                            <img src={sponsor03} alt="新加坡 鈦坦科技" />
                        </li>
                    </ul>
                    <a href="javascript:;" className="registrationBtn">立即報名</a>
                </div>
            </div>
        </section>
    )
}

export default Sponsor;