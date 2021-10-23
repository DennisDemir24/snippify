import React, { useContext } from 'react'
import SnippetContext from '../../context/snippet/snippetContext'

const Snippet = ({snippet}) => {
     const snippetContext = useContext(SnippetContext)

     /* const { deleteContact, setCurrent, clearCurrent } = snippetContext */
  return (
    <div
      className="bg-primary-bg w-7/12 py-6 px-8 pb-10 shadow-lg rounded-lg my-20"
      key={snippet.id}
    >
        <div className="flex justify-end mb-2">
            <button>Edit</button>
            <button>Delete</button>
        </div>
      <section className="bg-main-bg w-full py-4 px-8 text-link-hover rounded-lg">
        <h3>{snippet.title}</h3>
        <pre>
          <code>{snippet.body}</code>
        </pre>
      </section>
    </div>
  )
}

export default Snippet
