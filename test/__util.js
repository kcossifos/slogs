const util = require('../src/util');
const sinon = require('sinon');
const expect = require('chai').expect;


describe('debug test', () => {
//
  it('testing to see if stub displays', () => {});

  it('Console logs', () => {
    const log = sinon.spy();
    log(util.debug('Logging'));
    expect(log.callCount).to.equal(1);
  });

  it('Console warns', () => {
    const warn = sinon.spy();
    warn(util.debug('warn'));
    expect(warn.callCount).to.equal(1);
  });
});

// Tests verison bump
describe('Verison Bump', () => {
  const num = '1.9.0';
  let versNum;

  // Test if it increments major version bump
  it('| Will increment the major verison number', (done) => {
    versNum = util.versionNum(num, 'major');
    expect(versNum).to.be.equal('2.0.0');
    done();
  });

  // Test if it increments minor version bump
  it('| Will increment the minor verison number', (done) => {
    versNum = util.versionNum(num, 'minor');
    expect(versNum).to.be.equal('1.10.0');
    done();
  });

  // Test if it increments patch version bump
  it('| Will increment the patch verison numbe', (done) => {
    versNum = util.versionNum(num, 'patch');
    expect(versNum).to.be.equal('1.9.1');
    done();
  });

  // Test to make sure verison number is in the correct format
  it('| Returns the error because version number is in wrong format', (done) => {
    versNum = util.versionNum('1.w.3', 'patch');
    expect(versNum).to.be.equal('error');
    done();
  });
});
