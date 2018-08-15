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

\`\`\` js {2-3}
const a = b
const c = d
const d = e
\`\`\`
  `)

  expect(html).toMatchSnapshot()
})

test('respect custom <pre>', () => {
  const md = new Markdown({
    highlight(code, language) {
      return `<pre class="language-${language}"><code class="language-${language}">${code}</code></pre>`
    }
  })
  md.use(highlightLines)
  const html = md.render(`
\`\`\`js
const a = b
\`\`\`

\`\`\`js{1}
const a = b
\`\`\`

\`\`\` js {2-3}
const a = b
const c = d
const d = e
\`\`\`
  `)

  expect(html).toMatchSnapshot()
})
