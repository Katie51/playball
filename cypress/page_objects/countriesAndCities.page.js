class CountriesAndCities{

get countryPoland() {return cy.get('.table__content .table__item.LocationsTable_rowItem__127Gw')};
get goToCountryButton() {return cy.get('.table__menu .table__menuItem')};

}
export default new CountriesAndCities();