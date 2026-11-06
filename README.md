# Glim website

Official website: https://glimapp.github.io/ · 中文：https://glimapp.github.io/zh/

Static bilingual site, deployed by GitHub Pages from `main` at the repository root. English and Chinese are independent, server-rendered HTML documents (`index.html` and `zh/index.html`). Update both pages when changing product information. No build step. All twelve English and Chinese pages load the shared `assets/analytics.js` Google Analytics 4 integration (`G-NXR4ZF7FD9`). It runs only on the production hostname, respects Do Not Track, and strips non-campaign query parameters and URL fragments from the configured page URL. GA sends website usage data to Google and may use cookies.

Each page includes a canonical URL, reciprocal hreflang links, Open Graph/Twitter metadata and page-specific JSON-LD. Keep `sitemap.xml` aligned when adding pages; `robots.txt` declares its location. Search indexing and rankings depend on search engines; The URL-prefix Search Console property was verified through the existing Google Analytics integration. Keep that integration available for verification; sitemap submission and Google processing status are managed in Search Console.

Downloads link to the latest GitHub Release. Signed app update feeds remain release assets in `glimapp/glim`; the website does not proxy or replace them. Product screenshots are served locally from `assets/`; branding assets reference the main Glim repository. Keep screenshot copies aligned with the product README.

官网由 GitHub Pages 从 `main` 根目录部署，无需构建。全部十二个中英文页面均通过共享的 `assets/analytics.js`（`G-NXR4ZF7FD9`）接入 Google Analytics 4，向 Google 发送网站使用数据，并可能使用 Cookie。中英文各有可直接抓取的静态 HTML 页面；更新产品信息时须同步维护。页面包含 canonical、双向 hreflang、社交分享标签与软件结构化数据，新增页面时同步更新站点地图。搜索引擎是否收录及排名由其决定；Search Console 已通过现有 Google Analytics 完成网址前缀属性验证，并提交站点地图；抓取与处理状态须在控制台核对。

Engineering article: `/blog/why-glim/` and `/zh/blog/why-glim/`, shared CSS in `blog/article.css`. Article technical references follow current source documentation; published-build behavior remains defined by Release notes. Homepage links and the sitemap include both languages.

Scenario guides: `/markdown-viewer/`, `/json-viewer/`, `/csv-viewer/` and their `/zh/` equivalents. Each includes real app captures and downloadable example files. `assets/walkthrough.js` enhances screenshot links on the homepage; links still work without JavaScript. Shared scenario/home styling lives in `assets/site.css`.

GA events: `release_click` means a click to the latest GitHub Release page, not a DMG download or installation; `github_click` means the repository root; `example_download` means a sample-file click; `scenario_open` means a scenario-page click. Events include page, destination path, language and placement. Local previews and Do Not Track visits send no events. Confirm receipt in GA after deployment before treating the new events as measured conversions. Collection began October 26, 2026; earlier dates in a report do not establish zero historical traffic.
