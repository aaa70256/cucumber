# Cucunmber install for Cypress

**我們使用的是@badeball/cypress-cucumber-preprocessor這個套件**  
**PS該套件在13.0.0 v 之後就不支援`And`、`But`語法[連結](https://github.com/badeball/cypress-cucumber-preprocessor/issues/821)** 

*安裝cucmber之前必須先將cypress安裝好*  
  
    
#### install @badeball/cypress-cucumber-preprocessor
```
npm install @badeball/cypress-cucumber-preprocessor
```

#### 安裝webpack套件，幫助cypreess能順利跑.feature檔案
```
npm install --save-dev @cypress/webpack-preprocessor
```  


#### install相關依賴
```
npm install --save-dev @babel/core @babel/preset-env babel-loader webpack
```

#### cypress.config.js setting
```
const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature", //feature檔的讀取路徑
    stepDefinitions: 'cypress/e2e/steps/*.{js,ts}',
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);

      const options = {
        webpackOptions: {
          resolve: {
            extensions: [".ts", ".js"],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      };

      on("file:preprocessor", webpack(options));
      return config;
    },
    stepDefinitions: 'cypress/e2e/steps/*.{js,ts}',  //js或是ts檔的讀取路徑
  },
});
```
  

## 檔案path設定

規劃文件結構，我們會將js或是feature檔分別放在屬於他們的資料夾，這樣會比較好識別檔案。  

feature檔path設定：
```
//cypress.config.js

//設定單一feature檔路徑
e2e:{
  specPattern: "cypress/e2e/**/*.feature"  
}

//設定多個feature檔路徑
e2e:{
  specPattern:[
   "cypress/integration/[filepath]/**/*.{js,ts}",
   "cypress/integration/[filepath].{js,ts}",
   "cypress/support/step_definitions/**/*.{js,ts}",
 ]
}
```
  
 js檔path設定：  
 ```
//cypress.config.js

e2e{
//其他相關設定
},
 stepDefinitions: 'cypress/e2e/**/*.{js,ts}'
 ```
 ```
 //package.json

"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "stepDefinitions": "cypress/e2e/**/*.{js,ts}"
  }
  ```

  supports js檔path設定：
  ```
  //cypress.config.js

e2e{
  supportFile:"cypress/support/e2e.js"
},
```