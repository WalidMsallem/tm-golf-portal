import { mount } from '@cypress/react';
// import {hideLongText } from '../../src/utils/string.utils'
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

  it('Open create new Facility modal', () => {
    cy.get('[data-cy=open-create-facility-modal]').click();
    cy.get('[data-cy=custom-modal-container]').should('be.visible').contains('Create new Facility');
  });

  it('Fill in the Name field', () => {
    cy.get('[data-cy=input-name]').type(facility.name);
  });
  it('Check the radio button type', () => {
    cy.get('[type="radio"]').check(facility.type);
  });
  it('Fill in the Adress field', () => {
    cy.get('[data-cy=radio-address]').type(facility.address);
  });

  it('Submit the form', () => {
    cy.get('[data-cy=custom-modal-submit]').click();
  });

  it('Check the new element if it is added in the DOM', () => {
    cy.get('[data-cy=cards-container]').first().contains(facility.name);
    cy.get('[data-cy=cards-container]').first().contains(facility.address);
    cy.get('[data-cy=cards-container]').first().contains(facility.type);
  });

  it('Check the modal is closed', () => {
    cy.get('[data-cy=custom-modal-container]').should('not.exist');
  });
});

describe('Test scenario: Adding an A with the end Failler (Fields are not filled)', () => {
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

  it('Open create new Facility modal', () => {
    cy.get('[data-cy=open-create-facility-modal]').click();
    cy.get('[data-cy=custom-modal-container]').should('be.visible').contains('Create new Facility');
  });

  it('Submit the form', () => {
    cy.get('[data-cy=custom-modal-submit]').click();
  });

  it('Check if the modal is still open / Render the api error message', () => {
    cy.get('[data-cy=custom-modal-container]').should('be.visible').contains('All fields are required!', { timeout: 1000 });
  });
});
