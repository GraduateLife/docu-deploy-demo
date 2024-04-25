import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Comment from '@site/src/components/Comment';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <Comment />
    </>
  );
}
