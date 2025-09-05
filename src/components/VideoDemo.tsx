import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink, RotateCcw } from 'lucide-react';
import { useState, useRef } from 'react';

const VideoDemo = () => {
  const [isPlayingView, setIsPlayingView] = useState(true); // controls whether we render the <video> vs the hero button
  const [hasPlayed, setHasPlayed] = useState(false);
  const [ended, setEnded] = useState(false);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleOpenPlayer = () => {
    // Show the <video> with poster; do NOT auto-start to let poster be visible.
    setIsPlayingView(true);
    setEnded(false);
    setPaused(false);
  };

  const handleReplay = () => {
    if (!videoRef.current) return;
    setEnded(false);
    setPaused(false);
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  };

  const handleResume = () => {
    if (!videoRef.current) return;
    setPaused(false);
    videoRef.current.play().catch(() => {});
  };

  const onPlay = () => {
    setHasPlayed(true);
    setPaused(false);
    setEnded(false);
  };

  const onPause = () => {
    // Only show pause overlay after the video has actually started once,
    // and if it hasn’t ended.
    if (hasPlayed && !ended) setPaused(true);
  };

  return (
    <section id="demo" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-section-title font-heading text-foreground mb-6">
            See Auditify.one in <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-gray max-w-3xl mx-auto mb-8">
            Watch how our AI-powered platform transforms complex compliance workflows 
            into simple, automated processes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden bg-card border-border animate-scale-in">
            <div className="aspect-video relative bg-gradient-to-br from-gray/5 to-primary/5 flex items-center justify-center">
              {!isPlayingView ? (
                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={handleOpenPlayer}
                    variant="hero"
                    className="mb-6 btn-animate"
                  >
                    <Play className="mr-2 h-6 w-6" />
                    Watch Demo (2:50)
                  </Button>
                  <p className="text-gray text-sm">
                    See how Auditify.one simplifies ISO audits with AI automation
                  </p>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    className="w-full h-full"
                    src="/videos/Auditify.One_Demo_v1.1.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/videos/demo-poster.jpg" // ensure this exists in /public/videos/
                    onPlay={onPlay}
                    onPause={onPause}
                    onEnded={() => { setEnded(true); setPaused(false); }}
                    aria-label="Auditify.One demo video"
                  />
                  {(ended || paused) && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-center">
                        {ended ? (
                          <Button
                            size="lg"
                            variant="hero"
                            onClick={handleReplay}
                            className="btn-animate"
                            aria-label="Replay video"
                          >
                            <RotateCcw className="mr-2 h-5 w-5" />
                            Replay
                          </Button>
                        ) : (
                          <Button
                            size="lg"
                            variant="hero"
                            onClick={handleResume}
                            className="btn-animate"
                            aria-label="Resume video"
                          >
                            <Play className="mr-2 h-5 w-5" />
                            Resume
                          </Button>
                        )}
                        <p className="text-gray mt-3">
                          {ended ? 'Watch the demo again' : 'Continue watching'}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </Card>

          {/* ...your features and CTA remain unchanged... */}
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
