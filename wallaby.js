const folders = ["components", "containers", "lib", "pages", "redux", "cards"];
const files = ({ prefix, ext }) => folders.map(folder => {
  return `${prefix || ""}${folder}/**/*.${ext}`;
});

module.exports = function(wallaby) {
  return {
    debug: true,
    files: files({ ext: "ts*" })
      .concat(files({ ext: "snap" }))
      .concat(files({ ext: "spec.ts*", prefix: "!" })),
    tests: files({ ext: "spec.ts*" }),
    env: { type: "node", runner: "node" },
    compilers: {
      "**/*.js*": wallaby.compilers.babel(),
      "**/*.ts*": wallaby.compilers.typeScript({
        typescript: require("typescript")
      })
    },
    testFramework: "jest",
    setup: function() {
      wallaby.testFramework.configure({
        globals: {
          __TS_CONFIG__: {
            module: "commonjs",
            jsx: "react"
          }
        },
        moduleFileExtensions: ["ts", "tsx", "js"],
        transform: {
          ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
        },
        testMatch: ["**/*.spec.(ts|tsx)"]
      });
    }
  };
};
