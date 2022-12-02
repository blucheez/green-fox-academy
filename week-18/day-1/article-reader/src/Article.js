function Article({ selected, editable, isEditDisabled }) {
  return (
    <>
      <h3>{selected.title}</h3>
      <button onClick={() => isEditDisabled(false)}>edit</button>
      <p>szöveg</p>
      <textarea
        className='article-text'
        cols='30'
        rows='10'
        defaultValue={selected.content}
        key={selected.content}
        disabled={editable}
      ></textarea>
    </>
  )
}
export default Article
