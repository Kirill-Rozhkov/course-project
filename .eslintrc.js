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
        indent: ["warn", 4],
        semi: [2, "never"],
        "space-before-function-paren": ["error", "never"],
        quotes: [0, "single", { avoidEscape: true }]
    }
}
