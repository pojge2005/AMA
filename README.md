# Academy of Martial Arts — Nagpur

Public website for Academy of Martial Arts (AMA), Nagpur.

## Website scope

- Home and academy profile
- Instructor directory
- Events and announcements
- Gallery for academy photos, camps, championships and certificates
- Contact section (verified contact details will be added when supplied)

The Gallery interface is included now. Actual gallery photographs and event media will be added later when the academy supplies and approves them.

## Development phases

1. Public website — current phase.
2. Student Management System — later phase.
3. Admin Dashboard and gallery management — later phase.

The public website is kept separate from future private student and admin workflows.

## Technology

- Next.js App Router
- React
- TypeScript
- CSS

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Run a production build with:

```bash
npm run build
```

## Content accuracy

- Preserve the original academy emblem without redesigning it.
- Use the academy-supplied instructor names and ranks.
- Retain both Kartik Chavhan and Kartik Chouhan pending confirmation whether they refer to one person or two.
- Retain Sohan Dhapade from the earlier academy-confirmed roster.
- Do not invent branch addresses, contact details, courses, schedules, fees or achievements.

## Media assets

The supplied logo, event posters and certificates are not yet committed as binary files. Add approved files under `assets/brand/` and `assets/events/` before displaying them on the website.

## Future admin integration

Gallery uploads and publishing controls will be managed through an authenticated admin dashboard in a later phase. Public visitors will only be able to view published media.
