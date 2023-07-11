import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { CreateContactDTO } from "./dto/create-contact.dto";
import { UpdatePutContactDTO } from "./dto/update-put-contact.dto";
import { UpdatePatchContactDTO } from "./dto/update-patch-contact.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ContactService {

    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateContactDTO) {

        return this.prisma.contact.create({data});

    }

    async readAll() {

        return this.prisma.contact.findMany();

    }

    async readOne(id: number) {
        
        await this.exists(id);

        return this.prisma.contact.findUnique({
            where: {
                id
            }
        });

    }

    async updateTotal(id: number, data: UpdatePutContactDTO) {        
        
        await this.exists(id);

        return this.prisma.contact.update({
            data,
            where: {
                id
            }
        });

    }

    async updatePartial(id: number, data: UpdatePatchContactDTO) {
        
        await this.exists(id);

        return this.prisma.contact.update({
            data,
            where: {
                id
            }
        });

    }

    async delete(id: number) {

        await this.exists(id);

        return this.prisma.contact.delete({
            where: {
                id
            }
        });

    }

    async exists(id: number) {
        
        if (!(await this.prisma.contact.count({
            where: {
                id
            }
        }))) {
            throw new NotFoundException(`There is no contact with ID ${id}.`);
        }

    }

}