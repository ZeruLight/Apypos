import { Response } from 'express';
import { EncryptionService } from './encryptionService'; 

const encryptionService = new EncryptionService();

export function encryptAndSend(data: object, res: Response) {
    const encryptedData = encryptionService.encrypt(JSON.stringify(data));
    res.status(200).header('Content-Type', 'application/octet-stream').send(encryptedData);
}
