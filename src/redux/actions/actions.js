export const ADD_ALL_POSTS = "ADD_ALL_POSTS";
export const CHANGE_SHOW_POST_MODAL = "CHANGE_SHOW_POST_MODAL";
export const CHANGE_POST_MODAL_EDIT_MODE = "CHANGE_POST_MODAL_EDIT_MODE";
export const CHANGE_EDIT_POST = "CHANGE_EDIT_POST";

export const ADD_ALL_PROFILES = "ADD_ALL_PROFILES";
export const ADD_CLICKED_PROFILE = "ADD_CLICKED_PROFILE";
export const ADD_MY_PROFILE = "ADD_MY_PROFILE";
export const CHANGE_SHOW_PROFILE_MODAL = "CHANGE_SHOW_PROFILE_MODAL";

export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_EXPERIENCE_ERROR = "GET_EXPERIENCE_ERROR";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const CHANGE_SHOW_MODAL = "CHANGE_SHOW_MODAL";
export const CHANGE_EDIT_EXP_SECTION = "CHANGE_EDIT_EXP_SECTION";
export const ADD_CURRENT_EXP_DATA = "ADD_CURRENT_EXP_DATA";

export const CHANGE_CLICKED_SEARCH_STATUS = "CHANGE_CLICKED_SEARCH_STATUS";
export const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS";
export const ADD_QUERY = "ADD_QUERY";

export const fetchProfile = (accessToken) => {
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: ADD_MY_PROFILE,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProfile = (accessToken, editedData) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("firstName", editedData.firstName);
      formData.append("lastName", editedData.lastName);
      formData.append("email", editedData.email);
      formData.append("title", editedData.title);
      formData.append("location", editedData.location);
      formData.append("about", editedData.about);
      formData.append("userImage", editedData.image);
      let response = await fetch("http://localhost:3001/users/me", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      if (response.ok) {
        console.log("Response ok");
        let data = await response.json();
        dispatch({
          type: ADD_MY_PROFILE,
          payload: data,
        });
      } else {
        console.log("Error while trying to update user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addExperience = (accessToken, addedData) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/users/me/experience`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(addedData),
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: ADD_MY_PROFILE,
          payload: data,
        });
      } else {
        console.log("Error while trying to add experience");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editExperience = (accessToken, editedData, index) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `http://localhost:3001/users/me/experience/${index}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(editedData),
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: ADD_MY_PROFILE,
          payload: data,
        });
      } else {
        console.log("Error while trying to update experience data");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteExperience = (accessToken, experience) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/users/me/experience/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(experience),
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: ADD_MY_PROFILE,
          payload: data,
        });
      } else {
        console.log("Error while trying to delete experience");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/posts");
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: ADD_ALL_POSTS,
          payload: data,
        });
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAllProfiles = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/users");
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: ADD_ALL_PROFILES,
          payload: data,
        });
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPost = (accessToken, postText, postImage) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("text", postText);
      formData.append("postImage", postImage);
      let response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      if (response.ok) {
        dispatch(fetchPosts());
        dispatch({
          type: CHANGE_SHOW_POST_MODAL,
          payload: false,
        });
      } else {
        console.log("Errors while creating new post");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editPost = (accessToken, postId, postText, postImage) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("text", postText);
      formData.append("postImage", postImage);
      let response = await fetch(`http://localhost:3001/posts/` + postId, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      if (response.ok) {
        dispatch(fetchPosts());
        dispatch({
          type: CHANGE_SHOW_POST_MODAL,
          payload: false,
        });
      } else {
        console.log("Errors while creating new post");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
