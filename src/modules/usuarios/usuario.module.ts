import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuariosService } from "./usuario.service";

@Module({

    controllers:[UsuarioController],
    providers:[UsuariosService],
    imports :[
    MongooseModule.forFeature([
        {
            name:User.name,
            schema:UserSchema
        },
    ]),
]

})
export class UsuarioModule{}