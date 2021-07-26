/**
 * Host store interface.
 */

export class Entity {
    public name: string
    public value: string

    constructor(name: string, value: string) {
        this.name = name
        this.value = value
    }
}

export declare namespace store {
    function get(entity: string, id: string): Entity | null

    function set(entity: string, id: string, data: Entity): void

    function remove(entity: string, id: string): void
}
