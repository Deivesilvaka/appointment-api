# appointment-api

Olá, tudo bom? Essa é minha api de um pequeno sisteminha de consultas médicas :)

A magia começa no .env que obrigatóriamente precisa dos sequintes parametros

```env
# Sistem

PORT = 

AUTHENTICATION = 

MYSQL_USER = 
MYSQL_DB = 
MYSQL_PASSWORD = 
MYSQL_PORT = 
MY_SQL_HOST = 
```

O parametro AUTHENTICATION é usado como key e é necessário envia-lo no header em cada requisição.

a porta, caso não seja definido nenhum valor, o servido irá iniciar na porta 3000.

os demais parametros são para o banco de dados, que para este projeto foi usado o mysql.

# Após configurar o .env

Logo depois de configuar o .env, o projeto pode ser iniciado com os seguintes comandos

em ambiente de desenvolvimento
```bash
npm run dev
```

em ambiente de produção
```bash
npm start
```

Após iniciar o projeto, a documentação completa pode ser visualizada na rota "/doc" do projeto
ex: localhost:3000/doc
