---
permalink: /
title: "phasheen"
title_zh: "phasheen"
author_profile: true
lang: en
redirect_from:
  - /about/
  - /about.html
---

<div data-lang="en">
  <blockquote>
    I am a technology believer. I want to build useful systems that make research more accessible and, in small but real ways, benefit humanity.
  </blockquote>

  <p>I am a Ph.D. student in Biosystems Engineering at Seoul National University (SNU), based in Seoul, Korea.</p>
</div>

<div data-lang="zh" style="display: none;">
  <blockquote>
    我相信技术的力量，也希望把技术做成真正有用的系统，让研究更容易被使用，并在细小但真实的地方有益于人。
  </blockquote>

  <p>我目前在韩国首尔的首尔大学攻读生物系统工程博士学位。</p>
</div>

<h2><span data-i18n-en="Education" data-i18n-zh="教育背景">Education</span></h2>

{% include education-list.html %}

<h2><span data-i18n-en="Languages" data-i18n-zh="语言能力">Languages</span></h2>

{% include language-list.html %}

<h2>Places I've Been</h2>

{% include places-map.html %}

<h2><span data-i18n-en="Research Interests" data-i18n-zh="研究方向">Research Interests</span></h2>

<ul data-lang="en">
  <li>3D reconstruction and spatial data representation.</li>
  <li>Point-cloud and Gaussian Splatting visualization.</li>
  <li>Computational imaging and web-based research tools.</li>
</ul>

<ul data-lang="zh" style="display: none;">
  <li>三维重建与空间数据表示。</li>
  <li>点云和 3D Gaussian Splatting 可视化。</li>
  <li>计算成像流程与基于网页的研究工具。</li>
</ul>

<h2><span data-i18n-en="Selected Projects" data-i18n-zh="代表项目">Selected Projects</span></h2>

<div class="project-grid">
  {% for project in site.data.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>

<h2><span data-i18n-en="CV" data-i18n-zh="简历">CV</span></h2>

<p data-lang="en">A public CV will be added later.</p>
<p data-lang="zh" style="display: none;">公开版 CV 会在准备好之后添加。</p>
