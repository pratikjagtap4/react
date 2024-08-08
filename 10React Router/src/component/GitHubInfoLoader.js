export const GitInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/pratikjagtap4");
  return response.json();
};
