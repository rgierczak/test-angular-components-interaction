import { TestAngularComponentsInteractionPage } from './app.po';

describe('test-angular-components-interaction App', () => {
    let page: TestAngularComponentsInteractionPage;

    beforeEach(() => {
        page = new TestAngularComponentsInteractionPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
