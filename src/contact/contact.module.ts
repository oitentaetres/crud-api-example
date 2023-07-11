import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { ContactIdCheckMiddleware } from "src/middlewares/contact-id-check.middleware";

@Module({
    imports: [PrismaModule],
    controllers: [ContactController],
    providers: [ContactService],
    exports: []
})
export class ContactModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {

        consumer.apply(ContactIdCheckMiddleware).forRoutes({
            path: "contacts/:id",
            method: RequestMethod.ALL
        })

    }

}