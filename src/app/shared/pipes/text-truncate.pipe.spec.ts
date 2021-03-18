import { TextTruncatePipe } from './text-truncate.pipe';

describe('TextTruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TextTruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should do nothing with text shorter than limit', () => {
    const pipe = new TextTruncatePipe();
    const testValue = '123456';
    const testLength = 8;

    expect(pipe.transform(testValue, testLength)).toEqual(testValue);
  });

  it('should do substring text longer than limit and add ...', () => {
    const pipe = new TextTruncatePipe();
    const testValue = '12345678910';
    const testLength = 8;

    expect(pipe.transform(testValue, testLength)).toEqual('12345678...');
  });
});
