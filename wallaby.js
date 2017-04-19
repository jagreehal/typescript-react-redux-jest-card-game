const folders = ["components", "containers", "lib", "pages", "redux", "cards", "types"];
const files = ({ prefix, ext }) => folders.map(folder => {
  return `${prefix || ""}${folder}/**/*.${ext}`;
});

module.exports = function (wallaby) {
  return {
    debug: true,
    files: files({ ext: "ts*" })
      .concat(files({ ext: "snap" }))
      .concat(['package.json', 'tsconfig.json'])
      .concat(files({ ext: "spec.ts*", prefix: "!" })),
    tests: files({ ext: "spec.ts*" }),
    env: { type: "node", runner: "node" },
    compilers: {
      "**/*.js": wallaby.compilers.babel(),
      "**/*.ts*": wallaby.compilers.typeScript({
        typescript: require("typescript"),
        module: "commonjs"
      })
    },
    testFramework: "jest",
    setup: function () {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};
