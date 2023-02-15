import BasePage from "./base-page";
import LoginPage from "./login-page";
import OnboardingPage from "./onboarding-page";
import ClientPortalPage from "./clientPortal-page";
import ProductionPage from "./production-page";
import AdminPage from "./admin-page";


module.exports = {
    app : new BasePage(),
    login : new LoginPage(),
    onboarding : new OnboardingPage(),
    clientPortal: new ClientPortalPage(),
    production: new ProductionPage(),
    admin: new AdminPage()

}
