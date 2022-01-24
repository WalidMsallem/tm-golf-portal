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
  let facilityName = '';
  //  card-facility-name
  // 1. Open modal
  it('Open create new Facility modal', () => {
    cy.get('[data-cy=cards-container]').children().first().find('[data-cy=menu-item-button]').click();
    cy.get('[data-cy=delete-item-button]').click();

    cy.get('[data-cy=card-facility-name]').should(($div) => {
      facilityName = $div.text();
    });

    cy.get('[data-cy=custom-modal-container]').should('be.visible');
  });

  // 2. Submit
  it('Submit', () => {
    cy.get('[data-cy=custom-modal-submit]').click();
  });
  // 4. Check the new item
  it('Check the new element is deleted from the DOM', () => {
    cy.get('[data-cy=cards-container]').should('not.have.text', facilityName);
    // .then((div) => {
    //   expect(div).not().toHaveTextContent('walid');
    // });

    // cy.get('[data-cy=cards-container]').first().contains(facility.address);
    // cy.get('[data-cy=cards-container]').first().contains(facility.type);
  });
  // 4. Check the modal is closed
  it('Check the modal is closed', () => {
    cy.get('[data-cy=custom-modal-container]').should('not.exist');
  });
});
