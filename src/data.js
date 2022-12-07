import ContactList from "./Img/ContactList.png";
import ScoreKeeping from "./Img/ScoreKeeping.png";
import YoutubeClone from "./Img/YoutubeClone.png";
import HighlightText from "./Img/HighlightText.png";
import AvatarTv from "./Img/AvatarTv.png";
import RenderImage from "./Img/RenderImage.png";
import debug from "./Img/debug.jpeg";
import reactJs from "./Img/reactJs.png";
import redux from "./Img/redux.jpeg";

export const data = [
  {
    id: 1,
    projectName: "Contact List App",
    aboutForProject: (
      <>
        <p>Hello everyone,</p>
        <p>
          I have made this fully Responsive Simple Contact App In React Redux...
          I Have used ReactJS as a frontend. I Am not using any backend in this
          Project, so a just client-side application, This is a CRUD application
          where users can be able to add, update and delete the contact...
        </p>
        Here, I uses most important React JS features
        <ul>
          <li>React Hooks</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>ReactJS</li>
          <li>React Redux</li>
        </ul>
      </>
    ),
    link: "https://avtar-react-telephonic-library.netlify.app/",
    projectImg: ContactList,
    projectGithubLink: "https://github.com/ramavatarmeena99/Contact_List_App",
  },
  {
    id: 2,
    projectName: "Score Board In ReactJs",
    aboutForProject: (
      <>
        <p>
          Hello everyone, I have made this Fully Responsive Cricket Match Score
          Keeper in ReactJS , keeping in mind the rules of the game... Tried to
          write clean code and implemented DRY rule,
        </p>
        Here, I uses most important React JS features:-
        <p>Custom Hooks, HTML, CSS, ReactJS ,</p>
        Match Score Keeper includes some below features:
        <ul>
          <p>1-You can choose the Teams name and number of Overs yourself...</p>
          <p>
            2-Match results can be seen only after both the teams have completed
            all the overs or 10 wickets...
          </p>
          <p>
            3-If all the overs or 10 wickets of any one team fall, then that
            team cannot play further...
          </p>
          <p>4-The team with the most runs will be the winner</p>
        </ul>
      </>
    ),

    link: "https://score-keeping-app.netlify.app/",
    projectImg: ScoreKeeping,
    projectGithubLink:
      "https://github.com/ramavatarmeena99/Score-Board-In-ReactJs",
  },
  {
    id: 3,
    projectName: "Youtube Clone",
    aboutForProject: (
      <>
        <p>
          Hello everyone presenting Youtube Clone Responsive Web Aplication...
        </p>
        <p>
          Youtube Clone app uses Youtube Data API & Frontend based on React
          JS...{" "}
        </p>
        Here, I uses most important React JS features:-
        <p>-Custom Hooks, React Routers, HTML, CSS, ReactJS ,</p>
        Youtube Clone includes some below features:
        <ul>
          <p> 1-Browse videos by search...</p>
          <p>2-Sort by most popular...</p>
          <p>3-Get recommended videos related to search video...</p>
          <p> 4-Comments related to search video</p>
        </ul>
      </>
    ),

    link: "https://theyoutube.netlify.app/",
    projectImg: YoutubeClone,
    projectGithubLink: "https://github.com/ramavatarmeena99/Youtube-Clone",
  },
  {
    id: 4,
    projectName: " AvatarTv",
    aboutForProject: (
      <>
        <p>Hello everyone presenting AvatarTv Responsive Web Aplication...</p>
        <p>
          AvatarTv app uses Youtube Data API & Frontend based on React JS...
        </p>
        Here, I uses most important React JS features:-
        <p>-Custom Hooks, React Routers, HTML, CSS, ReactJS ,</p>
        AvatarTv includes some below features:
        <ul>
          <p>
            1-You can like any video and that video will come in like
            component...
          </p>
          <p>2-You can add videos to playlist...</p>
          <p>3-You can add videos to watch later...</p>
          <p> 4-Played videos will be shown in history</p>
        </ul>
      </>
    ),
    link: "https://avatar-tv.netlify.app/",
    projectImg: AvatarTv,
    projectGithubLink: "https://github.com/ramavatarmeena99/Avatar-TV",
  },
  {
    id: 5,
    projectName: "HighlightText And Array",
    aboutForProject: (
      <>
        <p>
          Hello everyone, I have made this Highlight Text And Array in ReactJS ,
          keeping in mind the rules of the game... Tried to write clean code and
          implemented DRY rule,
        </p>
        Technology Stack Used In This Project:-
        <ul>
          <li> ReactJs,</li>
          <li>Styled Components,</li>
          <li>HTML/CSS</li>
        </ul>
      </>
    ),

    link: "https://hightlighttextandarray.netlify.app/",
    projectImg: HighlightText,
    projectGithubLink:
      "https://github.com/ramavatarmeena99/Avatar-HighlightText-And-Array",
  },
  {
    id: 6,
    projectName: "Render Image",
    aboutForProject: (
      <>
        <p>
          Hello everyone, I have made this Render Image in ReactJS , keeping in
          mind the rules of the game... Tried to write clean code and
          implemented DRY rule,
        </p>
        Technology Stack Used In This Project:-
        <ul>
          <li> ReactJs,</li>
          <li>Styled Components,</li>
          <li>HTML/CSS</li>
        </ul>
      </>
    ),
    link: "https://avatarrenderimage.netlify.app/",
    projectImg: RenderImage,
    projectGithubLink:
      "https://github.com/ramavatarmeena99/Avatar-Render-Image",
  },
];

export const blogData = [
  {
    id: 1,
    blogTitle: "How To Debug A Code",
    blogTitleSecond: "...",
    blogLink: "https://medium.com/@meenaramavatar48/how-to-debug-a-code-125cb387a5a3",

    blogDiscription:
      "A debugger, unfortunately, isn’t something that can magically reveal all the problems or “bugs” in our code. Debugging means to run your code step by step in a debugging tool like Visual Studio, to find the exact point where you made a programming mistake. You then understand what corrections you need to make in your code and debugging tools often allow you to make temporary changes so you can continue running the program.",
    DebugImage: debug,

  },
  {
    id: 2,
    blogTitle:
      "ReactJS Tutorial for Beginners: Learn with Step by Step Example",
    blogDiscription:
      "ReactJS is an open-source front-end JavaScript library for building user interfaces. ReactJS is maintained by Facebook and a community of individual developers and companies. It is widely used as a base in building single-page websites and mobile applications. It is very easy to use, and it allows users to create reusable UI components.",
blogLink:"https://medium.com/@meenaramavatar48/react-js-notes-9aee2f2f53b4",
    DebugImage: reactJs,
  },
  {
    id: 3,
    blogTitle: "Beginner JavaScript Notes ",
    blogTitleSecond: "...",
    blogLink: "https://medium.com/@meenaramavatar48/javascript-24e404d02a19",
    blogDiscription:
      "JavaScript is a lightweight, cross-platform, and interpreted compiled programming language which is also known as the scripting language for webpages. It is well-known for the development of web pages, many non-browser environments also use it. ",

    DebugImage: redux,
  },
];
