 describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost/ResourceLoading_2-6-16/#/');

  
}); 
   it("selecting continue", function() {         // it will check when we click on create projects is it going on the right URL or not.
       var createBtn = element(by.id('continue'));
        createBtn.click().then(function() {
            expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/projects/create'); 
        });
  });

  it('form check', function() {         // this will check the form

element(by.model("formData.clientId")).$('[value="4"]').click();
             element(by.model("formData.projectType")).$('[value="hogarth"]').click();
             element(by.model("formData.projectName")).sendKeys("activia");
             element(by.model("formData.contactOnClientEnd")).sendKeys("monisha");
             element(by.model("formData.projectManagerId")).$('[value="6"]').click();
             element(by.model("formData.qaLeadId")).$('[value="1"]').click();
             element(by.model("formData.requiredResources")).sendKeys("4");
             element(by.model("formData.projectStartDate")).sendKeys("13 June 2016");
             element(by.model("formData.projectEndDate")).sendKeys("14 June 2016");
             expect(element(by.name("projectStartDate")).getAttribute('value')).toBe('13 June 2016');
             expect(element(by.id("projectEndDate")).getAttribute('value')).toBe('14 June 2016');
 });
});


