export default function Footer () {
    return (
        <footer className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-white flex justify-between">
          <div>© {new Date().getFullYear()} FJ Multimedia</div>
          <div className="space-x-3">
            <a href="https://instagram.com/fjfilmz">Instagram</a>
            <a href="https://x.com/messages/compose?recipient_id=123456">X (Twitter)</a>
            <a href="http://wa.me/13018511352">Whatsapp</a>
          </div>
        </div>
      </footer>
    )
}