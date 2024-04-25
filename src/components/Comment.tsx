import React from 'react';
import Giscus from '@giscus/react';

export default function Comment() {
  return (
    <Giscus
      repo="GraduateLife/docu-deploy-demo"
      repoId="R_kgDOLy8T9w"
      category="General"
      categoryId="DIC_kwDOLy8T984Ce7_r"
      mapping="title"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      input-position="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}
