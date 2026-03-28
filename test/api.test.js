const assert = require('assert');

// Node 18+ já tem fetch nativo

describe('Teste de API - JSONPlaceholder', () => {
  it('Deve retornar status 200 ao buscar posts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    assert.strictEqual(response.status, 200);
  });

  it('Deve retornar uma lista de posts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    assert.ok(Array.isArray(data));
    assert.ok(data.length > 0);
  });

  it('Deve validar estrutura de um post', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();

    assert.ok(post.id);
    assert.ok(post.title);
    assert.ok(post.body);
  });
});