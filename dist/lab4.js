var student1 = {
    id: 1,
    name: "do khanh toan",
    score: 8.5,
};
var user1 = {
    id: 1,
    email: "toan@gmail.com",
};
var user2 = {
    id: 2,
    email: "user2@gmail.com",
    phone: "0123456789",
};
console.log("STUDENT", student1);
console.log("USER1", user1);
console.log("USER2", user2);
var add = function (a, b) {
    return a + b;
};
var multiply = function (a, b) {
    return a * b;
};
console.log("ADD", add(5, 10));
console.log("MULTIPLY", multiply(5, 10));
function logStatus(status) {
    switch (status) {
        case "idle":
            console.log("Idle");
            break;
        case "loading":
            console.log("Loading...");
            break;
        case "success":
            console.log("Success!");
            break;
        case "error":
            console.log("Error!");
            break;
        default:
            console.log("Unknown status");
    }
}
logStatus("idle");
logStatus("loading");
logStatus("success");
logStatus("error");
