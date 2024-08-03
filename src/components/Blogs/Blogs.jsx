import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";

const BlogsData = [
  {
    id: 1,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis nesciunt harum ut reiciendis nam doloribus saepe earum facere corporis",
    link: "#",
    img: Blogs1,
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis nesciunt harum ut reiciendis nam doloribus saepe earum facere corporis",
    link: "#",
    img: Blogs2,
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis nesciunt harum ut reiciendis nam doloribus saepe earum facere corporis",
    link: "#",
    img: Blogs3,
  },
  {
    id: 4,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis nesciunt harum ut reiciendis nam doloribus saepe earum facere corporis",
    link: "#",
    img: Blogs4,
  },
];

const Blogs = () => {
  return <>
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center font-poppins pb-8">Blogs</h1>

        <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-4 gap-6">
          {
            BlogsData.map((item) => {
              return (
                <UpdateFollower key={item.id}
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                    text: "read",
                    textFontSize: "3px",
                    scale: 5,
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-300 "
                  >

                    <img src={item.img} alt="" />

                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2 font-poppins">{item.title}</h1>

                      <p className="line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                </UpdateFollower>
              )
            })
          }
        </div>
      </div>
    </section>
  </>;
};

export default Blogs;
