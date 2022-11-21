import style from "./style.module.scss";
import descriptionData from "./data";

const Description = () => {
    return (
        <section className={style.root}>
            <div className="description">
                <div className="container">
                    <h1 className="title">活動說明</h1>
                    <div className="progressBar"></div>
                    <ul className="dec">
                        {descriptionData &&
                            descriptionData.map((item, index) => (
                                <li className="dec-li" key={index}>
                                    <span className="dec-li__arrow"></span>
                                    <p className="dec-li__title">
                                        {item.title}
                                    </p>
                                    <p className="dec-li__info">{item.info}</p>
                                </li>
                            ))}
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
