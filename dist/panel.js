"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloClientPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var api_1 = require("@storybook/api");
var components_1 = require("@storybook/components");
var constants_1 = require("./constants");
var ApolloClientPanel = function () {
    // const [globals] = useGlobals();
    // const msgs = globals[`${ADDON_ID}/messages`] ?? [];
    var _a = (0, api_1.useParameter)(constants_1.PARAM_KEY, {}).messages, messages = _a === void 0 ? [] : _a;
    var activeMessageIndex = (0, react_1.useState)(function () {
        return messages.length ? 0 : -1;
    })[0];
    if (messages.length === 0) {
        return (0, jsx_runtime_1.jsx)(components_1.Placeholder, { children: "No messages for this story" });
    }
    // const mockedMessage = messages[activeMessageIndex];
    // const m = msgs[activeMessageIndex];
    return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: "todo" }, activeMessageIndex);
};
exports.ApolloClientPanel = ApolloClientPanel;
//# sourceMappingURL=panel.js.map