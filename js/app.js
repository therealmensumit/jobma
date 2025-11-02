document.addEventListener("DOMContentLoaded", () => {
  // Image Carousel Swiper Initialization
  var imgCarousel = new Swiper(".img-carousel", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    centeredSlides: false,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      1440: {
        slidesPerView: 8,
      },
    },
  });

  const sectors = [
    { icon: "engineer", label: "Engineering" },
    { icon: "healthcare", label: "Healthcare" },
    { icon: "technology", label: "Technology" },
    { icon: "e-commerce", label: "E-Commerce" },
    { icon: "logistics", label: "Logistics" },
    { icon: "financial", label: "Financial" },
    { icon: "insurance", label: "Insurance" },
    { icon: "call-center", label: "Call Center" },
  ];

  function drawWheel() {
    const wrapper = document.querySelector(".wheel-wrapper");
    const svg = document.querySelector(".wheel-svg");
    const labels = document.querySelector(".wheel-labels");
    const centerCircle = document.querySelector(".wheel-center");

    // Dynamically compute actual (pixel) size of wrapper
    const box = wrapper.getBoundingClientRect();
    const size = Math.min(box.width, box.height);
    const CENTER = size / 2;
    const OUTER_R = size * 0.46; // outer radius as 46% of box size
    const INNER_R = size * 0.265; // inner radius for the center circle
    const LABEL_RADIUS = (OUTER_R + INNER_R) / 2;

    svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
    svg.innerHTML = "";
    labels.innerHTML = "";

    // Responsive size & position for central circle (use px for absolute)
    Object.assign(centerCircle.style, {
      width: `${INNER_R * 2}px`,
      height: `${INNER_R * 2}px`,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    });

    for (let i = 0; i < sectors.length; ++i) {
      const startA = (i / sectors.length) * 2 * Math.PI - Math.PI / 2;
      const endA = ((i + 1) / sectors.length) * 2 * Math.PI - Math.PI / 2;
      const x1 = CENTER + OUTER_R * Math.cos(startA),
        y1 = CENTER + OUTER_R * Math.sin(startA);
      const x2 = CENTER + OUTER_R * Math.cos(endA),
        y2 = CENTER + OUTER_R * Math.sin(endA);
      const x3 = CENTER + INNER_R * Math.cos(endA),
        y3 = CENTER + INNER_R * Math.sin(endA);
      const x4 = CENTER + INNER_R * Math.cos(startA),
        y4 = CENTER + INNER_R * Math.sin(startA);

      const d = [
        `M ${x1} ${y1}`,
        `A ${OUTER_R} ${OUTER_R} 0 0 1 ${x2} ${y2}`,
        `L ${x3} ${y3}`,
        `A ${INNER_R} ${INNER_R} 0 0 0 ${x4} ${y4}`,
        "Z",
      ].join(" ");
      svg.innerHTML += `<path d="${d}" fill="#181f28" stroke="#fff" stroke-width="2"/>`;

      // Responsive label/icon position & sizing
      const midA = (startA + endA) / 2;
      const lx = CENTER + LABEL_RADIUS * Math.cos(midA);
      const ly = CENTER + LABEL_RADIUS * Math.sin(midA);
      const LABEL_BOX = size * 0.18,
        ICON_SIZE = size * 0.067;
      labels.innerHTML += `
      <div class="wheel-label" style="
        left: ${lx}px; top: ${ly}px;
        width: ${LABEL_BOX}px; height: ${LABEL_BOX * 0.8}px;">
        <img src="./assets/icons/${sectors[i].icon}.svg" alt="${
        sectors[i].label
      }"
          style="width:${ICON_SIZE}px; height:${ICON_SIZE}px; margin-bottom: ${
        LABEL_BOX * 0.07
      }px;" />
        <span style="font-size:${LABEL_BOX * 0.18}px">${sectors[i].label}</span>
      </div>
    `;
    }
  }
  // Re-render on load and on resize:
  window.addEventListener("DOMContentLoaded", drawWheel);
  window.addEventListener("resize", drawWheel);

  // Hover effect: show image only in active card
  const intervewSlider = new Swiper("#interview-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      640: { slidesPerView: 1.5 },
      768: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3.5 },
      1440: { slidesPerView: 4.5 },
    },
  });

  const slides = document.querySelectorAll(".question-card");

  function setActiveCard(slide) {
    slides.forEach((s) => s.classList.remove("active-card"));
    slide.classList.add("active-card");
  }

  // ✅ Activate card only when user clicks "Know more"
  slides.forEach((slide) => {
    const btn = slide.querySelector(".know-more");
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        setActiveCard(slide);
      });
    }
  });

  // Initialize WOW.js
  new WOW().init();
});
