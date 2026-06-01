-- Destructive reset: removes ALL tables/views/types in `public` (old project + Prisma history).
-- After this, run `npm run db:migrate` to apply Kgolo migrations from scratch.

DROP SCHEMA IF EXISTS public CASCADE;

CREATE SCHEMA public;

GRANT ALL ON SCHEMA public TO public;
GRANT ALL ON SCHEMA public TO CURRENT_USER;

COMMENT ON SCHEMA public IS 'Kgolo API — recreated before prisma migrate deploy';
