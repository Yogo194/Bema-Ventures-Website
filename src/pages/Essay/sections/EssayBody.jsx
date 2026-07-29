function Paragraph({ text }) {
  if (text.includes('<')) {
    return <p dangerouslySetInnerHTML={{ __html: text }} />
  }
  return <p>{text}</p>
}

function EssayBlock({ block }) {
  if (block.type === 'h2') return <h2>{block.text}</h2>
  if (block.type === 'p') return <Paragraph text={block.text} />
  if (block.type === 'pullquote') {
    return (
      <blockquote className="essay-pullquote">
        <p>{block.text}</p>
      </blockquote>
    )
  }
  if (block.type === 'steps') {
    return (
      <ol className="essay-steps">
        {block.items.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            {item.text}
          </li>
        ))}
      </ol>
    )
  }
  return null
}

export default function EssayBody({ essay }) {
  return (
    <section className="essay-body-section">
      <div className="essay-body-inner">
        <aside className="essay-body-aside">
          <h2 className="essay-aside-title">Key takeaways</h2>
          <ul className="essay-aside-list">
            {essay.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        <article className="essay-article">
          <p className="essay-lead">{essay.lead}</p>
          {essay.blocks.map((block, i) => (
            <EssayBlock key={i} block={block} />
          ))}
        </article>
      </div>
    </section>
  )
}
