import { mount } from '@cypress/react';
import { FacilityPayload } from '../../src/features/facilities/facilities.types';

describe('Test Scenario: Adding an A with Success (all fields are filled)', () => {
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

  // 1. Open modal
  it('Open create new Facility modal', () => {
    cy.get('[data-cy=cards-container]').children().first().find('[data-cy=menu-item-button]').click();
    cy.get('[data-cy=edit-item-button]').click();

    cy.get('[data-cy=custom-modal-container]').should('be.visible').contains('Edit information');
  });

  //   2. File the form
  it('Fill in the Name field', () => {
    cy.get('[data-cy=input-name]').clear().type(facility.name);
  });
  it('Check the radio button type', () => {
    cy.get('[type="radio"]').check(facility.type);
  });
  it('Fill in the Adress field', () => {
    cy.get('[data-cy=radio-address]').clear().type(facility.address);
  });
  // 3. Submit
  it('Submit the form', () => {
    cy.get('[data-cy=custom-modal-submit]').click();
  });
  // 4. Check the new item
  it('Check the new element if it is added in the DOM', () => {
    cy.get('[data-cy=cards-container]').first().contains(facility.name);
    cy.get('[data-cy=cards-container]').first().contains(facility.address);
    cy.get('[data-cy=cards-container]').first().contains(facility.type);
  });
  // 4. Check the modal is closed
  it('Check the modal is closed', () => {
    cy.get('[data-cy=custom-modal-container]').should('not.exist');
  });
});

describe('Test scenario: Update an A with the end Failler (One fild is empty)', () => {
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

  // 1. Open modal
  it('Open create new Facility modal', () => {
    cy.get('[data-cy=cards-container]').children().first().find('[data-cy=menu-item-button]').click();
    cy.get('[data-cy=edit-item-button]').click();

    cy.get('[data-cy=custom-modal-container]').should('be.visible').contains('Edit information');
  });

  // 2.clear field
  it('Fill in the Name field', () => {
    cy.get('[data-cy=input-name]').clear();
  });

  // 3. Submit
  it('Submit the form', () => {
    cy.get('[data-cy=custom-modal-submit]').click();
  });
  // 3. Check the modal and the error message
  it('Check the modal is still opened and render the error message from the api', () => {
    cy.get('[data-cy=custom-modal-container]').should('be.visible').contains('All fields are required!', { timeout: 1000 });
  });
});
