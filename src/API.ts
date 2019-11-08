const basePath = `wss://${window.location.host}/`;
const endpoint = (path: string) => `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;

export {endpoint};