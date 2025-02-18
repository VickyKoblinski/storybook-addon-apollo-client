"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var addons_1 = require("@storybook/addons");
var components_1 = require("@storybook/components");
var panel_1 = require("./panel");
var constants_1 = require("./constants");
var title_1 = require("./title");
addons_1.addons.register(constants_1.ADDON_ID, function (api) {
    addons_1.addons.add(constants_1.ADDON_ID, {
        paramKey: constants_1.PARAM_KEY,
        render: function (_a) {
            var _b = _a.active, active = _b === void 0 ? false : _b, key = _a.key;
            return ((0, jsx_runtime_1.jsx)(components_1.AddonPanel, tslib_1.__assign({ active: active }, { children: !active || !api.getCurrentStoryData() ? null : (0, jsx_runtime_1.jsx)(panel_1.ApolloClientPanel, {}) }), key));
        },
        title: title_1.getTitle,
        type: addons_1.types.PANEL,
    });
});
//# sourceMappingURL=register.js.map