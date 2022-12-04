import React from 'react'
import Layout from '../../components/layout'
import Loading from "../../components/Friend/Main/loading"
import Item from "../../components/Friend/Main/item";
import useAllFriend from "../../hooks/front/useAllFriend";
const index = () => {
  const friends = useAllFriend()
  return (
    <div className="py-8 px-10 space-y-10 w-full justify-center">
        <section>
            <h1 className="flex items-center space-x-2 text-3xl font-bold font-serif">
            <p>Lyra.Planet</p>
            <p className="w-2 h-2 bg-red-500"></p>
            <p>好友</p>
            </h1>
        </section>
    <section className="w-full grid grid-cols-1 justify-between  lg:grid-cols-2 2xl:grid-cols-3 pb-10">
    {friends !== false ? (
        friends.map((post) => (
                <Item friend={post}/>
        ))
      ) : (
        <Loading/>
      )}
    </section>
    </div>
  );
};

index.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
export default index