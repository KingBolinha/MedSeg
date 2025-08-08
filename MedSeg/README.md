
# SOC Professional - Demo (React + Vite + Tailwind)

Projeto demo com visual profissional, login fake e dashboard com dados simulados.

## Como usar

1. Extraia o ZIP.
2. No terminal, entre na pasta do projeto:
   ```bash
   cd soc-professional
   ```
3. Instale dependências:
   ```bash
   npm install
   ```
4. Gere o build do Tailwind (opcional local) e rode dev:
   ```bash
   npx tailwindcss -i ./src/styles/index.css -o ./src/styles/tailwind.css --watch
   npm run dev
   ```
   > Alternativamente, apenas rode `npm run dev` e o Tailwind será usado se configurado.
5. Abra no navegador: http://localhost:5173

## Credenciais de teste
- Email: admin@demo.com
- Senha: admin123

## Observações
- Autenticação é fake (usa localStorage). Para produção, implemente backend com JWT.
- Gráficos usam chart.js + react-chartjs-2.
