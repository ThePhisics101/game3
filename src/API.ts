const basePath = `${window.location.host}/API`;
const APIEndpoint = (path: string) => `http://${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
const WS_URI = `ws://${basePath}/websocket`;

export {APIEndpoint, WS_URI};