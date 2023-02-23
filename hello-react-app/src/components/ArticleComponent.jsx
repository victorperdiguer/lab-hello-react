const ArticleComponent = (image, title, text) => {
    return (
        <div className="article-component">
            <div className="article-image">
                <img src={image} alt="Article icon" />
            </div>
            <h2 className="article-title">{title}</h2>
            <p className="article-text">{text}</p>
        </div>
    )
}

export default ArticleComponent;