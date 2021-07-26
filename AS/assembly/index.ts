// export declare namespace store {
//   function set(entity: string, id: string, data: string): void
// }
//
// export function createEntry(entity: string, id: string, data: string): void {
//   store.set(entity, id, data)
// }

import {store, Entity} from "./store";

export declare namespace callback {
    function greet(message: string): string | null
}


export class Event {
    public entity: string
    public name: string
    public value: string

    constructor(entity: string, name: string, value: string) {
        this.entity = entity
        this.name = name
        this.value = value
    }
}

export function handleNewEntry(event: string): void {
    store.set(event + "hello", event, new Entity(event, event))
}

export function greet(msg: string): void {
    callback.greet("hi")
}