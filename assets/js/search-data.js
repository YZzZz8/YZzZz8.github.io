// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-学术成果",
          title: "学术成果",
          description: "实验室发表的学术论文、专利等成果，按时间倒序排列.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-研究方向",
          title: "研究方向",
          description: "实验室主要研究方向。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-成员",
          title: "成员",
          description: "实验室内成员。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-例子",
          title: '例子',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_%E6%A8%A1%E5%9E%8B%E9%9A%90%E7%A7%81%E6%80%A7%E6%94%BB%E5%87%BB%E6%9C%BA%E7%90%86/";
            },},{id: "projects-例子",
          title: '例子',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_%E6%A8%A1%E5%9E%8B%E9%9A%90%E7%A7%81%E6%80%A7%E9%98%B2%E6%8A%A4%E6%9C%BA%E7%90%86/";
            },},{id: "projects-模型鲁棒性优化机理",
          title: '模型鲁棒性优化机理',
          description: "围绕对抗训练中“博弈建模假设是否合理”这一核心问题开展研究。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_%E6%A8%A1%E5%9E%8B%E9%B2%81%E6%A3%92%E6%80%A7%E4%BC%98%E5%8C%96%E6%9C%BA%E7%90%86/";
            },},{id: "projects-多模态大模型幻觉缓解",
          title: '多模态大模型幻觉缓解',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E9%9F%A7%E6%80%A7%E5%88%86%E6%9E%90/";
            },},{id: "projects-多模态大模型幻觉缓解",
          title: '多模态大模型幻觉缓解',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B9%BB%E8%A7%89%E7%BC%93%E8%A7%A3/";
            },},{id: "projects-大模型脆弱性评估",
          title: '大模型脆弱性评估',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%84%86%E5%BC%B1%E6%80%A7%E8%AF%84%E4%BC%B0/";
            },},{id: "projects-大模型脆弱性评估",
          title: '大模型脆弱性评估',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%B6%8A%E7%8B%B1%E9%A3%8E%E9%99%A9%E8%AF%84%E4%BC%B0/";
            },},{id: "projects-大模型脆弱性评估",
          title: '大模型脆弱性评估',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_%E6%A8%A1%E5%9E%8B%E5%90%8E%E9%97%A8%E9%B2%81%E6%A3%92%E6%80%A7%E8%AF%84%E4%BC%B0/";
            },},{id: "projects-大模型脆弱性评估",
          title: '大模型脆弱性评估',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E9%9D%9E%E4%BE%B5%E5%85%A5%E5%BC%8F%E8%BD%BB%E9%87%8F%E7%BA%A7%E5%90%8E%E9%97%A8%E9%98%B2%E6%8A%A4/";
            },},{id: "projects-大模型脆弱性评估",
          title: '大模型脆弱性评估',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_%E9%9D%A2%E5%90%91%E6%95%B0%E6%8D%AE%E6%8A%95%E6%AF%92%E7%9A%84%E6%95%B0%E6%8D%AE%E6%BA%90%E5%8F%AF%E4%BF%A1%E6%80%A7%E5%BB%BA%E6%A8%A1/";
            },},{id: "projects-大模型脆弱性评估",
          title: '大模型脆弱性评估',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_%E5%85%B6%E4%BB%96%E7%BB%B4%E5%BA%A6%E7%9A%84%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%AE%89%E5%85%A8%E6%80%A7%E5%8F%8A%E5%8F%AF%E4%BF%A1%E6%80%A7/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
