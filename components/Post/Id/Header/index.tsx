import React from "react";
import { formatDate } from "../../../../lib/dateRelative";

const index = ({ post }) => {
  return (
    <div className="space-y-4 2xl:space-y-10 border-b pt-10 w-full">
      <hgroup>
        <h3 className="flex items-center text-neutral-400 font-serif cursor-default">
          <p className="text-lg">No.</p>
          <p className="text-2xl ml-[0.1rem]">{post.count}</p>
        </h3>
        <h1
          className="
      cursor-pointer text-4xl font-semibold hover:text-red-500

      2xl:text-5xl
      transition duration-300"
        >
          {post.title}
        </h1>
      </hgroup>

      <div className="flex justify-end">
        <div className="bg-black p-1 text-white font-serif border-b-2 border-red-500">
          {formatDate(post.createAt)}
        </div>
      </div>
    </div>
  );
};
export default index;
