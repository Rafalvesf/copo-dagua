-- 224 · Eventos reais: fotos (pedido do Rafael, 2026-11-23).
-- Fotos livres dos locais (Wikimedia Commons), guardadas com a app em
-- /copo-dagua/eventos/, com o crédito do autor e a licença. Só preenche as
-- que ainda não têm foto. Precisa da 222 e da 223.

update public.external_events e
   set image_url = v.url,
       image_credit = v.credit
  from (values
  ('Mercado de Natal do Rossio', 'https://rafalvesf.github.io/copo-dagua/eventos/rossio-b.jpg', 'Luca Galuzzi (Lucag) / Wikimedia Commons (CC BY-SA 2.5)'),
  ('Wonderland Lisboa', 'https://rafalvesf.github.io/copo-dagua/eventos/eduardo.jpg', 'Jules Verne Times Two / Wikimedia Commons (CC BY-SA 4.0)'),
  ('Luzes de Natal de Lisboa', 'https://rafalvesf.github.io/copo-dagua/eventos/rossio.jpg', 'Nol Aders / Wikimedia Commons (CC BY-SA 3.0)'),
  ('Bárbara Tinoco nos Aliados', 'https://rafalvesf.github.io/copo-dagua/eventos/aliados.jpg', 'Acfmagalhaes / Wikimedia Commons (CC BY-SA 4.0)'),
  ('Samuel Úria nos Aliados', 'https://rafalvesf.github.io/copo-dagua/eventos/aliados.jpg', 'Acfmagalhaes / Wikimedia Commons (CC BY-SA 4.0)'),
  ('Sétima Legião nos Aliados', 'https://rafalvesf.github.io/copo-dagua/eventos/aliados.jpg', 'Acfmagalhaes / Wikimedia Commons (CC BY-SA 4.0)'),
  ('Mercado de Natal de Serralves', 'https://rafalvesf.github.io/copo-dagua/eventos/serralves.jpg', 'Joseolgon / Wikimedia Commons (CC BY 4.0)'),
  ('Mercado de Natal Ferreira Borges', 'https://rafalvesf.github.io/copo-dagua/eventos/ferreira.jpg', 'Krzysztof Golik / Wikimedia Commons (CC BY-SA 4.0)'),
  ('Óbidos Vila Natal', 'https://rafalvesf.github.io/copo-dagua/eventos/obidos.jpg', 'nborges from Portugal / Wikimedia Commons (CC BY 2.0)'),
  ('Perlim', 'https://rafalvesf.github.io/copo-dagua/eventos/perlim.jpg', 'Carlasfonseca / Wikimedia Commons (CC BY-SA 4.0)'),
  ('Passagem de Ano em Coimbra', 'https://rafalvesf.github.io/copo-dagua/eventos/coimbra.jpg', 'Carlos p. gonçalves / Wikimedia Commons (CC BY-SA 4.0)'),
  ('Passagem de Ano em Sines', 'https://rafalvesf.github.io/copo-dagua/eventos/sines.jpg', 'Alvesgaspar / Wikimedia Commons (CC BY-SA 4.0)'),
  ('Passagem de Ano na Figueira da Foz', 'https://rafalvesf.github.io/copo-dagua/eventos/figueira.jpg', 'André Silva from Portugal / Wikimedia Commons (CC0)'),
  ('Passagem de Ano em Santiago do Cacém', 'https://rafalvesf.github.io/copo-dagua/eventos/cacem.jpg', 'Alvesgaspar / Wikimedia Commons (CC BY-SA 3.0)')
  ) as v(title, url, credit)
 where e.title = v.title
   and e.image_url is null;

insert into public.applied_migrations (id) values ('224') on conflict do nothing;
