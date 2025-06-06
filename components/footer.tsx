export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              UnrealGenPlugin
            </h3>
            <p className="text-gray-400">The future of Blueprint development is here.</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">© 2024 UnrealGenPlugin. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-1">Not affiliated with Epic Games or Unreal Engine</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
