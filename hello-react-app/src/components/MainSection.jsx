import Navbar from "./Navbar";
import MainButton from "./MainButton";

const MainSection = () => {
    return (
        <main id="main-section">
            <h1 className="main-title">Say hello to ReactJS</h1>
            <p className="main-text">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            <MainButton/>
        </main>
    )
}

export default MainSection;