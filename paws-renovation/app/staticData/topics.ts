import { majors } from "./majors";
import { minors } from "./minors";

const combinedArray = [...majors, ...minors];

const topics = Array.from(new Set(combinedArray));

export {topics}