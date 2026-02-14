import {
  ValidationPipe,
  BadRequestException,
  ValidationError,
} from '@nestjs/common';

export class CreatePostValidationPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const formattedErrors = {};

        errors.forEach((err) => {
          if (err.constraints) {
            formattedErrors[err.property] = Object.values(err.constraints).join(
              ', ',
            );
          }
        });

        return new BadRequestException({ errors: formattedErrors });
      },
    });
  }
}
