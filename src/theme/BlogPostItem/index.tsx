import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Comment from '@site/src/components/Comment';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogPostItemWrapper(props) {
  const { siteConfig, siteMetadata } = useDocusaurusContext();
  console.log(siteMetadata);
  return (
    <>
      <div>{`i am front matter:${siteMetadata}`}</div>
      <BlogPostItem {...props} />
      <Comment />
    </>
  );
}
