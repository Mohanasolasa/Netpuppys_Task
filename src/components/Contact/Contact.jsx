import { useState } from 'react';
import styles from './Contact.module.css';
import Reveal from '../common/Reveal';

const CLASSES = [
  'Class IV',
  'Class V',
  'Class VI',
  'Class VII',
  'Class VIII',
  'Class IX',
  'Class X',
  'Class XI (Science)',
  'Class XI (Commerce)',
  'Class XI (Humanities)',
  'Class XII',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetClass: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please provide a 10-digit mobile number.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please include a brief message or question (at least 10 characters).';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted regarding admissions.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for field once edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      targetClass: '',
      message: '',
      consent: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className={styles.contactSection} aria-labelledby="contact-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Reveal variant="fade-up" delay={0.1}>
            <span className={styles.eyebrow}>Connect With Admissions</span>
            <h2 id="contact-heading" className={styles.heading}>
              We Welcome Your <span className={styles.highlight}>Inquiries</span>
            </h2>
            <p className={styles.subheading}>
              Our admissions team is here to assist with campus visits, scholarship eligibility, fee structures,
              and academic transitions.
            </p>
          </Reveal>
        </div>

        {/* Two-Column Grid: Info & Form */}
        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info & Map */}
          <div className={styles.infoCol}>
            <Reveal variant="slide-left" delay={0.2}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Tulas International School</h3>
                <p className={styles.infoSubtitle}>Affiliated to CBSE • Co-Ed Residential & Day Boarding</p>

                <div className={styles.infoList}>
                  {/* Address */}
                  <div className={styles.infoRow}>
                    <div className={styles.iconCircle} aria-hidden="true">
                      📍
                    </div>
                    <div>
                      <strong className={styles.rowLabel}>Campus Address</strong>
                      <address className={styles.rowContent}>
                        Dhoolkot, P.O – Selaqui, Chakrata Road,<br />
                        Dehradun – 248011, Uttarakhand, India
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={styles.infoRow}>
                    <div className={styles.iconCircle} aria-hidden="true">
                      📞
                    </div>
                    <div>
                      <strong className={styles.rowLabel}>Admissions Phone</strong>
                      <div className={styles.phoneLinks}>
                        <a href="tel:+919837983791" className={styles.contactLink}>
                          Helpline: +91-98379 83791
                        </a>
                        <span className={styles.subPhone}>Landline: 0135-2699444 / 0135-2699666</span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.infoRow}>
                    <div className={styles.iconCircle} aria-hidden="true">
                      ✉️
                    </div>
                    <div>
                      <strong className={styles.rowLabel}>Email Us</strong>
                      <a href="mailto:info@tis.edu.in" className={styles.contactLink}>
                        info@tis.edu.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.7!2d77.8865903!3d30.3430336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909297f4e2e1f75%3A0x6f9fc13b9a8ede01!2sTula's%20International%20School%20-%20Best%20Boarding%20School%20in%20Dehradun%20(Uttarakhand)!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tulas International School Dehradun Location Map"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Accessible Form */}
          <div className={styles.formCol}>
            <Reveal variant="slide-right" delay={0.2}>
              <div className={styles.formCard}>
                {isSubmitted ? (
                  <div className={styles.successState} role="status" aria-live="polite">
                    <div className={styles.successIcon} aria-hidden="true">✓</div>
                    <h3 className={styles.successTitle}>Thank You!</h3>
                    <p className={styles.successText}>
                      Your enquiry for <strong>{formData.name}</strong> has been received successfully.
                      Our Admissions Counselor will get in touch with you at <strong>{formData.phone}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      className={styles.resetBtn}
                      onClick={resetForm}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Admissions Enquiry Form">
                    <h3 className={styles.formHeader}>Send an Admissions Inquiry</h3>
                    <p className={styles.formSubHeader}>Fill out this form and our team will get in touch within 24 hours.</p>

                    {/* Full Name */}
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-name" className={styles.label}>
                        Parent / Guardian Full Name <span className={styles.req}>*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        aria-required="true"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <span id="name-error" className={styles.errorMsg} role="alert">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email and Phone in Two Columns */}
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="contact-email" className={styles.label}>
                          Email Address <span className={styles.req}>*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                          aria-required="true"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <span id="email-error" className={styles.errorMsg} role="alert">
                            {errors.email}
                          </span>
                        )}
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="contact-phone" className={styles.label}>
                          Phone / WhatsApp <span className={styles.req}>*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit number"
                          maxLength={10}
                          className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                          aria-required="true"
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <span id="phone-error" className={styles.errorMsg} role="alert">
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Target Class Dropdown */}
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-class" className={styles.label}>
                        Grade / Class Interested In
                      </label>
                      <select
                        id="contact-class"
                        name="targetClass"
                        value={formData.targetClass}
                        onChange={handleChange}
                        className={styles.selectInput}
                      >
                        <option value="">Select Grade</option>
                        {CLASSES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-message" className={styles.label}>
                        Questions or Remarks <span className={styles.req}>*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your child's interests or questions regarding boarding..."
                        className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                        aria-required="true"
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <span id="message-error" className={styles.errorMsg} role="alert">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className={styles.consentGroup}>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className={styles.checkbox}
                          aria-invalid={Boolean(errors.consent)}
                        />
                        <span>
                          I agree to receive communications from Tulas International School regarding my admission enquiry.
                        </span>
                      </label>
                      {errors.consent && (
                        <span className={styles.errorMsg} role="alert">
                          {errors.consent}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className={styles.submitButton}>
                      <span>Submit Inquiry</span>
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                        <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
