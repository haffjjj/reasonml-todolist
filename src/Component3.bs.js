// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Ex = require("./ex");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var ex = Ex;

var card = Css.style(/* :: */[
      Css.backgroundColor(Css.blue),
      /* [] */0
    ]);

var Styles = /* module */[/* card */card];

function Component3(Props) {
  var data = Props.data;
  var match = React.useReducer((function (state, action) {
          return /* record */[/* count */state[/* count */0] + 1 | 0];
        }), /* record */[/* count */0]);
  var dispatch = match[1];
  var message = "You've clicked this " + (String(match[0][/* count */0]) + " times(s)");
  return React.createElement("div", {
              className: card
            }, React.createElement("button", {
                  onClick: (function (_event) {
                      return Curry._1(dispatch, /* Click */0);
                    })
                }, "click ini dong"), data, message, ex);
}

var make = Component3;

exports.ex = ex;
exports.Styles = Styles;
exports.make = make;
/* ex Not a pure module */
