import { seedUsers } from './auth/users.seed.js';
import { seedAuth } from './auth/auth.seed.js';
async function runSeeds() {
    await seedUsers();
    await seedAuth();
    console.log('✅ Todas as seeds de dev executadas');
}
runSeeds();
