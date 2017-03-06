import { LaneClosureFormPage } from './app.po';

describe('lane-closure-form App', () => {
  let page: LaneClosureFormPage;

  beforeEach(() => {
    page = new LaneClosureFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
