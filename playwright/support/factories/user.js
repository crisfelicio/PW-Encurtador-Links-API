
function randomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
}

function generateRandomUrl() {
    const domains = ['example.com', 'test.com', 'demo.org', 'sample.net'];
    const paths = ['blog', 'article', 'post', 'news', 'page'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    const randomId = Math.floor(Math.random() * 1000);
    return `https://${randomDomain}/${randomPath}/${randomId}`;
}


export const getUser = () => {
    const randomName = `User_${randomString(6)}`;
    const randomEmail = `user_${randomString(6)}@papito.dev.com`;

    return {
        name: randomName,
        email: randomEmail,
        password: 'password123',
    }
}

export const getUserWithLink = () => {
    const randomName = `User_${randomString(6)}`;
    const randomEmail = `user_${randomString(6)}@papito.dev.com`;

    return {
        name: randomName,
        email: randomEmail,
        password: 'password123',
        link: {
            original_url: generateRandomUrl(),
            title: 'Exemplo de URL',
        }
    }
}


export const getUserWithLinks = () => {
    const randomName = `User_${randomString(6)}`;
    const randomEmail = `user_${randomString(6)}@papito.dev.com`;

    return {
        name: randomName,
        email: randomEmail,
        password: 'password123',
        link: [{
            original_url: generateRandomUrl(),
            title: 'Exemplo de URL',
        },
    {
            original_url: generateRandomUrl(),
            title: 'Exemplo de URL',
        },
    {
            original_url: generateRandomUrl(),
            title: 'Exemplo de URL',
        },
    {
            original_url: generateRandomUrl(),
            title: 'Exemplo de URL',
        },
    {
            original_url: generateRandomUrl(),
            title: 'Exemplo de URL',
        }]
    }
}