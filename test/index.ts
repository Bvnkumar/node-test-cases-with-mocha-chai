const Todos = require("../todo/index");
var expect = require("chai").expect;

var express = require("express");
describe("Test todo class", () => {
  let todos;
  before(() => {
    todos = new Todos();
    todos.add("Do yoga");
  });
  it("test todo list length", () => {
    expect(todos.list()).to.have.lengthOf(1);
  });
});

describe("Sample Test Suite", () => {
  var app;
  before((done) => {
    console.log("before");
    app = express();
    app.listen(4000, (err) => {
      if (err) {
        return done(err);
      }
    });
    todos = new Todos();
    todos.add("Do yoga");
    done();
  });
  beforeEach((done) => {
    console.log("Before Each");
    done();
  });
  it("Sample test case", (done) => {
    if (3 == 3) {
      done();
    } else {
      done(new Error("Not sure"));
    }
  });
  it("Sample test case two", (done) => {
    if (1 == 1) {
      done();
    } else {
      done(new Error("Not sure"));
    }
  });

  after((done) => {
    console.log("after");
    done();
  });
  afterEach((done) => {
    console.log("afterEach");
    done();
  });
});
