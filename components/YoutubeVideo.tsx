/** @jsx h */
import { h } from 'preact';

interface Props {
  videoId: string;
}
export const YoutubeVideo = ({ videoId }: Props) => (
  <div class="video-container">
    <iframe
      class="video"
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
    ></iframe>
  </div>
);
