import Image from 'next/image';
import { ISpace } from '@components/interfaces/spaces';

const dummySpace: ISpace = {
  id: 1,
  title: 'Cell Biology, Genetics and Evolution',
  banner: '/uploads/images/banners/cell-banner.png', // Replace with actual image path
  description: 'Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...',
  flashcardsCount: 42,
  commentsCount: 3,
  contributors: [
    {
      name: 'Michael Busch',
      avatar: './file.svg', // Replace with actual image path
    },
  ],
};

export default function HomePage() {
  const spaces: ISpace[] = [dummySpace];
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {spaces.map((space) => (
          <div key={space.id} className="bg-white rounded-lg shadow mb-6">
            {/* Banner */}
            <div className="relative">
              <Image src={space.banner} alt={space.title} layout="responsive" width={1000} height={300} />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <div className="text-white">
                  <h1 className="text-2xl font-bold">{space.title}</h1>
                  <p className="text-sm">{space.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
                </div>
              </div>
            </div>
            
            <nav className="container mx-auto px-6 py-4">
              {/* Navigation links */}
              <ul className="flex space-x-4">
                <li><a href="#" className="text-blue-500 hover:text-blue-700">Feed</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">People</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">About</a></li>
              </ul>
            </nav>

            {/* Space Details */}
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <Image src={space.contributors[0].avatar} alt={space.contributors[0].name} width={32} height={32} className="rounded-full" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    {space.contributors[0].name} published Flashcard • 6 days ago
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">{space.title}</h2>
                <p>{space.description}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">View {space.flashcardsCount} Flashcards</button>
                </div>
                <div className="text-sm text-gray-500">
                  {space.commentsCount} comments
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
