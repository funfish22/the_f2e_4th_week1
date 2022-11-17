import { useState, Fragment } from "react";
import styles from "./style.module.scss";
import questionData from "./data";
const Question = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChangeTag = (index) => {
        setTabIndex(index);
    };

    return (
        <div className={styles.root}>
            <div className="questionRoot">
                <div className="container">
                    <h1 className="title">常見問題</h1>
                    <div className="questionBox">
                        <ul className="question-list">
                            {questionData &&
                                questionData.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`question-list-tags ${
                                                tabIndex === index
                                                    ? "question-list-tags--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleChangeTag(index)
                                            }
                                        >
                                            <p className="question-list-tags__title">{item.title}</p>
                                            {index === tabIndex && (
                                                <ul className="question-block">
                                                    {item.lists.map(
                                                        (item2, index2) => {
                                                            return (
                                                                <li
                                                                    key={index2}
                                                                    className="question-block-li"
                                                                >
                                                                    <p className="question-block-li__title">{item2.question}</p>
                                                                    <p className="question-block-li__answer">{item2.answer}</p>
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
