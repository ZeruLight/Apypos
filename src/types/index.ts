declare namespace Express {
    export interface Request {
        gameSession?: {
            session_id: string;
            uu_id?: string;
          }[];
    }
 }