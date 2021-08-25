import WikiOlympusDesktopImage from "../Assets/projects/wiki-olympus-desktop.jpg";
import WikiOlympusMobileImage from "../Assets/projects/wiki-olympus-mobile.jpg";
import OrganicDesktopImage from "../Assets/projects/organic-desktop.jpg";
import OrganicMobileImage from "../Assets/projects/organic-mobile.jpg";
import YummyMenuDesktopImage from "../Assets/projects/yummy-menu-desktop.jpg";
import YummyMenuMobileImage from "../Assets/projects/yummy-menu-mobile.jpg";
import PintHouseDesktopImage from "../Assets/projects/pint-house-desktop.jpg";
import PintHouseMobileImage from "../Assets/projects/pint-house-mobile.jpg";
import WebirdDesktopImage from "../Assets/projects/webird-desktop.jpg";
import WebirdMobileImage from "../Assets/projects/webird-mobile.jpg";
import ApexGraphicsDesktopImage from "../Assets/projects/apex-graphics-desktop.jpg";
import ApexGraphicsMobileImage from "../Assets/projects/apex-graphics-mobile.jpg";
import StyleDesktopImage from "../Assets/projects/style-desktop.jpg";
import StyleMobileImage from "../Assets/projects/style-mobile.jpg";

export const projectsData = [
  {
    title: "yummy menu",
    desktopScreenshot: YummyMenuDesktopImage,
    mobileScreenshot: YummyMenuMobileImage,
    description: `Production Size Fast Food App with Features Like Authentication, Profile, ...`,
    date: "4/12/2021",
    skills: "Design / Development",
    technologies: "Next JS, React Hooks, Sass, Mongo DB, Adobe XD",
    demoLink: "https://yummy-menu.vercel.app",
    githubRepoLink: "https://github.com/farhad-gh-dev/yummy-menu",
  },
  {
    title: "wiki olympus",
    desktopScreenshot: WikiOlympusDesktopImage,
    mobileScreenshot: WikiOlympusMobileImage,
    description: `An Educational Application About Greek Gods 
        and Their Mythology`,
    date: "7/5/2021",
    skills: "Design / Development",
    technologies:
      "React JS, Typescript, Redux, React-Router, Sass, Jest, Mongo DB, Adobe XD",
    demoLink: "https://olympus-tau.vercel.app/",
    githubRepoLink: "https://github.com/farhad-gh-dev/olympus",
  },
  {
    title: "organic",
    desktopScreenshot: OrganicDesktopImage,
    mobileScreenshot: OrganicMobileImage,
    description: `A Template to Display Products with Three Different Themes`,
    date: "6/3/2021",
    skills: "Development",
    technologies: "React JS, Typescript, Redux, Sass",
    demoLink: "https://organic-alpha.vercel.app/",
    githubRepoLink: "https://github.com/farhad-gh-dev/organic",
  },
  {
    title: "apex graphics",
    desktopScreenshot: ApexGraphicsDesktopImage,
    mobileScreenshot: ApexGraphicsMobileImage,
    description: `A Feature Rich Design Agency Landing Page.`,
    date: "11/2/2020",
    skills: "Development",
    technologies: "Html 5, CSS 3, JQuery, Isotope JS, Bootstrap, Sass",
    demoLink: "https://farhad-gh-dev.github.io/apex-graphics/",
    githubRepoLink: "https://github.com/farhad-gh-dev/apex-graphics",
  },
  {
    title: "pint house",
    desktopScreenshot: PintHouseDesktopImage,
    mobileScreenshot: PintHouseMobileImage,
    description: `A Stunning Landing Page for People Who Loves to Have a Drink and Relax`,
    date: "10/9/2020",
    skills: "Design / Development",
    technologies: "Html 5, CSS 3, JQuery, Bootstrap, Sass",
    demoLink: "https://farhad-gh-dev.github.io/pint-house/",
    githubRepoLink: "https://github.com/farhad-gh-dev/pint-house",
  },
  {
    title: "webird",
    desktopScreenshot: WebirdDesktopImage,
    mobileScreenshot: WebirdMobileImage,
    description: `A Single Page Application for Educational Services & Content`,
    date: "8/21/2020",
    skills: "Design / Development",
    technologies: "Html 5, CSS 3, JQuery, Bootstrap, Sass",
    demoLink: "https://farhad-gh-dev.github.io/webird/",
    githubRepoLink: "https://github.com/farhad-gh-dev/webird",
  },
  {
    title: "style above",
    desktopScreenshot: StyleDesktopImage,
    mobileScreenshot: StyleMobileImage,
    description: `A Professional Landing Page for a Design Company.`,
    date: "6/12/2020",
    skills: "Development",
    technologies: "Html 5, CSS 3, JQuery, Bootstrap",
    demoLink: "https://farhad-gh-dev.github.io/style-above/",
    githubRepoLink: "https://github.com/farhad-gh-dev/style-above",
  },
];

export type ProjectsDataType = typeof projectsData;
export type ProjectType = typeof projectsData[0];
