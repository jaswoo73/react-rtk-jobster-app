// this is also an option for authHeader

const authHeader = (thunkAPI) => {
  return {
    headers: {
      Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export default authHeader;
