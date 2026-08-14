# Onboarding — Casos Limite

- Utilizador fecha a app a meio do onboarding → ao reabrir, retoma exatamente no passo onde ficou.
- Noivo tenta avançar sem definir data nem clicar em "ainda não sei" → bloquear até escolha explícita.
- Convite ao parceiro enviado para email já registado como Parceiro → falha com mensagem clara, não cria estado inconsistente de role.
- Parceiro tenta avançar do passo de portefólio sem foto → bloqueado (único passo verdadeiramente obrigatório além de nome/categoria).
- Upload de foto falha a meio (rede instável) → erro por imagem individual, não invalida as já carregadas.
- Utilizador volta atrás para mudar localização/categoria → dados dos passos seguintes já preenchidos não devem perder-se.
- Dois dispositivos a fazer onboarding da mesma conta em simultâneo → last-write-wins em `draft_data`, aceite como limitação de MVP.
