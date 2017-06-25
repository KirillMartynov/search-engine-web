import { SearchEngineWebPage } from './app.po';

describe('search-engine-web App', () => {
  let page: SearchEngineWebPage;

  beforeEach(() => {
    page = new SearchEngineWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
