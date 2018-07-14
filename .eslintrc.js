module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.wpy files
    plugins: [
        'html'
    ],
    settings: {
        'html/html-extensions': ['.html', '.wpy']
    },
    // add your custom rules here
    'rules': {


        //“off” or 0 - 关闭(禁用)规则 
        // “warn” or 1 - 将规则视为一个警告（并不会导致检查不通过） 
        // “error” or 2 - 将规则视为一个错误 (退出码为1，检查不通过) 
        "no-unreachable": 0,
        "no-undef": 1,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        /* 允许不处理Promise的reject中的错误 */
        "prefer-promise-reject-errors": 0,
        'space-before-function-paren': 0,
        'eol-last': 0,
        "space-before-function-paren": 0,
        "no-unused-vars": [0, {
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none"
        }],
        "padded-blocks": [0, "always"],
        "quotes": [0, "single"], //引号类型 `` "" ''
        "quote-props": [0, "always"], //对象字面量中的属性名是否强制双引号
        /* return 赋值 */
        "no-return-assign": 0,
        /* 逗号运算符 */
        "no-sequences": 0,
        /* 连续申明 */
        "one-var": 0,
        /* a=a */
        "no-self-assign": [0, { "props": false }],
        /* var i,b,c=1 */
        "one-var": 0,
        /* //xxx   // xxx */
        "spaced-comment": 0,
        /* === */
        "eqeqeq": 0,
        //缩进
        "indent": 0,
        // 关闭语句强制分号结尾
        "semi": [0],
        //空行最多不能超过100行
        "no-multiple-empty-lines": [0, {
            "max": 10
        }],
        //关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0],
        "no-useless-escape": 0


    }
}