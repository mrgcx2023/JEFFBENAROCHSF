import { createElement } from 'lwc';
import MR_GPE_inputForm from 'c/mR_GPE_inputForm';

describe('c-m-r-g-p-e-input-form', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-m-r-g-p-e-input-form', {
            is: MR_GPE_inputForm
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});