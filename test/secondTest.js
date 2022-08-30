const { Builder, By, Key } = require("selenium-webdriver");
const ltCapibilities = require("../capabilities")

var should = require("chai").should();

//describe block
describe("add another todo test", function () {
  var driver;

  //username
  const USERNAME = ltCapibilities.capabilities.user;


  //key
  const KEY = ltCapibilities.capabilities.accessKey;


  //host
  const GRID_HOST = "hub.labdatest.com/wd/hub"

  const gridURL = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;


  beforeEach(function () {
    driver = new Builder().usingServer(gridURL).withCapabilities(ltCapibilities.capabilities).build();
  });

  afterEach(async function () {
    await driver.quit();
  });


  //it block
  it("successfully adds another todo to aplication", async function () {
    // launch the browser
    //  let driver = await new Builder().forBrowser("firefox").build();


    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");


    //add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);


    // assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
      return value;
    });

    //assert using chai should
    todoText.should.equal("Learn Selenium");


  });

  it("Adding a new test for reporting", async function () {
    // launch the browser
    //let driver = await new Builder().forBrowser("firefox").build();


    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");


    //add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Javascript", Key.RETURN);


    // assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
      return value;
    });

    //assert using chai should
    todoText.should.equal("Learn Javascript");

  });



});






