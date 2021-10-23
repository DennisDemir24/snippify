import React, { useContext, useEffect } from 'react'
import SnippetContext from '../../context/snippet/snippetContext'
import Snippet from './Snippet'

const Snippets = () => {
  const snippetContext = useContext(SnippetContext)

  const { snippets, filtered, getSnippets, loading } = snippetContext

  useEffect(() => {
    getSnippets()
  }, [])

  return (
    <>
      {snippets !== null &&
        snippets.map((snippet) => (
          <div className="flex justify-center w-screen">
            <Snippet snippet={snippet} />
          </div>
        ))}
    </>
  )
}

export default Snippets
