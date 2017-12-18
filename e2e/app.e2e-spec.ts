import { MagProjectPage } from './app.po';

describe('mag-project App', () => {
  let page: MagProjectPage;

  beforeEach(() => {
    page = new MagProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
