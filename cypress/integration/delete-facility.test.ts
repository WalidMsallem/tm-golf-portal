import { mount } from '@cypress/react';

describe('Test Scenario: Delete a facility', () => {
  it('opens the app', () => {
    cy.visit('http://localhost:3000');
  });
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  let facilityName = '';

  // 1. Open modal
  it('Open delete facility modal', () => {
    cy.get('[data-cy=cards-container]').children().first().find('[data-cy=menu-item-button]').click();
    cy.get('[data-cy=delete-item-button]').click();

    cy.get('[data-cy=card-facility-name]').should(($div) => {
      facilityName = $div.text();
    });
    cy.get('[data-cy=custom-modal-container]').should('be.visible');
  });

  it('Submit', () => {
    cy.get('[data-cy=custom-modal-submit]').click();
  });

  it('Check the element is deleted from the DOM', () => {
    cy.get('[data-cy=cards-container]').should('not.have.text', facilityName);
  });

  it('Make sure the modal is closed', () => {
    cy.get('[data-cy=custom-modal-container]').should('not.exist');
  });
});
