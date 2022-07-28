"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithMockSocket = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var constants_1 = require("./constants");
var addons_1 = require("@storybook/addons");
var mock_socket_1 = require("mock-socket");
// import createCable from '../src/actioncable';
var actioncable_1 = tslib_1.__importDefault(require("actioncable"));
var addons_2 = require("@storybook/addons");
// import { AddonPanel } from '@storybook/components';
/* tslint:disable-next-line */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
actioncable_1.default.WebSocket = mock_socket_1.WebSocket;
var WithMockSocket = function (Story) {
    var _a = (0, addons_1.useParameter)(constants_1.PARAM_KEY, {}), CreateCable = _a.CreateCable, providerProps = tslib_1.__rest(_a, ["CreateCable"]);
    var _b = (providerProps !== null && providerProps !== void 0 ? providerProps : {}).messages, messages = _b === void 0 ? [] : _b;
    var _c = (0, addons_1.useGlobals)(), setGlobals = _c[1];
    var _d = (0, addons_2.useState)(undefined), client = _d[0], setClient = _d[1];
    // const parameters = useParameter<Parameters | undefined>("actionCable", undefined);
    (0, addons_1.useEffect)(function () {
        if (CreateCable) {
            var fakeURL = 'ws://fake/';
            var mockServer = new mock_socket_1.Server(fakeURL);
            mockServer.on('connection', function (client) {
                setClient(client);
                // server.send(
                //   JSON.stringify({
                //     identifier: JSON.stringify({ channel: "PipelineChannel", room: 193680 }),
                //     message: {
                //       level: "info",
                //       message:
                //         "spacedust-storybook-7q7bc/spacedust-storybook: <s> [webpack.Progress] 10% building 0/3 entries 68/100 dependencies 0/49 modules",
                //       task_id: 1961618,
                //       task_chain_id: 563846,
                //       pipeline_stage_id: 694130,
                //       pipeline_id: 193680,
                //       aasm_state: "running",
                //       started_at: "2022-07-28T02:10:35.810Z",
                //       duration: null,
                //     },
                //   })
                // );
                // // ();
                // console.log("connected");
            });
            CreateCable(fakeURL);
        }
    }, []);
    (0, addons_1.useEffect)(function () {
        if (client && (messages === null || messages === void 0 ? void 0 : messages.length)) {
            messages.forEach(function (message) {
                setTimeout(function () {
                    client.send(JSON.stringify({
                        identifier: JSON.stringify(message.identifier),
                        message: message.message,
                    }));
                }, message.delay);
            });
        }
    }, [client, messages]);
    (0, addons_1.useEffect)(function () {
        var _a;
        setGlobals((_a = {},
            _a["".concat(constants_1.ADDON_ID, "/messages")] = messages.map(function (message) {
                return JSON.stringify(message);
            }),
            _a));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (0, jsx_runtime_1.jsx)(Story, {});
};
exports.WithMockSocket = WithMockSocket;
//# sourceMappingURL=decorators.js.map