import Tilt from '../../src/scripts/misc/tilt';

describe('Tilt Class', () => {
  describe('init', () => {
    it('inits Tilt instance', () => {
      const tilt = new Tilt();
      const $el = document.createElement('div');
      const getBoundingClientRectSpy = jest.spyOn($el, 'getBoundingClientRect');
      const addListenersSpy = jest.spyOn(tilt, '_addListeners');

      tilt.init($el);

      expect(tilt.el).toEqual($el);
      expect(tilt.over).toBeFalsy();
      expect(getBoundingClientRectSpy).toBeCalled();
      expect(addListenersSpy).toBeCalled();
    });
  });

  describe('_addListeners', () => {
    it('adds events to the element', () => {
      const tilt = new Tilt();
      const $el = document.createElement('div');
      tilt.init($el);

      const addEventListenerSpy = jest.spyOn($el, 'addEventListener')

      tilt._addListeners();

      expect(addEventListenerSpy).toHaveBeenCalledTimes(3);
    });
  });

  describe('_mouseOver', () => {
    it('calls position when over is truthy', () => {
      const tilt = new Tilt();
      const $el = document.createElement('div');
      const positionSpy = jest.spyOn(tilt, '_position');
      const mouseOverEvent = new Event('mouseover');

      tilt.init($el);
      tilt.over = true;
      tilt.el.dispatchEvent(mouseOverEvent);

      expect(positionSpy).toBeCalled();
    });
  });

  describe('_onMouseMove', () => {
    it('calls position and transition on mouse move', () => {
      const tilt = new Tilt();
      const $el = document.createElement('div');
      const positionSpy = jest.spyOn(tilt, '_position');
      const transitionSpy = jest.spyOn(tilt, '_transition');
      const mouseMoveEvent = new Event('mousemove');

      tilt.init($el);
      tilt.el.dispatchEvent(mouseMoveEvent);

      expect(positionSpy).toBeCalled();
      expect(transitionSpy).toBeCalled();
    });
  });

  describe('_onMouseOut', () => {
    it('applies styles and sets over to false', () => {
      const tilt = new Tilt();
      const $el = document.createElement('div');
      const applyStyleSpy = jest.spyOn(tilt, '_applyStyle');
      const mouseOutEvent = new Event('mouseout');

      tilt.init($el);
      tilt.over = true;
      tilt.el.dispatchEvent(mouseOutEvent);

      expect(applyStyleSpy).toBeCalled();
      expect(tilt.over).toBeFalsy();
    });
  });

  describe('_convertToString', () => {
    it('converts an object with some style properties to string', () => {
      const tilt = new Tilt();

      const styleObj = {
        transform: 'rotate(90deg)',
      }

      const expectString = 'transform:rotate(90deg);';

      expect(tilt._convertToString(styleObj)).toEqual(expectString);
    });
  });
});
