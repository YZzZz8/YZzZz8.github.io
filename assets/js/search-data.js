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
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a通知二测试",
          title: 'A通知二测试',
          description: "",
          section: "News",},{id: "news-a通知1测试",
          title: 'A通知1测试。',
          description: "",
          section: "News",},{id: "news-a通知三测试-sparkles-smile",
          title: 'A通知三测试! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-模型隐私性攻击机理",
          title: '模型隐私性攻击机理',
          description: "项目组考查了模型反演攻击（Model Inversion Attacks，MIA）对基于学习的系统的数据隐私构成的威胁。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_%E6%A8%A1%E5%9E%8B%E9%9A%90%E7%A7%81%E6%80%A7%E6%94%BB%E5%87%BB%E6%9C%BA%E7%90%86/";
            },},{id: "projects-模型隐私性防护机理",
          title: '模型隐私性防护机理',
          description: "项目组对MIA防护进行了理论分析，形式化定义了狭义和广义的MIA防护问题，并进一步提出神经蜜点（Neural Honeypoint）以捕获攻击行为。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_%E6%A8%A1%E5%9E%8B%E9%9A%90%E7%A7%81%E6%80%A7%E9%98%B2%E6%8A%A4%E6%9C%BA%E7%90%86/";
            },},{id: "projects-模型鲁棒性优化机理",
          title: '模型鲁棒性优化机理',
          description: "围绕对抗训练中“博弈建模假设是否合理”这一核心问题开展研究。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_%E6%A8%A1%E5%9E%8B%E9%B2%81%E6%A3%92%E6%80%A7%E4%BC%98%E5%8C%96%E6%9C%BA%E7%90%86/";
            },},{id: "projects-人工智能韧性分析",
          title: '人工智能韧性分析',
          description: "围绕人工智能技术在关键基础设施中的安全运行问题开展系统研究。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E9%9F%A7%E6%80%A7%E5%88%86%E6%9E%90/";
            },},{id: "projects-多模态大模型幻觉缓解",
          title: '多模态大模型幻觉缓解',
          description: "研究了大型视觉语言模型的幻觉影响。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B9%BB%E8%A7%89%E7%BC%93%E8%A7%A3/";
            },},{id: "projects-大模型脆弱性评估",
          title: '大模型脆弱性评估',
          description: "针对大模型的越狱攻击边界，并提出了基于分析的越狱方法，通过利用大模型日益增长的分析和推理能力，揭示了它们在面对基于分析的任务时的潜在漏洞。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%84%86%E5%BC%B1%E6%80%A7%E8%AF%84%E4%BC%B0/";
            },},{id: "projects-大模型越狱风险评估",
          title: '大模型越狱风险评估',
          description: "提出了一种新的针对LLM的越狱提示（prompt）生成方法。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%B6%8A%E7%8B%B1%E9%A3%8E%E9%99%A9%E8%AF%84%E4%BC%B0/";
            },},{id: "projects-模型后门鲁棒性评估",
          title: '模型后门鲁棒性评估',
          description: "项目组围绕基于机器学习的网络流量分类模型在后门攻击下的安全性问题开展研究。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_%E6%A8%A1%E5%9E%8B%E5%90%8E%E9%97%A8%E9%B2%81%E6%A3%92%E6%80%A7%E8%AF%84%E4%BC%B0/";
            },},{id: "projects-语言模型非侵入式轻量级后门防护",
          title: '语言模型非侵入式轻量级后门防护',
          description: "项目组提出LT-Defense，这是首个利用长尾效应且无需搜索的后门防御方法。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E9%9D%9E%E4%BE%B5%E5%85%A5%E5%BC%8F%E8%BD%BB%E9%87%8F%E7%BA%A7%E5%90%8E%E9%97%A8%E9%98%B2%E6%8A%A4/";
            },},{id: "projects-大模型脆弱性评估",
          title: '大模型脆弱性评估',
          description: "项目组研究了在不同强度的防御手段、不同类型的行为模式下，数据提供者可信度评估与分析方法。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_%E9%9D%A2%E5%90%91%E6%95%B0%E6%8D%AE%E6%8A%95%E6%AF%92%E7%9A%84%E6%95%B0%E6%8D%AE%E6%BA%90%E5%8F%AF%E4%BF%A1%E6%80%A7%E5%BB%BA%E6%A8%A1/";
            },},{id: "projects-其他维度的机器学习安全性及可信性",
          title: '其他维度的机器学习安全性及可信性',
          description: "其他维度的安全性分析方法。",
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
