---
layout: single
title: "项目"
title_zh: "项目"
permalink: /zh/projects/
author_profile: true
author: phasheen_zh
lang: zh
---

<div class="project-grid">
  {% for project in site.data.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>
