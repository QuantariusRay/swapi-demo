import { ImgSrcPipe } from './img-src.pipe';

describe('Image Source Builder', () => {
  let pipe: ImgSrcPipe;

  beforeEach(() => {
    pipe = new ImgSrcPipe();
  });

  it('should provide a default img if one is not provided', () => {
    expect(pipe.transform(null)).toBe('/assets/images/default.png');
  });

  it('should provide a url of the img if a character name is provided', () => {
    expect(pipe.transform('frank')).toBe('/assets/images/frank.png');
  });
})
