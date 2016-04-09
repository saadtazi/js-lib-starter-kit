import hello, { bye } from '../../src';

describe('my-project', () => {
  it('should do what it has to do', () => {
    hello().should.eql('Hello World!');
  });

  it('should also do what it is not supposed not do', () => {
    bye({ firstName: 'Achile' }).should.eql('Bye Achile!');
  });
});
