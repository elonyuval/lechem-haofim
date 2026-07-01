# לחם האופים — אתר תצוגה חדש

אתר React (Vite + TypeScript) לתצוגת תפריטים והזמנות (שלב 1: בקשה/פנייה, ללא תשלום מקוון).

## הרצה מקומית

דורש [Node.js](https://nodejs.org) (גרסת LTS).

```bash
npm install
npm run dev
```

האתר יעלה בכתובת שתוצג בטרמינל (בדרך כלל http://localhost:5173).

פקודות נוספות:

```bash
npm run build      # בדיקת טיפוסים + build לפרודקשן
npm run typecheck  # בדיקת טיפוסים בלבד
npm run preview    # הרצת ה-build המקומי
```

## עדכון תוכן (תפריטים, מחירים, פרטי עסק)

ראו [`src/data/README.md`](./src/data/README.md) — כל תוכן האתר נמצא בקבצים נפרדים וברורים בתיקיית `src/data`.

## מבנה הפרויקט

- `src/data/` — כל תוכן האתר: קטגוריות, מוצרים, פרטי עסק, חבילות אירוח, וסכמות הטיפוסים (`types.ts`).
- `src/lib/` — לוגיקת הזמנות: שמירה מקומית (`orderStorage.ts`), בניית הודעות וואטסאפ/מייל (`orderFormat.ts`), ולידציה (`validation.ts`).
- `src/components/` — קומפוננטות UI, מאורגנות לפי אזור (layout, ui, home, menu, hosting, about, contact, order).
- `src/pages/` — דף לכל מסלול בניווט הראשי.

## שלב ה"הזמנה" הנוכחי

אין תשלום מקוון בשלב זה. הזמנה = טופס פרטים שבסופו נשלח סיכום דרך קישור וואטסאפ/מייל, ונשמר גם באופן מקומי בדפדפן (localStorage) לפי המבנה ב-`src/data/types.ts` (`Order`). כשיהיה backend אמיתי, יש להחליף את `saveOrder()` ב-`src/lib/orderStorage.ts` בקריאת API — ראו הערה בקוד.
