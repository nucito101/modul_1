type InputProps = {
  type: string
  label: string
  required?: boolean
  rows?: number
}

export default function Input({ type, label, required, rows = 5 }: InputProps) {
  return (
    <div>
      {type === "textarea" ? (
        <textarea
          required={required}
          placeholder={required ? `${label} *` : label}
          rows={rows}
          className="bg-[#F3F3F3] py-1 px-4 w-full resize-none"
        />
      ) : (
        <input
          type={type}
          required={required}
          placeholder={required ? `${label} *` : label}
          className="bg-[#F3F3F3] py-1 px-4 w-full"
        />
      )}
    </div>
  )
}
