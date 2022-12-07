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
    blogDiscription:
      "We should not try to write clean code in the Start..We should not write the code continuously, we should keep checking in the program again and again so that it can be known that the problem is coming in the code...(The problem of all the beginners is that they will first write all the code and then go and check whether the program is running or not...",
    DebugImage: debug,
  },
  {
    id: 2,
    blogTitle:
      "ReactJS Tutorial for Beginners: Learn with Step by Step Example",
    blogDiscription:
      "About ReactJs Reactjs ek Free(svatantr) aur open-source Front-end Javascript Library hai. ReactJs ka use hum interactive user Interface and web applications quickly banane ke liye kiya jata hai",

    DebugImage: reactJs,
  },
  {
    id: 3,
    blogTitle: "Beginner JavaScript Notes ",
    blogDiscription:
      "Use For Equal (===)- Nesting = Elements inside one element and object inside another object - code likh kr hmesa console jarur krwana hai jisse agr glti ho to hum phle hi sahi kar sake... - hume code clean likhna hai.. ",

    DebugImage: redux,
  },
];
