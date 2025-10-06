import {expect, test} from '../../support/fixtures'
import {getUser} from '../../support/factories/user'

// Função para gerar string aleatória


test.describe('POST /auth/register', () => {

    test('deve registrar um novo usuário', async ({auth}) => {

        const user = getUser();

        const response = await auth.createUser(user)
        
        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body.user).toHaveProperty('id')
        expect(body.user).toHaveProperty('name', user.name)
        expect(body.user).toHaveProperty('email', user.email)
        expect(body.user).not.toHaveProperty('password')
    })


    test('não deve cadastrar quando o email já estiver em uso', async ({auth}) => {
        const user = getUser();

        const preCondition = await auth.createUser(user)

        expect(preCondition.status()).toBe(201);

        const response = await auth.createUser(user)
        
        expect(response.status()).toBe(400);
        const body = await response.json();
        expect(body).toHaveProperty('message', 'Este e-mail já está em uso. Por favor, tente outro.')
        
    })

    test('não deve cadastrar quando o email é incorreto', async ({auth}) => {

        const user = {
            name: 'Cristiane Felicio',
            email: 'cristiane&getMaxListeners.com',
            password: 'password123',
        }

        const response = await auth.createUser(user)

        expect(response.status()).toBe(400);
        const body = await response.json();
        expect(body).toHaveProperty('message', 'O campo \'Email\' deve ser um email válido')
        
    })

    test('não deve cadastrar quando o nome não é informado', async ({auth}) => {

        const user = {
            email: 'cristiane&getMaxListeners.com',
            password: 'password123',
        }

        const response = await auth.createUser(user)

        expect(response.status()).toBe(400);
        const body = await response.json();
        expect(body).toHaveProperty('message', 'O campo \'Name\' é obrigatório')
        
    })

    test('não deve cadastrar quando o email não é informado', async ({auth}) => {

        const user = {
            name: 'Cristiane Felicio',
            password: 'password123',
        }

        const response = await auth.createUser(user)

        expect(response.status()).toBe(400);
        const body = await response.json();
        expect(body).toHaveProperty('message', 'O campo \'Email\' é obrigatório')
        
    })

    test('não deve cadastrar quando a senha não é informada', async ({auth}) => {

        const user = {
            name: 'Cristiane Felicio',
            email: 'cristiane@gmail.com'
        }

        const response = await auth.createUser(user);

        expect(response.status()).toBe(400);
        const body = await response.json();
        expect(body).toHaveProperty('message', 'O campo \'Password\' é obrigatório')
        
    })

})