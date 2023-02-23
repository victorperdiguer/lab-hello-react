import ArticleComponent from "./ArticleComponent"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"


const ArticleSection = () => {
    return (
        <section className="article-section">
            {ArticleComponent(icon1, "Declarative", "React makes it painless to create interactive UIs.")}
            {ArticleComponent(icon2, "Components", "Build encapsulated components that manage their state.")}
            {ArticleComponent(icon3, "Single-Way", "A set of immutable values are passed to the component's.")}
            {ArticleComponent(icon4, "JSX", "Statically-typed, designed to run on modern broswers.")}
        </section>
    )
}

export default ArticleSection;