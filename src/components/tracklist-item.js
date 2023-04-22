import React from 'react';
import '../pages/AlbumDetailsPage.css'

function TracklistItem(track) {
    const isOddNumbered = track.track.track_number % 2 === 1;
    console.log(isOddNumbered);
    return (
    <div className={isOddNumbered ? 'tracklist-row light-background' : 'tracklist-row dark-background'}>
      <div className={'p-2'}>
        <span>{track.track.track_number}</span>
      </div>
      <div className={'p-2'}>
        <span>{track.track.name}</span>
      </div>
      <div className="flex-fill p-2">
        <span className={"float-end"}>
          {track.track.duration_ms}
        </span>
      </div>
    </div>
    );
}
export default TracklistItem;