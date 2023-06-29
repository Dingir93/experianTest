describe("Experian Challenge", () =>{

    it("test case 01", () =>{
        cy.visit('https://surveyrc.taxcreditco.com/automation-challenge')

        cy.contains('label','First Name')
            .parents('div#SurveyControl_Question943')
            .find('input')
            .type('Joe')

        cy.contains('label','Last Name')
            .parents('div#SurveyControl_Question946')
            .find('input')
            .type('Sample')

        cy.contains('label','Email Address')
            .parents('div#SurveyControl_Question949')
            .find('input')
            .type('xyztest1001@taxcc.bg')

        cy.contains('label','Street Address')
            .parents('div#SurveyControl_Question950')
            .find('input')
            .type('Street line 1')
        
        cy.contains('label','City')
            .parents('div#SurveyControl_Question951')
            .find('input')
            .type('Monterey Park')

        cy.contains('label','Zip Code')
            .parents('div#SurveyControl_Question952')
            .find('input')
            .type('91754')

        cy.get("#SurveyControl_SurveySubmit").click()

        cy.on('window:confirm', () => false)

        cy.contains('label',"In the last year, have you or anyone you've lived with received SNAP (Supplemental Nutrition Assistance Program also referred to as food stamps)?")
            .parents('div#SurveyControl_Question11396')
            .contains('No')
            .click()
        
        cy.contains('label',"In the last two years, have you or anyone you've lived with received TANF (Temporary Assistance for Needy Families also referred to as welfare)?")
            .parents('div#SurveyControl_Question11397')
            .contains('No')
            .click()

        cy.contains('label',"Are you a veteran of the U.S. Military/Armed Forces?")
            .parents('div#SurveyControl_Question914')
            .contains('No')
            .click()

        cy.contains('label',"Are you a person who has a disability?")
            .parents('div#SurveyControl_Question11361')
            .contains('No')
            .click()

        cy.contains('label',"Have you ever been convicted of a felony?")
            .parents('div#SurveyControl_Question915')
            .contains('No')
            .click()

        cy.contains('label',"Are you unemployed?AndHave you collected unemployment benefits at any time during your unemployment")
            .parents('div#SurveyControl_Question1244')
            .contains('No')
            .click()

        cy.get("#SurveyControl_SurveySubmit").click()

        cy.get("#SurveyControl_SurveySubmit").click()

        cy.request('https://www.experian.com/employer-services/').then((response) => {
            expect(response.status).to.eq(200)
  
        })

    })

})

