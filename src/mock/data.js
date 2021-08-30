import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aman Shrivastava', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aman Shrivastava',
  subtitle: 'I love Building Amazing Products',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'WebFlix',
    info: '',
    info2: '',
    url: ' https://aman34503.github.io/WebFlix/',
    repo: 'https://github.com/aman34503/WebFlix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Telegram News Bot',
    info: 'A Telegram Bot',
    info2: '',
    url: '',
    repo: 'https://github.com/aman34503/Telegram-News-Bot', // if no repo, the button will not show up
  },
 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aman34503@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
   
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aman-shrivastava04/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aman34503',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
