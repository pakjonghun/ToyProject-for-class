import PageComponent from "./PageComponent.js";
const pageComponent = new PageComponent();
const parent = document.querySelector(".list");
const data = { title: "abc", desc: "Test Test" };
if (parent)
    pageComponent.render(parent, data);
//# sourceMappingURL=main.js.map