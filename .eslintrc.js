module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended", "airbnb-base", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest"
  },
  rules: {
    /**
     * "off" 或 0    ==>  关闭规则
     * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
     * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
     */
    "prettier/prettier": "off",
    // eslint (http://eslint.cn/docs/rules)
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn", // debugger 调试警告
    "no-console": "warn", // 降级警告展示
    "no-async-promise-executor": "warn",
    "no-lonely-if": "warn",
    "no-bitwise": "off",
    "no-new": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-cycle": "off",
    eqeqeq: "warn", // 非三等警告
    camelcase: "warn", // 非驼峰警告
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "no-continue": "off",
    "prefer-destructuring": "off",
    "no-plusplus": "off",
    "prefer-const": "off", // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    "global-require": "off",
    "no-prototype-builtins": "off",
    "consistent-return": "off",
    "prefer-template": "off",
    "one-var": "off",
    "import/named": "off",
    "default-case": "off",
    "import/order": "off",
    radix: "off",
    "no-unused-expressions": "off",
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "no-case-declarations": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-empty": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "guard-for-in": "off",
    "@typescript-eslint/ban-types": "off",
    "class-methods-use-this": "off",
    "no-return-await": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "lines-between-class-members": "off",
    "no-return-assign": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    // vue (https://eslint.vuejs.org/rules)
    "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该 no-unused-vars 规则时有效
    "vue/valid-v-for": "off",
    "vue/require-component-is": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-v-html": "off", // 禁止使用 v-html
    "vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
    "vue/component-definition-name-casing": "off",
    "vue/attribute-hyphenation": "warn", // 对模板中的自定义组件强制执行属性命名样式：my-prop="prop"
    "vue/v-on-event-hyphenation": "off", // 对模板中的自定义组件实施 v-on 事件命名样式, 不要求必须 <MyComponent @custom-event="handleEvent" />， <MyComponent @customEvent="handleEvent" /> 也可以
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/prefer-import-from-vue": "off", // 允许使用 @vue/shared
    "vue/one-component-per-file": "off" // 关闭一个文件中只允许有一个组件
  },
  globals: {
    // 全局变量定义 writable 可修改 readonly 只读
    urlParams: "writable",
    envParams: "writable",
    $nuxt: "readonly",
    WeixinJSBridge: "readonly",
    wx: "readonly"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"],
      rules: {
        "no-undef": "off"
      }
    }
  ]
};
