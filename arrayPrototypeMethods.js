Array.prototype.all = function (p) {
  return this.reduce( (result, current) =>
    !result ? result : p(current), true);
};

Array.prototype.none = function (p) {
  return this.reduce( (start, current) =>
    !start ? start : !p(current), true);
};

Array.prototype.any = function (p) {
  return this.reduce( (result, current) =>
    result ? result : p(current), false);
};
