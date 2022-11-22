import { useRef } from "react";
import BlogList from '../components/BlogList';
import RightSideBar from '../components/RightSideBar';
import Layout from "../components/layout";
function HomePage() {
  const darkMode = useRef(false);
  return (
      <div className='flex w-full flex-row'>
      <section className='w-full md:w-2/3 lg:w-3/4'>
      <BlogList/>
      </section>
      <section className='w-1/3 lg:w-1/4 hidden md:block border-l xl:ml-[-1px]'>
      <RightSideBar/>
      </section>
      </div>
  )
}
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default HomePage


