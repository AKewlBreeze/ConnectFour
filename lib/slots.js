function Slot(options) {
  // named - order doens't matter
  this.x = options.x || 20;
  this.y = options.y || 20;
  this.context = options.context;
  this.canvas = options.canvas;
  this.r = 37.5;
  this.sAngle = 0;
  this.eAngle = 2 * Math.PI;
}
// changing everything to excepting an object with propeties

Slot.prototype.draw = function() {
  this.context.beginPath();
  this.context.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
  this.context.fill();
  return this;
};

module.exports = Slot;
