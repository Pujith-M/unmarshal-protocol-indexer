const AsBind = require("as-bind/dist/as-bind.cjs.js");
const fs = require("fs");

const wasm = fs.readFileSync("/Users/pujith/workspace/unmarshal/scratch/AS/build/optimized.wasm");

const asyncTask = async () => {
    const asBindInstance = await AsBind.instantiate(wasm);

    // You can now use your wasm / as-bind instance!
    const response = asBindInstance.exports.myExportedFunctionThatTakesAString(
        {
            vaue: "ksjdhjkshd"
        }
    );
    console.log(response); // AsBind: Hello World!
};
asyncTask();