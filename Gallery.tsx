import React from 'react';
import { Heart, Eye } from 'lucide-react';
import Button from './ui/Button';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  artist: string;
  likes: number;
  views: number;
  isFollowing: boolean;
}

const Gallery = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9',
      title: 'Project Impermanence',
      artist: 'Vajrapani Rai',
      likes: 1200,
      views: 8000,
      isFollowing: true
    },
    // Add more items as needed
  ];

  return (
    <div className="overflow-x-auto py-8">
      <div className="flex gap-6 px-4">
        {galleryItems.map((item) => (
          <div 
            key={item.id}
            className="flex-none w-80 bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.artist}</p>
              <div className="mt-4 flex items-center justify-between">
                <Button 
                  variant={item.isFollowing ? 'primary' : 'secondary'}
                  size="sm"
                >
                  {item.isFollowing ? 'Following' : 'Follow'}
                </Button>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center text-gray-600">
                    <Heart className="h-4 w-4 mr-1" />
                    {item.likes}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <Eye className="h-4 w-4 mr-1" />
                    {item.views}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;