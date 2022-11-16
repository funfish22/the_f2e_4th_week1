import style from "./style.module.scss";
import digimon from "@/assets/images/theme/digimon.png";

const Introduce = (props) => {
    const { data, index } = props;
    return (
        <div className={style.root}>
            <div
                className={`introduce introduce--${data.color} ${(index + 1) % 2}`}
                style={{ marginLeft: (index + 1) % 2 === 0 ? 'auto' : '0', marginTop: index !==0 ? '30px': '0px' }}
            >
                {index === 2 && (
                    <img src={digimon} alt="digimon" className="introduce__digimonImg" />
                )}
                <img src={data.img} alt="" className="introduce__img" />
                <div className="introduce-content">
                    <p className="introduce-content__subtitle">{`WEEK ${
                        index + 1
                    }`}</p>
                    <h2 className="introduce-content__title">{data.title}</h2>
                    <p className="introduce-content__info">{data.info}</p>
                    <ul className="introduce-list">
                        {data &&
                            data.list.map((item, index) => (
                                <li key={index} className="introduce-list__li">
                                    {item}
                                </li>
                            ))}
                    </ul>
                    <a href="javascript:;" className="introduce-content__more">
                        查看關卡細節
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
