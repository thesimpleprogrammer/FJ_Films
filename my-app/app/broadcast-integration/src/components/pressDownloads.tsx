export default function PressDownloads () {
    return (
        <section id="press" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Press & Resources</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold">Press kit</h4>
            <p className="text-sm text-gray-600 mt-2">
              Download images, CV & technical riders.
            </p>
            <a className="mt-3 inline-block text-sm underline" href="#">
              Download PDF
            </a>
          </div>

          <div className="p-4 border rounded">
            <h4 className="font-semibold">Technical rider</h4>
            <p className="text-sm text-gray-600 mt-2">
              System requirements, speaker layout, DMX, projector specs.
            </p>
            <a className="mt-3 inline-block text-sm underline" href="#">
              Download PDF
            </a>
          </div>

          <div className="p-4 border rounded">
            <h4 className="font-semibold">Media</h4>
            <p className="text-sm text-gray-600 mt-2">
              High-res images and video links for press.
            </p>
            <a className="mt-3 inline-block text-sm underline" href="#">
              View gallery
            </a>
          </div>
        </div>
      </section>
    )
}