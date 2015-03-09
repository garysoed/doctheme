module.exports = {
  ifeq: function(a, b, options) {
    return (a == b) ? options.fn(this) : options.inverse(this);
  },

  classesOf: function(module, options) {
    var rv = '';
    options.data.root.classes.forEach(function(classObj) {
      if (classObj.module === module) {
        rv = rv + options.fn(classObj);
      }
    });
    return rv;
  },

  sortedModules: function(options) {
    var rv = '';
    var modules = options.data.root.modules;

    // Tutorial comes first.
    modules.forEach(function(module) {
      if (module.name === 'tutorial') {
        rv = rv + options.fn(module);
      }
    });

    // Rest of the modules.
    modules.forEach(function(module) {
      if (module.name !== 'tutorial') {
        rv = rv + options.fn(module);
      }
    });
    return rv;
  },

  classPrefix: function(prefix, options) {
    var rv = '';
    var classes = options.data.root.classes;
    classes.forEach(function(classObj) {
      if (classObj.name.substring(0, prefix.length) === prefix) {
        rv = rv + options.fn(classObj);
      }
    });
    return rv;
  }
}