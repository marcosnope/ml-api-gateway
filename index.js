import app from './src/app';

async function main() {
    // Puerto de la app
    const PORT = process.env.PORT || 4000;
    // Initialization
    await app.listen(PORT);
    console.log('Server on port 4000');
};

main();