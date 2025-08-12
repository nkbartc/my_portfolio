import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { MediaItem } from '../content/site';

interface MediaGridProps {
  media: MediaItem[];
  isVisible: boolean;
}

const MediaItemComponent: React.FC<{ 
  item: MediaItem; 
  index: number;
  isVisible: boolean;
  onClick: () => void;
}> = ({ item, index, isVisible, onClick }) => {
  const getYouTubeVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getIconForType = (type: MediaItem['type']) => {
    switch (type) {
      case 'video':
        return (
          <svg className="media-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        );
      case 'link':
        return (
          <svg className="media-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
          </svg>
        );
      case 'document':
        return (
          <svg className="media-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        );
      default: // image
        return (
          <svg className="media-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19M19,19H5V5H19M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5"/>
          </svg>
        );
    }
  };

  const renderThumbnail = () => {
    if (item.type === 'video' && item.embedUrl) {
      // For YouTube videos, try to extract video ID and use YouTube thumbnail
      const videoId = getYouTubeVideoId(item.url || item.embedUrl);
      if (videoId) {
        const thumbnailUrl = getYouTubeThumbnail(videoId);
        return (
          <div className="video-thumbnail-container">
            <img 
              src={thumbnailUrl}
              alt={item.title}
              className="video-thumbnail"
              onError={(e) => {
                // Fallback to custom thumbnail or icon
                const fallbackSrc = item.thumbnail;
                if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
                  e.currentTarget.src = fallbackSrc;
                } else {
                  e.currentTarget.style.display = 'none';
                  const overlay = e.currentTarget.parentElement?.querySelector('.media-icon-overlay');
                  overlay?.classList.remove('hidden');
                }
              }}
            />
            <div className="video-play-overlay">
              <div className="play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className={`media-icon-overlay hidden`}>
              {getIconForType(item.type)}
            </div>
          </div>
        );
      }
    }

    // Default thumbnail handling for other types
    return (
      <>
        {item.thumbnail ? (
          <img 
            src={item.thumbnail} 
            alt={item.title}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`media-icon-overlay ${item.thumbnail ? 'hidden' : ''}`}>
          {getIconForType(item.type)}
        </div>
      </>
    );
  };

  return (
    <motion.div
      className={`media-item media-${item.type}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
    >
      <div className="media-thumbnail">
        {renderThumbnail()}
      </div>
      <div className="media-info">
        <h4 className="media-title">{item.title}</h4>
        {item.description && (
          <p className="media-description">{item.description}</p>
        )}
      </div>
    </motion.div>
  );
};

const MediaModal: React.FC<{
  item: MediaItem | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderMediaContent = () => {
    switch (item.type) {
      case 'video':
        return item.embedUrl ? (
          <iframe
            src={item.embedUrl}
            title={item.title}
            className="modal-video"
            allowFullScreen
          />
        ) : (
          <div className="modal-link-content">
            <p>Video content</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </div>
        );
      case 'image':
        return <img src={item.url} alt={item.title} className="modal-image" />;
      case 'link':
      case 'document':
        return (
          <div className="modal-link-content">
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-link-button"
            >
              {item.type === 'document' ? 'View Document' : 'Visit Link'}
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  const getModalClassName = () => {
    let className = "media-modal";
    if (item?.type === 'video') {
      className += " video-modal";
    } else if (item?.type === 'image') {
      className += " image-modal";
    }
    return className;
  };

  const getContentClassName = () => {
    if (item?.type === 'link' || item?.type === 'document') {
      return "modal-content has-padding";
    }
    return "modal-content";
  };

  return (
    <motion.div
      className="media-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className={getModalClassName()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <div className={getContentClassName()}>
          {renderMediaContent()}
        </div>
      </motion.div>
    </motion.div>
  );
};

const MediaGrid: React.FC<MediaGridProps> = ({ media, isVisible }) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMediaClick = (item: MediaItem) => {
    if (item.type === 'link' || item.type === 'document') {
      // For external links and documents, open directly
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      // For images and videos, open in modal
      setSelectedMedia(item);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  if (!media || media.length === 0) {
    return null;
  }

  return (
    <>
      <div className="media-grid">
        {media.map((item, index) => (
          <MediaItemComponent
            key={item.id}
            item={item}
            index={index}
            isVisible={isVisible}
            onClick={() => handleMediaClick(item)}
          />
        ))}
      </div>
      <MediaModal
        item={selectedMedia}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default MediaGrid;