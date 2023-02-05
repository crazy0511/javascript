function run(object) {
    var res = [];
    for (var key in object){
        res.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return res;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]