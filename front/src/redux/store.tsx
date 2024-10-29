import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import checkAuthentication from './auth_verify/authy_slice'
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, checkAuthentication);

export const store = configureStore({
  reducer: {
    auth: persistedReducer
  },
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch