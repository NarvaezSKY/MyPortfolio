export interface ISongRes {
    recenttracks: {
      track: Array<{
        artist: {
          mbid: string;
          "#text": string;
        };
        streamable: string;
        image: Array<{
          size: string;
          "#text": string;
        }>;
        mbid: string;
        album: {
          mbid: string;
          "#text": string;
        };
        name: string;
        "@attr": {
          nowplaying: string;
        };
        url: string;
      }>;
    };
  }
  