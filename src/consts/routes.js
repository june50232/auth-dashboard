import categories from "./categories"

const routes = Object.keys(categories).reduce((a, v) => ({ ...a, [v]: v}), {}) 

export default routes