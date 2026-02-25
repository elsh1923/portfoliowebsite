"use server";

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Basic validation
  if (!name || !email || !subject || !message) {
    return { success: false, message: "Please fill in all fields." };
  }

  // Simulate server processing delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Log the received data (in a real app, you'd send an email here)
  console.log("Contact Form Submission Received:", { name, email, subject, message });

  return { 
    success: true, 
    message: "Thank you for reaching out! I'll get back to you soon." 
  };
}
