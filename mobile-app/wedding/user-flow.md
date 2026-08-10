# Wedding — Fluxo do Utilizador

## Editar dados do casamento

```
Dashboard → "O meu casamento" (ou ícone de casamento no menu)
  → Ecrã "Detalhes do casamento"
      [Nomes] [Data] [Localização] [Local/Venue] [Tipo de cerimónia] [Foto de capa]
      → Editar campo → Guardar automaticamente (ou botão "Guardar", a decidir em UI)
```

## Convidar colaborador

```
Detalhes do casamento → "Colaboradores"
  → Lista atual de colaboradores (owner sempre no topo, com badge "Dono")
  → [ + Convidar colaborador ]
      → Inserir email
      → Convite enviado (email com deep link)
        → Se o email já existe como Fornecedor → erro imediato (RN03)
        → Se o email não existe → convite fica "pendente" na lista

  Do lado de quem recebe o convite:
  Abre email → clica no link → deep link para a app
    → Se já tem conta → ecrã "X convidou-te para colaborar no casamento de [Nomes]"
        → [ Aceitar ] [ Recusar ]
        → Aceitar → torna-se colaborador, casamento passa a aparecer no seu seletor de casamentos
    → Se não tem conta → fluxo de registo normal (Authentication) → depois de verificar email, é apresentado o convite pendente
```

## Alternar entre casamentos (quando aplicável)

```
Menu principal → seletor de casamento (só visível se o utilizador for colaborador em mais do que um)
  → Lista de casamentos (o próprio como owner + os que colabora)
  → Selecionar → contexto da app muda para esse `wedding_id`
```

## Marcar como realizado / arquivar

```
Detalhes do casamento → "Definições do casamento"
  → "Marcar como realizado" (manual, antes da transição automática)
      → Confirmação: "Isto vai bloquear a edição da data. Continuar?"
  → "Eliminar casamento"
      → Aviso: "Esta ação é permanente ao fim de 30 dias"
      → Se existirem contratos/pagamentos ativos → bloqueio com explicação
      → Confirmação → casamento marcado como `pending_deletion`
```
