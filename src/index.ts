import "reflect-metadata";
import {createConnection} from "typeorm";
import {store} from "./store/store";
import {Imports, instantiate, instantiateStreaming} from "@assemblyscript/loader";
import * as Modules from "../generated";
import {readFileSync} from "fs";
import * as console from "console";

const AsBind = require("as-bind/dist/as-bind.cjs.js");


createConnection().then(async connection => {
    const s = new store(connection);
    const imports = {
        store: {
            "store.get": (entity: string, id: string) => {
                console.log(entity)
            },
            "store.set": (entity: string, id: string, data: string) => {
                console.log("store.set", entity, id, data)
            },
            "store.remove": (entity: string, id: string) => {
                console.log(entity)
            }
        },
        "index": {
            "callback.greet": (msg) => console.log(msg)
        },
        env: {
            abort() {
                console.error("abort");
            },
        },
    }

    let source = readFileSync("AS/build/optimized.wasm");
    const asBindInstance = await AsBind.instantiateSync(source, imports);

    let instance = await instantiateStreaming<typeof Modules>(source, imports);
    const {handleNewEntry, Event, greet} = instance.exports
    const {handleNewEntry: handler} = asBindInstance.exports
    const {__newString, __getString} = instance.exports
    let event = new Event(newWASMString("user"), newWASMString("Name"), newWASMString("value"));

    // handler("hi")

    function newWASMString(str: string): number {
        return __newString(str)
    }
    handleNewEntry(newWASMString("Hello"))

}).catch(error => console.log(error));
