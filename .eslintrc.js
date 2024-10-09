module.exports = {
  // https://github.com/airbnb/javascript
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
    semi: "off", // ! 句末不要分号
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn", // debugger 调试警告
    // 错误降级,警告提示
    eqeqeq: "warn", // 三等警告
    camelcase: "warn", // 驼峰
    "object-shorthand": "warn", // 对象方法简写
    "no-console": "warn", // 降级警告展示
    "no-async-promise-executor": "warn", // 禁止使用异步函数作为 Promise executor
    "no-lonely-if": "warn", // 不允许 if 语句作为 else 块中的唯一语句
    "no-unused-vars": "warn", // ! 警告有未使用变量的规则
    "no-bitwise": "off", // 关闭禁止使用位运算符的规则
    "no-new": "off", // 关闭禁止使用 `new` 关键字创建实例的规则，推荐使用字面量创建对象
    "no-shadow": "off", // 关闭禁止在嵌套作用域中与外层作用域变量同名的规则
    "prefer-const": "off", // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    "no-param-reassign": "off", // 关闭禁止重新赋值函数参数的规则
    "no-use-before-define": "off", // 关闭使用未定义的变量的警告
    "no-continue": "off", // 关闭禁止使用 continue 语句的规则
    "prefer-destructuring": "off", // 关闭偏好使用解构赋值的规则
    "no-plusplus": "off", // 关闭禁止使用 ++ 和 -- 运算符的规则
    "global-require": "off", // 关闭对全局使用 require 的检查
    "no-prototype-builtins": "off", // 关闭禁止直接调用对象原型方法的规则
    "consistent-return": "off", // 关闭在函数中要求一致返回的规则
    "prefer-template": "off", // 关闭偏好使用模板字符串的规则
    "one-var": "off", // 关闭强制变量声明在一个地方的规则
    "default-case": "off", // 关闭 switch 语句中要求默认情形的检查
    radix: "off", // 关闭对 parseInt 函数隐式基数的检查
    "no-unused-expressions": "off", // 关闭禁止使用未使用的表达式的规则
    "no-underscore-dangle": "off", // 关闭禁止使用以 _ 开头或结尾的变量名
    "no-nested-ternary": "off", // 关闭禁止使用嵌套三元运算符的规则
    "no-restricted-syntax": "off", // 关闭限制特定语法的规则
    "no-await-in-loop": "off", // 关闭禁止在循环中使用 await 的规则
    "no-case-declarations": "off", // 关闭在 switch 语句中禁止声明变量的规则
    "no-empty": "off", // 关闭禁止空块的规则
    "guard-for-in": "off", // 关闭要求 for...in 循环中有 if 检查的规则
    "class-methods-use-this": "off", // 关闭要求类方法使用 `this` 的规则
    "no-return-await": "off", // 关闭禁止在异步函数中不必要的 return await
    "lines-between-class-members": "off", // 关闭要求类成员之间添加空行的规则
    "no-return-assign": "off", // 关闭禁止在 return 语句中赋值
    // 导入相关检测
    "import/named": "off", // 关闭对命名导入的检查
    "import/extensions": "off", // 关闭对导入文件扩展名的检查
    "import/no-cycle": "off", // 关闭检测模块之间循环依赖的规则
    "import/prefer-default-export": "off", // 关闭优先使用默认导出的检查
    "import/no-extraneous-dependencies": "off", // 关闭检查未列在依赖中的导入
    "import/no-unresolved": "off", // 关闭对无法解析的导入的检查
    "import/order": "off", // 关闭对导入语句顺序的强制要求
    // vue (https://eslint.vuejs.org/rules)
    "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该 no-unused-vars 规则时有效
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
    "vue/one-component-per-file": "off", // 关闭一个文件中只允许有一个组件
    // typescript
    "@typescript-eslint/ban-types": "off", // 关闭禁止使用某些特定类型的规则
    "@typescript-eslint/no-var-requires": "off", // 允许使用 CommonJS 的 require 语句
    "@typescript-eslint/no-empty-function": "off", // 关闭禁止使用空函数的规则
    "@typescript-eslint/no-explicit-any": "off", // ! 关闭禁止使用 `any` 类型的规则
    "@typescript-eslint/no-non-null-assertion": "off", // 关闭禁止使用非空断言操作符 `!` 的规则
    "@typescript-eslint/ban-ts-comment": "off", // ! 关闭禁止使用 `@ts-<directive>` 注释的规则
    "@typescript-eslint/consistent-type-imports": "error", // 强制使用一致的类型导入方式
    "@typescript-eslint/no-unused-vars": ["warn"] // 对未使用的变量发出警告
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
