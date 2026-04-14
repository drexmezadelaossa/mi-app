import emailjs from "@emailjs/browser";

export const sendEmail = (form) => {
  return emailjs.sendForm(
    "TU_SERVICE_ID",
    "TU_TEMPLATE_ID",
    form,
    "TU_PUBLIC_KEY"
  );
};