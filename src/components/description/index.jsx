import style from "./style.module.scss";

const Description = () => {
    return (
        <section className={style.root}>
            <div className="description">
                <div className="container">
                    <h1 className="title">活動說明</h1>
                    <div className="progressBar"></div>
                    <ul className="dec">
                        <li className="dec-li">
                            <span className="dec-li__arrow"></span>
                            <p className="dec-li__title">報名時間</p>
                            <p className="dec-li__info">10/13~10/30<br />截止前可修改報名組別</p>
                        </li>
                        <li className="dec-li">
                            <span className="dec-li__arrow"></span>
                            <p className="dec-li__title">登錄作品</p>
                            <p className="dec-li__info">10/31~11/28 依賽程登錄作品<br />10/31(一) UI、團體組開賽<br />11/7(一) 前端組開賽</p>
                        </li>
                        <li className="dec-li">
                            <span className="dec-li__arrow"></span>
                            <p className="dec-li__title">額外競賽</p>
                            <p className="dec-li__info">主題豐厚獎金等著你</p>
                        </li>
                    </ul>
                </div>
                <div className="flashing flashing--left">
                    <div className="flashing__line flashing__line--one"></div>
                    <div className="flashing__line flashing__line--two"></div>
                    <div className="flashing__line flashing__line--three"></div>
                </div>
                <div className="flashing flashing--right">
                    <div className="flashing__line flashing__line--one"></div>
                    <div className="flashing__line flashing__line--two"></div>
                    <div className="flashing__line flashing__line--three"></div>
                </div>
            </div>
        </section>
    );
};

export default Description;
