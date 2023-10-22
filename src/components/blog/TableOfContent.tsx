import { Blog } from 'contentlayer/generated';
import React from 'react';

interface Props {
  article: Blog;
}

const TableOfContent: React.FC<Props> = ({ article }) => {
  //   console.log(toc);
  return (
    <div>
      <details className="bg-purple-300 rounded-lg p-2 px-4">
        <summary className="cursor-pointer text-lg capitalize">Table of Content</summary>
        <ul>
          {article?.toc?.map((heading: any, ind: any) => {
            return (
              <li key={ind}>
                <a
                  href={`#${heading.slug}`}
                  data-level={heading.level}
                  // className="
                  // data-[level=two]:pl-2 pt-2
                  // data-[level=three]:pl-6
                  // flex items-center
                  // "
                  className={`flex items-center`}
                  style={{ paddingLeft: `${heading.level}px` }}
                >
                  <span className="flex w-1 h-1 rounded-full bg-gray-600 mr-2">&nbsp;</span>
                  <span className="hover:underline">{heading.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    </div>
  );
};

export default TableOfContent;
