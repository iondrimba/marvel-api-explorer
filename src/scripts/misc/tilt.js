class Tilt {
  constructor() {
    this.offset = 0.1;
    this.animation = 300;
  }

  init(el) {
    this.el = el;
    this.rect = this.el.getBoundingClientRect();
    this.over = false;
    this.timer;
    this._addListeners();
  }

  _addListeners() {
    this.el.addEventListener('mouseover', this._onMouseOver.bind(this));
    this.el.addEventListener('mousemove', this._onMouseMove.bind(this));
    this.el.addEventListener('mouseout', this._onMouseOut.bind(this));
  }

  _onMouseOver(evt) {
    if (this.over) {
      this._position(evt, evt.currentTarget);
    }
  }

  _onMouseMove(evt) {
    this._position(evt, evt.currentTarget);
    this._transition(evt.currentTarget);
  }

  _onMouseOut(evt) {
    this._applyStyle(evt.currentTarget, {
      transform: 'rotateX(0deg) rotateY(0deg) translate(-50%, -50%)'
    });
    this.over = false;
  }

  _convertToString(obj) {
    let output = '';
    for (var prop in obj) {
      output += `${prop}:${obj[prop]};`;
    }
    return output;
  }

  _applyStyle(el, props) {
    el.style = this._convertToString(props);
  }

  _position(evt, el) {
    const rect = this.rect;
    const o = this.offset;

    const v = {
      x: -(evt.offsetX - (rect.width * .5)) * o,
      y: (evt.offsetY - (rect.height * .5)) * .03
    };

    this._applyStyle(el, { transform: 'rotateX(' + v.y + 'deg) rotateY(' + v.x + 'deg) translate(-50%, -50%)' });
  }

  _transition() {
    if (this.timer !== undefined) {
      clearTimeout(this.timer)
    }

    this.timer = setTimeout(() => {
      this.over = true;
    }, this.animation);
  }
}

export default Tilt;
