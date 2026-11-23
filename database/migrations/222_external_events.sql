-- 222 · Eventos reais em Portugal continental na aba Eventos (pedido do
-- Rafael, 2026-11-23). São só informativos: a À Nossa! não vende estes
-- bilhetes (não há parceria) — os pagos levam ao site do organizador.
-- De preferência gratuitos; os pagos dizem-no.

create table if not exists public.external_events (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 2 and 120),
  category text not null default 'festa',
  description text,
  starts_on date not null,
  ends_on date,
  time_label text,              -- «18h00», «a partir das 22h30»
  venue text,
  address text,
  city text not null,
  district text,
  latitude double precision,
  longitude double precision,
  is_free boolean not null default true,
  price_from numeric(10,2),     -- só nos pagos, se se souber
  price_note text,              -- «Adulto 12 €, criança 8 €»
  ticket_url text,              -- onde se compram os bilhetes (pagos)
  source_url text,              -- de onde vem a informação
  organizer text,
  image_url text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists external_events_dates on public.external_events (starts_on, ends_on) where published;

alter table public.external_events enable row level security;

drop policy if exists external_events_read on public.external_events;
create policy external_events_read on public.external_events
  for select to anon, authenticated using (published);

drop policy if exists external_events_admin on public.external_events;
create policy external_events_admin on public.external_events
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

grant select on public.external_events to anon, authenticated;
grant insert, update, delete on public.external_events to authenticated;

-- Primeiros eventos (confirmados nas agendas oficiais/imprensa em nov 2026;
-- confirmar perto da data).
insert into public.external_events
  (title, category, description, starts_on, ends_on, time_label, venue, address, city, district, latitude, longitude, is_free, price_from, price_note, ticket_url, source_url, organizer)
select * from (values
  ('Mercado de Natal do Rossio', 'mercado',
   'O mercado de Natal no centro de Lisboa, com bancas de artesanato, doces e o comboio de Natal pela Baixa.',
   date '2026-11-13', date '2026-12-21', null, 'Praça D. Pedro IV (Rossio)', 'Praça D. Pedro IV, 1100-200 Lisboa', 'Lisboa', 'Lisboa', 38.7139, -9.1394,
   true, null::numeric, null, null, 'https://www.visitlisboablog.pt/2026/11/natal-lisboa-gratis-experiencias-gratuitas-2026.html', 'Câmara Municipal de Lisboa'),
  ('Wonderland Lisboa', 'feira',
   'Parque de Natal no Parque Eduardo VII, com roda gigante, pista de gelo e mercado. A entrada é livre; as diversões pagam-se à parte.',
   date '2026-11-27', date '2027-01-03', null, 'Parque Eduardo VII', 'Parque Eduardo VII, 1070-051 Lisboa', 'Lisboa', 'Lisboa', 38.7286, -9.1527,
   true, null, 'Entrada livre · diversões pagas', null, 'https://www.visitlisboablog.pt/2026/11/natal-lisboa-gratis-experiencias-gratuitas-2026.html', null),
  ('Luzes de Natal de Lisboa', 'cultura',
   'As iluminações de Natal na Baixa, no Chiado, na Rua Augusta e na Praça do Comércio.',
   date '2026-11-21', date '2027-01-06', 'Ao fim da tarde', 'Baixa e Chiado', 'Rua Augusta, Lisboa', 'Lisboa', 'Lisboa', 38.7101, -9.1366,
   true, null, null, null, 'https://www.visitlisboablog.pt/2026/11/natal-lisboa-gratis-experiencias-gratuitas-2026.html', 'Câmara Municipal de Lisboa'),
  ('Bárbara Tinoco nos Aliados', 'concerto',
   'Concerto de Natal ao ar livre na Avenida dos Aliados, com entrada livre.',
   date '2026-12-19', null, '19h00', 'Avenida dos Aliados', 'Avenida dos Aliados, 4000-064 Porto', 'Porto', 'Porto', 41.1480, -8.6110,
   true, null, null, null, 'https://agendaculturalporto.org/natal-no-porto-programacao/', 'Câmara Municipal do Porto'),
  ('Samuel Úria nos Aliados', 'concerto',
   'Concerto de Natal com Samuel Úria, Milhanas e Os 12 ao Todo, na Avenida dos Aliados. Entrada livre.',
   date '2026-12-12', null, '18h00', 'Avenida dos Aliados', 'Avenida dos Aliados, 4000-064 Porto', 'Porto', 'Porto', 41.1480, -8.6110,
   true, null, null, null, 'https://agendaculturalporto.org/natal-no-porto-programacao/', 'Câmara Municipal do Porto'),
  ('Sétima Legião nos Aliados', 'concerto',
   'Concerto de Natal da Sétima Legião na Avenida dos Aliados. Entrada livre.',
   date '2026-12-13', null, '18h00', 'Avenida dos Aliados', 'Avenida dos Aliados, 4000-064 Porto', 'Porto', 'Porto', 41.1480, -8.6110,
   true, null, null, null, 'https://agendaculturalporto.org/natal-no-porto-programacao/', 'Câmara Municipal do Porto'),
  ('Mercado de Natal de Serralves', 'mercado',
   'Mercado de Natal no Parque de Serralves, com produtores e artesãos. Entrada gratuita no mercado.',
   date '2026-12-05', date '2026-12-08', null, 'Serralves', 'Rua Dom João de Castro 210, 4150-417 Porto', 'Porto', 'Porto', 41.1597, -8.6598,
   true, null, null, null, 'https://agendaculturalporto.org/natal-no-porto-programacao/', 'Fundação de Serralves'),
  ('Mercado de Natal Ferreira Borges', 'mercado',
   'Mercado de Natal no Mercado Ferreira Borges, junto à Bolsa. Entrada gratuita.',
   date '2026-11-14', date '2027-01-06', null, 'Mercado Ferreira Borges', 'Rua da Bolsa 19, 4050-116 Porto', 'Porto', 'Porto', 41.1418, -8.6150,
   true, null, null, null, 'https://agendaculturalporto.org/natal-no-porto-programacao/', null),
  ('Óbidos Vila Natal', 'feira',
   'A vila medieval transforma-se num parque de Natal com pista de gelo, espetáculos e o mundo do Pinóquio, dentro da cerca do castelo.',
   date '2026-11-27', date '2027-01-03', '10h00–21h00 (varia)', 'Cerca do Castelo de Óbidos', 'Cerca do Castelo, 2510-086 Óbidos', 'Óbidos', 'Leiria', 39.3627, -9.1574,
   false, 8, 'Adulto 12 € · criança (3–11) 8 €', 'https://obidosvilanatal.pt/horarios-e-precos', 'https://www.visitlisboablog.pt/2026/10/obidos-vila-natal-2026-datas-bilhetes-horarios.html', 'Câmara Municipal de Óbidos'),
  ('Perlim', 'feira',
   'O parque temático de Natal da Quinta do Castelo, com espetáculos, circo, gelo e drones. Abre em 21 dias alternados; o espetáculo de drones é gratuito.',
   date '2026-11-28', date '2026-12-30', null, 'Quinta do Castelo', 'Quinta do Castelo, 4520 Santa Maria da Feira', 'Santa Maria da Feira', 'Aveiro', 40.9200, -8.5433,
   false, null, 'Entrada paga (preço igual todos os dias)', null, 'https://www.dn.pt/viver/perlim-ter-18-espetculo-400-drones-dois-mercados-circo-e-gelo', 'Feira Viva'),
  ('Passagem de Ano em Coimbra', 'festa',
   'José Cid às 22h30 e Diogo Piçarra depois da meia-noite, com DJ na Praça do Comércio e na Rua da Sofia. Entrada livre.',
   date '2026-12-31', date '2027-01-01', 'A partir das 22h30', 'Terreiro do Mosteiro de Santa Clara-a-Velha', 'Rua das Parreiras, 3040-266 Coimbra', 'Coimbra', 'Coimbra', 40.2036, -8.4335,
   true, null, null, null, 'https://fluxmedia.pt/passagem-ano-2026-2027-portugal-concertos/', 'Câmara Municipal de Coimbra'),
  ('Passagem de Ano em Sines', 'festa',
   'Anselmo Ralph às 22h30 e DJ a seguir, na Avenida Vasco da Gama, junto ao mar. Entrada livre.',
   date '2026-12-31', date '2027-01-01', 'A partir das 22h30', 'Avenida Vasco da Gama', 'Avenida Vasco da Gama, 7520 Sines', 'Sines', 'Setúbal', 37.9539, -8.8693,
   true, null, null, null, 'https://fluxmedia.pt/passagem-ano-2026-2027-portugal-concertos/', 'Câmara Municipal de Sines'),
  ('Passagem de Ano na Figueira da Foz', 'festa',
   'Mountain Valley, Rádio Macau e DJ Sara Santini na Avenida de Espanha. Entrada livre.',
   date '2026-12-31', date '2027-01-01', 'A partir das 22h30', 'Avenida de Espanha', 'Avenida de Espanha, Figueira da Foz', 'Figueira da Foz', 'Coimbra', null, null,
   true, null, null, null, 'https://fluxmedia.pt/passagem-ano-2026-2027-portugal-concertos/', 'Câmara Municipal da Figueira da Foz'),
  ('Passagem de Ano em Santiago do Cacém', 'festa',
   'Chico da Tina, Santamaria e DJ Pedro Simões no Parque de Feiras e Exposições, das 22h00 às 04h00. Entrada livre.',
   date '2026-12-31', date '2027-01-01', '22h00–04h00', 'Parque de Feiras e Exposições', 'Parque de Feiras e Exposições, Santiago do Cacém', 'Santiago do Cacém', 'Setúbal', null, null,
   true, null, null, null, 'https://fluxmedia.pt/passagem-ano-2026-2027-portugal-concertos/', 'Câmara Municipal de Santiago do Cacém')
) as v
where not exists (select 1 from public.external_events);

insert into public.applied_migrations (id) values ('222') on conflict do nothing;
