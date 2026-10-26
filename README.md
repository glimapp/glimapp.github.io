# Glim website

Official website: https://glimapp.github.io/ · 中文：https://glimapp.github.io/zh/

Static bilingual site, deployed by GitHub Pages from `main` at the repository root. English and Chinese are independent, server-rendered HTML documents (`index.html` and `zh/index.html`). Update both pages when changing product information. No build step. All six English and Chinese pages load Google Analytics 4 through the Google tag (`G-NXR4ZF7FD9`), which sends website usage data to Google and may use cookies.

Each page includes a canonical URL, reciprocal hreflang links, Open Graph/Twitter metadata and SoftwareApplication JSON-LD. Keep `sitemap.xml` aligned when adding pages; `robots.txt` declares its location. Search indexing and rankings depend on search engines; Search Console ownership and sitemap submission are not configured by this repository.

Downloads link to the latest GitHub Release. Signed app update feeds remain release assets in `glimapp/glim`; the website does not proxy or replace them. Product screenshots are served locally from `assets/`; branding assets reference the main Glim repository. Keep screenshot copies aligned with the product README.

官网由 GitHub Pages 从 `main` 根目录部署，无需构建。全部六个中英文页面均通过 Google tag（`G-NXR4ZF7FD9`）接入 Google Analytics 4，向 Google 发送网站使用数据，并可能使用 Cookie。中英文各有可直接抓取的静态 HTML 页面；更新产品信息时须同步维护。页面包含 canonical、双向 hreflang、社交分享标签与软件结构化数据，新增页面时同步更新站点地图。搜索引擎是否收录及排名由其决定；Search Console 所有权验证和站点地图提交需另外配置。

Engineering article: `/blog/why-glim/` and `/zh/blog/why-glim/`, shared CSS in `blog/article.css`. Article technical references follow current source documentation; published-build behavior remains defined by Release notes. Homepage links and the sitemap include both languages.
