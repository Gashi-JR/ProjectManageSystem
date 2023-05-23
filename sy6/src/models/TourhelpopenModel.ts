export default {
  state: {
    touropen: true,

  },
  reducers: {
    changeTouropen(prevstate: object, action: any) {
      return {
        ...prevstate,
        touropen: action.payload.bool,
      };
    },

  },
};
