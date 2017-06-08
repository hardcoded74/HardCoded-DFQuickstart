import { HCDFQuickstartPage } from './app.po';

describe('hc-dfquickstart App', () => {
  let page: HCDFQuickstartPage;

  beforeEach(() => {
    page = new HCDFQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
