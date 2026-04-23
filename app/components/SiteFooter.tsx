import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} SmartStudy AI</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
