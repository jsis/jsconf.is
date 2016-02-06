import Page from './modules/page';

const pages = [...document.querySelectorAll('.Page')];

for (const page of pages) {
  page.page = new Page(page);
}
