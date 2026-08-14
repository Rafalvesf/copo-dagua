# Profile (partner-app) — Validações

| Campo | Regra | Mensagem de erro (PT) |
|---|---|---|
| Nome comercial | 2–80 caracteres | "Introduz o nome do teu negócio" |
| Descrição | Mínimo 50, máximo 1000 caracteres | "A descrição precisa de pelo menos 50 caracteres" |
| Anos de experiência | Inteiro, 0–60 | "Introduz um número válido de anos" |
| Tamanho da equipa | Inteiro, ≥ 1 | "A equipa tem de ter pelo menos 1 pessoa" |
| Categorias | Mínimo 1, máximo 5 selecionadas | "Escolhe entre 1 e 5 categorias" |
| Área de atuação | Pelo menos 1 concelho **ou** toggle "âmbito nacional" ativo | "Escolhe pelo menos uma área ou seleciona 'todo o país'" |
| Portefólio (fotos) | Mínimo 3 para submeter; cada ficheiro ≤ 10 MB; formatos JPG/PNG/WEBP | "Adiciona pelo menos 3 fotos ao teu portefólio" |
| Portefólio (vídeo, opcional) | Cada ficheiro ≤ 100 MB; formato MP4 | "O vídeo excede o tamanho máximo (100 MB)" |
| Preço "a partir de" | Numérico, > 0, uma entrada por categoria selecionada | "Introduz um preço válido para [categoria]" |
| Telefone de negócio | Formato PT (+351 e 9 dígitos) ou internacional E.164 | "Introduz um número de telefone válido" |
| Website / Instagram / Facebook | URL válido (quando preenchido — campos opcionais) | "Introduz um link válido" |
| NIF | 9 dígitos, checksum módulo 11 válido (algoritmo NIF português) | "Este NIF não é válido" |
| NIF | Único na plataforma (verificado por `validate-nif`, ver `api.md`) | "Este NIF já está associado a outro perfil" |
| Morada de faturação | Obrigatória, mínimo 10 caracteres | "Introduz a morada de faturação" |
| Motivo de rejeição (admin) | Obrigatório, mínimo 20 caracteres | "Explica o motivo da rejeição" |

## Algoritmo de validação do NIF (módulo 11)

```
1. Rejeitar se não tiver exatamente 9 dígitos.
2. Rejeitar se o primeiro dígito não estiver em {1,2,3,5,6,8,9} (tipos de contribuinte válidos em Portugal).
3. checksum = soma(dígito[i] * (9 - i)) para i em 0..7
4. resto = checksum mod 11
5. dígito_controlo_esperado = (resto < 2) ? 0 : (11 - resto)
6. válido se dígito[8] == dígito_controlo_esperado
```

Implementado tanto no cliente Flutter (feedback imediato, passo 6 do wizard) como na Edge Function `validate-nif` (fonte de verdade — ver `api.md`).

## Nota

Todas as validações de completude para submissão (RN04) são reavaliadas centralmente por `submit-partner-profile-for-review`, não apenas campo a campo no wizard — evita que um utilizador chegue ao fim do wizard com um passo anterior invalidado por uma alteração feita a meio (ex: remover categorias depois de já ter preenchido preços).
