import {User} from "../entity/User";
import {Repository} from "typeorm/repository/Repository";
import {Connection} from "typeorm/connection/Connection";

interface Store {
    get(entity: string, id: string): any | null

    set(entity: string, id: string, data: any): void

    remove(entity: string, id: string): void
}

export class store implements Store {
    private repositories: Map<string, Repository<any>>

    constructor(connection: Connection) {
        const repositories: Map<string, Repository<any>> = new Map()
        repositories.set("user", connection.getRepository(User))
        this.repositories = repositories
    }

    async set(entity: string, id: string, data: any) {
        await this.repositories.get(entity).save({...data, id})
    }

    async get(entity: string, id: string) {
        return await this.repositories.get(entity).findOne(id)
    }

    async remove(entity: string, id: string) {
        await this.repositories.get(entity).remove({id})
    }
}
