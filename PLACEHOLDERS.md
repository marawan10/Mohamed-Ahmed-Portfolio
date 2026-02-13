# Content Placeholders

## High Priority
- [ ] **Resume PDF**: Place your actual resume in `public/resume.pdf` to replace the placeholder link.
- [ ] **Project Images**:
    - Update `src/data/projects.ts` with real image URLs or local paths in `src/assets/images/`.
    - Current placeholder images are from Unsplash.
- [ ] **Contact Form**:
    - Update `src/components/sections/ContactSection.tsx` with your actual Formspree endpoint or email service logic.
    - Currently points to `mailto:`.

## Medium Priority
- [ ] **Personal Stats**: Verify the stats in `src/components/sections/AboutSection.tsx` matches your exact metrics.
- [ ] **Skills Ordering**: Adjust the order of skills in `src/data/skills.ts` to prioritize what you want to highlight most.

## Technical
- [ ] **Favicon**: Replace `public/vite.svg` and `public/favicon.ico` with your own branding.
- [ ] **Domain**: Update `src/components/layout/SEO.tsx` with your actual domain name once deployed for proper OpenGraph tags.
