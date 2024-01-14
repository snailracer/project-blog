import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';
import {
    getBlogPostList
} from '@/helpers/file-helpers';

import styles from './homepage.module.css';
import { BLOG_TITLE } from '@/constants'
export const metadata = {
    title: BLOG_TITLE,
    description: 'A wonderful blog about JavaScript'
}

async function Home() {

    const blogPosts = await getBlogPostList();

    const blogSummaryCards = blogPosts.map(({slug, ...delegated }) => {
        return (
            <BlogSummaryCard
                key={slug}
                slug={slug}
                {...delegated}
            />
        )

    });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>
        {blogSummaryCards}
    </div>
  );
}

export default Home;
