const Works = [{ image: "/head-2.png", style: "rotate-[-2px] hidden md:block" },{ image: "/holool.png", style: "rotate-[-2px]" },{ image: "/todo.png", style: "rotate-[2px]" },{ image: "/thread.png", style: "rotate-[2px] hidden md:block" }];
const Menus = [
  { name: "home", icon: "/home.svg", dis: "translate-x-0", path: "/" },
  // { name: "about", icon: "/nLogo.png", dis: "translate-x-16", path: "/about" },
  {
    name: "projects",
    icon: "/projects.svg",
    dis: "translate-x-16",
    path: "/projects",
  },
];

const Projects = [
  {
    name: "Portfolio",
    image: "/portfolio.svg",
    linkUrl: "/",
    linkName: "Portfolio",
    time: "September 10, 2023",
    languages: ["nextjs", "tailwind"],
  },
  {
    name: "Threads",
    image: "/threads.svg",
    linkUrl: "https://threads-drab-iota.vercel.app/",
    linkName: "Threads Clone",
    time: "August 15, 2023",
    languages: ["nextjs", "tailwind", "mongodb"],
  },
  {
    name: "ToDo App",
    image: "/todo.svg",
    linkUrl: "https://nour-agha99.github.io/ToDoApp-ReactJs/",
    linkName: "ToDoApp",
    time: "May 5, 2023",
    languages: ["react.js", "css"],
  },
  {
    name: "Head Phone",
    image: "/headPhone.svg",
    linkUrl: "https://nour-agha99.github.io/HeadPhone/",
    linkName: "HeadPhone",
    time: "December 29, 2022",
    languages: ["html", "css"],
  },
  {
    name: "NameTag Generator",
    image: "/GenerateNameTag.svg",
    linkUrl: "https://nour-agha99.github.io/NameTagGenerator/",
    linkName: "NameTagGenerator",
    time: "December 15, 2022",
    languages: ["html", "css", "js"],
  },
];
export { Works, Menus, Projects };
