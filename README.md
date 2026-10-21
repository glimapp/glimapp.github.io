# Glim website

Official website: https://glimapp.github.io/ · 中文：https://glimapp.github.io/zh/

Static bilingual site, deployed by GitHub Pages from `main` at the repository root. English and Chinese are independent, server-rendered HTML documents (`index.html` and `zh/index.html`). Update both pages when changing product information. No build step, third-party scripts, analytics or cookies.

Each page includes a canonical URL, reciprocal hreflang links, Open Graph/Twitter metadata and SoftwareApplication JSON-LD. Keep `sitemap.xml` aligned when adding pages; `robots.txt` declares its location. Search indexing and rankings depend on search engines; Search Console ownership and sitemap submission are not configured by this repository.

Downloads link to the latest GitHub Release. Signed app update feeds remain release assets in `glimapp/glim`; the website does not proxy or replace them. Assets reference the main Glim repository.

官网由 GitHub Pages 从 `main` 根目录部署。中英文各有可直接抓取的静态 HTML 页面；更新产品信息时须同步维护。页面包含 canonical、双向 hreflang、社交分享标签与软件结构化数据，新增页面时同步更新站点地图。搜索引擎是否收录及排名由其决定；Search Console 所有权验证和站点地图提交需另外配置。
