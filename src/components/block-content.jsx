import React from 'react';
import { PortableText } from '@portabletext/react';

const serializers = {
  types: {
    image: ({ value }) => {
      console.log(value);
      return null;
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="mt-8 text-base text-3xl font-bold tracking-wide text-black">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-4 text-base text-2xl font-bold tracking-wide text-black">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-2 text-xl font-bold tracking-wide text-black">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-2 font-bold tracking-wide text-black">{children}</h4>
    ),
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    code: ({ children }) => (
      <pre data-language={children.language}>
        <code>{children.code}</code>
      </pre>
    ),
    p: ({ children }) => <p className="my-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
    checkmarks: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children }) => {
      let rel,
        blank = '';
      if (
        typeof children.mark.href !== 'undefined' &&
        !children.mark.href.startsWith('/')
      ) {
        rel = 'noreferrer noopener';
        blank = '_blank';
      }

      return (
        <a
          href={children.mark.href}
          rel={rel}
          target={blank}
          className="text-blue-500 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

const BlockContent = (props) => {
  return <PortableText value={props.value} components={serializers} />;
};

export default BlockContent;
