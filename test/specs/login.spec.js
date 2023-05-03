describe("Test suite", () => {
    before(() => {
        
    });
    it("Logging In", async() => {
        await browser.url('/logon');
        const emailField = await $('//*[@id="exampleInputEmail1"]');
        const passwordField = await $('//*[@id="exampleInputPassword1"]');
        const loginButton =  await $('//*[@id="login-btn"]');
        
        await emailField.setValue("amirahmarsden769991");
        await passwordField.setValue("Qwaszx12");
        await loginButton.click();

        await browser.pause(5000);  //just here for presentation
    });

    it('Navigating to Resident Tab', async() => {
        const customersTab = await $('//*[@id="customersTab"]');

        await customersTab.click();
        await browser.pause(1000);  //just here for presentation
    });

    it('Clicking the Add Button', async() => {
        const buttonAdd = await $('button=Add');

        await buttonAdd.click();
        await browser.pause(1000);  //just here for presentation
    });

    it('Filling in the Form Fields', async() => {
        const titleSelect = await $('//*[@id="title"]');
        const firstName = await $('//*[@id="firstname"]');
        const lastName = await $('//*[@id="surname"]'); 
        const knownAs = await $('//*[@id="nickname"]');
        const sexSelect = await $('//*[@id="sex"]');
        const dateOfBirth = await $('//*[@id="dob"]');
        const ssNumber = await $('//*[@id="ssNumber"]');
        const weight = await $('//*[@id="admissionWeightInKilograms"]');
        const height = await $('//*[@id="admissionHeightInMeters"]');
        const startDate = await $('//*[@id="startDate"]');
        const address1 = await $('//*[@id="address1"]');
        const address2 = await $('//*[@id="address2"]');
        const city = await $('//*[@id="city"]');
        const county = await $('//*[@id="county"]');
        const postcode = await $('//*[@id="postcode"]');
        const country = await $('//*[@id="country"]');
        const tel = await $('//*[@id="tel"]');
        const email = await $('//*[@id="email"]');
        const mobile = await $('//*[@id="mobile"]');
        const accessDetails = await $('//*[@id="accessDetails"]');
        const allergies = await $('//*[@id="allergies"]');
        const nextOfKin = await $('//*[@id="nextofkin"]');
        const nextOfKinTel = await $('//*[@id="nextofkintel"]');
        const other = await $('//*[@id="other"]');
        const doctor = await $('//*[@id="doctor"]');
        const surgery = await $('//*[@id="surgery"]');
        const surgeryTel = await $('//*[@id="surgerytel"]');
        const buttonSave = await $('button=Save');

        await titleSelect.selectByVisibleText("Mr");
        await firstName.setValue("Aaron");
        await lastName.setValue("Keenley");
        await knownAs.setValue("Dougie");
        await sexSelect.selectByVisibleText("Male");
        await dateOfBirth.setValue("29/08/2013");
        await ssNumber.setValue(Math.floor(Math.random()*1000));
        await weight.setValue(Math.floor(Math.random()*100));
        await height.setValue(Math.floor(Math.random()*100));
        await startDate.setValue("29/08/2019");
        await address1.setValue("100 King Road");
        await address2.setValue("Woodley");
        await city.setValue("Reading");
        await county.setValue("Berkshire");
        await postcode.setValue("RG1");
        await country.setValue("UK");
        await tel.setValue(Math.floor(Math.random()*1000000));
        await email.setValue("aaron@aaron.com");
        await mobile.setValue(Math.floor(Math.random()*1000000));
        await accessDetails.setValue("Lorem Ipsum");
        await allergies.setValue("None");
        await nextOfKin.setValue("Elon Musk");
        await nextOfKinTel.setValue(Math.floor(Math.random()*1000000));
        await other.setValue("Bill Gates");
        await doctor.setValue("Mr Stark");
        await surgery.setValue("West End Surgery");
        await surgeryTel.setValue(Math.floor(Math.random()*1000000));

        await buttonSave.click();

        await browser.pause(5000);  //just here for presentation
    });

    it('Update new Resident Status', async() => {
        const detailsTab = await $("//div[@id='context-bar']//ul[@class='nav nav-tabs']/li[7]");
        const updateStatus = await $("//span[@id='customer-status-update']");
        const customerStatusSelector = await $("//form/div[@class='form-group']/div/select[@type='text']");
        const reasonOptional = await $("/html//div[@role='dialog']//status-modal-component//form[@name='statusModalVm.statusForm']/div[2]/div[1]/div[@class='col-sm-8']/input[@type='text']");
        const buttonSave = await $('button=Save');

        await detailsTab.click();
        await browser.pause(2000); //not sure why but without this delay, the element cannot be found
        await updateStatus.click({ x: 30 });
        await customerStatusSelector.selectByVisibleText("ACTIVE");
        await reasonOptional.setValue("Activating the customer");
        await buttonSave.click();

        await browser.pause(5000);  //just here for presentation
    });

    it('Searching for the new Resident', async() => {
        const customersPage = await $("//a[@id='customersTab']");
        const search = await $("//input[@id='filterTerm']");
        

        await customersPage.click();
        await search.setValue("Aaron Keenley");

        await browser.pause(1000); //just here for presentation

        const customer = await $("//div[@id='customersContainer']//div[@class='flex-card-container ng-scope']//ng-include[1]");
        await customer.click();

        await browser.pause(2000);  //just here for presentation
    });

    it('Getting to the Resident Details Tab', async() => {
        const detailsTab = await $("//div[@id='context-bar']//ul[@class='nav nav-tabs']/li[7]");
        await detailsTab.click();

        await browser.pause(5000);  //just here for presentation
    });
});
