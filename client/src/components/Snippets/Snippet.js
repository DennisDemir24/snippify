import React, { useContext } from 'react'
import Button from '../UI/Button'
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
        <Button
          className="bg-warning-color rounded-md py-1 px-6 mr-2"
          onClick={(e) => console.log(e)}
        >
          Edit
        </Button>
        <Button className="bg-error-color rounded-md py-1 px-6 text-primary">
          Delete
        </Button>
      </div>
      <section className="bg-main-bg w-full py-4 px-8 text-link-hover rounded-lg">
        <h3>{snippet.title}</h3>
        <p className="text-xs">
          Created by {snippet.author} at{' '}
          {new Date(snippet.date).toLocaleDateString()}
        </p>
        <pre className="mt-4">
          <code>{snippet.body}</code>
        </pre>
        <div className="flex flex-row">
          {snippet.tags.map((tag, idx) => (
            <span key={idx} className="mt-4 mr-2 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Snippet
