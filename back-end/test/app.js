let server = require('../app');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');

//Assertions
chai.should();
chai.use(chaiHttp);

describe('Test route', () => {
    describe('Test Get route /', () => {
        it('Status should be 200', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
describe('Test route', () => {
    describe('Test Get route /learn/checkmates', () => {
        it('Status should be 200', (done) => {
            chai.request(server)
                .get('/learn/checkmates')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
describe('Test route', () => {
    describe('Test Get route /learn/puzzles', () => {
        it('Status should be 200', (done) => {
            chai.request(server)
                .get('/learn/puzzles')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
describe('Test route', () => {
    describe('Test Get route /learn/patterns', () => {
        it('Status should be 200', (done) => {
            chai.request(server)
                .get('/learn/patterns')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});

describe('Test route', () => {
    describe('Test Get route /learn/movements/king', () => {
        it('Status should be 200', (done) => {
            chai.request(server)
                .get('/learn/movements/king')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
describe('Test route', () => {
    describe('Test Get route /learn/movements/queen', () => {
        it('Status should be 200', (done) => {
            chai.request(server)
                .get('/learn/movements/queen')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
describe('Test route', () => {
    describe('Test Get route /learn/movements/knight', () => {
        it('Status should be 200', (done) => {
            chai.request(server)
                .get('/learn/movements/knight')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
describe('Test route', () => {
    describe('Test Get route /learn/movements/rook', () => {
        it('Status should be 200', (done) => {
            chai.request(server)
                .get('/learn/movements/rook')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
describe('Test route', () => {
    describe('Test Get route /learn/movements/pawn', () => {
        it('Status should be 200', (done) => {
            chai.request(server)
                .get('/learn/movements/pawn')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
