import { CreateUserDto } from '../../user/dto/create-user.dto';
declare const CreatePlayerDto_base: import("@nestjs/common").Type<Omit<CreateUserDto, "role">>;
export declare class CreatePlayerDto extends CreatePlayerDto_base {
    teamId: string;
}
export {};
