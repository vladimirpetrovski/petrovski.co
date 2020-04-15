# petrovski.co - Vladimir's Blog

This is my personal web site currently hosted on github pages. It uses custom domain on which this site is accessable to. Visit https://petrovski.co to check out.

# Using

1. [Install Hugo](https://gohugo.io/overview/installing/)
2. Clone this repository
```bash
git clone https://github.com/vladimirpetrovski/petrovski.co
cd petrovski.co
```
3. Clone the repository you want to test. If you want to test all Hugo Themes then follow the instructions provided [here](https://github.com/gohugoio/hugoThemes#installing-all-themes)
4. Run Hugo and open in browser http://localhost:1313
```bash
hugo serve
```
5. Under `/content/` this repository contains the following:
- A section called `/post/` with sample markdown content
- A headless bundle called `homepage` that you may want to use for single page applications. You can find instructions about headless bundles over [here](https://gohugo.io/content-management/page-bundles/#headless-bundle)

6. To deploy just run the ./deploy from terminal and the website will publish the page to Github pages [vladimirpetrovski.github.io](https://github.com/vladimirpetrovski/vladimirpetrovski.github.io)
