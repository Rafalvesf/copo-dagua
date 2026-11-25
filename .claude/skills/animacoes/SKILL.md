---
name: animacoes
description: Regras de animação da À Nossa! (entradas, botões, erros, passos, acordeões, temas, tooltips, arrastar e carrosséis). Usar sempre que se cria ou muda uma interface com movimento — na app Flutter, no admin web ou nos mockups do canvas.
---

# Regras de animação

Pedido do Rafael (2026-11-25): seguir estas regras em toda a interface que
se constrói. Aplicam-se à app (Flutter), ao admin (web) e aos mockups.
Com «reduzir movimento» ligado, as animações ficam paradas ou instantâneas.

1. **Entradas:** começar em escala 0,97 com opacidade 0 — nunca em escala 0.
2. **Botões:** encolher para 0,97 enquanto se carrega
   (`button:active { scale: 0.97 }`, `transition: scale 150ms ease-out`).
3. **Palavra-passe errada:** abanar o campo (translateX 0, −10, 10, −6, 6,
   −3, 0 px em 360 ms) e pô-lo a vermelho.
4. **Passos (steppers):** o passo seguinte entra deslizando do lado para onde
   se vai, em vez de aparecer por cima do outro.
5. **Acordeões:** `:root { interpolate-size: allow-keywords }`, para a altura
   `auto` animar suave.
6. **Coisas que se mexem:** animar `transform`, nunca `top` ou `left` (o
   browser não redesenha a cada imagem).
7. **Mudar de tema:** desligar as transições enquanto o tema muda
   (`.theme-switching * { transition: none !important }`).
8. **Tooltips:** só o primeiro espera; com um aberto, os outros aparecem logo.
9. **Atirar e arrastar:** ao largar, passar para uma mola que mantém a
   velocidade do gesto — p. ex. `animate(y, 0, { type: "spring",
   duration: 0.5, bounce: 0, velocity })` — em vez de uma transição de
   duração fixa.
10. **Carrosséis:** depois de cada ponta, resistência que cresce quanto mais
    se puxa, e volta com mola.

## Na app (Flutter)

| Regra | Como |
|---|---|
| Entradas | `FadeTransition` + `ScaleTransition` de 0,97 a 1 (nunca de 0) |
| Botões | `SnappyTap` / `AnimatedScale(scale: pressed ? 0.97 : 1, duration: 150 ms, curve: Curves.easeOut)` |
| Palavra-passe errada | `TweenSequence` num `Transform.translate` com 0, −10, 10, −6, 6, −3, 0 em 360 ms + linha vermelha (§6 do `DESIGN.md`) |
| Passos | `SlideTransition` a partir de `Offset(±1, 0)` conforme se avança ou recua (onboarding, popups com passos) |
| Acordeões | `AnimatedSize` (nunca saltar de altura) |
| Coisas que se mexem | `Transform` / `SlideTransition`, nunca mudar `Positioned.top/left` a cada imagem |
| Mudar de tema | sem `AnimatedTheme` durante a troca |
| Tooltips | `Tooltip(waitDuration:)` só no primeiro; os seguintes sem espera |
| Atirar e arrastar | `SpringSimulation` com a velocidade de `DragEndDetails.velocity` (p. ex. puxar popups para baixo) |
| Carrosséis | `BouncingScrollPhysics` (resistência nas pontas e mola de volta) |

Com «reduzir movimento» (`MediaQuery.disableAnimations`): sem animação.
