/* Import functions from utils */
import { uploadPhoto, createUser } from './utils';

/* creating a function accepting two argument */
export default async function asyncUploadUser() {
  let res = {}; /* declaring empty object */

  try {
    /* access photo and user and save in a variable and store in object */
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (err) {
    /* if there is no phot & user set to null */
    res = { photo: null, user: null };
  }
  return res;
}
