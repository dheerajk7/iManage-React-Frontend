// base url of API
const API_ROOT = "http://localhost:8000/api/v1";

// generating different url with base url for different use
export const APIUrls = {
  signUp: () => `${API_ROOT}/employee/create`,
  signIn: () => `${API_ROOT}/employee/create-session`,
  registerStudent: () => `${API_ROOT}/student/register`,
  getStudent: () => `${API_ROOT}/student`,
  getStudentInterview: (id) => `${API_ROOT}/interview/${id}`,
  registerCompany: () => `${API_ROOT}/company/register`,
  getCompanies: () => `${API_ROOT}/company`,
  createInterview: () => `${API_ROOT}/interview/create`,
  getInterviews: () => `${API_ROOT}/interview`,
  getInterviewDetail: (id) => `${API_ROOT}/interview/${id}`,
  updateResult: (id) => `${API_ROOT}/result/update/${id}`,
};
