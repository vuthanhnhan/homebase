import dataSource from "../database/dataSource";
import { User } from "../entities/User";
import { Request, Response } from "express";
import { validId } from "../utils/validation";

const userRepository = dataSource.getRepository(User);
export class UserController {
        
    public async getUserInfo(req: Request, res: Response) {
        if (!validId(req.params.id)) return res.status(400).json({ error: 'Invalid user ID' })
        const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }

    public async getAllUser(req: Request, res: Response) {
        const users = await userRepository.find();
        res.json(users);
    }

    public async createUser(req: Request, res: Response) {
        const newUser = userRepository.create(req.body);
        const result = await userRepository.save(newUser);
        res.status(201).json(result);
    }

    public async updateUser(req: Request, res: Response) {
        if (!validId(req.params.id)) return res.status(400).json({ error: 'Invalid user ID' })
        const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!user) {
          res.status(404).json({ message: "User not found" });
          return;
        }
    
        userRepository.merge(user, req.body);
        const result = await userRepository.save(user);
    
        res.json(result);
    }

    public async deleteUser(req: Request, res: Response) {
        if (!validId(req.params.id)) return res.status(400).json({ error: 'Invalid user ID' })
        const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
        }

        await userRepository.remove(user);
        res.json({ message: "deleted" });
    }
}

export default new UserController()