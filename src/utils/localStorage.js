export const addUserToLocalStorage = (user) => {
  localStorage.setItem("jobster-user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("jobster-user");
};

export const getUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("jobster-user")) || null;
  return user;
};
