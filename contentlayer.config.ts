import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
// import highlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import GithubSlugger from 'github-slugger';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'image', required: true },
    visibility: { type: 'boolean', default: true },
    author: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/blogs/${post._raw.flattenedPath}` },
    readingTime: { type: 'json', resolve: (post) => readingTime(post.body.raw) },
    toc: {
      type: 'json',
      resolve: (post) => {
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(post.body.raw.matchAll(regulrExp)).map(({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;

          return {
            level: flag?.length == 1 ? 'one' : flag?.length == 2 ? 'two' : 'three',
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        });
        return headings;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append' }],
      [
        rehypePrettyCode,
        {
          theme: 'dracula',
          grid: false,
        },
      ],
    ],
  },
});
