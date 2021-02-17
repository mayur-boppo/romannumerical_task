const request = require('request')
const assert = require('../romannumeral'); 
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);

describe('Roman Numbers', () => {

  /*
  * Test the /POST route
  */
  describe('/POST romannumeral', () => {
      it('Should convert roman value to integer number', (done) => {
          let book = {
                number: "XI",
          }
        chai.request(server)
            .post('/romannumeral')
            .send(book)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.should.have.property('message');
              done();
            });
      });

  });
});