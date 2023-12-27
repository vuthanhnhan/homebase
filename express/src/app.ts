import express, { Express } from 'express';
import api from './routes/api/v1';

export class App {
    private app: Express;
    private port = process.env.PORT || 3000;

    constructor() {
        this.app = express();
    }

    private applyMiddleware() {
        this.app.use(express.json());
        this.app.use('/api/v1', api);
        this.handleError();
    }

    private handleError(): void {
        this.app.use(function errorHandler(
          err: any,
          req: express.Request,
          res: express.Response,
          next: express.NextFunction,
        ) {
            if (err) {
                return {
                    success: false,
                    message: 'Something error'
                }
            }
            next()
        })
    }

    public start() {
        this.applyMiddleware();

        this.app.listen(this.port, () => {
            console.log(`Server ready at http://localhost:${this.port}`);
        });
    }
}