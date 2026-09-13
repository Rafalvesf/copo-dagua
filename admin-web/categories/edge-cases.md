# Categories (admin-web) — Casos Limite

- Admin tenta criar categoria com `slug` já existente → erro de `unique` constraint na BD, mensagem inline "Já existe uma categoria com este identificador".
- Admin desativa a última categoria ativa que um parceiro tem selecionada → o parceiro mantém a categoria na sua lista (RN03); só deixa de poder ser adicionada a *outros* perfis. Nenhuma limpeza retroativa.
- Dois admins criam a mesma categoria (mesmo `slug`) quase em simultâneo → o segundo `insert` falha na constraint `unique`, erro tratado da mesma forma que o caso acima.
