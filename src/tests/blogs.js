import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../app.js';
chai.use(chaiHttp);
const {expect}=chai;
describe('testing the blogs',()=>{
    it('should get all blogs'),(done)=>{
        chai.request(app)
        .get('')
        .set('Accept','application/json')
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            res.body.data[0].should.have.property('title');
            done();
        })
    }
})