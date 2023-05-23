export default {
    state: {
        updatetip: true
    },
    reducers: {
        changeUpdatetip(prevstate: object, action: any) {
            return {
                ...prevstate,
                updatetip: action.payload.bool,
            };
        },
    },
};
