import { HamzryAPI } from "@/config/api/HamzryAPI";
import { CatchError } from "@/shared/utils/CatchError";

export const registerUserAsFreelancerApi = async (credentials) => {
  const path = "become-a-freelancer";

  try {
    const response = await HamzryAPI.post(path, {
      languages: ["English", "Spanish"],
      occupation: "Software Developer",
      professionalTitle: "Full Stack Developer",
      skills: ["JavaScript", "React", "Node.js"],
      description: "I am a skilled software developer...",
      certificate: [
        {
          title: "Certificate 1",
          issuer: "Issuer 1",
          issueDate: "2022-01-01",
          credentialId: "credential_id_1",
          credentialUrl: "certificate_url_1",
        },
      ],
      contact: {
        portfolio: "portfolio_url_here",
        phone: "1234567890",
        social: {
          facebook: "facebook_url_here",
          twitter: "twitter_url_here",
          instagram: "instagram_url_here",
        },
      },
    });
    console.log("I got the response:", response.data);
    // const { success } = response.data;

    // return success;
  } catch (error) {
    // Triggered by `404` status code
    if (error?.response) return error.response.success;

    throw new CatchError(error).network();
  }
};
