import { duration } from "@material-ui/core";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOpacity } from "react-icons/md";
import { UpdateFollower } from "react-mouse-follower";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
// import Headphone4 from "../../assets/headphone4.png";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphone Wireless",
    price: "₹5,000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nostrum, sequi magni maxime alias dolorem hic quisquam at velit est voluptate veniam error optio fugit",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphone Wireless 2",
    price: "₹5,000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nostrum, sequi magni maxime alias dolorem hic quisquam at velit est voluptate veniam error optio fugit",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphone Wireless 3",
    price: "₹5,000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nostrum, sequi magni maxime alias dolorem hic quisquam at velit est voluptate veniam error optio fugit",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
  // {
  // 	id: 4,
  // 	image: Headphone4,
  // 	title: "Headphone Wireless 4",
  // 	price: "₹5,000",
  // 	description:
  // 		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nostrum, sequi magni maxime alias dolorem hic quisquam at velit est voluptate veniam error optio fugit",
  // 	modal: "Modal Brown",
  // 	bgColor: "#8b5958",
  // },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>

      <section className="bg-brandDark text-white font-varela">

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">

          {/* Headphone Info */}{" "}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">

            <div className="space-y-5 text-center md:text-left">

              {/* Headphone Title */}
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {" "}
                    {activeData.title}{" "}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80">
                  {activeData.description}{" "}
                </motion.p>
              </AnimatePresence>

              {/* Buy and Listen button */}
              <AnimatePresence mode="wait">

                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} alt="Headphone Wireless" />
                      </div>
                    )
                  }}
                >

                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{
                      backgroundColor: activeData.bgColor,
                    }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                    type="button"
                  >
                    Buy and Listen
                  </motion.button>

                </UpdateFollower>
              </AnimatePresence>

              {/* Headphone List Seperator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white " />

                <p className="uppercase text-sm "> Top Headphones for you </p>

                <div className="w-20 h-[1px] bg-white " />
              </div>

              {/* Headphone list switcher */}
              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                      key={item.id}
                    >
                      <div

                        onClick={() => handleActiveData(item)}
                        className="grid grid-cols-2 place-items-center cursor-pointer"
                      >
                        <div>
                          <img className="w-[200px]" src={item.image} alt="" />
                        </div>{" "}
                        <div className="space-y-2">
                          <p className="text-base font-bold"> {item.price} </p>{" "}
                          <p className="text-xs font-normal text-nowrap">
                            {" "}
                            {item.modal}{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex flex-col justify-end items-center">

            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 0, }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                exit={{
                  opacity: 0, scale: 0.9, y: 100,

                  transition: {
                    duration: 0.2,
                  }

                }}
                src={activeData.image}
                className="w-[300px] md:w-[400px] xl:w-[550px]"
                alt=""
              />
            </AnimatePresence>
          </div>

          {/* Whatsapp Icon */}{" "}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99] mix-blend-difference">
            <a href="https">
              <FaWhatsapp />
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section > {" "}
    </>
  );
};

export default Hero;
