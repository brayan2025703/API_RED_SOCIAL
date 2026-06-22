import{
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
} from '@nestjs/common'
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler'

/**
 * captura de errores globales
 */
@Catch(HttpException)
export class HttpExceptionFilter
implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {

        const response =
            host.switchToHttp().getResponse();
        const status=
            exception.getStatus();
        response.status(status).json({
            succes: false,
            statusCode: status,
            data: exception.getResponse(),
        });
        
    }

}

