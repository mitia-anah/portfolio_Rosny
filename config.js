module.exports = {
  pathPrefix: '',
  siteUrl: 'https://rolwinreevan.com',
  siteTitle: 'Rolwin Reevan',
  siteDescription: 'Logbook of a software developer',
  author: 'Rolwin Reevan',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    tag: 'works',
  },
  social: {
    github: 'https://github.com/mitia-anah',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'rosny',
  works: {
    birthdayApp: {
      name: 'Birthday App',
      description: 'Birthday app is an application that is built to help people to remember their birth dates and ages. It is built with only HTML/CSS and javascript functionality.',
      color: '#f0da50',
    },
    photograph: {
      name: 'Photograph Site',
      description: 'This project is mainly about photographic portfolio, which photograher can use to show and present their works. The project is built with HTML/CSS, SCSS and there is also some javascript functionalities being applied to it to create the slider images.',
      color: '#90c53f',
    },
    quiz: {
      name: 'Country Quiz App',
      description: 'This application is about quiz, which can help people to learn about a name of country and its flag.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
