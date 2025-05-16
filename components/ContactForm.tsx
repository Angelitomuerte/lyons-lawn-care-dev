// File: components/ContactForm.tsx

export default function ContactForm() {
  return (
    <section id="contact" className="bg-card text-accent py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
        <p className="text-muted text-lg">
          📞 <a href="tel:2542189306" className="underline">Call us at (254) 218-9306</a><br />
          📧 <a href="mailto:lyonsyardservice@yahoo.com" className="underline">Email: lyonsyardservice@yahoo.com</a><br />
          📘 <a href="https://www.facebook.com/lyonslawncarellc" target="_blank" rel="noopener noreferrer" className="underline">Follow us on Facebook</a>
        </p>
        <a
          href="https://clienthub.getjobber.com/client_hubs/8ae4271f-8435-49c3-b849-1bdb0e613fc5/public/work_request/new"
          className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded hover:bg-[#3cbf3a] transition mt-4"
        >
          Request a Quote via Jobber
        </a>
        <div className="mt-10 rounded overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.3365951296466!2d-97.15537692439757!3d31.549618474186388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f82b21527a6c1%3A0x3f25368901b7f66e!2sWaco%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="350"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
