import Markdown from 'markdown-it'
import highlightLines from '../src'

test('main', () => {
  const md = new Markdown()
  md.use(highlightLines)
  const html = md.render(`
\`\`\`js
const a = b
\`\`\`

\`\`\`js{1}
const a = b
\`\`\`

\`\`\`js{2-3}
const a = b
const c = d
const d = e
\`\`\`
  `)

  expect(html).toMatchSnapshot()
})
