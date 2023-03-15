module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: [0, 4],
        semi: [2, "never"],
        "space-before-function-paren": [0, "never"],
        quotes: [0, "single", { avoidEscape: true }],
        "eol-last": 0,
        "no-multiple-empty-lines": ["warn", { max: 2 }],
        "no-unused-vars": 0,
        "multiline-ternary": [0, "always"]
    }
}
