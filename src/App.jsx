import Banner from "@/components/banner";
import Troubled from "@/components/troubled";
import Theme from "./components/theme";
import Description from "./components/description";
import Contest from "./components/contest";
import Question from "./components/question";

const App = () => {
    return (
        <main>
            <Banner />
            <Troubled />
            <Theme />
            <Description />
            <Contest />
            <Question />
        </main>
    );
};

export default App;
