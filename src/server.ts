import app from './app';

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
