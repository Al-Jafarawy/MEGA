"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.updateTask = updateTask;
exports.addMultipleTasks = addMultipleTasks;
exports.printTasks = printTasks;
const arrays_1 = require("./arrays");
const variables_1 = require("./variables");
const tasks = [];
const taskHistory = [];
let taskSummary = [0, 0, 0];
function findIndexById(id) {
    return tasks.findIndex((t) => t.id === id);
}
let nextId = 1;
function addTask(title, status = "pending", ...tgs) {
    const task = {
        id: nextId++,
        title,
        status,
        tags: tgs.length ? tgs : undefined,
    };
    tasks.push(task);
    taskHistory.push([[task.id, task.title, task.status]]);
    updateSummary();
    return task;
}
function updateTask(id, newTitle, newStatus) {
    const i = findIndexById(id);
    if (i === -1)
        return null;
    if (newTitle !== undefined)
        tasks[i].title = newTitle;
    if (newStatus !== undefined)
        tasks[i].status = newStatus;
    taskHistory.push([[tasks[i].id, tasks[i].title, tasks[i].status]]);
    updateSummary();
    return tasks[i];
}
function addMultipleTasks(...titles) {
    return titles.map((t) => addTask(t));
}
function printTasks() {
    console.log("Tasks list:");
    tasks.forEach((task) => {
        console.log(`- [${task.id}] ${task.title} (${task.status})${task.tags ? " #" + task.tags.join(",") : ""}`);
    });
}
function updateSummary() {
    const pending = tasks.filter((t) => t.status === "pending").length;
    const done = tasks.filter((t) => t.status === "done").length;
    const blocked = tasks.filter((t) => t.status === "blocked").length;
    taskSummary = [pending, done, blocked];
}
function demo() {
    console.log(`${variables_1.appName} v${variables_1.version}`);
    addTask("Wash dishes");
    addTask("Write report");
    addTask("Call client");
    updateTask(2, undefined, "done");
    (0, arrays_1.addTag)("daily");
    (0, arrays_1.addTag)("office");
    printTasks();
    console.log("\nHistory log (snapshots):");
    taskHistory.forEach((snap, idx) => {
        console.log(`Snapshot ${idx + 1}:`);
        snap.forEach(([id, title, status]) => {
            console.log(`  * [${id}] ${title} -> ${status}`);
        });
    });
    console.log("\nSummary counts [pending, done, blocked]:", taskSummary);
}
demo();
