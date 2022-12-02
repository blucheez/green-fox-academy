function ArticleList({ db, setArticle }) {
  return db.map((article) => (
    <button key={article.title} onClick={() => setArticle(article)}>
      {article.title}
    </button>
  ))
}
export default ArticleList
