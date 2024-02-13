export default function Contact() {
  return (
    <section
      id="contact"
      className="h-full md:h-[100vh] max-w-6xl mx-auto border p-6"
    >
      <div className="flex flex-col">
        <h1 className="py-4 text-3xl">
          <span className="font-incon text-violet-400">05. </span>
          Contact Me
        </h1>
      </div>
    </section>
  );
}

// export default function Contact() {
//   return (
//     <motion.section
//       id="contact"
//       className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       <p className="text-gray-700 -mt-6 dark:text-white/80">
//         Please contact me directly at{" "}
//         <a className="underline" href="mailto:example@gmail.com">
//           example@gmail.com
//         </a>{" "}
//         or through this form.
//       </p>

//       <form
//         className="mt-10 flex flex-col dark:text-black"
//         action={async (formData) => {
//           const { data, error } = await sendEmail(formData);

//           if (error) {
//             toast.error(error);
//             return;
//           }

//           toast.success("Email sent successfully!");
//         }}
//       >
//         <input
//           className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="senderEmail"
//           type="email"
//           required
//           maxLength={500}
//           placeholder="Your email"
//         />
//         <textarea
//           className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="message"
//           placeholder="Your message"
//           required
//           maxLength={5000}
//         />
//       </form>
//     </motion.section>
//   );
// }
