class FooterPage{
    get logoutButton() {return cy.get('.Navbar_navbar__logoutLabel__bo_wD').contains('Log out')};
    get modalWindow() {return cy.get ('.modal__title.mb30').should('have.text', 'Are you sure you want to log out?')};
    get confirmLogOut() {return cy.get ("button.SubmitButton_button__JpaGS.errorButton.modal__button").contains('Log out')};
}

export default new FooterPage();