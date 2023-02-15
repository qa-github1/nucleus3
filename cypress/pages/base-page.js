const S = require('../fixtures/settings')
const D = require('../fixtures/data')
// *************************** ELEMENTS ***************************

let
    mainContainer = e => cy.get('.ant-collapse-content-box > .ant-row-middle'),
    mainContainer2 = e => cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(5)'),
    validationMessage = e => cy.get('.form-error'),
    uploadFileInput = index => cy.get('input[type=file]').eq(index),
    searchInput = e => cy.get('[placeholder="' + 'Search all products...' + '"]').eq(0),
    checkbox = index => cy.get('.ant-checkbox-input').eq(index),
    collapsedBoxOnEtichicalOverlay = title => cy.get('input[value="' + title + '"]').parent('span').parent('label'),
    expandedBoxOnEtichicalOverlay = e => cy.get('[style="margin: 24px auto 12px; width: 100%; display: flex;"] > .ant-col-xs-24'),
    amountInTableFoundByLabelInFirstColumn = (valueInFirstColumn, numberOfColumnToCheck = 4) =>
        cy.contains(valueInFirstColumn).parent('tr').find('td').eq(numberOfColumnToCheck - 1),
resultsTable = e => cy.get('[class="ant-table-container"]').eq(0).find('tbody'),
    firstRowInResultsTable = e => resultsTable().children('tr')

export default class BasePage {

    constructor() {
        this.amountInTableFoundByLabelInFirstColumn = amountInTableFoundByLabelInFirstColumn
    }

    // *************************** ACTIONS ***************************


    click(text) {
        cy.contains(text).should('be.visible');
        cy.contains(text).click();
        return this;
    }

    pause(numberOfSeconds) {
        cy.wait(numberOfSeconds * 1000)
        return this
    }

    clear_gmail_inbox() {
        D.unreadEmail1 = []
        D.unreadEmailsForSpecificRecipient = []

        cy.task('fetchGmailUnseenMails', {
            username: D.gmailAccount.email,
            password: D.gmailAccount.password,
            markSeen: true
        });
        return this;
    };

    verify_multiple_text_values_in_one_container(container, arrayOfProperties) {
        container().should('exist');
        arrayOfProperties.forEach(function (prop) {
            if (prop) {
                container({timeout: 5000}).should('contain', prop);
            }
        });
        return this;
    };

    click_element_if_has_a_class = function (element, className) {
        element.then(($el) => {
            if ($el.hasClass(className)) {
                element.click();
            }
        });
    };

    get_text_between_two_values_and_save_to_local_storage(element, firstValue, secondValue, propertyToSave) {
        element().invoke('text').then(function (label) {
            let valueToSave = label.match(firstValue + "(.*)" + secondValue)[1];
            cy.setLocalStorage(propertyToSave, valueToSave);
        });
    }

    click_button(text) {
        cy.contains(text).should('be.visible');
        cy.contains(text).click();
        return this;
    }

    enter_value(placeholder, value) {
        cy.findByPlaceholderText(placeholder).type(value)
        return this;
    }

    compare_snapshots() {
        mainContainer().compareSnapshot('body-element')
        return this;
    }

    /*compare_snapshots() {
        mainContainer().compareSnapshot('just-Login-element')
        return this;
    }*/

    open_base_url() {
        cy.visit(S.baseUrl)
        if (Cypress.env('onGithubActions')) {
            this.pause(10)
        } else {
           this.pause(0.5)
            // cy.get('.iframes-container').should('exist')
        }
        return this;
    };

    reload_page() {
        cy.reload();
        return this;
    };

    verify_text_is_visible(text) {
        cy.contains(text).should('be.visible');
        return this;
    }

    select_all_checkboxes(numberOfCheckboxes) {
        for (let i = 0; i < numberOfCheckboxes; i++) {
            checkbox(i).click()
        }
        return this;
    }

    select_box(title) {
        collapsedBoxOnEtichicalOverlay(title).click()
        return this;
    }

    isObject(variable) {
        return Object.prototype.toString.call(variable) === '[object Object]'
    }

    verify_text(element, expectedText) {
        if (this.isObject(expectedText)) {
            for (let property in expectedText) {
                element().invoke('val').then(function (textFound) {
                    element().invoke('text').should('contain', expectedText[property])
                })
            }
        } else if (Array.isArray(expectedText)) {
            expectedText.forEach(function (value) {
                element().invoke('text').then(function (textFound) {
                    element().invoke('text').should('contain', value)
                })
            })
        } else {
            element().invoke('text').then(function (textFound) {
                //  assert.include(textFound, expectedText);
                element().invoke('text').should('contain', expectedText)
            })
        }
        return this;
    };

    verify_value(element, expectedText) {
        if (this.isObject(expectedText)) {
            for (let property in expectedText) {
                element().invoke('val').then(function (textFound) {
                    element().invoke('val').should('contain', expectedText[property])
                })
            }
        } else if (Array.isArray(expectedText)) {
            expectedText.forEach(function (value) {
                element().invoke('val').then(function (textFound) {
                    element().invoke('val').should('contain', value)
                })
            })
        } else {
            element().invoke('val').then(function (textFound) {
                //  assert.include(textFound, expectedText);
                element().invoke('val').should('contain', expectedText)
            })
        }
        return this;
    };

    verify_text_is_present_on_main_container(text) {
        cy.get('body').should('contain', text);
        return this;
    };

    verify_text_on_multiple_elements(element_value__stacks) {
        let self = this
        element_value__stacks.forEach(function (stack) {
            if (stack[1]) {
                self.verify_text(stack[0], stack[1])
            }
        });
        return this;
    };

    scroll_and_click(element) {
        element().scrollIntoView();
        element().should('be.visible');
        element().click({force: true});
        // element().click();
        return this;
    };

    verify_amount_on_multiple_rows_referenced_by_label_in_first_column(object, columnNumber) {
        for (let property in object) {
            amountInTableFoundByLabelInFirstColumn(property, columnNumber).invoke('text').should('contain', object[property])
        }
        return this;
    };

    select_checkbox_based_on_label(label) {
        cy.wait(500)
        cy.contains('.animate-row .ant-col-md-22', label)
            .then($th => $th.index())
            .then(i => {
                expandedBoxOnEtichicalOverlay().find('.ant-row-center').find('.ant-col').eq(i - 1).find('.ant-checkbox-input').click()
                expandedBoxOnEtichicalOverlay().find('.ant-row-center').find('.ant-col').eq(i - 1).find('.ant-checkbox-input').should('be.checked')
                //cy.get('table tbody td').eq(contactIndex).should('contain', 'Maria Anders')
            })
        return this;
    }



    wait_input_filed_to_have_value(element) {
        element().invoke('val').should('not.be.empty');
        return this;
    }

    get_value_from_input_field(element) {
        element().invoke('val').then(function (value) {
            S.tempValue = value
            cy.log('temp email is' + S.tempValue)
            cy.setLocalStorage('tempEmail', value)
            cy.saveLocalStorage();
        });
        return this;
    }

    wait_text_to_be_visible(text) {
        cy.contains(text).should('be.visible');
        return this;
    };

    wait_element_to_be_visible(element) {
        element().should('be.visible');
        return this;
    };

    wait_element_to_be_invisible(element) {
        element().should('not.be.visible');
        return this;
    };

    wait_all_elements_of_same_type_to_be_visible(elements) {
        elements().then(function (elms) {
            cy.log(`Waiting ${elms.length} elements to be visible`);

            for (let i = 0; i < elms.length; i++) {
                elements().eq(i).should('be.visible')
            }
        });
        return this;
    };

    verify_validation_message(msg) {
        validationMessage().should('contain', msg);
        return this;
    }

    execute_search_for(searchCriteria) {
        searchInput().click();
        searchInput().should('be.enabled');
        searchInput().type(searchCriteria, {delay: 70}).should('have.value', searchCriteria);
        searchInput().type('{enter}');


        return this;
    }

    log_title(test) {
        cy.log('                                                                                                ');
        cy.log('               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        cy.log('               ' + test.test.title);
        cy.log('               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        cy.log('                                                                                                ');

        return this;
    };

    upload_file(index,fileName) {
        uploadFileInput(index).attachFile(fileName);
        return this;
    }

    define_API_request_to_be_awaited(methodType, partOfRequestUrl, alias) {
        cy.server();
        cy.route(methodType, partOfRequestUrl + '**').as(alias);
        return this;
    };

    wait_response_from_API_call(alias, status = 200) {
        cy.wait('@' + alias).its('status').should('eq', status);
        return this;
    };

    press_ENTER(element) {
        element().type('{enter}');
        return this;
    };

    verify_email_arrives_to_specified_address(emailAccount, emailTemplate) {
        cy.task('fetchGmailUnseenMails', {
            username: emailAccount.email,
            password: emailAccount.password,
            markSeen: false
        }).then(emails => {
            cy.log('EMAIL IS ' + JSON.stringify(emails[0]))
            var last_unread_email = emails[0];
           assert.include(last_unread_email.from, emailTemplate.from);
           assert.include(last_unread_email.subject, emailTemplate.subject);


            let email = (JSON.stringify(last_unread_email.body)).replace(/(\r\n\r\n|\n|\r)/gm, "")

            emailTemplate.attachments.forEach(filename => {
                assert.isAbove(email.indexOf(filename), -1)
            })
        })

        return this;
    };

    navigate_to(url) {
        cy.visit(url);
        return this;
    };

    verify_content_of_first_row_in_results_table(content) {

        /*if (this.isObject(content)) {
            for (let property in content) {
                firstRowInResultsTable().should('contain', content[property]);
            }
        } else {*/
            firstRowInResultsTable().should('contain', content);
       // }
        return this;
    };

    verify_email_and_save_values(emailAccount, propertyToSave1, valueBefore1, valueAfter1, propertyToSave2, valueBefore2, valueAfter2) {

        cy.wait(15000);
        cy.task('fetchGmailUnseenMails', {
            username: emailAccount.email,
            password: emailAccount.password,
            markSeen: true
        }).then(mails => {

            let last_unread_email = mails[0];
            assert.isOk(last_unread_email.from.includes("contact@nucleuswealth.com"));
          //  assert.isOk(last_unread_email.from === "contact@nucleuswealth.com <contact@nucleuswealth.com>");

            cy.log('EMAIL CONTENT IS _______ ' + JSON.stringify(last_unread_email))

            let valueToSave1 = JSON.stringify(last_unread_email).match(valueBefore1 + "(.*?)" + valueAfter1)[1];
            valueToSave1 = this.returnTrimString(valueToSave1);
            cy.setLocalStorage(propertyToSave1, valueToSave1);

           /* let valueToSave1 = JSON.stringify(last_unread_email).match("<\[(\d+)\]>")[1];
            valueToSave1 = this.returnTrimString(valueToSave1);
            cy.setLocalStorage(propertyToSave1, valueToSave1);*/

            /*let valueToSave2 = JSON.stringify(last_unread_email).match(valueBefore2 + "(.*?)" + valueAfter2)[1];
            valueToSave2 = this.returnTrimString(valueToSave2);
            cy.setLocalStorage(propertyToSave2, valueToSave2);*/
        });
        return this;
    };

    returnTrimString = function (valueToTrim) {
        let remove= valueToTrim.indexOf('\\');
        let result =  valueToTrim.substring(0, remove);
        let resultF = result.trim();
        return resultF;
    }

}
