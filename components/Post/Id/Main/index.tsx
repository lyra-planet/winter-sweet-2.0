import React, { useEffect, useRef } from "react";
import Footer from "../../../Footer";
import PostLeftSideBar from "../LeftSideBar";
import LeftSideBar from "../../../LeftSideBar";
import TocHelper from "toc-helper";
import Header from "../Header";
import Comment from "../../../Comment";
import RelativePostItem from "../RelativePostItem";
import { useRouter } from 'next/router';
const index = ({ post,relativePosts }) => {
  const contentRef = useRef(null);
  const {query:{postId} } = useRouter()
  const tocRef = useRef(null);
  const mainRef = useRef(null)
  useEffect(() => {
    console.log(postId)
    console.log(mainRef.current)
    mainRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  },[postId])
  useEffect(() => {
    if (typeof window === "object") {
      new TocHelper(tocRef.current, {
        scrollSelector: contentRef.current,
        contentSelector: contentRef.current,
        collapsedLevel: 3,
      });
    }

  }, [contentRef, tocRef]);
  return (
    <>
      <section className="w-1/4 hidden md:block overflow-auto scrollbar-none">
        <PostLeftSideBar>
          <div
            ref={tocRef}
            className="bg-white h-full font-serif font-sm text-sm bg-radial"
          />
          <LeftSideBar />
        </PostLeftSideBar>
      </section>
      <section ref={mainRef} className="w-full md:w-3/4 flex flex-col overflow-auto scrollbar-none">
        <div className="flex flex-col xl:flex-row px-2 md:px-6 flex-grow md:space-x-6">
          {/* article */}
          <section className="space-y-10 w-full xl:w-3/5 flex items-center flex-col">
            <Header post={post} />
            <main
              className="w-full prose break-words "
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </section>
          {/* comment */}
          <section className="xl:w-2/5 xl:border-l md:px-4">
            {post ? <Comment postId={post.id} /> : "Loading Comments"}
          </section>
        </div>
        <section>
          <div>相关文章</div>
          <div className="flex flex-col  px-2
           justify-center space-x-2 py-8
          md:px-6
          md:flex-row
          space-y-2
          md:space-y-0">
          {
            relativePosts.map((post,index)=><RelativePostItem key={index} post={post}/>)
          }
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default index;
