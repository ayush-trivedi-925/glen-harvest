type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
};

export default function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  multiline = false,
}: FormFieldProps) {
  const baseClasses =
    "peer w-full rounded-2xl border border-forest/15 bg-white/50 px-5 pt-7 pb-3 text-sm text-forest placeholder:text-forest/30 placeholder:opacity-0 transition-all focus:border-forest/40 focus:bg-white focus:outline-none focus:placeholder:opacity-100";

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
        />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-5 top-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest/55"
      >
        {label}
        {required && <span className="ml-1 text-chili">*</span>}
      </label>
    </div>
  );
}
