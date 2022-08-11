import { createStore } from 'vuex';

const modules = import.meta.globEager('./modules/*.ts');
const stores: any = {};

for (let path in modules) {
    if (path && path.split('/').pop()) {
        let name = ((path.split('/') as string[]).pop() as string).replace(/\.ts/, '').toLowerCase();
        stores[name] = modules[path].default;
    }
}

export default createStore({
    modules: stores,
    state: {}
})