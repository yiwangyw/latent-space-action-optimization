document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.querySelector(".navbar-menu");

  burger.addEventListener("click", () => {
    const expanded = burger.classList.toggle("is-active");
    menu.classList.toggle("is-active", expanded);
    burger.setAttribute("aria-expanded", String(expanded));
  });

  document.querySelectorAll("[data-comparison]").forEach((group) => {
    const videos = Array.from(group.querySelectorAll(".comparison-media video"));
    const toggle = group.querySelector(".comparison-toggle");
    const replay = group.querySelector(".comparison-replay");
    const status = group.querySelector(".comparison-status");
    const title = group.querySelector("h3").textContent.toLowerCase();
    const isPlaying = () => videos.some((video) => !video.paused && !video.ended);

    const updateControl = () => {
      const playing = isPlaying();
      toggle.textContent = playing ? "Pause together" : "Play together";
      toggle.setAttribute("aria-label", `${playing ? "Pause" : "Play"} ${title} comparison`);
    };

    const playTogether = async (restart = false) => {
      toggle.disabled = true;
      replay.disabled = true;
      status.hidden = true;
      if (restart || videos.some((video) => video.ended)) {
        videos.forEach((video) => { video.currentTime = 0; });
      }
      const results = await Promise.allSettled(videos.map((video) => video.play()));
      if (results.some((result) => result.status === "rejected")) {
        videos.forEach((video) => video.pause());
        status.textContent = "Playback could not start for every video. Please use the individual video controls to retry.";
        status.hidden = false;
      }
      toggle.disabled = false;
      replay.disabled = false;
      updateControl();
    };

    toggle.addEventListener("click", () => {
      if (isPlaying()) {
        videos.forEach((video) => video.pause());
      } else {
        playTogether();
      }
    });
    replay.addEventListener("click", () => playTogether(true));
    videos.forEach((video) => {
      ["play", "pause", "ended"].forEach((event) => video.addEventListener(event, updateControl));
    });
    group.querySelector(".comparison-controls").hidden = false;
  });
});
