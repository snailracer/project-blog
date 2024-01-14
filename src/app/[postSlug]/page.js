import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc'
import dynamic from 'next/dynamic';
import BlogHero from '@/components/BlogHero';
import {
    loadBlogPost
} from '@/helpers/file-helpers';
import styles from './postSlug.module.css';
import { BLOG_TITLE } from '@/constants'
import CodeSnippet from '@/components/CodeSnippet';
import CircularColorsDemo from "@/components/CircularColorsDemo";

export const generateMetadata = async ({params}) => {
    const {frontmatter} = await loadBlogPost(params.postSlug)

    return {
        title: `${frontmatter.title} - ${BLOG_TITLE}`,
        description: frontmatter.abstract
    }
};

const DivisionGroupsDemo = dynamic(() =>
    import ('@/components/DivisionGroupsDemo')
)

async function BlogPost({params}) {
    const {content: blogPost, frontmatter} = await loadBlogPost(params.postSlug)


  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <p>This is where the blog post will go!</p>
        <p>
          <MDXRemote source={blogPost} components={{pre: CodeSnippet, DivisionGroupsDemo, CircularColorsDemo}} />
        </p>
      </div>
    </article>
  );
}

export default BlogPost;
