const {defaults} = require('jest-config');

module.exports = {
    roots: ['<rootDir>/app/src'],
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
