export const addHero = (data) => ({
    type: 'ADD_HERO', 
    payload: data
});

export const removeHero = (data) => ({
    type: 'REMOVE_HERO', 
    payload: data
})
