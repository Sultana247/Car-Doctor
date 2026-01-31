Getting the below error
 Cannot find module @rollup/rollup-win32-x64-msvc. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
    at requireWithFriendlyError (C:\Users\Hp\Documents\JS practice\TestCar\testcar\node_modules\rollup\dist\native.js:86:9)
    at Object.<anonymous> (C:\Users\Hp\Documents\JS practice\TestCar\testcar\node_modules\rollup\dist\native.js:95:76)
    at Module._compile (node:internal/modules/cjs/loader:1761:14)
    at Object..js (node:internal/modules/cjs/loader:1893:10)
    at Module.load (node:internal/modules/cjs/loader:1481:32)
    ... 2 lines matching cause stack trace ...
    at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
    at loadCJSModuleWithModuleLoad (node:internal/modules/esm/translators:336:3)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:239:7) {
  [cause]: Error: An Application Control policy has blocked this file.
  \\?\C:\Users\Hp\Documents\JS practice\TestCar\testcar\node_modules\@rollup\rollup-win32-x64-msvc\rollup.win32-x64-msvc.node

  Fix the solution
  ......
  1. delete package-lock.json and node_modules folder
  2. on package.json paste the code:---

  "overrides": {
  "rollup": "npm:@rollup/wasm-node" }

  3. Now run npm i and npm run dec