export const usersFetch = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      console.log('User API Hit');
    }
  };
  export const getUserByIdApi = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const userById = await response.json();
      return userById;
    } catch (error) {
      console.error(error);
      throw error; 
    } finally {
      console.log(`User by ID API Hit for userId: ${id}`);
    }
  };
  export const getUserByUsernameApi = async (username) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/search?username=${username}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const usersByUsername = await response.json();
      return usersByUsername;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error so that it can be caught in the saga
    } finally {
      console.log(`User by Username API Hit for username: ${username}`);
    }
  };
  
  export const deleteUserByIdApi = async (id) => {
    console.log('hit reaching here', id);
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      // Check if response has a body before trying to parse JSON
      // const hasBody = response.headers.get('content-length') > '0';
      // const userById = hasBody ? await response.json() : null;
      // console.log('userById in delete :-', userById);
      console.log('delete response:-',response)
  
      return response.text();
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      console.log(`User deleted by ID API Hit for userId: ${id}`);
    }
  };
  export const createUser = async (userData) => {
    try {
      const formData = new FormData();
  
      for (const key in userData) {
        formData.append(key, userData[key]);
      }
  
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Failed to create user:', error);
      throw error;
    }
  };
  
  export const updateUserApi = async (userId, userData) => {
    console.log( 'data reaching to the api?',userData)
    try {
      const formData = new FormData();
  
      for (const key in userData) {
        formData.append(key, userData[key]);
      }
  
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'PUT',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const user = await response.text();
      return user;
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  };
  