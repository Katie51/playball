class AddCityPolandPage {

// get enterNameInput() {return ('[type="text"]')};
get setTimeZone() {return  cy.get('#timezone')};
get addCityButton() {return cy.get('[type="submit"]')};

}
export default new AddCityPolandPage();