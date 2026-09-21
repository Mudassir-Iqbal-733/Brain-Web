export const submitApplication = async (formData) => {
  console.log("Application Data:", formData);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Application submitted successfully",
    applicationId: `AIRS-${Date.now()}`,
  };
};