---
layout: home

hero:
  name: Mystic Library
  text: Open-source prompt library for prompt engineering
  tagline: Documents for managing prompts in Markdown, organizing them by category, and publishing them as a static site
  actions:
    - theme: brand
      text: Browse prompts
      link: /en/prompt-catalog/
    - theme: alt
      text: View Dev prompts
      link: /en/prompt-catalog/dev/
    - theme: alt
      text: Use templates
      link: /en/templates/prompt-template
    - theme: alt
      text: Operation rules
      link: /en/operation/rules

features:
  - icon: 🧭
    title: No DB, Markdown only
    details: Prompts are managed as Markdown files, making Git-based versioning and review workflows straightforward.
  - icon: 👥
    title: Self-hosting friendly
    details: Designed for internal use as well, including prompts that cannot be shared outside your organization.
  - icon: 🛠️
    title: Easy static site operations
    details: Built and distributed with VitePress, with templates, operation rules, and FAQs managed together.
---

## What is this?

Mystic Library is a prompt library for managing reusable prompts in Markdown, organizing them by category, and sharing them as a static site.

It is designed for team use, with input requirements, examples, and notes for writing, development, and operational tasks.

## Notes about English pages

- The site UI (navigation, sidebar, footer labels) can now switch to English.
- English routes are available under `/en/`.
- Some page contents are currently mirrored from the Japanese docs and can be translated incrementally.

## Quick start

1. Open the [`Prompt Catalog`](/en/prompt-catalog/)
2. Choose a category (`Writing` or `Dev`)
3. Review the page's `intent` and `input_requirements`
4. Reuse the examples and notes in your workflow

## Main pages

- [Prompt Catalog](/en/prompt-catalog/)
- [Prompt Template](/en/templates/prompt-template)
- [Operation Rules](/en/operation/rules)
- [FAQ](/en/operation/faq)
- [Update Log](/en/log/update)
