import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  isPlaying: boolean;
}

interface Playlist {
  id: number;
  name: string;
  description: string;
  cover: string;
  trackCount: number;
  duration: string;
  tracks: Track[];
}

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const playlists: Playlist[] = [
    {
      id: 1,
      name: 'Избранное',
      description: 'Любимые треки из ВКонтакте',
      cover: '/img/3b1b19dd-fcf5-4c0e-9cf2-53f1d27f4815.jpg',
      trackCount: 47,
      duration: '2ч 31мин',
      tracks: [
        { id: 1, title: 'Midnight City', artist: 'M83', duration: '4:03', isPlaying: false },
        { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', isPlaying: false },
        { id: 3, title: 'Somebody That I Used to Know', artist: 'Gotye', duration: '4:04', isPlaying: false },
      ]
    },
    {
      id: 2,
      name: 'Моя музыка 2024',
      description: 'Лучшие треки этого года',
      cover: '/img/852010d6-0011-4eaa-b612-1ae0e60bda57.jpg',
      trackCount: 23,
      duration: '1ч 45мин',
      tracks: [
        { id: 4, title: 'As It Was', artist: 'Harry Styles', duration: '2:47', isPlaying: false },
        { id: 5, title: 'Heat Waves', artist: 'Glass Animals', duration: '3:58', isPlaying: false },
        { id: 6, title: 'Levitating', artist: 'Dua Lipa', duration: '3:23', isPlaying: false },
      ]
    },
    {
      id: 3,
      name: 'FGFGB',
      description: 'Плейлист от Матвея Куликова',
      cover: '/img/d8653a86-228e-4bc1-b1a6-89215ac2bc42.jpg',
      trackCount: 18,
      duration: '1ч 12мин',
      tracks: [
        { id: 7, title: 'Phonk House', artist: 'DJ Smokey', duration: '3:45', isPlaying: false },
        { id: 8, title: 'Night Lovell', artist: 'Still Cold', duration: '4:12', isPlaying: false },
        { id: 9, title: 'Aggressive Phonk', artist: 'KORDHELL', duration: '2:58', isPlaying: false },
        { id: 10, title: 'Tokyo Drift', artist: 'Teriyaki Boyz', duration: '4:33', isPlaying: false },
        { id: 11, title: 'Ghostemane', artist: 'Mercury', duration: '3:21', isPlaying: false },
      ]
    },
    {
      id: 4,
      name: 'Электронная музыка',
      description: 'EDM и синтвейв коллекция',
      cover: '/img/3a16ba49-8969-4887-8894-081ce97586a4.jpg',
      trackCount: 35,
      duration: '2ч 12мин',
      tracks: [
        { id: 12, title: 'One More Time', artist: 'Daft Punk', duration: '5:20', isPlaying: false },
        { id: 13, title: 'Strobe', artist: 'Deadmau5', duration: '10:32', isPlaying: false },
        { id: 14, title: 'Satisfaction', artist: 'Benny Benassi', duration: '4:51', isPlaying: false },
      ]
    }
  ];

  const handlePlayTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-spotify-black text-spotify-white">
      {/* Header */}
      <header className="bg-spotify-darkgray px-6 py-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Music" size={32} className="text-spotify-green" />
            <h1 className="text-2xl font-montserrat font-bold">VK Music</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-lightgray" />
              <Input
                placeholder="Поиск треков..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-spotify-darkgray border-gray-600 text-spotify-white placeholder-spotify-lightgray w-80"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-spotify-lightgray hover:text-spotify-white">
              <Icon name="User" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-spotify-darkgray h-screen p-4">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-spotify-white hover:bg-spotify-green hover:text-spotify-black">
              <Icon name="Home" size={20} className="mr-3" />
              Главная
            </Button>
            <Button variant="ghost" className="w-full justify-start text-spotify-lightgray hover:text-spotify-white">
              <Icon name="Search" size={20} className="mr-3" />
              Поиск
            </Button>
            <Button variant="ghost" className="w-full justify-start text-spotify-lightgray hover:text-spotify-white">
              <Icon name="Library" size={20} className="mr-3" />
              Моя библиотека
            </Button>
          </nav>

          <div className="mt-8">
            <h3 className="text-spotify-lightgray text-sm font-semibold mb-4 px-3">ПЛЕЙЛИСТЫ</h3>
            <div className="space-y-1">
              {playlists.map((playlist) => (
                <Button
                  key={playlist.id}
                  variant="ghost"
                  className="w-full justify-start text-spotify-lightgray hover:text-spotify-white p-3"
                >
                  <img
                    src={playlist.cover}
                    alt={playlist.name}
                    className="w-6 h-6 rounded mr-3 object-cover"
                  />
                  <span className="truncate">{playlist.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Area */}
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-montserrat font-bold mb-2">Мои плейлисты</h2>
            <p className="text-spotify-lightgray">Твоя музыка из ВКонтакте</p>
          </div>

          {/* Playlists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {playlists.map((playlist) => (
              <Card key={playlist.id} className="bg-spotify-darkgray border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer group">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img
                      src={playlist.cover}
                      alt={playlist.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <Button
                      size="icon"
                      className="absolute bottom-2 right-2 bg-spotify-green text-spotify-black hover:bg-spotify-green/90 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="Play" size={20} />
                    </Button>
                  </div>
                  <h3 className="font-montserrat font-semibold text-spotify-white mb-1">{playlist.name}</h3>
                  <p className="text-spotify-lightgray text-sm mb-2">{playlist.description}</p>
                  <p className="text-spotify-lightgray text-xs">{playlist.trackCount} треков • {playlist.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recently Played */}
          <div className="mb-8">
            <h3 className="text-xl font-montserrat font-bold mb-4">Недавно прослушанное</h3>
            <div className="space-y-2">
              {playlists[0].tracks.map((track) => (
                <div
                  key={track.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-spotify-darkgray transition-colors group cursor-pointer"
                  onClick={() => handlePlayTrack(track)}
                >
                  <div className="flex items-center space-x-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-10 h-10 text-spotify-lightgray hover:text-spotify-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="Play" size={16} />
                    </Button>
                    <div>
                      <p className="text-spotify-white font-medium">{track.title}</p>
                      <p className="text-spotify-lightgray text-sm">{track.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-spotify-lightgray text-sm">{track.duration}</span>
                    <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                      <Icon name="Heart" size={16} />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                      <Icon name="MoreHorizontal" size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Music Player */}
      {currentTrack && (
        <footer className="fixed bottom-0 left-0 right-0 bg-spotify-darkgray border-t border-gray-700 px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Track Info */}
            <div className="flex items-center space-x-4 w-1/3">
              <div className="w-14 h-14 bg-gray-600 rounded-lg flex items-center justify-center">
                <Icon name="Music" size={24} className="text-spotify-lightgray" />
              </div>
              <div>
                <p className="text-spotify-white font-medium">{currentTrack.title}</p>
                <p className="text-spotify-lightgray text-sm">{currentTrack.artist}</p>
              </div>
              <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                <Icon name="Heart" size={16} />
              </Button>
            </div>

            {/* Player Controls */}
            <div className="flex flex-col items-center w-1/3">
              <div className="flex items-center space-x-4 mb-2">
                <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                  <Icon name="Shuffle" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                  <Icon name="SkipBack" size={20} />
                </Button>
                <Button
                  size="icon"
                  className="bg-spotify-white text-spotify-black hover:bg-spotify-white/90 w-10 h-10"
                  onClick={togglePlayPause}
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                  <Icon name="SkipForward" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                  <Icon name="Repeat" size={20} />
                </Button>
              </div>
              <div className="flex items-center space-x-2 w-full">
                <span className="text-spotify-lightgray text-xs">1:23</span>
                <div className="flex-1 bg-gray-600 rounded-full h-1">
                  <div className="bg-spotify-white rounded-full h-1 w-1/3"></div>
                </div>
                <span className="text-spotify-lightgray text-xs">{currentTrack.duration}</span>
              </div>
            </div>

            {/* Volume */}
            <div className="flex items-center space-x-2 w-1/3 justify-end">
              <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                <Icon name="Mic2" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                <Icon name="ListMusic" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-spotify-lightgray hover:text-spotify-white">
                <Icon name="Laptop" size={20} />
              </Button>
              <div className="flex items-center space-x-2">
                <Icon name="Volume2" size={20} className="text-spotify-lightgray" />
                <div className="w-24 bg-gray-600 rounded-full h-1">
                  <div className="bg-spotify-white rounded-full h-1 w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Index;