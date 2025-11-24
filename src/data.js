import kieransSoundsImg from "./assets/images/thumbnails/thumbnail_kierans_sounds.jpg";
import waldoImg from "./assets/images/thumbnails/thumbnail_waldo.jpg";
import comingSoonImg from "./assets/images/thumbnails/thumbnail_coming_soon.jpg";

const disclaimer = "Note: Hosted on Render's free trial. Initial load may take 30-60 seconds as the servers wake up.";

export const projects = [
    {
        title: "Kieran's Sounds",
        description: `A full-stack relaxation noise application that allows users to create accounts,
         upload custom sounds and songs, and manage their own playlists.`,
        thumbnail: kieransSoundsImg,
        github: "https://github.com/Kieran-Go/kierans-sounds",
        liveDemo: "https://kierans-sounds.vercel.app/",
        disclaimer: disclaimer,
    },
    {
        title: "Where's Waldo?",
        description: `A full-stack "Where's Waldo?" web app where players search interactive scenes, submit their
         completion times and compete on a live leaderboard.`,
        thumbnail: waldoImg,
        github: "https://github.com/Kieran-Go/wheres-waldo",
        liveDemo: "https://wheres-waldo-swart.vercel.app/",
        disclaimer: disclaimer,
    },
    {
        title: "More Projects Coming Soon",
        description: `More full-stack projects are on the way. I’m actively building and refining new apps to 
         showcase my work and continue growing as a developer.`,
        thumbnail: comingSoonImg,
    },
]

export const about = {
    description: [
        `Recent IT graduate with a Diploma in Advanced Programming, motivated to apply my skills
        in real-world environments. Proficient in HTML, CSS, and JavaScript, with hands-on experience building
        full-stack applications using React (with Vite), Node.js (with Express), and PostgreSQL.
        Currently expanding my capabilities through self-directed learning and personal full-stack projects.`,

        `I also have a strong interest in game development and am working on a GameMaker project as a hobby.
        Seeking an entry-level developer position where I can contribute to a collaborative team and grow
        as a developer.`,
    ],

    skills: [
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "React",
        "Node.js",
        "Express",
        "REST APIs",
        "PostGreSQL",
        "Git & Github",
        "VS Code",
        "Postman",
        "Responsive Design",
    ],
}