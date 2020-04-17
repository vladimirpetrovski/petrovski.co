[![Netlify Status](https://api.netlify.com/api/v1/badges/8af8f284-5996-478e-b9f8-44795b5b6a38/deploy-status)](https://app.netlify.com/sites/petrovski/deploys)

# petrovski.co

This is my personal web site currently hosted on Github pages. It uses custom domain on which this site is accessable from. Visit https://petrovski.co to check out.

# Using

1. [Install Hugo](https://gohugo.io/overview/installing/)
2. Clone this repository
```bash
git clone https://github.com/vladimirpetrovski/petrovski.co
cd petrovski.co
```
3. Run Hugo and open in browser http://localhost:1313
```bash
hugo serve
```
4. Under `/content/` this repository contains the following:
- A section called `/post/` with sample markdown content
- A headless bundle called `homepage` that you may want to use for single page applications. You can find instructions about headless bundles over [here](https://gohugo.io/content-management/page-bundles/#headless-bundle)

5. Once committed on `master` branch, [Netlify](https://www.netlify.com/) will automatically deploy the website.
