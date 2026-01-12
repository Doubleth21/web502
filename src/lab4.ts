// type Student = {
//     id: number;
//     name: string;
//     score: number;
// };

// const student1: Student = {
//     id: 1,
//     name: "do khanh toan",
//     score: 8.5,
// }

// interface User {
//     id: number;
//     email: string;
//     phone?: string;
// }

// const user1: User = {
//     id: 1,
//     email: "toan@gmail.com",
// };
// const user2: User = {
//     id: 2,
//     email: "user2@gmail.com",
//     phone: "0123456789",
// };
// console.log("STUDENT", student1);
// console.log("USER1", user1);
// console.log("USER2", user2);


// type Calculate = (a: number, b: number) => number;

// const add: Calculate = (a: number, b: number): number => {
//     return a + b;
// }

// const multiply: Calculate = (a, b): number => {
//     return a * b;
// }
// console.log("ADD", add(5, 10));
// console.log("MULTIPLY", multiply(5, 10));


// type ApiStatus = "idle" | "loading" | "success" | "error";

// function logStatus(status: ApiStatus): void {
//     switch (status) {
//         case "idle":
//             console.log("Idle");
//             break;
//         case "loading":
//             console.log("Loading...");
//             break;
//         case "success":
//             console.log("Success!");
//             break;
//         case "error":
//             console.log("Error!");
//             break;
//         default:
//             console.log("Unknown status");
//     }
// }

// logStatus("idle");
// logStatus("loading");
// logStatus("success");
// logStatus("error");