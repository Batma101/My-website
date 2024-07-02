import { faL } from "@fortawesome/free-solid-svg-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "GymForm",
    description:
      "Gym Form is currently an app I am working on. The app is made in React Native. The app will use Open CV and machine learning frameworks such as Media pipe to detect users. The app will help fix gym form",
    technologies: ["React", "Typescript", "Python"],
    github: "https://github.com/Batma101/Mediapipe-Pose-Estimation-Python",
    demo: "",
    image: require(".//../../public/projects/GymformPics.png"),
    available: false,
  },
  {
    id: 1,
    name: "Megavolts.ca",
    description:
      "Megavolts Electric is a website made for one of my clients. originally made in nextJs but switched it over to WIX to make it easier for him to update anything if needed. ",
    technologies: ["Vanilla Javascript","nextJS" ,"WIX"],
    github: "nope",
    demo: "https://www.megavolts.ca/",
    image: require(".//../../public/projects/megavolts.png"),
    available: true,
  },
  {
    id: 2,
    name: "Ufc Fight Archives",
    description:
      "A fight archive for the UFC. Search any ufc event and see what fights happened on that card. Users can create accounts and log in with authentication. Can show live version upon request ",
    technologies: ["React", "CSS", ,"NodeJs", "MongoDb", "NoSql"],
    github: "https://github.com/Batma101/Ufc-Fight-Archive",
    demo: "http://alpaca-image-generator-beta.vercel.app",
    image: require(".//../../public/projects/ufcApp.png"),
    available: false,
  },
  {
    id: 3,
    name: "Forms Site",
    description:
      "Website for client to remove need for entering data into excel. Instead the website has multiple forms for all of their use cases. Forms are linked straight to their backend databases. Can show upon request ",
    technologies: ["JavaScript", "NodeJs" , "CSS", "Formik"],
    github: "https://github.com/Batma101",
    demo: "https://github.com/Batma101",
    image: require(".//../../public/projects/FaisalsProj.png"),
    available: false,
  },
  {
    id: 4,
    name: "Multiplayer Tetris",
    description:
      "A multiplayer tetris game made in Vanilla Javascript, You can send your room id to another player and play against each other! Can show live demo upon request",
    technologies: ["Vanilla Javascript", "NodeJs"],
    github: "https://github.com/Batma101/Vanilla-Tetris",
    demo: "",
    image: require(".//../../public/projects/tetris.png"),
    available: false,
  },
  // {
  //   id: 5,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
