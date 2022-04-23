import bcrypt from "bcrypt";

export const encrypt = async (stringInfo) => {
  try {
    const hash = await bcrypt.hash(stringInfo, 12);
    return hash;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const validate = async (stringInfo, hash) => {
  try {
    const result = await bcrypt.compare(stringInfo, hash);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
