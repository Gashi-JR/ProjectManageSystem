export default {
  state: {
    updatetip: false,
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
