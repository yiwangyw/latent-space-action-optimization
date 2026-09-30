# Latent-Space Action Optimization Project Page

This repository contains the project page for:

**Latent-Space Action Optimization under Implicit Constraints for Robotic Manipulation**

Yi Wang, Ko Ayusawa, Gentiane Venture, and Eiichi Yoshida. IROS 2026.

The site is adapted from the [Nerfies project page](https://nerfies.github.io/) and retains its CC BY-SA 4.0 attribution.

## Preview

Open `index.html` directly, or run a local static server from this directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

The custom stylesheet and script URLs in `index.html` include a `?v=` content version so returning visitors load the matching assets after an update. When editing `static/css/index.css` or `static/js/index.js`, update the corresponding version in `index.html` before publishing.

## Publish with GitHub Pages

1. Create a GitHub repository and push this folder to its default branch.
2. In the repository, open **Settings > Pages**.
3. Select **Deploy from a branch**, choose the default branch and `/ (root)`, then save.

## Replace Videos

The Experiments section starts with **Real-world evaluation / Contact-rich block assembly**, followed by **Minimize smooth objectives**, the block assembly comparison, and its quantitative results. **Other demos** is a separate section for peg-in-hole and square block. Media are loaded from `static/videos/compare/`:

- Block assembly: `bad_block.mp4` and `nice_block.mp4`, with `bad_block_withbigsize.mp4` as the random-sampling close-up.
- Peg-in-hole: `bad_peg_in_hole.mp4` and `nice_peg_in_hole.mp4`.
- Square block: `bad_square.mp4` and `nice_square.mp4`.
- Square block EE trajectories: `bad_square_blocking_ee_down.gif` and `nice_square_blocking_ee_down.gif`. These animations show the top-down XY trajectories during the downward placement phase, beneath the corresponding rollout comparisons.

Each group has shared play/pause and replay buttons, along with individual video controls. Videos retain their original aspect ratios and playback speeds. The two comparison columns stay side by side on small screens; the block close-up moves above them. The header's Video link jumps to these comparisons.

To replace a video, keep its filename or update the corresponding `<source>` path in `index.html`. The EE trajectory GIFs play automatically and independently of the rollout video controls. Legacy template media are not displayed.

## Citation

```bibtex
@inproceedings{wang2026latent,
  author    = {Wang, Yi and Ayusawa, Ko and Venture, Gentiane and Yoshida, Eiichi},
  title     = {Latent-Space Action Optimization under Implicit Constraints for Robotic Manipulation},
  booktitle = {2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  year      = {2026}
}
```

## Website License

This website is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
