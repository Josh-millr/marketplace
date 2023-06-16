export const convertToFormData = (blobData) => {
  const formData = new FormData();
  formData.append("image", blobData, "image.jpg");
  return formData;
};
