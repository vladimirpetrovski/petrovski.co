# petrovski.co - Vladimir's Blog

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

5. To deploy just run the `./deploy` script from the terminal and the website will publish the page to Github pages [vladimirpetrovski.github.io](https://github.com/vladimirpetrovski/vladimirpetrovski.github.io) and will be available on https://petrovski.co
