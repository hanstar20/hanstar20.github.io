module.exports = {
  title: `Hanboo Log`,
  description: `바부의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://hanstar20.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `hanstar20/hanstar20.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김한별`,
    bio: {
      role: `개발자`,
      description: ['상상을 현실로 만드는', '성장하고 싶은', '능동적으로 일하는'],
      thumbnail: 'sample.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/hanstar20`, // `https://github.com/hanstar20`,
      linkedIn: `https://www.linkedin.com/in/findhanbyul`, // `https://www.linkedin.com/in/findhanbyul`,
      email: `hanstar07@gmail.com`, // `hanstar07@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.06 ~ 2021.12',
        activity: '엘리스 AI 트랙 2기',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],
  },
};
