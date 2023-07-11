import { Controller, Get, Post, Body, Put, Patch, Delete, UseInterceptors } from "@nestjs/common";
import { CreateContactDTO } from "./dto/create-contact.dto";
import { UpdatePutContactDTO } from "./dto/update-put-contact.dto";
import { UpdatePatchContactDTO } from "./dto/update-patch-contact.dto";
import { ContactService } from "./contact.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";

@Controller('contacts')
@UseInterceptors(LogInterceptor)
export class ContactController {
    
    constructor(private readonly contactService: ContactService){} 

    @Get()
    async readAll() {
        return this.contactService.readAll();
    }

    @Get(':id')
    async readOne(@ParamId() id: number) {
        return this.contactService.readOne(id);
    }

    @Post()
    async create(@Body() data: CreateContactDTO) {
        return this.contactService.create(data);
    }

    @Put(':id')
    async updateTotal(@Body() data: UpdatePutContactDTO, @ParamId() id: number) {
        return this.contactService.updateTotal(id, data);
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchContactDTO, @ParamId() id: number) {
        return this.contactService.updatePartial(id, data);
    }

    @Delete(':id')
    async delete(@ParamId() id: number) {
        return this.contactService.delete(id);
    }

}
