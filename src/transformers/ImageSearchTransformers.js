export const transformTermForApi = (term) => {
    return term.split(' ').join('+');
}