const { Engine } = require('velocity');

const tryRequire = (module) => {
  try {
    return typeof __webpack_require__ === 'function'
      ? // eslint-disable-next-line no-undef
        __non_webpack_require__(module)
      : require(module);
  } catch {}
};

const velocityData = require('./velocity.data.json');

const velocityDataPrivate = tryRequire('./velocity.private.data.json');

const engine = new Engine({ template: './src/index.vm' });

module.exports = (data) => {
  return engine.render({
    ...velocityData,
    ...velocityDataPrivate,
    ...data,
  });
};
