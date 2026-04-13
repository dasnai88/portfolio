---
name: portfolio-motion-site
description: Use this skill when building or refining a premium portfolio website, modern landing page, animated hero, project showcase, sticky scroll section, or motion-heavy UI in Next.js. Do not use it for backend-only work, simple dashboards, or plain CRUD pages.
---

# Portfolio Motion Site

## Purpose
Build a modern personal portfolio with premium frontend motion.
The result should feel intentional, polished, stable during scroll, and production-ready.

## Default stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- Swiper only if the UI is truly a carousel/slider
- Three.js only if a section clearly needs 3D/WebGL

## Primary objective
Create a portfolio for a programmer that highlights:
- projects
- technical stack
- frontend quality
- visual polish
- smooth interactions
- strong mobile usability

## Section classification
Before coding, classify the requested section as one of these:
- hero reveal
- about / intro
- project grid
- sticky scroll storytelling
- project spotlight
- skills / stack section
- stats / counters
- marquee / logo strip
- testimonial / quote slider
- CTA / contact block
- 3D accent section

Choose one dominant motion idea per section.
Do not combine many unrelated effects in one block.

## Motion system
Prefer these motion patterns:
- fade + translate
- reveal with stagger
- image parallax
- mask / clip-path reveal
- pinned storytelling
- progressive stage transitions
- hover scale and tilt
- count-up
- subtle marquee loops

Avoid:
- chaotic motion
- unnecessary bounce
- big rotations without purpose
- constant looping everywhere
- long intro sequences that block the page

## ScrollTrigger rules
When using ScrollTrigger:
- define trigger explicitly
- define start and end explicitly
- choose scrub only when continuous scroll control is needed
- choose pin only when the section benefits from sticky storytelling
- make sure upward scroll reverses correctly
- avoid nested pinned conflicts
- kill triggers and timelines on cleanup

For complex scrubbed sections:
- keep one source of truth for progress
- do not let local stage state drift away from scroll progress
- make each stage interval readable
- add enough scroll height for the story to breathe

## Responsive strategy
Desktop and mobile should not use the same complexity by default.

Desktop:
- can use sticky layouts
- can use scrubbed storytelling
- can use richer hover motion

Mobile:
- simplify pinned sections
- reduce motion intensity
- avoid fragile layouts
- prefer sequential reveal over complicated pinning
- keep touch interaction comfortable

## Performance rules
- animate transform and opacity whenever possible
- avoid animating layout properties unless necessary
- reduce expensive blur/filter stacks
- lazy-load heavy client-side sections
- do not introduce Three.js unless justified
- optimize images and videos
- prefer stability over flashy complexity

## Accessibility rules
- support prefers-reduced-motion
- preserve readability during animation
- do not depend on animation alone to communicate key content
- maintain focus visibility and interaction clarity

## Coding rules
- use modular components
- keep animation logic separate when appropriate
- use refs carefully
- keep constants readable
- use client components only where needed
- avoid dead code and experimental leftovers

## Output format
When implementing something with this skill:
1. Briefly explain the selected motion approach
2. State whether the component must be client-side
3. Write or update the component
4. Add animation logic
5. Explain desktop/mobile behavior
6. Mention performance considerations
7. Provide a short manual test checklist

## Quality bar
The result should be:
- visually premium
- stable during scroll
- understandable in code
- easy to extend
- not overloaded with effects
- suitable for a real portfolio

## De-escalation rules
If the requested section becomes too complex:
- simplify it
- keep the best visual idea
- reduce the number of simultaneous effects
- favor clarity and premium feel over maximum animation count

If CSS-only motion is sufficient, use it.
Do not force GSAP where simple CSS transitions are clearly enough.
If 3D is not meaningfully useful, do not add Three.js.
