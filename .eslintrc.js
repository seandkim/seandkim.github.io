module.exports = {
    "extends": "airbnb",
    "globals": {
        "window": true,
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"]
            }
        }
    },
    "rules": {
        "class-methods-use-this": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "max-len": 1,
        "no-lonely-if": 1,
        "object-curly-newline": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-no-target-blank": 1,
        "react/jsx-one-expression-per-line": 0,
        "react/prefer-stateless-function": 0,
    }
};