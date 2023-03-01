import { HeightPipe } from './height.pipe';

describe('height pipe', () => {
  let pipe: HeightPipe;

  beforeEach(() => {
    pipe = new HeightPipe();
  });

  it('should return an empty string if no value provided', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should convert a centimeter value to feet and inches', () => {
    expect(pipe.transform('112')).toBe('112cm (3ft 8in)');
  });

  it('should convert a small centimeter value', () => {
    expect(pipe.transform('1')).toBe('1cm (0ft 0in)');
  });
})
