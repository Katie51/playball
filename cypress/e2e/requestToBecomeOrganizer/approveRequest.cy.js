import dashboardPage from "../../page.objects/dashboard.page"
import loginPage from "../../page.objects/login.page"
import usersPage from "../../page.objects/users.page"
import userProfilePage from "../../page.objects/user.profile.page"

describe ('Request to become Organizer', () => {
    before(() => {
        cy.visit('/')
    })
    it ('Approve to become an Organizer', () => {

loginPage.login('point@gmail.com','12345678');
dashboardPage.dashboardTitle.should('have.text','Dashboard');
dashboardPage.goButton.click();
cy.get ('[class="table"]').should('be.visible');

cy.contains('1').click();
usersPage.viewProfileButton.click();
cy.get ('[class="title"]').should('have.text','User profile');

userProfilePage.makeOrganizerButton.click();
cy.get ('[class="modal__title mb15"]').should('have.text','Set access for the new Organizer');


cy.get('#country_Poland').click({ force: true });
cy.get('[class="SubmitButton_button__JpaGS modal__button false"]').click();
cy.get('div>p.commonLabel.centeredText.mb30.mt20').should('have.text','This user Organizer');

    })
    })