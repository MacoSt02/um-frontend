export class Fetch {
  private url: string | undefined;

  constructor(url?: string) {
    this.url = url;
  }

  async get(url: string) {
    url = url.replace(/^\//, '');
    const response = await fetch(`${this.url}/${url}`);
    return await response.json();
  }

  async post(url: string, data: unknown, headers?: object) {
    url = url.replace(/^\//, '');
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async put(url: string, data: unknown, headers?: object) {
    url = url.replace(/^\//, '');
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}