module.exports = {
   before : function(browser) {
      console.log("Setting up...");  
  },  
  afterEach : function() {
    end();
  },
  "Home page" : function (browser) {
    browser.maximizeWindow();
    browser
      .url("http://juvederm-cc-development.azurewebsites.net/index.html")
      .waitForElementVisible('body', 1000, "Body of the page has loaded")
      .saveScreenshot('./screenshots/homepage.png')

      .assert.title("Home | Juvederm")
      .useXpath()
      .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/header/div/div[2]", "Main image of lady has loaded")
      
      //Book a consultation section
      .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/div[1]/div[1]", "Book Consultation section has loaded")
      .getText("//*[@id=\"ng-app\"]/body/div[2]/div[1]/div[1]/h2", function(result){
      	this.assert.equal(result.value, "Book a consultation now")
      })
      .getText("//*[@id=\"ng-app\"]/body/div[2]/div[1]/div[1]/h3", function(result){
      	this.assert.equal(result.value, "To book right away enter a postcode or the name of a clinic below")
      })
	  .useCss()
	 //   .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/div[1]/div[1]/label/input", "Postcode input box is present") 
      .assert.visible(".searchIconwithapinkbox", "search button inside postcode input box")
      .useXpath()

      //Tutorial section loaded
      .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/div[1]/div[2]", "Start by answering a few questions section has loaded")
      .useCss()
      .getText(".landingPage-button", function(result){
      	this.assert.equal(result.value,"Match me with a clinic", "Button text for tutorial")
      })
      .useXpath()
      //three icons
      //First
      .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[1]", "1/3 option has loaded")
      .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[1]/div/img", "Man at desk image has loaded")
      .useCss()
      .getText("body > div:nth-child(2) > div.row.flexcontainer.small-noflex.threestep-padded-large.ng-scope > div:nth-child(1) > h4", function(result){
      	this.assert.equal(result.value,"TAKING THE\nNEXT STEP", "Option one title")
      })
      .useXpath()
      .getText("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[1]/p", function(result){
      	this.assert.equal(result.value, "Many women consider treatment with facial fillers for years, and find booking a consultation daunting and uncomfortable. Asking a question over email is an easy next step - so why not find a clinic that suits you today?","Summary loaded")
      })
      //Second
      .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[2]", "2/3 option has loaded")
      .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[2]/div/img","3 man pic has loaded")
      .useCss()
      .getText("body > div:nth-child(2) > div.row.flexcontainer.small-noflex.threestep-padded-large.ng-scope > div:nth-child(2) > h4", function(result){
      	this.assert.equal(result.value, "CHOOSING THE RIGHT\nCLINIC & PRACTITIONER", "Option two title")
      })
      .useXpath()
      .getText("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[2]/p", function(result){
      	this.assert.equal(result.value, "The right Practitioner will work with you to achieve the results you desire over a personalised treatment plan. Start your first conversation today.", "Summary loaded")
      })
      //third
      .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[3]", "3/3 option has loaded")
      .assert.visible("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[3]/div/img", "Gateway to narnia image has loaded")
      .getText("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[3]/h4", function(result){
      	this.assert.equal(result.value, "OPEN\nEVENINGS", "Option 3 title has loaded")
      })
      .getText("//*[@id=\"ng-app\"]/body/div[2]/div[2]/div[3]/p", function(result){
      	this.assert.equal(result.value, "Many clinics offer the option of an open evening where you can meet the Practitioner and learn more about what treatments involve. Put your name down for the next one in your area!", "Summary loaded")
      })
      //testimonial

      .assert.visible("//*[@id=\"carousel-1\"]/ul", "Testimonial carousel has loaded")
      .useCss()
      .click("#carousel-1-controls > span")
      
      //Look for text input to search by postcode
      .getAttribute(".searchInput","placeholder", function(result) {
	    this.assert.equal(result.value, "Enter postcode/area/clinic", "Default value in text input");
 	  })
      .assert.visible(".got_queries_block .juve-button", "Your questions button is visible on the page")
      .assert.visible(".juve_treatments_block .juve-button", "Juvederm treatments button has appeared on the page")
      

      .end();
      
  }
};

