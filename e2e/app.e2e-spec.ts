import { MonitorYMPage } from './app.po';

describe('monitor-ym App', () => {
  let page: MonitorYMPage;

  beforeEach(() => {
    page = new MonitorYMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
