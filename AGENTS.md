# AGENTS.md

## Project
Build a premium personal portfolio website for a programmer.
The site must look modern, polished, animation-rich, and production-ready.

## Main goal
Create a portfolio that feels like a high-end digital studio website:
- strong first screen
- smooth scroll experience
- animated project showcase
- clean typography
- modern layout
- good mobile adaptation
- fast enough for real usage

## Tech defaults
- Next.js App Router
- TypeScript
- Tailwind CSS
- GSAP for advanced motion
- ScrollTrigger for scroll-driven sections
- Swiper only when a real slider is needed
- Three.js only when a section clearly benefits from 3D/WebGL
- Prefer Server Components by default
- Use Client Components only when animation or interactivity requires them

## Site structure default
Unless the user asks otherwise, prefer this structure:
1. Hero
2. About / intro
3. Skills / stack
4. Featured projects
5. Scroll-driven showcase section
6. Benefits / approach
7. Contact / CTA

## Visual direction
- Premium and minimal
- Strong typography hierarchy
- Clean spacing
- Modern dark or neutral palette by default
- Subtle glass / blur only when it improves the design
- Avoid template-looking layouts
- Avoid clutter

## Motion direction
Animations should feel expensive, smooth, and intentional.
Do not animate everything.

Prefer:
- reveal animations
- opacity + translate
- clip-path or mask reveals
- staggered text/card entrances
- parallax
- sticky storytelling
- hover motion on cards and buttons
- smooth counters
- marquee strips when appropriate

Avoid:
- random bouncing
- overuse of rotation
- too many simultaneous effects
- long blocking preloaders
- noisy animation on every element

## Scroll rules
For each complex section, explicitly define:
- trigger
- start
- end
- scrub true/false
- pin true/false
- expected reverse-scroll behavior

When building pinned storytelling sections:
- use one normalized scroll progress source
- avoid conflicting nested ScrollTriggers
- keep sticky sections stable
- ensure reverse motion is immediate and correct

## Mobile rules
- Mobile motion must be simpler than desktop
- Avoid heavy pinned sections on small screens unless tested carefully
- Prefer stacked layout on mobile
- Reduce motion intensity on touch devices
- Keep text readable at all times

## Accessibility
- Respect prefers-reduced-motion
- Keep contrast readable
- Do not hide key information behind motion only
- Ensure interactive elements remain obvious

## Performance
- Prefer transform and opacity animations
- Avoid layout thrashing
- Avoid excessive filters and huge blur layers
- Lazy-load heavy sections
- Use Three.js sparingly
- Clean up GSAP timelines and ScrollTriggers on unmount
- Keep image/video assets optimized

## Code quality
- Keep components modular
- Separate layout and animation logic
- Use meaningful names
- Avoid magic numbers unless documented
- Keep constants configurable
- Remove dead code
- Keep files readable

## Project-specific design rules
This is a personal portfolio for a programmer.
Content should emphasize:
- projects
- technical skills
- clean presentation of work
- credibility
- modern frontend quality

Avoid corporate fluff.
Show the work clearly.

## When implementing UI
For each requested section:
1. Briefly explain the motion concept
2. Identify whether it needs a client component
3. Implement the component
4. Add animation logic
5. Mention mobile behavior
6. Mention performance caveats
7. Provide a short test checklist

## Validation before finishing
Always check:
- TypeScript errors
- hydration risks
- cleanup of GSAP/ScrollTrigger
- layout stability
- mobile behavior
- whether the section is over-animated

## Default behavior
If the request is ambiguous:
- choose the cleaner and more premium option
- keep motion restrained
- prioritize readability and visual hierarchy
- do not add unnecessary libraries
