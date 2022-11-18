import Banner from "@/components/banner";
import Troubled from "@/components/troubled";
import Theme from "./components/theme";
import Description from "./components/description";
import Contest from "./components/contest";
import Question from "./components/question";
import Sponsor from "./components/sponsor";
import Footer from "./components/footer";

const App = () => {
    return (
        <>
            <main>
                <Banner />
                <Troubled />
                <Theme />
                <Description />
                <Contest />
                <Question />
                <Sponsor />
            </main>
            <Footer />
        </>
    );
};

export default App;
