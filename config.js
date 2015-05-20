System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "node_modules/*": "node_modules/*.js"
  }
});

System.config({
  "meta": {
    "node_modules/angular/angular": {
      "format": "global",
      "exports": "angular"
    },
    "node_modules/angular-ui-router/release/angular-ui-router": {
      "deps": [
        "angular"
      ]
    },
    "node_modules/angular-mocks/angular-mocks": {
      "deps": [
        "angular"
      ]
    }
  }
});

System.config({
  "map": {
    "angular": "node_modules/angular/angular",
    "angular-mocks": "node_modules/angular-mocks/angular-mocks",
    "angular-ui-router": "node_modules/angular-ui-router/release/angular-ui-router",
    "babel": "npm:babel-core@5.1.13",
    "babel-runtime": "npm:babel-runtime@5.1.13",
    "core-js": "npm:core-js@0.9.4",
    "ui-router": "npm:ui-router@0.0.1",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:angular-ui-router@0.2.14": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular@1.4.0-rc.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

