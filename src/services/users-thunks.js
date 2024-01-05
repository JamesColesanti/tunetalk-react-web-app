import * as userService from "./users-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  "users/login",
  async (user, thunkAPI) => await userService.login(user)
);

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (user, thunkAPI) => await userService.logout()
);

export const registerThunk = createAsyncThunk(
  "users/register",
  async (user, thunkAPI) => await userService.register(user)
);

export const profileThunk = createAsyncThunk(
  "users/profile",
  async (user, thunkAPI) => {
    return await userService.profile(user);
  }
);

export const findUserByIdThunk = createAsyncThunk(
    "users/findUserById",
    async (uid) => await userService.findUserById(uid)
);

export const findUserByUsernameThunk = createAsyncThunk(
  "users/findUserByUsername",
  async (username) => await userService.findUserByUsername(username)
);

export const updateUserThunk = createAsyncThunk(
  "users/updateUser",
  async (user) => await userService.updateUser(user)
);

export const findAllUsersThunk = createAsyncThunk(
  "users/findUsers",
  async () => await userService.findAllUsers()
);

export const deleteUserThunk = createAsyncThunk(
  "users/deleteUser",
  async (uid) => await userService.deleteUser(uid)
);


