const chai = require("chai");
const chaiHttp = require("chai-http");
let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
let should = chai.should();

// Judgment starts here
chai.use(chaiHttp);

// Describing our test
describe("/GET home", () => {
  it("It should welcome user", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
