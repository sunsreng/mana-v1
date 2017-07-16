import { ManaPage } from './app.po';

describe('mana App', () => {
  let page: ManaPage;

  beforeEach(() => {
    page = new ManaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
