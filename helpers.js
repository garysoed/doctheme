module.exports = {
  ifeq: function(a, b, options) {
    return (a == b) ? options.fn(this) : '';
  }
}