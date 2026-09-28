# FitAI — AI Fitness Coaching Demo

A self-contained static website inspired by the two FitAI screens: exercise selection + live AI posture analysis.

## Included
- Exercise library with 32 preloaded exercises
- Search + category filters
- Exercise cards with image-style workout art, duration, kcal burn, difficulty and muscle targets
- Functional `VIDEO` buttons using built-in animated motion previews (no external video files)
- Functional `START EXERCISE` buttons for every exercise
- Live AI training mockup with posture/joint highlighting, form accuracy, joint analysis, rep analysis and feedback
- Rep controls, pause/resume, set completion and progress saving
- Home, Workouts, Sports, Progress, Analytics, Profile and Settings screens
- Sports library with category filters and Indian sports including Cricket, Football, Hockey, Kabaddi, Kho-Kho, Badminton, Table Tennis, Karate, and additional Khelo India-listed disciplines
- Responsive desktop/tablet/mobile layout
- No external libraries or internet connection required

## Run locally
### Option 1 — easiest
Open `index.html` directly in Chrome/Edge.

### Option 2 — recommended local server
Open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## Notes
This is a front-end prototype. The posture detection is a visual simulation; it does not use a real camera or medical-grade AI model.


### Realistic exercise imagery
The exercise library and live-training screen use bundled realistic gym-photo thumbnails in `assets/exercises/`. No external image URLs are required.

### Visual update
The UI uses a white base with Apple-style glassmorphism: translucent panels, blur, soft borders, and glass buttons/filters.

### Sports reference
The sports categories and several disciplines were cross-checked against the official Khelo India sports directory; Cricket was included because it was explicitly requested.
https://www.kheloindia.gov.in/sports/sports-at-a-glance
