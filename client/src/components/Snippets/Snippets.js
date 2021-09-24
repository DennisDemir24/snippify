import React from 'react'

const snippets = [
    {id: 1, title: 'Snippet One', body: '<h1>First Snippet</h1>'},
    {id: 2, title: 'Snippet Two', body: '<h1>Second Snippet</h1>'},
    {id: 3, title: 'Snippet Three', body: '<section>This is some snippets</section>'},
    {id: 4, title: 'Snippet Four', body: '<section>This is some snippets</section>'},
]

const Snippets = () => {
    return (
        <>
            {snippets.map(snippet => (
                <div key={snippet.id}>
                    <h3>{snippet.title}</h3>
                    <pre><code>{snippet.body}</code></pre>
                </div>
            ))}
        </>
    )
}

export default Snippets
