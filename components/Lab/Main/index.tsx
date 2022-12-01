import {blogListTimeLine} from "../../../lib/timeLineFormat";
import Loading from "./loading"
import Item from "./item";
import useAllLabGadget from "../../../hooks/front/useAllLabGadget";
const index = () => {
  const labGadgets = useAllLabGadget()
  return (
    <div className="py-8 px-10 space-y-10 w-full justify-center">
        <section>
            <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
            <p>Lyra.Planet</p>
            <p className="w-2 h-2 bg-red-500"></p>
            <p>实验室</p>
            </h1>
        </section>
    <section className="flex flex-col">
    {labGadgets !== false ? (
        blogListTimeLine(labGadgets).map(({ time, posts }) => (
          <section key={time} className="space-y-10">
            <section className="
            sticky top-0
            z-10
            text-2xl font-semibold flex items-center
            after:content-[''] after:border-b after:w-full after:absolute after:right-0 after:z-10
            w-full
            bg-white
            ">
                <div className="flex items-center relative z-20 pr-2 bg-white space-x-1">
                <p className=" text-red-500">{time}</p>
                <p className="w-1.5 h-1.5 bg-neutral-300"></p>
                <p className="text-neutral-400 font-normal text-xl"><span className="font-serif">{posts.length}</span>个项目</p>
                </div>

            </section>
            <section className="w-full grid grid-cols-1 justify-between  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  pb-10">
            {posts?.map((post) => (
                <Item post={post}/>
            ))}
            </section>
          </section>
        ))
      ) : (
        <Loading/>
      )}
    </section>
    </div>
  );
};

export default index;
