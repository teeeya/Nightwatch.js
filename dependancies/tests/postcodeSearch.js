module.exports = {
  "Postcode Search" : function (browser) {
    browser
      .url("http://juvederm-cc-development.azurewebsites.net/index.html")
      .waitForElementVisible('body', 1000)
      .setValue('.searchInput', 'w44qy')
      .click('.searchIconwithapinkbox')
      .pause(1000)
      .assert.containsText('.results-page-title', 'Your best matched clinics')
      .end();
  }
};
