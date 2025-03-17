import React, { useState, useRef } from "react";
import {
  SendIcon,
  LinkedinIcon,
  GithubIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  LoaderIcon,
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Form status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");

  // Form validation states
  const [errors, setErrors] = useState({});

  // References for form elements
  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  // Handle input changes and clear errors when typing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      // Focus on the first field with an error
      if (errors.name) nameInputRef.current?.focus();
      else if (errors.email) emailInputRef.current?.focus();
      else if (errors.message) messageInputRef.current?.focus();
      return;
    }

    // Set form to submitting state
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      // Create FormData object
      const submitFormData = new FormData();
      
      // Add form fields
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email);
      submitFormData.append("message", formData.message);
      
      // Add your Web3Forms access key - replace with your actual key
      submitFormData.append("access_key", "73449912-bd39-49ab-8144-93114974d1f3");
      
      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitFormData
      });

      const data = await response.json();

      if (data.success) {
        // Success handling
        setFormStatus("success");
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        // Reset form
        setFormData({ name: "", email: "", message: "" });
        formRef.current?.reset();

        // Reset form status after delay
        setTimeout(() => {
          setFormStatus("idle");
        }, 3000);
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      // Error handling
      setFormStatus("error");
      toast.error("Failed to send message", {
        description: error.message || "Please try again or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="section-container">
        <div className="container-inner text-center space-y-4 mb-16">
          <span className="px-4 py-1 text-xs font-medium bg-primary/10 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <CheckCircleIcon size={32} />
                </div>
                <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-5 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium flex justify-between"
                  >
                    <span>Name</span>
                    {errors.name && (
                      <span className="text-red-500 text-xs">
                        {errors.name}
                      </span>
                    )}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    ref={nameInputRef}
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 transition-colors ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    }`}
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium flex justify-between"
                  >
                    <span>Email</span>
                    {errors.email && (
                      <span className="text-red-500 text-xs">
                        {errors.email}
                      </span>
                    )}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    ref={emailInputRef}
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 transition-colors ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium flex justify-between"
                  >
                    <span>Message</span>
                    {errors.message && (
                      <span className="text-red-500 text-xs">
                        {errors.message}
                      </span>
                    )}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    ref={messageInputRef}
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 transition-colors resize-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    }`}
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-5 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                    formStatus === "error"
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <LoaderIcon size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : formStatus === "error" ? (
                    <>
                      <AlertCircleIcon size={16} />
                      <span>Try Again</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <SendIcon size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">
                  Contact Information
                </h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through the form or via the contact
                  details below.
                </p>
              </div>

              <div className="space-y-4">
                <div className="group">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Email
                  </h4>
                  <a
                    href="mailto:harshforcode21@gmail.com"
                    className="text-lg hover:text-primary transition-colors group-hover:underline"
                  >
                    harshforcode21@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <h3 className="text-xl font-medium mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/harsh-ranjan-dwivedi/"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                  target="blank"
                >
                  <LinkedinIcon size={22} />
                </a>
                <a
                  href="https://github.com/harshlancer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                  target="blank"
                >
                  <GithubIcon size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;