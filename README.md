# Portfolio

Русскоязычное персональное портфолио на Next.js с упором на premium product UI, аккуратный motion и поддерживаемую frontend-архитектуру.

## Стек

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- TypeScript

## Локальный запуск

```powershell
npm install
npm run dev
```

## Проверки

```powershell
npm run lint
npm run typecheck
npm run build
npm run check
```

## Деплой

Проект теперь ориентирован на Vercel как основной target.

Рекомендуемый поток:

```powershell
vercel link
vercel pull
vercel
vercel --prod
```

Если нужен корректный `canonical` URL и абсолютные social previews, задайте переменную окружения:

```powershell
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## GitHub Actions

В репозитории оставлен только CI workflow, который прогоняет `npm run check` на push и pull request.
