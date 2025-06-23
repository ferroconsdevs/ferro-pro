// import Link from 'next/link'
// import { formatDate, getBlogPosts } from 'app/blog/utils'

export default function BlogPosts() {

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Ambientador de espacios</h2>
        <ul className="space-y-4">
            {/* Aquí puedes mapear tus artículos del blog */}
            <li className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">Título del Artículo</h3>
            <p className="text-gray-600">Descripción breve del artículo...</p>
            <a href="#" className="text-blue-500 hover:underline">Leer más</a>
            </li>
            {/* Repite el bloque anterior para más artículos */}
        </ul>
    </div>
  )
}