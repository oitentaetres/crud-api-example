import { CreateContactDTO } from "./create-contact.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdatePatchContactDTO extends PartialType(CreateContactDTO) {}