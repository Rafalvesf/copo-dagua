# À Nossa! — instruções para o Claude

**Antes de mexer em qualquer ecrã ou componente, lê `DESIGN.md`.** É a base
de design da app (cores, letra, pesos, tamanhos, sombras, botões). Não a
alteres nem te afastes dela sem o Rafael pedir explicitamente; se o fizeres a
pedido, atualiza o `DESIGN.md` no mesmo PR.

**Animações:** seguir a skill `animacoes` (`.claude/skills/animacoes/SKILL.md`)
sempre que algo se mexe — entradas a 0,97, botões a 0,97 ao carregar, passos
a deslizar, molas ao largar, etc.

**Imagens — regra (2026-11-26):** toda a imagem que sobe para o Storage
passa por `uploadImageBinary` (`lib/core/media/image_upload.dart`) — nunca
`storage.from(...).uploadBinary` direto para imagens. A app mostra a versão
leve (WebP, ou JPEG no iPhone; até 1600 px, 512 em avatares e logótipos) e o
original fica ao lado em `<caminho>.original`, que é o que se entrega ao
descarregar. Os seletores de fotos não reduzem (o original tem de chegar
inteiro).

**Achievements Learned:** tudo o que o Rafael aprende de novo (vídeos, dicas,
regras de desempenho ou UX) entra em `admin-web/app/lib/learned.ts` (página
`/learned` do Admin), com o que se testou na app e o que falta. Antes de um
tema parecido, ler esse ficheiro primeiro.

@DESIGN.md
