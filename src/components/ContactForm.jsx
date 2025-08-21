import Button from "./Button";

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-[#F5F5F5] border border-white/60 shadow-[inset_6px_6px_12px_#d6d6d6,_inset_-6px_-6px_12px_#ffffff] p-1.5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-xl bg-transparent px-3 py-2 outline-none text-sm text-[#333333] placeholder:text-[#333333]/50"
          />
        </div>
        <div className="rounded-2xl bg-[#F5F5F5] border border-white/60 shadow-[inset_6px_6px_12px_#d6d6d6,_inset_-6px_-6px_12px_#ffffff] p-1.5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-xl bg-transparent px-3 py-2 outline-none text-sm text-[#333333] placeholder:text-[#333333]/50"
          />
        </div>
      </div>
      <div className="rounded-2xl bg-[#F5F5F5] border border-white/60 shadow-[inset_6px_6px_12px_#d6d6d6,_inset_-6px_-6px_12px_#ffffff] p-1.5">
        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          className="w-full rounded-xl bg-transparent px-3 py-2 outline-none text-sm text-[#333333] placeholder:text-[#333333]/50"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
    </form>
  );
}
