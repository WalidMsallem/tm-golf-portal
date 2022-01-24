import { mount } from '@cypress/react';
import { FacilityPayload } from '../../src/features/facilities/facilities.types';

describe('Test Scenario: Update a facility / Success (all fields are filled)', () => {
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
  const facility: FacilityPayload = {
    name: 'Hello cypress',
    type: 'indoor',
    address: '85 taksim mermesh',
  };

  it('Open update facility modal', () => {
    cy.get('[data-cy=cards-container]').children().first().find('[data-cy=menu-item-button]').click();
    cy.get('[data-cy=edit-item-button]').click();

    cy.get('[data-cy=custom-modal-container]').should('be.visible').contains('Edit information');
  });

  it('Fill in the Name field', () => {
    cy.get('[data-cy=input-name]').clear().type(facility.name);
  });
  it('Check the radio button (type)', () => {
    cy.get('[type="radio"]').check(facility.type);
  });
  it('Fill in the Adress field', () => {
    cy.get('[data-cy=radio-address]').clear().type(facility.address);
  });

  it('Submit the form', () => {
    cy.get('[data-cy=custom-modal-submit]').click();
  });

  it('Check the  element if it is updated in the DOM', () => {
    cy.get('[data-cy=cards-container]').first().contains(facility.name);
    cy.get('[data-cy=cards-container]').first().contains(facility.address);
    cy.get('[data-cy=cards-container]').first().contains(facility.type);
  });

  it('Make sure the modal is closed', () => {
    cy.get('[data-cy=custom-modal-container]').should('not.exist');
  });
});

describe('Test scenario: Update an facility / failure (A field is empty)', () => {
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

  it('Open update facility modal', () => {
    cy.get('[data-cy=cards-container]').children().first().find('[data-cy=menu-item-button]').click();
    cy.get('[data-cy=edit-item-button]').click();

    cy.get('[data-cy=custom-modal-container]').should('be.visible').contains('Edit information');
  });

  it('Clear the Name field', () => {
    cy.get('[data-cy=input-name]').clear();
  });

  it('Submit the form', () => {
    cy.get('[data-cy=custom-modal-submit]').click();
  });

  it('Check if the modal is still open / Render the api error message', () => {
    cy.get('[data-cy=custom-modal-container]').should('be.visible').contains('All fields are required!', { timeout: 1000 });
  });
});
