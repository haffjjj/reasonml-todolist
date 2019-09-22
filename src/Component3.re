[@bs.module] external ex: 'a =  "./ex"

type state = {
  count: int
};

type action = 
  | Click;

module Styles = {
  open Css

  let card =  style([
    backgroundColor(blue)
  ])
}


[@react.component]
let make = (~data) => {

  let (state, dispatch) = React.useReducer((state, action) => {
    switch action {
    | Click => {...state, count: state.count + 1 }
    };
  }, {count: 0});

  let message = "You've clicked this " ++ string_of_int(state.count) ++ " times(s)";

  <div className=Styles.card>
    <button onClick={_event => dispatch(Click)}>{ReasonReact.string("click ini dong")}</button>
    {ReasonReact.string(data)}
    {ReasonReact.string(message)}
    {ReasonReact.string(ex)}
  </div>
};