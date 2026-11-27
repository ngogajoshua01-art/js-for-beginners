//for in loop exercises
let student = {
    name: "Joshua",
    age: 20,
    country: "Rwanda"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}