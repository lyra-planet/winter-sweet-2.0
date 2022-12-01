import type { VFileCompatible } from 'vfile'
import rehypeSlug from 'rehype-slug'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'


export default async function markdownToHtml(markdown: VFileCompatible) {
  const result = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument)
  .use(rehypeFormat).use(rehypeSlug)
  .use(rehypeStringify).process(markdown)
  return result.toString()
}
