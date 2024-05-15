


## Melhorias

-- Migrar para o vite com typescprit;

## Refatorar o código e adicionar funcionalidades

-- adicionar um gerenciador de estado;\
-- usar react-hook-form é opicional;\
-- adicionar validações de campo;\
-- sanitizar dados nos formulários e/ou lista;\
-- opção de omitir os formulários;\
-- mudar o armazenamentos de dados em caso de deploy ou criar um banco para tal;


## Problema com a persistencia de dados  do json
 -- A vercel ate então pode listar os dados, mas se torna incapaz de criar ou alterar algum dado;\
 -- Mesmo que crie um arquivo node com o json e realize o deploy de ambas aplicações ainda sim se trona inviavel;\
 -- Criar um banco de dados para uma aplicação como essa de estudo pode se tornar desnecessário;\
 -- outra opção é mockar os dados usando os metodos conhecidos para adicionar, listar ou remover um dado dentro do array;\


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
