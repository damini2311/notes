// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React..."
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "childfrst" }, [
    React.createElement("h1", { id: "child1" }, "This is first child"),
    React.createElement("h1", { id: "child2" }, "This is second child"),
  ]),
  React.createElement("div", { id: "childsec" }, [
    React.createElement("h1", { id: "child3" }, "This is third child"),
    React.createElement("h1", { id: "child4" }, "This is fourth child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
