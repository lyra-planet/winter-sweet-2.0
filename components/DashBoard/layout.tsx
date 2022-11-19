import LeftSideBar from "./LeftSideBar";

export default function Layout({ children }) {
    return (
      <div className="flex flex-row h-full w-full">
        <section className="w-1/5 border-r">
        <LeftSideBar/>
        </section>
        <section className="w-4/5">
        <main className=" h-full">{children}</main>
        </section>
        </div>
    )
  }