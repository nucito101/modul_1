export default function Loader() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center gap-6">
        <div className="h-30 w-30 animate-spin rounded-full border-8 border-gray-300 border-t-blue-500" />
        <p className="text-center text-3xl font-bold uppercase tracking-wider">Welcome to our site</p>
      </div>
    </div>
  )
}
