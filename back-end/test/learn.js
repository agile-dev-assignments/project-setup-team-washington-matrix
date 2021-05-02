let server = require('../controllers/user');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');

//Assertions
chai.should();
chai.use(chaiHttp);

describe('Test routes', () => {
    describe('Test Get route /', () => {
        it('It should return ', (done) => {
            chai.request(server)
                .get('/profile')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
