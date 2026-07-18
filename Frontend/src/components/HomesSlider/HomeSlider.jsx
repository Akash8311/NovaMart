import React, { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import "./slider.css";

/**
 * HomeSlider
 * Full-bleed editorial hero slider with:
 *  - Stories-style segmented progress bar (doubles as click-to-jump nav)
 *  - Ken Burns zoom/pan on the active slide
 *  - Staggered text-reveal for eyebrow / title / subtitle / CTA
 *  - Custom circular prev/next controls
 *  - Pauses on hover/focus, respects prefers-reduced-motion
 *
 * Pass your own `slides` array of
 *   { image, eyebrow, title, subtitle, ctaLabel, href }
 * or drop it as-is to use the placeholder editorial copy below.
 */

const DEFAULT_SLIDES = [
  {
    image:
      "https://t3.ftcdn.net/jpg/06/08/19/10/360_F_608191088_ATXwUHQnOIe67Dnt7JDkzKWHDpgCfuCA.jpg",
    eyebrow: "New Arrivals",
    title: "The Autumn Edit",
    subtitle: "Layered silhouettes, warm textures, made to move with you.",
    ctaLabel: "Shop the Edit",
    href: "#",
  },
  {
    image:
      "https://haniffa.com.sg/wp-content/uploads/2021/01/Main_Banner_KidsWear-1024x397.jpg",
    eyebrow: "Kids",
    title: "Little Looks",
    subtitle: "Playful pieces built for the ones who never sit still.",
    ctaLabel: "Explore Kidswear",
    href: "#",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/714/271/small/fashion-week-male-model-isolated-on-gradient-background-with-a-place-for-text-photo.jpg",
    eyebrow: "Runway",
    title: "Fashion Week Edit",
    subtitle: "Sharp tailoring straight from the runway to your wardrobe.",
    ctaLabel: "View Collection",
    href: "#",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKM4PacGJWYdsZFj_gIvS_Xv3a6PVJ7DEaWnd2Pstx7ch-1pvSq2Fqpt4&s=10",
    eyebrow: "Featured",
    title: "Signature Staples",
    subtitle: "The pieces you'll reach for on repeat, season after season.",
    ctaLabel: "Discover More",
    href: "#",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/banner-group-emotional-elementary-school-260nw-2411943543.jpg",
    eyebrow: "Community",
    title: "Back to School",
    subtitle: "Comfortable, durable, ready for the first bell and beyond.",
    ctaLabel: "Shop School Edit",
    href: "#",
  },
  {
    image:
      "https://img.magnific.com/free-vector/fashion-sale-landing-page-template_52683-40480.jpg?semt=ais_hybrid&w=740&q=80",
    eyebrow: "Limited Time",
    title: "End of Season Sale",
    subtitle: "Up to 40% off past-season favorites, while stock lasts.",
    ctaLabel: "Shop the Sale",
    href: "#",
  },
  {
    image:
      "https://t3.ftcdn.net/jpg/07/02/38/18/360_F_702381809_k0Jj93x9uwdtgqjja3mWDfWWj9ryHj7N.jpg",
    eyebrow: "Just In",
    title: "Fresh Drops Weekly",
    subtitle: "New styles land every Friday. Be first through the door.",
    ctaLabel: "See What's New",
    href: "#",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/35878077/file/original-9319da951c6e21470ad5b9e534db0245.jpg?resize=752x&vertical=center",
    eyebrow: "Editorial",
    title: "Styled By You",
    subtitle: "Mix, match, and make every look unmistakably yours.",
    ctaLabel: "Get Inspired",
    href: "#",
  },
];

const AUTOPLAY_DELAY = 4000;

const HomeSlider = ({ slides = DEFAULT_SLIDES }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [revealKey, setRevealKey] = useState(0);

  const handleAutoplayTimeLeft = useCallback((_swiper, _timeLeft, percentage) => {
    // percentage counts DOWN from 1 to 0 — flip it so the bar fills up
    setProgress(1 - percentage);
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
    setProgress(0);
    setRevealKey((k) => k + 1);
  }, []);

  const goTo = (index) => {
    swiperRef.current?.slideToLoop(index);
  };

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <div
      className="HomeSlider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={900}
        autoplay={{
          delay: AUTOPLAY_DELAY,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onAutoplayTimeLeft={handleAutoplayTimeLeft}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="sliderHome"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className="slide-container">
                <img
                  src={slide.image}
                  alt={slide.title || `slide ${i + 1}`}
                  className={`slide-image${isActive ? " is-kenburns" : ""}`}
                />
                <div className="overlay" />

                {(slide.eyebrow || slide.title || slide.subtitle || slide.ctaLabel) && (
                  <div className="slide-content" key={isActive ? `active-${revealKey}` : `idle-${i}`}>
                    {slide.eyebrow && (
                      <span className="slide-eyebrow reveal" style={{ "--d": "0ms" }}>
                        {slide.eyebrow}
                      </span>
                    )}
                    {slide.title && (
                      <h2 className="slide-title reveal" style={{ "--d": "90ms" }}>
                        {slide.title}
                      </h2>
                    )}
                    {slide.subtitle && (
                      <p className="slide-subtitle reveal" style={{ "--d": "180ms" }}>
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.ctaLabel && (
                      <a
                        href={slide.href || "#"}
                        className="slide-cta reveal"
                        style={{ "--d": "270ms" }}
                      >
                        <span>{slide.ctaLabel}</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                          <path
                            d="M5 12h14M13 6l6 6-6 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stories-style segmented progress / navigation */}
      <div className="slider-progress" role="tablist" aria-label="Slide progress">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Go to slide ${i + 1}`}
            className="progress-segment"
            onClick={() => goTo(i)}
          >
            <span
              className="progress-fill"
              style={{
                transform: `scaleX(${
                  i < activeIndex ? 1 : i === activeIndex ? progress : 0
                })`,
                transitionDuration: i === activeIndex && !isPaused ? "100ms" : "0ms",
              }}
            />
          </button>
        ))}
      </div>

      {/* Custom arrow controls */}
      <div className="slider-arrows">
        <button className="slider-arrow prev" onClick={goPrev} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M15 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="slider-arrow next" onClick={goNext} aria-label="Next slide">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Slide counter */}
      <div className="slider-counter">
        <span className="current">{String(activeIndex + 1).padStart(2, "0")}</span>
        <span className="divider" />
        <span className="total">{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default HomeSlider;