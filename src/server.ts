import app from './app';
import { PORT } from './config';

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
