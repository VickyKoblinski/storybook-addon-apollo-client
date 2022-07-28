"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithApolloClient = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var constants_1 = require("./constants");
var addons_1 = require("@storybook/addons");
var graphql_1 = require("graphql");
var WithApolloClient = function (Story) {
    var _a = (0, addons_1.useParameter)(constants_1.PARAM_KEY, {}), MockedProvider = _a.MockedProvider, providerProps = tslib_1.__rest(_a, ["MockedProvider"]);
    var _b = (providerProps !== null && providerProps !== void 0 ? providerProps : {}).mocks, mocks = _b === void 0 ? [] : _b;
    var _c = (0, addons_1.useGlobals)(), setGlobals = _c[1];
    (0, addons_1.useEffect)(function () {
        var _a;
        setGlobals((_a = {},
            _a["".concat(constants_1.ADDON_ID, "/queries")] = mocks.map(function (mock) { return (0, graphql_1.print)(mock.request.query); }),
            _a));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!MockedProvider) {
        console.warn('storybook-addon-apollo-client: MockedProvider is missing from parameters in preview.js');
        return (0, jsx_runtime_1.jsx)(Story, {});
    }
    return ((0, jsx_runtime_1.jsx)(MockedProvider, tslib_1.__assign({}, providerProps, { children: (0, jsx_runtime_1.jsx)(Story, {}) })));
};
exports.WithApolloClient = WithApolloClient;
//# sourceMappingURL=decorators.js.map