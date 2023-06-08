import { HamzryAPI } from "@/config/api/HamzryAPI";
import { CatchError } from "@/shared/utils/CatchError";

export const registerUserAsFreelancerApi = async (credentials) => {
  const path = "/become-a-freelancer";

  try {
    const response = await HamzryAPI.post(path, credentials);
    console.log("I got the response:", response.data);
    // const { success } = response.data;

    // return success;
  } catch (error) {
    // Triggered by `404` status code
    if (error?.response) return error.response.success;

    throw new CatchError(error).network();
  }
};
