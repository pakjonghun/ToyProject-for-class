import PageComponent from "./PageComponent.js";
import { content } from "./types.js";

const pageComponent = new PageComponent();
const parent = document.querySelector(".list");

const data: content = { title: "abc", desc: "Test Test" };
if (parent) pageComponent.render(parent, data);
