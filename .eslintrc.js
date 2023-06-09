// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // style
        "indent": ["error", 4],
        "no-unused-vars": 0,

        // react
        "react/react-in-jsx-scope": 0,
        "react/prop-types": 0,
    }
}
