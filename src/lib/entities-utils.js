export const byId = (entities = {}, id) => entities[id] ?? null;
export const findByIds = (entities = {}, ids = []) => ids.map(id => byId(entities, id)).filter(entity => entity !== null);