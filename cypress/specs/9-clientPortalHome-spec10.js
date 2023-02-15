const ui = require('../pages/ui-spec');
const D = require('../fixtures/data');
const C = require('../fixtures/constants');

context('Client Portal - Home', () => {

    beforeEach(function () {
        Cypress.Cookies.debug(true)
        Cypress.Cookies.defaults({
            preserve: /secure|ntercom|XSRF-TOKEN|__hssc|hubspotutk|__hstc|_fbp|cognito|__Secure-next-auth.callback-url|__Secure-next-auth.session-token|__Host-next-auth.csrf-token/,
        })
    });

    it('1. Check links', function () {
        ui.login.open_base_url()
            .verify_login_menu(D.user)
            .enter_credentials_and_click_Sign_In(D.user.username, D.user.password)
            ui.clientPortal.verify_links_on_home_page()
    })

})

