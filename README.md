<h1 align="center">ByteBank - Parcel Landing Page </h1>

### ✨ Sobre

<h4>Parte Landing Page do microfrontend do Tech Challenge da Pós Tech FIAP - Fase 2</h4>

<b>Versão:</b> 1.0.0

### 📌 Stack de Desenvolvimento

- [@ant-design/icons](https://ant.design/components/icon) para biblioteca padrão de ícones;
- [Toastify](https://www.npmjs.com/package/toastify-js) para alertas;
- [date-fns](https://date-fns.org/) para lidar com datas;
- [tailwind](https://tailwindcss.com/) para estilização de componentes;
- [react-router-dom](https://reactrouter.com/) para roteamento da aplicação;

### 🛠 Ferramentas
- IDE: [VSCode](https://code.visualstudio.com/)

### 🎲 Workspace
- [bytebank-workspace](https://github.com/beatrizsantiago/bytebank-workspace)

### 🎯 Getting Started

Com o docker instalado, contrua a imagem:

  ```
    docker build -t bytebank:landing .
  ```

E depois execute o container:

  ```
    docker run -p 8083:8083 bytebank:landing
  ```

Para utilizar o projeto sem o docker, siga os seguintes comandos:

Instalar as dependências

```bash
npm install
```

Iniciar projeto no modo dev:

```bash
npm start
```

Abra [http://localhost:8083](http://localhost:8083) com seu navegador.
