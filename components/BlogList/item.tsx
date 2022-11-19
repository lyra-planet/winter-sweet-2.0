import Link from "next/link";
import { ArrowRight, Play } from "../../assets";
import { formatDate } from "../../lib/dateRelative";
const Item = ({ post }) => {
  console.log(post.comments)
  return (
    <section
      className="
    group/box
    space-y-4 border-b py-4
    px-5
    flex
    w-full
    flex-col justify-around
    text-sm
    first:text-base
    xl:grid-r
    xl:px-6
    xl:border-l
    xl:border-collapse
    xl:ml-[-1px]
    xl:text-sm
    first:space-y-10
    first:xl:col-span-2
    first:2xl:row-span-2
    first:2xl:col-span-1
    first:2xl:px-8"
    >
      <div className="space-y-4 2xl:group-[:first-child]/box:space-y-10">
        <hgroup>
          <h3 className="flex items-center justify-between text-neutral-400 font-serif cursor-default">
            <p>
            <span className="text-sm">No.</span>
            <span className="text-lg ml-[0.1rem]">{post.count}</span>
            </p>
            <p className=" text-neutral-400 translate-x-[-1rem] opacity-0 group-hover/box:opacity-100 group-hover/box:translate-x-0 transition duration-150">
            <span className="text-sm">@</span>
            <span className="text-sm">{post.authorName.name} 提交</span>
            </p>
          </h3>
          <Link href={`/posts/${encodeURIComponent(post.id)}`}>
            <h1
              className="
            cursor-pointer text-3xl font-semibold hover:text-red-500

            2xl:group-[:first-child]/box:text-4xl
            transition duration-300"
            >
              {post.title}
            </h1>
          </Link>
        </hgroup>
        <div className="w-full">
          <div
            className=" relative
          text-neutral-500
          2xl:group-[:first-child]/box:text-xl
          group-[:first-child]/box:text-neutral-600"
          >
            <div className="inline">
              <span
                className="prose"
                dangerouslySetInnerHTML={{ __html: post.excerpt?.[0] }}
              ></span>

              <span
                className="prose hidden group-[:first-child]/box:inline"
                dangerouslySetInnerHTML={{ __html: post.excerpt?.[1] }}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col flex-nowrap justify-between space-y-3
        "
      >
        <ul className="flex items-center space-x-1 text-sm text-gray-400 font-serif">
          <li className=" whitespace-nowrap">{formatDate(post.createdAt)}</li>
          <li className="inline md:group-[:not(:first-child)]/box:hidden lg:inline bg-red-500 w-1 h-1" />
          <li className=" bg-red-500 w-1 h-1" />
          <li className="flex flex-row">
            [<ul className="flex flex-row space-x-1">
            {
              post.tags.map(tag=>(
              <li key={tag}>
            #
            <span className="hover:text-red-500 transition duration-300 cursor-pointer">
              <Link href={"/"}>{tag}</Link>
            </span>
              </li>
              ))
            }
            </ul>
            ]
          </li>
          <li className=" bg-red-500 w-1 h-1" />
          <li>
          <Link
                href={`/posts/${encodeURIComponent(post.id)}`}
                className="
            inline-block
            relative  no-underline
            z-10 bg-radial cursor-pointer group font-serif text-sm p-1
            hover:text-white
            group/comment
            before:content-['']
            before:absolute
            before:w-0
            before:h-full
            before:left-0
            before:top-0
            before:z-0
          before:bg-red-500
            hover:before:w-20
            before:transition-all
            before:duration-300
            transition-all duration-150
            "
              >
                <span className="relative z-10 font-semibold whitespace-nowrap">
                  {post.comments.length} 条评论
                  <ArrowRight className="inline absolute w-3  m-0 scale-0 bottom-[0.1rem] z-10 text-white group-hover:scale-100  transition-all duration-150" />
                </span>
          </Link>
          </li>
        </ul>

        <Link href={`/posts/${encodeURIComponent(post.id)}`}>
          <div
            className="
        group-[:not(:first-child)]/box:flex
        hidden
        hover:bg-red-500
        hover:text-white text-black  justify-left w-[6.5rem] items-center cursor-pointer
        transition duration-300 group/readmore"
          >
            <p className="mr-1 bg-red-500 w-5 h-5 flex justify-center items-center">
              <Play className="w-4 text-white" />
            </p>
            <p
              className=" whitespace-nowrap
        "
            >
              Read More
            </p>
          </div>

          <div
            className="
        inline-flex  group-[:not(:first-child)]/box:hidden
        bg-red-500 text-white px-2 py-1  justify-center items-center cursor-pointer
        md:text-sm
        hover:scale-105 transition duration-300 group/readmore"
          >
            <p className="mr-1">
              <Play className="w-5" />
            </p>

            <p
              className=" whitespace-nowrap
        "
            >
              Read More
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Item;
