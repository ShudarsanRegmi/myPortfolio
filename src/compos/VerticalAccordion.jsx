import { FiBarChart, FiBell, FiDollarSign, FiPlay} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-[#0d0d0e]">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description,link="#" }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-black-300 hover:bg-green-900 transition-colors p-3  flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group text-white"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-slate-200 text-black grid place-items-center rounded-full">
          <a href={link} target="_blank">
          <Icon />
          </a>
        </div>
        {/* chuchho */}
        <span className="w-4 h-4 bg-[#07061a] group-hover:bg-green-900 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;


const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: { 
    width: "0%",
    height: "100%",
  },
};


const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};


const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};




const items = [
  {
    id: 1,
    title: "Packet Sniffer",
    Icon: FaGithub,
    imgSrc:
      "/sniffer.jpeg",
    description:
      "I have completed a packet sniffer project written in C, focusing on key features such as capturing TCP/UDP packet thumbnails, displaying detailed TCP/UDP packet information, and implementing source and destination IP-based filters. This project involved extensive exploration of network protocols through RFCs, in-depth study of Linux man pages for network programming, and analysis of legacy C code to enhance programming skills. The project is available for review and collaboration at this link.",
      link: "https://github.com/ShudarsanRegmi/packetSniffer"
  },

  {
    id: 2,
    title: "Windows 11 Web",
    Icon: FaGithub,
    imgSrc:
      "/windows11.png",
    description:
      "Windows 11 Web was a collaborative project developed with fellow developers, undertaken in anticipation of the Windows 11 launch. The project aimed to provide users, who might be restricted by hardware limitations or limited rollout of different editions, the opportunity to experience the Windows 11 user interface directly in their browsers. This initiative allows users to explore and interact with the new UI features of Windows 11 without needing to install the operating system.",
      link: "https://github.com/Rajaniraiyn/windows11"
  },
  {
    id: 3,
    title: "Python Dictionary",
    Icon: FaGithub,
    imgSrc:
      "/dictionary.png",
    description:
      "Python Dictionary was a simple prject that uses the free dictionary API to fetch the word meaning and other aspects of the words. This project provides a good interface to interact with the API.",
  },
];