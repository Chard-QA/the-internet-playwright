import { test, expect } from '@playwright/test';
import { newUser } from '../../test-data/newUser';

test('API-001: Get All Users', async ({ request }) => {

    // Send GET request
    const response = await request.get('/users');
    expect(response.status()).toBe(200);

    // Parse response body
    const body = await response.json();

    // Add assertions
    expect (Array.isArray(body)).toBe(true);
    expect (body.length).toBeGreaterThan(0);

    for (const data of body){
        expect(typeof data.id).toBe('number');
        expect(typeof data.name).toBe('string');
        expect(typeof data.username).toBe('string');
        expect(typeof data.email).toBe('string');
        expect(typeof data.phone).toBe('string');
        expect(typeof data.website).toBe('string');
        expect(typeof data.address.street).toBe('string');
        expect(typeof data.address.suite).toBe('string');
        expect(typeof data.address.city).toBe('string');
        expect(typeof data.address.zipcode).toBe('string');
        expect(typeof data.address.geo.lat).toBe('string');
        expect(typeof data.address.geo.lng).toBe('string');
        expect(typeof data.company.name).toBe('string');
        expect(typeof data.company.catchPhrase).toBe('string');
        expect(typeof data.company.bs).toBe('string');
    }
});


test('API-002: Get a single user by ID', async ({ request }) => {

    // Send GET request
    const response = await request.get('/users/1');
    expect(response.status()).toBe(200);

    // Parse response body
    const body = await response.json();

    // Add assertions
    expect(body.id).toBe(1);
    expect(body.name).toBe('Leanne Graham');
    expect(body.username).toBe('Bret');
    expect(body.email).toBe('Sincere@april.biz');
    expect(body.phone).toBe('1-770-736-8031 x56442');
    expect(body.website).toBe('hildegard.org');
    expect(body.address.street).toBe('Kulas Light');
    expect(body.address.suite).toBe('Apt. 556');
    expect(body.address.city).toBe('Gwenborough');
    expect(body.address.zipcode).toBe('92998-3874');
    expect(body.address.geo.lat).toBe('-37.3159');
    expect(body.address.geo.lng).toBe('81.1496');
    expect(body.company.name).toBe('Romaguera-Crona');
    expect(body.company.catchPhrase).toBe('Multi-layered client-server neural-net');
    expect(body.company.bs).toBe('harness real-time e-markets');

});

test('API-003: Create a New User', async ({ request }) => {
    //Send GET request
    const retrieve = await request.get('/users');
    expect(retrieve.status()).toBe(200);

    // Parse response body
    const existingUsers = await retrieve.json();

    const existingIds = existingUsers.map(
        (user: {id: number}) => user.id
    )

    // Send POST request
    const create = await request.post('/users/', {
        data: newUser
    });
    expect(create.status()).toBe(201);

    // Parse response body
    const createdUser = await create.json();

    // Add assertions
    expect(createdUser).toMatchObject(newUser);
    expect(typeof createdUser.id).toBe('number');
    expect(createdUser.id).toBeGreaterThan(0);
    expect(existingIds).not.toContain(createdUser.id);
});