import { useState } from 'react'
import ArticleList from './ArticleList'
import Article from './Article'

function App() {
  const articleArr = [
    {
      title: 'Article 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur, eros dictum lobortis molestie, tortor dolor vehicula massa, ut pulvinar dolor justo feugiat mauris.',
    },
    {
      title: 'Article 2',
      content:
        'ras gravida varius leo vel congue. Nulla maximus nunc eros, eleifend mollis nibh tempor eu. Duis justo est, suscipit quis velit at, venenatis rhoncus est.',
    },
    {
      title: 'Article 3',
      content:
        'Suspendisse efficitur ullamcorper auctor. Nunc dapibus commodo urna vel tempor. Phasellus nec mauris placerat, consectetur leo vel, gravida magna.',
    },
    {
      title: 'Article 4',
      content:
        'Quisque rhoncus placerat mollis. Proin semper rhoncus est ac suscipit. Nam ex nunc, viverra vitae venenatis in, consectetur vel lacus.',
    },
    {
      title: 'Article 5',
      content: 'Nulla vehicula nibh elit, vel ullamcorper risus tristique eu.',
    },
  ]

  const [articles, setArticles] = useState(articleArr)
  const [contentBeingEdited, setContentBeingEdited] = useState(null)
  const [editIsDisabled, setEditIsDisabled] = useState(true)
  const [selectedArticle, setSelectedArticle] = useState(articles[0])

  function updateArticles() {
    let index
    articles.forEach((element) => {
      if (element.title === contentBeingEdited.title) {
        index = articles.indexOf(element)
      }
    })

    setEditIsDisabled(true)
    const modifiedArticles = articles.slice()
    modifiedArticles[index] = contentBeingEdited
    setArticles(modifiedArticles)

    setContentBeingEdited(null)
  }
  function switchToArticle(article) {
    if (contentBeingEdited !== null) {
      updateArticles()
      setSelectedArticle(article)
    }
  }
  return (
    <div className='App'>
      <ArticleList db={articles} setArticle={switchToArticle} />
      <Article
        selected={selectedArticle}
        editable={editIsDisabled}
        isEditDisabled={setEditIsDisabled}
      />
    </div>
  )
}

export default App
