import Gallery from "@/components/Gallery";
import { images } from "@/libs/photoLibs";
import Nav from "@/components/Nav";
import Invite from "@/components/Invite";
import GuestBook from "@/components/GuestBook";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import Gift from "@/components/Gift";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto">
      <div id="top" className="flex justify-center flex-col items-center">
        <Nav />
        <div className="w-full h-full bg-neutral-200 shadow-lg flex flex-col items-center py-12 space-y-4">
          <div className="flex flex-col items-center pb-12 w-full">
            <h1>00 & 00</h1>
            <p>결혼합니다</p>
            <img className="w-[90%] my-8" src="/images/2.jpg" />
            <span>2024.01.01 일요일 오후 2시</span>
            <span>00 웨딩홀</span>
          </div>

          <Invite />

          <div
            id="gallery"
            className="w-full bg-white flex flex-col items-center py-10 space-y-8"
          >
            <h1>신랑신부 사진첩</h1>
            <Gallery images={images} />
          </div>

          <GuestBook />
          <Post />
          <Pagination />
          <Gift />
          <Location />
        </div>
      </div>
    </div>
  );
}
